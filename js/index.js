var imageContainer = document.getElementsByClassName("image-compare-container"),
		imageClipper = document.getElementsByClassName("image-clipper"),
		clippedimage = imageClipper[0].getElementsByTagName("img");

function trackLocation(e) {
	var rect = imageContainer[0].getBoundingClientRect(),
			position = ((e.pageX - rect.left) / imageContainer.offsetWidth)*100;
	if (position <= 100) {
			imageClipper[0].style.width = position+"%";
	}
}
imageContainer[0].addEventListener("mousemove", trackLocation);
imageContainer[0].addEventListener("touchstart",trackLocation);
imageContainer[0].addEventListener("touchmove",trackLocation);