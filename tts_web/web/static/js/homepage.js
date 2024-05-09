var slider = document.getElementById("myRange");
var output = document.getElementById("speedValue");
output.innerHTML = (slider.value / 100 + 1).toFixed(2);
var rate = "+0%"
slider.oninput = function () {
    output.innerHTML = (this.value / 100 + 1).toFixed(2);
    rate = "+" + this.value.toString() + "%";
}


function fetchAudio() {
    const url = '/api/tts_api/getaudiostream/';
    var text = document.getElementById('inputtext').value;
    if (text === '') {
        alert('Vui lòng nhập nội dung cần chuyển đổi');
        return;
    }
    var voice = document.getElementById('voice').value;
    var requestBody = {
        text: text,
        voice: voice,
        rate: rate
    };
    console.log(requestBody);
    showLoader();
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