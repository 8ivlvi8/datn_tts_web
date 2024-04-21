// Function to fetch text from API and display it on the HTML page
function fetchText() {
    const url = 'http://127.0.0.1:8000/api/tts_api/gettext/'; // Replace with your API endpoint
    const requestBody = {
        url: "https://truyenfull.com/toan-chuc-cao-thu/chuong-32.html",
        element: 'chapter'
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
            const extractedText = responseData.extracted_text;
            const textContainer = document.getElementById('textContainer');
            textContainer.innerHTML = '';
            extractedText.forEach((paragraph, index) => {
                const paragraphElement = document.createElement('p');
                paragraphElement.textContent = `Paragraph ${index + 1}: ${paragraph}`;
                textContainer.appendChild(paragraphElement);
            });
        })
        .catch(error => {
            console.error('Error fetching text:', error);
        });
}

// Event listener for the button to fetch text
const fetchTextButton = document.getElementById('fetchTextButton');
fetchTextButton.addEventListener('click', fetchText);
