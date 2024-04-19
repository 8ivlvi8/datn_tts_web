function checkChapterCInIframe() {
    // Lấy ra thẻ iframe
    var iframe = document.getElementById("id_của_iframe");

    // Kiểm tra xem iframe có tồn tại không
    if (iframe) {
        // Lấy ra document của iframe
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Kiểm tra xem document của iframe có tồn tại không
        if (iframeDocument) {
            // Lấy ra phần tử con có id="chapter-c" trong document của iframe
            var chapterCElement = iframeDocument.getElementById("chapter-c");

            // Kiểm tra xem phần tử con có tồn tại không
            if (chapterCElement) {
                // Thực hiện xử lý với phần tử con có id="chapter-c" ở đây
                console.log("Phần tử con có id=chapter-c được tìm thấy trong iframe.");
            } else {
                console.log("Không tìm thấy phần tử con có id=chapter-c trong iframe.");
            }
        } else {
            console.log("Không thể truy cập document của iframe.");
        }
    } else {
        console.log("Không tìm thấy iframe với id=id_của_iframe.");
    }
}

// Gắn sự kiện click vào button và gọi hàm kiểm tra khi button được click
document.getElementById("checkChapterCButton").addEventListener("click", checkChapterCInIframe);