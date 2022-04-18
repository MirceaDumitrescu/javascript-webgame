export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');
export const pixelSize = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
);
canvas.width = 200 * pixelSize;
canvas.height = 144 * pixelSize;

export const offset = {
  x: -110 * pixelSize,
  y: -90 * pixelSize
};

console.log(pixelSize);
