function randomHex() {
	const hexMax = 256 * 256 * 256;
	return '#' + Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0');
}

function getCorrectTextColor(hex) {

	threshold = 128; /* about half of 256. Lower threshold equals more dark text on dark background  */

	hRed = hexToR(hex);
	hGreen = hexToG(hex);
	hBlue = hexToB(hex);

	function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16) }
	function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16) }
	function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16) }
	function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h }

	cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
	if (cBrightness > threshold) { return "rgba(0,0,0, 0.9)"; } else { return "rgba(255, 255, 255, 0.9)"; }
}

function setRandomColor() {
	bgColor = randomHex();
	$(":root").css("--colorBg", bgColor);
	$(":root").css("--colorTxt", getCorrectTextColor(bgColor));
}
