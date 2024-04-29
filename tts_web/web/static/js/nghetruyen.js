// Hàm để lấy CSRF token từ cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
// Lấy đối tượng button Phát
const playAudioButton = document.getElementById('playAudioButton');
// Lấy đối tượng tốc độ phát 
var currentSpeedDisplay = document.getElementById("currentSpeed");
// Lấy đối tượng audio
var audio = document.getElementById("audioPlayer");
// Lấy đối tượng tên truyện
var truyen_title = document.getElementById("truyen_title");
// Lấy đối tượng tên chapter
var chapter_title = document.getElementById("chapter_title");
// Lấy đối tượng iframe
var iframe = document.getElementById("iframeTruyenfull");
// Lấy đối tượng input
var urlInput = document.getElementById("urlInput");
// Kiểm tra xem đã có url trong localStorage chưa
var storedUrl = localStorage.getItem("savedUrl");
// Nếu có dữ liệu trong localStorage, gán nó cho input
if (storedUrl)
    urlInput.value = storedUrl;
else
    urlInput.value = "https://truyenfull.vn/";
// Lắng nghe sự kiện input thay đổi
urlInput.addEventListener("input", function () {
    // Lưu giá trị của input vào localStorage khi có sự thay đổi
    localStorage.setItem("savedUrl", urlInput.value);
});
// Đặt tốc độ phát mặc định của audio khi trang được tải
audio.playbackRate = 1.7;
currentSpeedDisplay.textContent = audio.playbackRate.toFixed(1); // Hiển thị tốc độ phát hiện tại
// Function để giảm tốc độ phát
document.getElementById("decreaseSpeedButton").addEventListener("click", function () {
    if (audio.playbackRate > 1) {
        audio.playbackRate -= 0.1;
        currentSpeedDisplay.textContent = audio.playbackRate.toFixed(1);
    }
});
// Function để tăng tốc độ phát
document.getElementById("increaseSpeedButton").addEventListener("click", function () {
    if (audio.playbackRate < 2.5) {
        audio.playbackRate += 0.1;
        currentSpeedDisplay.textContent = audio.playbackRate.toFixed(1);
    }
});
// Hàm để hiển thị biểu tượng loading
function showLoader() {
    playAudioButton.style.display = 'none';
    document.getElementById('loader').style.display = 'block';
}
// Hàm để ẩn biểu tượng loading
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    playAudioButton.style.display = 'block';
}


let textData = []; // Biến lưu trữ dữ liệu văn bản
let currentIndex = 0; // Chỉ số để theo dõi văn bản hiện đang được phát
let prev_chap_url = ''; // Biến lưu trữ URL của chương trước
let next_chap_url = ''; // Biến lưu trữ URL của chương sau

// Hàm để fetch văn bản từ API
function fetchText() {
    updateIframeSrc();
    const url = 'http://letam.myftp.org:80/api/tts_api/gettext/';
    const requestBody = {
        url: urlInput.value,
        element: 'chapter-c'
    };
    showLoader();
    // Lấy CSRF token từ cookie
    const csrftoken = getCookie('csrftoken');
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken // Bao gồm CSRF token trong headers
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch text from API');
            }
            return response.json();
        })
        .then(responseData => {
            textData = responseData.extracted_text;
            prev_chap_url = responseData.prev_chap_url;
            next_chap_url = responseData.next_chap_url;
            chapter_title.innerText = responseData.chapter_title;
            truyen_title.innerText = responseData.truyen_title;
            hideLoader();
        })
        .catch(error => {
            console.error('Error fetching text:', error);
            hideLoader(); // Ẩn biểu tượng loading trong trường hợp lỗi
        });
}
// Hàm để phát audio từ API
function playAudio() {
    if (currentIndex >= textData.length) {
        console.log('All text data has been played.');
        return;
    }
    showLoader();
    const url = 'http://letam.myftp.org:80/api/tts_api/getaudiostream/';
    const csrftoken = getCookie('csrftoken'); // Lấy CSRF token từ cookie
    // Mảng để lưu trữ tất cả các Promise fetch audio
    const audioPromises = [];
    // Duyệt qua các đoạn văn bản từ currentIndex đến cuối văn bản
    for (let i = currentIndex; i < textData.length; i++) {
        // Thêm Promise của mỗi đoạn văn bản vào mảng audioPromises
        audioPromises.push(fetchAudio(url, csrftoken, textData[i]));
    }
    // Khởi tạo một hàm async để xử lý việc fetch và phát audio
    async function playAudioSequentially(audioPromises) {
        const audioPlayer = document.getElementById('audioPlayer');
        for (let i = 0; i < audioPromises.length; i++) {
            const audioURL = await audioPromises[i]; // Chờ cho đến khi Promise hoàn thành
            // Phát audio của đoạn hiện tại
            audioPlayer.src = audioURL;
            audioPlayer.playbackRate = currentSpeedDisplay.textContent;
            audioPlayer.play();
            // Chờ cho đến khi audio hiện tại kết thúc trước khi chuyển sang đoạn tiếp theo
            await new Promise(resolve => audioPlayer.onended = resolve);
        }
    }
    // Gọi hàm vừa tạo với danh sách Promise
    playAudioSequentially(audioPromises).catch(error => {
        console.error('Error playing audio:', error);
        hideLoader(); // Ẩn biểu tượng loading trong trường hợp lỗi
    }).finally(hideLoader);
}
// Hàm để fetch audio từ API
function fetchAudio(url, csrftoken, text) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken // Bao gồm CSRF token trong headers
            },
            body: JSON.stringify({
                text: text,
                voice: 'vi-VN-HoaiMyNeural'
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch audio from API');
                }
                return response.blob(); // Chuyển đổi response thành Blob
            })
            .then(blob => {
                const audioURL = URL.createObjectURL(blob); // Tạo URL từ Blob
                resolve(audioURL);
            })
            .catch(error => {
                console.error('Error fetching audio:', error);
                reject(error);
            });
    });
}
function updateIframeSrc() {
    // Lấy giá trị từ input cập nhật src của iframe
    var newUrl = urlInput.value;
    iframe.src = newUrl;
}
function updatePrevChapUrl() {
    if (prev_chap_url.includes("truyenfull")) {
        urlInput.value = prev_chap_url
        fetchText();
    } else
        alert("Bạn đang ở chương đầu tiên")
}
function updateNextChapUrl() {
    if (next_chap_url.includes("truyenfull")) {
        urlInput.value = next_chap_url
        fetchText();
    }
    else
        alert("Bạn đang ở chương cuối cùng")
}


urlInput.addEventListener("input", fetchText);
window.onload = fetchText;
