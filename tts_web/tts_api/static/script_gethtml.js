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
    if (href.includes("https://truyenfull.vn")) {
        let url = prefix + href
        window.location.href = url;
    }
}

// Xử lý các link chuyển chương
var content = document.getElementById('chapter-c');
if (content) {
    var prev_chap_element = document.getElementById('prev_chap');
    var next_chap_element = document.getElementById('next_chap');
    var prev_chap_href = prefix + prev_chap_element.getAttribute('href');
    var next_chap_href = prefix + next_chap_element.getAttribute('href');
    console.log(prev_chap_href);
    console.log(next_chap_href);
    prev_chap_element.setAttribute('href', prev_chap_href);
    next_chap_element.setAttribute('href', next_chap_href);
}   

// Xóa element thứ 4 (web truyện tranh)
var dropdownItems = document.querySelectorAll('.control.nav.navbar-nav > .dropdown');
if (dropdownItems.length == 5) {
    dropdownItems[3].remove();
}