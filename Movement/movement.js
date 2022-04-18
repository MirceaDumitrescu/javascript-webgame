import { directions, lastKeyPressed } from '../data/eventListeners.js';

const movement = (keysPressed, player, backgroundImages, boundaries) => {
  const heldDirection = lastKeyPressed[0];
  const direction = {
    x: 0,
    y: 0
  };

  if (heldDirection) {
    /*
     * Checks movement up
     */
    if (heldDirection === directions.up) {
      player.checkCollisions(boundaries, { ...direction, y: direction.y + 4 });
      if (player.moving) {
        backgroundImages.forEach((image) => {
          image.moveUp();
        });
      }
    }

    /*
     * Checks movement down
     */
    if (heldDirection === directions.down) {
      player.checkCollisions(boundaries, { ...direction, y: direction.y - 4 });

      if (player.moving) {
        backgroundImages.forEach((image) => {
          image.moveDown();
        });
      }
    }

    /*
     * Checks movement left
     */
    if (heldDirection === directions.left) {
      player.checkCollisions(boundaries, { ...direction, x: direction.x + 4 });

      if (player.moving) {
        backgroundImages.forEach((image) => {
          image.moveLeft();
        });
      }
    }

    /*
     * Checks movement right
     */
    if (heldDirection === directions.right) {
      player.checkCollisions(boundaries, { ...direction, x: direction.x - 4 });

      if (player.moving) {
        backgroundImages.forEach((image) => {
          image.moveRight();
        });
      }
    }
  }
};
export default movement;
