function removeAds() {
    // Xóa các element quảng cáo
    for (let index = 0; index < 8; index++)
        setTimeout(() => {
            var adsElements = document.getElementsByClassName('ads-iads');
            for (let item of adsElements)
                item.remove();
            var adshome = ['hot-select', 'banner_image_home', 'is_show_slide', 'ads-300x250-detail-truyen-top', 'shoppe_ads_fly', 'ads-chapter-bottom-lien-quan']
            for (let item of adshome)
                try {
                    document.getElementById(item).remove();
                } catch (error) {
                }
            console.log(index);
        }, index * 1500);
}
removeAds();

// Xử lý tìm kiếm truyện
var formElement = document.querySelector('.navbar-form.navbar-right');
formElement.action = "";


// Xóa Ngày Tháng Năm
row_top_nav = document.querySelector('.row.top-nav');
if (row_top_nav)
    row_top_nav.remove();

// Xử lý chọn chương
list_chapter = document.querySelector('.btn.btn-success.btn-chapter-nav.chapter_jump');
if (list_chapter) {
    list_chapter.classList.remove('chapter_jump');
    list_chapter.classList.add('list_chapter');
    list_chapter.setAttribute('onclick', 'get_list_chapter()');
}

function get_list_chapter() {
    var truyen_id = $("#truyen-id").val();
    $.get("/api/tts_api/getlistchapters/", { truyen_id: truyen_id }, function (data) {
        $(".btn.btn-success.btn-chapter-nav.list_chapter").replaceWith(data);
        // Lấy select sửa class tránh xung đột
        var selectElement = document.querySelector('.btn.btn-success.btn-chapter-nav.form-control');
        selectElement.classList.remove('form-control');
        selectElement.classList.add('list_chapter_select');

        // Thêm sự kiện onchange khi chọn chương
        selectElement.addEventListener('change', function () {
            // Lấy giá trị của option đã chọn
            var selectedOption = this.options[this.selectedIndex];
            var chuongValue = selectedOption.value;
            // Lấy URL hiện tại
            var currentUrl = window.location.href;
            // Tạo URL mới bằng cách thay thế chương trong URL hiện tại bằng chương đã chọn
            var newUrl = currentUrl.replace(/chuong-\d+/, chuongValue);
            // Chuyển đến trang mới
            window.location.href = newUrl;
        });
    });
}

// Xử lý khi click vào các thẻ a
var prefix = "http://letam.myftp.org:8686/nghetruyen/?url=";
var anchorLinks = document.querySelectorAll('a');
anchorLinks.forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        direct(anchor.getAttribute('href'));
    });
});
function direct(href) {
    console.log('Đã click vào link với href là: ' + href);
    if (href.startsWith("https://truyenfull.vn"))
        window.location.href = prefix + href;
    else
        window.location.href = href;
}

// Xóa element thứ 4 (web truyện tranh)
var dropdownItems = document.querySelectorAll('.control.nav.navbar-nav > .dropdown');
if (dropdownItems.length == 5)
    dropdownItems[3].remove();
function updatecurrentSpeed() {
    // Lưu trạng thái của checkbox vào localStorage
    localStorage.setItem("currentSpeed", currentSpeedDisplay.textContent);
}

// Các biến dùng khi trong chương truyện
var playAudioButton = null;
var prev_chapterButton = null;
var next_chapterButton = null;
var currentSpeedDisplay = null;
var audioPlayer = null;
var autoPlay = null;
var autoPlayValue = localStorage.getItem("autoPlay");
var textData = [];
var next_chap_element = null;
var prev_chap_element = null;
var currentSpeedValue = localStorage.getItem("currentSpeed");

