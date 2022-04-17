const movement = (keysPressed, player, boundaries) => {
  /*
   * Checks movement up
   */
  if (keysPressed.up) {
    const direction = {
      x: 0,
      y: 3
    };
    player.checkCollisions(boundaries, direction);

    if (player.moving) {
      player.moveUp();
    }
  }

  /*
   * Checks movement down
   */
  if (keysPressed.down) {
    const direction = {
      x: 0,
      y: -3
    };
    player.checkCollisions(boundaries, direction);

    if (player.moving) {
      player.moveDown();
    }
  }

  /*
   * Checks movement left
   */
  if (keysPressed.left) {
    const direction = {
      x: 3,
      y: 0
    };
    player.checkCollisions(boundaries, direction);

    if (player.moving) {
      player.moveLeft();
    }
  }

  /*
   * Checks movement right
   */
  if (keysPressed.right) {
    const direction = {
      x: -3,
      y: 0
    };
    player.checkCollisions(boundaries, direction);

    if (player.moving) {
      player.moveRight();
    }
  }
};
export default movement;
