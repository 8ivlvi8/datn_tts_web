<script>
    // Kiểm tra URL hiện tại
	var currentUrl = window.location.href;

	// Kiểm tra xem URL có chứa "/tts" không
	if (currentUrl.indexOf("/tts") !== -1) {
		// Thêm class "active" cho liên kết Text-to-speech
		document.querySelector('a[href="/tts"]').classList.add('active')
	} else if (currentUrl.indexOf("/nghetruyen") !== -1) {
		// Thêm class "active" cho liên kết Nghe truyện
		document.querySelector('a[href="/nghetruyen"]').classList.add('active')
	}
</script>
