export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

window.onresize = () => {
  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;
};

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

// export const offset = {
//   x: -1300,
//   y: -1000
// };

export const mapZoom = 72;
