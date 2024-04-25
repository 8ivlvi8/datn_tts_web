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

// Lấy đối tượng tốc độ phát và đối tượng audio
var currentSpeedDisplay = document.getElementById("currentSpeed");
var audio = document.getElementById("audioPlayer");

// Đặt tốc độ phát mặc định của audio khi trang được tải
audio.playbackRate = 2.0;
currentSpeedDisplay.textContent = audio.playbackRate.toFixed(1); // Hiển thị tốc độ phát hiện tại


// Function để giảm tốc độ phát
document.getElementById("decreaseSpeedButton").addEventListener("click", function () {
    if (audio.playbackRate > 0.6) {
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
    document.getElementById('loader').style.display = 'block';
}

// Hàm để ẩn biểu tượng loading
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

let textData = []; // Biến lưu trữ dữ liệu văn bản
let currentIndex = 0; // Chỉ số để theo dõi văn bản hiện đang được phát

// Hàm để fetch văn bản từ API
function fetchText() {
    // Hiển thị biểu tượng loading
    showLoader();

    if (textData.length === 0) { // Chỉ fetch văn bản nếu chưa fetch trước đó và không đang trong quá trình fetch
        const url = 'http://127.0.0.1:8000/api/tts_api/gettext/';
        const requestBody = {
            url: 'https://truyenfull.com/toan-chuc-cao-thu/chuong-32.html',
            element: 'chapter-c'
        };

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
                playAudio(); // Bắt đầu phát audio sau khi fetch văn bản
            })
            .catch(error => {
                console.error('Error fetching text:', error);
                hideLoader(); // Ẩn biểu tượng loading trong trường hợp lỗi
            });
    } else if (currentIndex < textData.length) {
        playAudio(); // Nếu văn bản đã được fetch trước đó và không đang fetch mới, bắt đầu phát audio trực tiếp
    }
}

// Hàm để phát audio từ API
function playAudio() {
    if (currentIndex >= textData.length) {
        alert('All text data has been played.');
        hideLoader(); // Ẩn biểu tượng loading khi tất cả văn bản đã được phát
        return;
    }

    const url = 'http://127.0.0.1:8000/api/tts_api/getaudiostream/';
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

        // alert('All text data has been played.');
        hideLoader(); // Ẩn biểu tượng loading khi tất cả văn bản đã được phát
    }

    // Gọi hàm vừa tạo với danh sách Promise
    playAudioSequentially(audioPromises).catch(error => {
        console.error('Error playing audio:', error);
        hideLoader(); // Ẩn biểu tượng loading trong trường hợp lỗi
    });
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

// Sự kiện nghe của nút để fetch văn bản
const fetchTextButton = document.getElementById('fetchTextButton');
fetchTextButton.addEventListener('click', fetchText);
