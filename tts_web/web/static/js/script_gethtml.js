// Xóa các element quảng cáo
function removeAds() {
    for (let index = 0; index < 20; index++)
        setTimeout(() => {
            var adsElements = document.getElementsByClassName('ads-iads');
            for (let item of adsElements)
                item.remove();
            var adshome = ['balloon-ads', 'hot-select', 'banner_image_home', 'is_show_slide', 'ads-300x250-detail-truyen-top', 'shoppe_ads_fly', 'ads-chapter-bottom-lien-quan', 'new-select']
            for (let item of adshome)
                try {
                    document.getElementById(item).remove();
                } catch (error) {
                }
            console.log(index);
        }, index * 500); // Việc xóa lặp lại do các element load chậm
}
removeAds();

// Chọn tất cả các phần tử có class 'navbar navbar-default navbar-static-top'
let navbars = document.querySelectorAll('.navbar.navbar-default.navbar-static-top');
// Duyệt qua từng phần tử được chọn
navbars.forEach(navbar => {
    // Tìm tất cả các phần tử con chứa cụm từ 'Đam Mỹ'
    let elements = navbar.querySelectorAll('*:not(script):not(style)');
    elements.forEach(element => {
        if ((element.textContent.includes('Đam Mỹ') || element.textContent.includes('Bách Hợp') || element.textContent.includes('Sủng')) && element.children.length === 0) {
            // Xóa phần tử thể loại không phù hợp
            element.remove();
        }
    });
});

// Chọn tất cả các phần tử có class 'row' với cấu trúc tương tự
let rows = document.querySelectorAll('.row[itemtype="https://schema.org/Book"]');
// Duyệt qua từng phần tử được chọn
rows.forEach(row => {
    // Tìm các phần tử chứa thể loại 'Đam Mỹ'
    const genreLinks = row.querySelectorAll('[itemprop="genre"]');
    genreLinks.forEach(genreLink => {
        if (genreLink.textContent.includes('Đam Mỹ') || genreLink.textContent.includes('Bách Hợp') || genreLink.textContent.includes('Sủng')) {
            // Xóa phần tử nếu chứa cụm từ 'Đam Mỹ'
            row.remove();
        }
    });
});
// 
try {
    document.querySelector("#list-page > div.col-xs-12.col-sm-12.col-md-3.col-truyen-side > div.visible-md-block.visible-lg-block.text-center > div.list.list-truyen.list-cat.col-xs-12 > div.row > div:nth-child(4)").remove();
    document.querySelector("#list-page > div.col-xs-12.col-sm-12.col-md-3.col-truyen-side > div.visible-md-block.visible-lg-block.text-center > div.list.list-truyen.list-cat.col-xs-12 > div.row > div:nth-child(21)").remove();
    document.querySelector("#list-page > div.col-xs-12.col-sm-12.col-md-3.col-truyen-side > div.visible-md-block.visible-lg-block.text-center > div.list.list-truyen.list-cat.col-xs-12 > div.row > div:nth-child(27)").remove();

} catch (error) {

}
try {
    document.querySelector("#list-index > div.col-md-4.col-truyen-side > div > div.list.list-truyen.list-cat.col-xs-12 > div.row > div:nth-child(4)").remove();
    document.querySelector("#list-index > div.col-md-4.col-truyen-side > div > div.list.list-truyen.list-cat.col-xs-12 > div.row > div:nth-child(20)").remove();
    document.querySelector("#list-index > div.col-md-4.col-truyen-side > div > div.list.list-truyen.list-cat.col-xs-12 > div.row > div:nth-child(25)").remove();

} catch (error) {

}
// Xử lý tìm kiếm truyện
var formElement = document.querySelector('.navbar-form.navbar-right');
formElement.action = "";


// Xóa Ngày Tháng Năm ở mục top truyện
row_top_nav = document.querySelector('.row.top-nav');
if (row_top_nav)
    row_top_nav.remove();

// Xử lý khi bấm chọn chương
list_chapter = document.querySelector('.btn.btn-success.btn-chapter-nav.chapter_jump');
if (list_chapter) {
    list_chapter.classList.remove('chapter_jump');
    list_chapter.classList.add('list_chapter');
    list_chapter.setAttribute('onclick', 'get_list_chapter()');
}

// Hàm lấy danh sách truyện và xử lý khi chọn chương
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

// Xử lý các thẻ a khi click vào
var prefix = "/nghetruyen/?url=";
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

// Xóa element thứ 4 (web truyện tranh) và thay bằng trang Text to speech
var dropdownItems = document.querySelectorAll('.control.nav.navbar-nav > .dropdown');
if (dropdownItems.length == 5) {
    const dropdownItem = dropdownItems[3];
    dropdownItem.querySelector('a').setAttribute('href', '/tts/');
    dropdownItem.querySelector('a').setAttribute('title', 'Text to speech');
    dropdownItem.querySelector('a').innerHTML = '<span class="glyphicon glyphicon-book" style="margin-right: 3px;"></span>Text to speech'
}

