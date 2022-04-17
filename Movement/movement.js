const movement = (keysPressed, player, backgroundImages, boundaries) => {

  
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
      backgroundImages.forEach((image) => {
        image.moveUp();
      });
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
      backgroundImages.forEach((image) => {
        image.moveDown();
      });
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
      backgroundImages.forEach((image) => {
        image.moveLeft();
      });
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
      backgroundImages.forEach((image) => {
        image.moveRight();
      });
    }
  }
};
export default movement;
