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
        let url = "http://letam.myftp.org:8686/nghetruyen/?url=" + href
        window.location.href = url;
    }
}

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