// Xử lý các link chuyển chương
var content = document.getElementById('chapter-c');
if (content) {
    console.log("đang ở chap truyện");
    prev_chap_element = document.getElementById('prev_chap');
    next_chap_element = document.getElementById('next_chap');
    prev_chap_element.setAttribute('href', prefix + prev_chap_element.getAttribute('href'));
    next_chap_element.setAttribute('href', prefix + next_chap_element.getAttribute('href'));
    $.get("/api/tts_api/getaudioplayer/", function (data) {
        $(".chapter-start").replaceWith(data);
        // Lấy đối tượng button Phát
        playAudioButton = document.getElementById('playAudioButton');
        // Lấy đối tượng tốc độ phát 
        currentSpeedDisplay = document.getElementById("currentSpeed");
        // Lấy đối tượng audioPlayer
        audioPlayer = document.getElementById("audioPlayer");

        // Lấy đối tượng tự động phát
        autoPlay = document.getElementById("autoPlay");
        // Nếu có dữ liệu trong localStorage, cập nhật checkbox
        if (autoPlayValue !== null)
            autoPlay.checked = (autoPlayValue === "true");
        else
            autoPlay.checked = false;
        function updateAutoPlay() {
            // Lưu trạng thái của checkbox vào localStorage
            localStorage.setItem("autoPlay", autoPlay.checked);
        }
        // Lắng nghe sự kiện change thay đổi
        autoPlay.addEventListener("change", updateAutoPlay);

        // Lấy đối tượng tốc độ phát 
        currentSpeedDisplay = document.getElementById("currentSpeed");
        if (currentSpeedValue === null) {
            audioPlayer.playbackRate = 1.6;
            currentSpeedDisplay.textContent = audioPlayer.playbackRate.toFixed(1); // Hiển thị tốc độ phát hiện tại
            localStorage.setItem("currentSpeed", "1.6");
        } else {
            currentSpeedDisplay.textContent = currentSpeedValue;
            audioPlayer.playbackRate = currentSpeedValue;
        }
        // Lắng nghe sự kiện change thay đổi
        currentSpeedDisplay.addEventListener("change", updatecurrentSpeed);

        // Đặt tốc độ phát mặc định của audioPlayer khi trang được tải

        // Lấy nội dung của phần tử có id là "chapter-c"
        let paragraphs = content.textContent.split('\n');

        // Loại bỏ các khoảng trắng dư thừa ở đầu và cuối mỗi đoạn văn bản và loại bỏ các đoạn văn bản rỗng
        textData = paragraphs.map(function (paragraph) {
            return paragraph.trim();
        }).filter(function (paragraph) {
            return paragraph !== '';
        });

        // Thêm tiêu đề chương vào đầu mảng
        let title = document.querySelector('.chapter-title').getAttribute('title');
        textData.unshift(title);

        // Tạo một mảng mới để chứa các đoạn văn với số lượng câu tăng dần
        let processedTextData = [];
        let currentParagraph = '';
        let length = 0; // Số lượng câu ban đầu là 1
        // Lặp qua từng câu trong textData
        textData.forEach(function (sentence) {
            // Thêm câu vào đoạn hiện tại
            currentParagraph += sentence + '\n';

            // Nếu số câu trong đoạn hiện tại đạt đến số lượng câu mong muốn, thêm đoạn vào mảng và bắt đầu đoạn mới
            if (currentParagraph.length > length) {
                processedTextData.push(currentParagraph.trim());
                currentParagraph = '';
                length += 70;
            }
        });

        // Nếu còn đoạn cuối cùng chưa được thêm vào mảng processedTextData, thêm nó vào
        if (currentParagraph !== '') {
            processedTextData.push(currentParagraph.trim());
        }
        console.log(processedTextData);

        textData = processedTextData;

        // // Hiển thị mảng các đoạn văn bản đã được làm sạch trong console
        // console.log(textData);

        if (autoPlayValue === "true")
            playAudio();
    });
}


// Function để giảm tốc độ phát
function decreaseSpeed() {
    if (audioPlayer.playbackRate > 1) {
        audioPlayer.playbackRate -= 0.1;
        currentSpeedDisplay.textContent = audioPlayer.playbackRate.toFixed(1);
        updatecurrentSpeed();
    }
}
// Function để tăng tốc độ phát
function increaseSpeed() {
    if (audioPlayer.playbackRate < 2.5) {
        audioPlayer.playbackRate += 0.1;
        currentSpeedDisplay.textContent = audioPlayer.playbackRate.toFixed(1);
        updatecurrentSpeed();
    }
}
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


let currentIndex = 0; // Chỉ số để theo dõi văn bản hiện đang được phát

// Hàm để phát audio từ API
function playAudio() {
    if (currentIndex >= textData.length) {
        console.log('Phát audio hoàn thành');
        return;
    }
    showLoader();
    const url = 'http://letam.myftp.org:8686/api/tts_api/getaudiostream/';
    // Mảng để lưu trữ tất cả các Promise fetch audio
    audioPromises = [];
    // Duyệt qua các đoạn văn bản từ currentIndex đến cuối văn bản
    for (let i = currentIndex; i < textData.length; i++) {
        // Thêm Promise của mỗi đoạn văn bản vào mảng audioPromises
        audioPromises.push(fetchAudio(url, textData[i]));
    }
    // Khởi tạo một hàm async để xử lý việc fetch và phát audio
    async function playAudioSequentially(audioPromises) {
        for (let i = 0; i < audioPromises.length; i++) {
            audioURL = await audioPromises[i]; // Chờ cho đến khi Promise hoàn thành
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
    }).finally(function () {
        hideLoader();
        if (autoPlay.checked)
            next_chap_element.click();
    });
}
// Hàm để fetch audio từ API
function fetchAudio(url, text) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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