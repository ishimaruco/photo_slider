function trackLocation(e) {
	var rect = imageContainer.getBoundingClientRect(), //座標を取得
		position = ((e.pageX - rect.left) / imageContainer.offsetWidth)*100;
	if (position <= 100) {
		imageClipper.style.width = position+"%"; //幅を決める
	}
}
var imageContainer = document.getElementById("image-compare-container"), //下にいる画像
imageClipper = document.getElementById("image-clipper"), //クリッピングする画像
clippedimage = imageClipper.getElementsByTagName("image")[0];
imageContainer.addEventListener( "mousemove", trackLocation, false); //イベントリスナーを登録
imageContainer.addEventListener("touchstart",trackLocation,false);
imageContainer.addEventListener("touchmove",trackLocation,false);

// var elements = document.getElementsByClassName("photoslider__border"); //ボーダーの要素を取得
