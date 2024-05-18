// Lấy đối tượng thanh trượt và tốc độ phát
var slider = document.getElementById("myRange");
var output = document.getElementById("speedValue");
// Tính toán giá trị tốc độ để gửi cho server khi lấy audio
output.innerHTML = (slider.value / 100 + 1).toFixed(2);
var rate = "+0%"
slider.oninput = function () {
    output.innerHTML = (this.value / 100 + 1).toFixed(2);
    rate = "+" + this.value.toString() + "%";
}
// Lấy đối tượng ô nhập liệu và số lượng ký tự
var inputtext = document.getElementById('inputtext');
var charCount = document.getElementById('charCount');
// Cập nhật số lượng ký tự khi người dùng nhập vào ô nhập liệu
inputtext.addEventListener('input', function () {
    charCount.innerHTML = inputtext.value.length;
});

function fetchAudio() {
    // url của api
    const url = '/api/tts_api/getaudiostream/';
    // Lấy và kiểm tra giá trị của văn bản đầu vào
    var text = document.getElementById('inputtext').value;
    if (text === '') {
        alert('Vui lòng nhập nội dung cần chuyển đổi');
        return;
    }
    // Lấy giá trị của giọng nói cho body của request
    var voice = document.getElementById('voice').value;
    var requestBody = {
        text: text,
        voice: voice,
        rate: rate
    };
    // Hiển thị biểu tượng loader trong khi chờ đợi audio trả về
    showLoader();
    // Hàm lấy audio
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch audio from API');
            }
            return response.blob();
        })
        .then(blob => {
            var audioPlayer = document.getElementById('audioPlayer');
            var audioURL = URL.createObjectURL(blob);
            audioPlayer.src = audioURL;
            audioPlayer.play();
            hideLoader();
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
}

// Lấy đối tượng loader và button chuyển đổi
const loader = document.getElementById('loader')
const fetchButton = document.getElementById('convertBtn');
fetchButton.addEventListener('click', fetchAudio);

// Hàm để hiển thị biểu tượng loading
function showLoader() {
    fetchButton.style.display = 'none';
    loader.style.display = 'block';
}
// Hàm để ẩn biểu tượng loading
function hideLoader() {
    loader.style.display = 'none';
    fetchButton.style.display = 'block';
}

