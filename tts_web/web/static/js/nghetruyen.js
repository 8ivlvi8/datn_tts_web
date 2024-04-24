// Lấy đối tượng slider và đối tượng audio
var currentSpeedDisplay = document.getElementById("currentSpeed");
var audio = document.getElementById("audioPlayer");

// Đặt tốc độ phát mặc định của audio khi trang được tải
audio.playbackRate = 1.0;
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


let textData = []; // Variable to store text data
let currentIndex = 0; // Index to keep track of current text being played

// Function để hiển thị biểu tượng loading
function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

// Function để ẩn biểu tượng loading
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Function để fetch text từ API
function fetchText() {
    // Hiển thị biểu tượng loading
    showLoader();

    if (textData.length === 0) { // Chỉ fetch text nếu chưa fetch trước đó
        const url = 'http://127.0.0.1:8000/api/tts_api/gettext/';
        const requestBody = {
            url: 'https://truyenfull.com/toan-chuc-cao-thu/chuong-32.html',
            element: 'chapter-c'
        };

        // Get CSRF token từ cookie
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
                playAudio(); // Bắt đầu chơi audio sau khi fetch text
            })
            .catch(error => {
                console.error('Error fetching text:', error);
                hideLoader(); // Ẩn biểu tượng loading trong trường hợp lỗi
            });
    } else {
        playAudio(); // Nếu text đã được fetch trước đó, bắt đầu chơi audio trực tiếp
    }
}

// Function để lấy CSRF token từ cookie
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

// Function để chơi audio từ API
function playAudio() {
    if (currentIndex >= textData.length) {
        alert('All text data has been played.');
        hideLoader(); // Ẩn biểu tượng loading khi tất cả text đã được phát
        return;
    }

    const url = 'http://127.0.0.1:8000/api/tts_api/getaudiostream/';
    const requestBody = {
        text: textData[currentIndex],
        voice: 'vi-VN-HoaiMyNeural'
    };
    // Get CSRF token từ cookie
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
                throw new Error('Failed to fetch audio from API');
            }
            return response.blob(); // Chuyển đổi response thành Blob
        })
        .then(blob => {
            const audioPlayer = document.getElementById('audioPlayer');
            const audioURL = URL.createObjectURL(blob); // Tạo URL từ Blob
            audioPlayer.src = audioURL;
            audio.playbackRate = currentSpeedDisplay.textContent;
            audioPlayer.play(); // Phát audio
            currentIndex++; // Di chuyển tới text tiếp theo
            hideLoader(); // Ẩn biểu tượng loading sau khi audio đã được tải xong
        })
        .catch(error => {
            console.error('Error playing audio:', error);
            hideLoader(); // Ẩn biểu tượng loading trong trường hợp lỗi
        });
}

// Sự kiện nghe của nút để fetch text
const fetchTextButton = document.getElementById('fetchTextButton');
fetchTextButton.addEventListener('click', fetchText);
