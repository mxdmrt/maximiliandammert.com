const randomHex = () => {
  const hexMax = 256 * 256 * 256;

  return (
    '#' +
    Math.floor(Math.random() * hexMax)
      .toString(16)
      .toUpperCase()
      .padStart(6, '0')
  );
};

const getCorrectTextColor = (hex) => {
  const threshold = 128; /* about half of 256. Lower threshold equals more dark text on dark background  */

  const hexToR = (h) => {
    return parseInt(cutHex(h).substring(0, 2), 16);
  };
  const hexToG = (h) => {
    return parseInt(cutHex(h).substring(2, 4), 16);
  };
  const hexToB = (h) => {
    return parseInt(cutHex(h).substring(4, 6), 16);
  };
  const cutHex = (h) => {
    return h.charAt(0) == '#' ? h.substring(1, 7) : h;
  };

  const hRed = hexToR(hex);
  const hGreen = hexToG(hex);
  const hBlue = hexToB(hex);

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;

  return cBrightness > threshold ? 'rgba(0,0,0, 0.94)' : 'rgba(255, 255, 255, 0.94)';
};

const setRandomColor = () => {
  const bgColor = randomHex();

  return [
    document.querySelector(':root').style.setProperty('--colorBackground', bgColor),
    document.querySelector(':root').style.setProperty('--colorCopy', getCorrectTextColor(bgColor)),
    document.querySelector(':root').style.setProperty('--colorLink', getCorrectTextColor(bgColor)),
    document.querySelector('meta[name=theme-color]').style.setProperty('content', bgColor),
  ];
};
