let textData = []; // Variable to store text data
let currentIndex = 0; // Index to keep track of current text being played

// Function to fetch text from API
function fetchText() {
    if (textData.length === 0) { // Only fetch text if it hasn't been fetched yet
        const url = 'http://127.0.0.1:8000/api/tts_api/gettext/';
        const requestBody = {
            url: 'https://truyenfull.com/toan-chuc-cao-thu/chuong-32.html',
            element: 'chapter-c'
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
                    throw new Error('Failed to fetch text from API');
                }
                return response.json();
            })
            .then(responseData => {
                textData = responseData.extracted_text;
                playAudio(); // Start playing audio after fetching text
            })
            .catch(error => {
                console.error('Error fetching text:', error);
            });
    } else {
        playAudio(); // If text has already been fetched, start playing audio directly
    }
}

// Function to play audio from API
function playAudio() {
    if (currentIndex >= textData.length) {
        alert('All text data has been played.');
        return;
    }

    const url = 'http://127.0.0.1:8000/api/tts_api/getaudiostream/';
    const requestBody = {
        text: textData[currentIndex],
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
            currentIndex++; // Move to next text
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
}

// Event listener for the button to fetch text
const fetchTextButton = document.getElementById('fetchTextButton');
fetchTextButton.addEventListener('click', fetchText);
