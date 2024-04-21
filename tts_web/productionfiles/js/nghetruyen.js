// Đường link đến API endpoint trả về audio stream
const apiUrl = 'http://127.0.0.1:8000/api/tts_api/getaudiostream/';

// Gắn sự kiện click vào nút "Nghe"
document.getElementById('listenBtn').addEventListener('click', async () => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: 'Your text here',
                voice: 'vi-VN-HoaiMyNeural'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch audio stream from API');
        }

        const audioStream = await response.blob();
        const audioUrl = URL.createObjectURL(audioStream);

        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = audioUrl;
        audioPlayer.play();
    } catch (error) {
        console.error('Error playing audio from API:', error);
    }
});