// Hàm cập nhật tốc độ phát audio vào localStorage
function updatecurrentSpeed() {
    localStorage.setItem("currentSpeed", currentSpeedDisplay.textContent);
}
// Hàm cập nhật tự động phát audio vào localStorage
function updateAutoPlay() {
    localStorage.setItem("autoPlay", autoPlay.checked);
    if (autoPlay.checked)
        alertMobile();
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
var next_chap_elements = null;
var prev_chap_elements = null;
var currentSpeedValue = localStorage.getItem("currentSpeed");

// Xử lý khi ở trong chapter
var content = document.getElementById('chapter-c');
if (content) {
    // Cập nhật link cho các thẻ chuyển chương
    prev_chap_elements = document.querySelectorAll("#prev_chap");
    next_chap_elements = document.querySelectorAll("#next_chap");
    prev_chap_elements.forEach(function (prev_chap_element) {
        prev_chap_element.setAttribute('href', prefix + prev_chap_element.getAttribute('href'));
    })
    next_chap_elements.forEach(function (next_chap_element) {
        next_chap_element.setAttribute('href', prefix + next_chap_element.getAttribute('href'));
    })
    // Thay đổi phần tử chapter-start có sẵn thành menu phát audio
    $.get("/api/tts_api/getaudioplayer/", function (data) {
        $(".chapter-start").replaceWith(data);
        // Lấy đối tượng button Phát
        playAudioButton = document.getElementById('playAudioButton');
        // Lấy đối tượng tốc độ phát 
        currentSpeedDisplay = document.getElementById("currentSpeed");
        // Lấy đối tượng audioPlayer
        audioPlayer = document.getElementById("audioPlayer");

        // Lấy giá trị tự động phát để lưu và cập nhật
        autoPlay = document.getElementById("autoPlay");
        if (autoPlayValue !== null)
            autoPlay.checked = (autoPlayValue === "true");
        else
            autoPlay.checked = false;
        autoPlay.addEventListener("change", updateAutoPlay);

        // Lấy giá trị tốc độ phát để lưu và cập nhật 
        currentSpeedDisplay = document.getElementById("currentSpeed");
        if (currentSpeedValue === null) {
            audioPlayer.playbackRate = 1.6;
            currentSpeedDisplay.textContent = audioPlayer.playbackRate.toFixed(1);
            localStorage.setItem("currentSpeed", "1.6");
        } else {
            currentSpeedDisplay.textContent = currentSpeedValue;
            audioPlayer.playbackRate = currentSpeedValue;
        }
        currentSpeedDisplay.addEventListener("change", updatecurrentSpeed);

        var ads_in_content = content.querySelectorAll('div');
        for (let item of ads_in_content)
            item.remove();
        content = document.getElementById('chapter-c');
        // Lấy nội dung của chapter
        let paragraphs = content.textContent.split('\n');

        // Loại bỏ các khoảng trắng dư thừa ở đầu và cuối mỗi đoạn văn bản và loại bỏ các đoạn văn bản rỗng
        textData = paragraphs.map(function (paragraph) {
            return paragraph.trim();
        }).filter(function (paragraph) {
            return paragraph !== '';
        });

        // Tạo một mảng mới để chứa các đoạn văn với độ dài tăng dần
        let processedTextData = [];
        let currentParagraph = '';
        let length = 0;
        textData.forEach(function (sentence) {
            currentParagraph += sentence + '\n';
            if (currentParagraph.length > length) {
                processedTextData.push(currentParagraph);
                currentParagraph = '';
                length += 70; // Mỗi lần tăng độ dài tối đa thêm 70 ký tự
            }
        });
        // Nếu còn đoạn cuối cùng chưa được thêm vào mảng processedTextData, thêm nó vào
        if (currentParagraph !== '')
            processedTextData.push(currentParagraph);

        textData = processedTextData;
        // Thêm tiêu đề chương vào phần tử đầu mảng
        let title = document.querySelector('.chapter-title').getAttribute('title');
        textData.unshift(title);
        console.log(textData);

        // Nếu bật tự động phát, bấm vào nút Phát
        if (autoPlayValue === "true")
            playAudioButton.click();
    });
}


// Hàm giảm tốc độ phát
function decreaseSpeed() {
    if (audioPlayer.playbackRate > 1) {
        audioPlayer.playbackRate -= 0.1;
        currentSpeedDisplay.textContent = audioPlayer.playbackRate.toFixed(1);
        updatecurrentSpeed();
    }
}
// Hàm tăng tốc độ phát
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
    const url = '/api/tts_api/getaudiostream/';
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
            next_chap_elements[0].click();
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
                // Chuyển đổi response thành Blob, một đối tượng chứa dữ liệu thô có thể được đọc dưới dạng dữ liệu nhị phân
                return response.blob();
            })
            .then(blob => {
                const audioURL = URL.createObjectURL(blob); // Tạo URL để gán cho audioPlayer và trả về
                resolve(audioURL);
            })
            .catch(error => {
                console.error('Error fetching audio:', error);
                reject(error);
            });
    });
}

// Kiểm tra nếu là thiết bị di động để hiện cảnh báo
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function alertMobile() {
    if (isMobileDevice()) {
        // Hiển thị cảnh báo nếu thiết bị là điện thoại
        var alertBox = document.getElementById('alertBox');
        alertBox.style.display = 'block';
        // Hẹn giờ ẩn cảnh báo
        var timeout = setTimeout(function () {
            alertBox.style.display = 'none';
        }, 15000);
        // Xóa hẹn giờ nếu có sự tương tác từ người dùng
        alertBox.addEventListener('click', function () {
            alertBox.style.display = 'none';
            clearTimeout(timeout);
        });
    }
}
