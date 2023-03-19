const randomHsl = () => {
  const hueMax = 359;
  const satMax = 100;
  const lightnessMax = 100;

  return [
    Math.floor(Math.random() * hueMax),
    Math.floor(Math.random() * satMax),
    Math.floor(Math.random() * lightnessMax),
  ];
};

const getCorrectTextColor = (bgColor) => {
  const threshold = 42;
  const lightness = bgColor[2];

  return lightness > threshold ? '0, 0%, 0%' : '0, 0%, 100%';
};

const setRandomColor = () => {
  const hsl = randomHsl();
  const bgColor = `${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%`;

  return [
    document.querySelector(':root').style.setProperty('--colorBackground', bgColor),
    document.querySelector(':root').style.setProperty('--colorCopy', getCorrectTextColor(hsl)),
    document.querySelector(':root').style.setProperty('--colorLink', getCorrectTextColor(hsl)),
    document
      .querySelector('meta[name=theme-color]')
      .style.setProperty('content', `hsl(${bgColor})`),
    document.getElementById('themeButtonRandom').classList.add('selected'),
    document
      .querySelector('.themeToggle .selectionIndicator')
      .style.setProperty('left', 'calc(100% / 6 * 1)'),
    document.getElementById('themeButtonLight').classList.remove('selected'),
    document.getElementById('themeButtonDark').classList.remove('selected'),
  ];
};

const setLight = () => {
  const backgroundColor = '0, 0%, 100%';
  const foregroundColor = '0, 0%, 0%';

  return [
    document.querySelector(':root').style.setProperty('--colorBackground', backgroundColor),
    document.querySelector(':root').style.setProperty('--colorCopy', foregroundColor),
    document.querySelector(':root').style.setProperty('--colorLink', foregroundColor),
    document
      .querySelector('meta[name=theme-color]')
      .style.setProperty('content', `hsl(${backgroundColor})`),
    document.getElementById('themeButtonRandom').classList.remove('selected'),
    document.getElementById('themeButtonLight').classList.add('selected'),
    document
      .querySelector('.themeToggle .selectionIndicator')
      .style.setProperty('left', 'calc(100% / 6 * 3)'),
    document.getElementById('themeButtonDark').classList.remove('selected'),
  ];
};

const setDark = () => {
  const backgroundColor = '0, 0%, 0%';
  const foregroundColor = '0, 0%, 100%';

  return [
    document.querySelector(':root').style.setProperty('--colorBackground', backgroundColor),
    document.querySelector(':root').style.setProperty('--colorCopy', foregroundColor),
    document.querySelector(':root').style.setProperty('--colorLink', foregroundColor),
    document
      .querySelector('meta[name=theme-color]')
      .style.setProperty('content', `hsl(${backgroundColor})`),
    document.getElementById('themeButtonRandom').classList.remove('selected'),
    document.getElementById('themeButtonLight').classList.remove('selected'),
    document.getElementById('themeButtonDark').classList.add('selected'),
    document
      .querySelector('.themeToggle .selectionIndicator')
      .style.setProperty('left', 'calc(100% / 6 * 5)'),
  ];
};
