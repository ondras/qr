<?php
	$key = "HTTP_REFERER";
	if (array_key_exists($key, $_SERVER)) {
		$data = $_GET;
		$data["data"] = $_SERVER[$key];
		$data["format"] = "png";
		$data["qzone"] = 1;
		$url = "https://api.qrserver.com/v1/create-qr-code/?" . http_build_query($data);
		header("Cache-Control: no-cache, no-store, must-revalidate");
		header("Content-type: image/png");
		readfile($url);
	} else {
		header("Content-type: image/jpeg");
		readfile("hypnotoad.jpg");
	}
?>
