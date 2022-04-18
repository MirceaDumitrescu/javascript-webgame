import { directions, lastKeyPressed } from '../data/eventListeners.js';

const movement = (
  keysPressed,
  player,
  backgroundImages,
  boundaries,
  battlePatches
) => {
  const heldDirection = lastKeyPressed[0];
  const direction = {
    x: 0,
    y: 0
  };

  if (player.battleInitiated) {
    player.movingAnimation = false;
    return;
  }

  if (heldDirection) {
    player.checkBattleZoneCollisions(battlePatches);

    /*
     * Checks movement up
     */
    if (heldDirection === directions.up) {
      player.checkCollisions(boundaries, { ...direction, y: direction.y + 4 });
      if (player.moving) {
        backgroundImages.forEach((image) => {
          image.moveUp();
          player.image = player.sprites.up;
          player.movingAnimation = true;
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
          player.image = player.sprites.down;
          image.moveDown();
          player.movingAnimation = true;
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
          player.image = player.sprites.left;
          image.moveLeft();
          player.movingAnimation = true;
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
          player.image = player.sprites.right;
          image.moveRight();
          player.movingAnimation = true;
        });
      }
    }
  } else {
    player.movingAnimation = false;
  }
};
export default movement;
