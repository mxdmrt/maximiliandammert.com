import { Theme } from "../@types/theme";

const randomOklch = (): [number, number, number] => {
  const lightnessMax = 100;
  const chromaMax = 0.37;
  const hueMax = 359.9;

  return [
    Math.floor(Math.random() * lightnessMax * 10) / 10,
    Math.floor(Math.random() * chromaMax * 100) / 100,
    Math.floor(Math.random() * hueMax * 10) / 10,
  ];
};

const getForegroundColor = (
  bgColor: Theme["background"],
): [number, number, number] => {
  const threshold = 49;
  const lightness = bgColor[0];

  return lightness > threshold ? [0, 0, 0] : [100, 0, 0];
};

export const createRandomTheme = (): Theme => {
  const oklch = randomOklch();
  const bgColor = oklch;

  return {
    type: "random",
    background: bgColor,
    foreground: getForegroundColor(bgColor),
  };
};
