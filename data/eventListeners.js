export const keysPressed = {
  up: false,
  down: false,
  left: false,
  right: false
};

window.addEventListener('keydown', (eventKey) => {
  switch (eventKey.key) {
    case 'w':
      keysPressed.up = true;
      break;
    case 'a':
      keysPressed.left = true;
      break;
    case 's':
      keysPressed.down = true;
      break;
    case 'd':
      keysPressed.right = true;
      break;
  }
});

window.addEventListener('keyup', (eventKey) => {
  switch (eventKey.key) {
    case 'w':
      keysPressed.up = false;
      break;
    case 'a':
      keysPressed.left = false;
      break;
    case 's':
      keysPressed.down = false;
      break;
    case 'd':
      keysPressed.right = false;
      break;
  }
});
