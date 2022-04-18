export const keysPressed = {
  up: false,
  down: false,
  left: false,
  right: false
};

export let lastKeyPressed = [];
export const directions = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right'
};
const keys = {
  87: directions.up,
  65: directions.left,
  68: directions.right,
  83: directions.down
};

window.addEventListener('keydown', (eventKey) => {
  let dir = keys[eventKey.which];
  if (dir && lastKeyPressed.indexOf(dir) === -1) {
    lastKeyPressed.unshift(dir);
  }
});

window.addEventListener('keyup', (eventKey) => {
  let dir = keys[eventKey.which];
  let index = lastKeyPressed.indexOf(dir);
  if (index > -1) {
    lastKeyPressed.splice(index, 1);
  }
});
