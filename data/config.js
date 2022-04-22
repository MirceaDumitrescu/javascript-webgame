export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');
let pixelSize = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
);

window.onresize = () => {
  canvas.width = 200 * pixelSize;
  canvas.height = 144 * pixelSize;
  pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
  );
};

canvas.width = 200 * pixelSize;
canvas.height = 144 * pixelSize;

export const offset = {
  x: -1300,
  y: -1000
};

export const mapZoom = 72;
