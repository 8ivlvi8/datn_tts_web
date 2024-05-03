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
            try {
                document.querySelector('.btn.btn-success.btn-chapter-nav.chapter_jump').remove();
            } catch (error) {
            }
        }, index * 1500);
}


var prefix = "http://letam.myftp.org:8686/nghetruyen/?url=";
var anchorLinks = document.querySelectorAll('a');
anchorLinks.forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        yourFunction(anchor.getAttribute('href'));
    });
});
function yourFunction(href) {
    console.log('Đã click vào link với href là: ' + href);
    if (href.includes("truyenfull")) {
        let url = prefix + href
        window.location.href = url;
    }
}
removeAds();

var prev_chap_element = document.getElementById('prev_chap');
var next_chap_element = document.getElementById('next_chap');
var prev_chap_href = prefix + prev_chap_element.getAttribute('href');
var next_chap_href = prefix + next_chap_element.getAttribute('href');
console.log(prev_chap_href);
console.log(next_chap_href);
prev_chap_element.setAttribute('href', prev_chap_href);
next_chap_element.setAttribute('href', next_chap_href);