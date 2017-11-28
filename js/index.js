function trackLocation(e) {
	var rect = imageContainer.getBoundingClientRect(),
		position = ((e.pageX - rect.left) / imageContainer.offsetWidth)*100;
	if (position <= 100) {
		imageClipper.style.width = position+"%";
    // clippedimage.style.width = ((100/position)*100)+"%";
    // clippedimage.style.zIndex = 3;
	}
}
var imageContainer = document.getElementById("image-compare-container"),
imageClipper = document.getElementById("image-clipper"),
clippedimage = imageClipper.getElementsByTagName("image")[0];
imageContainer.addEventListener( "mousemove", trackLocation, false);
imageContainer.addEventListener("touchstart",trackLocation,false);
imageContainer.addEventListener("touchmove",trackLocation,false);