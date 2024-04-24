function fetchAudio() {
    const url = 'http://127.0.0.1:8000/api/tts_api/getaudiostream/';
    const requestBody = {
        text: document.getElementById('inputtext').value,
        voice: 'vi-VN-HoaiMyNeural'
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch audio from API');
            }
            return response.blob(); // Convert response to Blob
        })
        .then(blob => {
            const audioPlayer = document.getElementById('audioPlayer');
            const audioURL = URL.createObjectURL(blob); // Create URL from Blob
            audioPlayer.src = audioURL;
            audioPlayer.play(); // Play audio
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
}

// Event listener for the button to fetch text
const fetchTextButton = document.getElementById('convertBtn');
fetchTextButton.addEventListener('click', fetchAudio);
