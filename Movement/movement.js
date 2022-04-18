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
      player.checkBorders(boundaries, { ...direction, y: direction.y + 4 });
      if (player.moving) {
        backgroundImages.forEach((backgroundImage) => {
          backgroundImage.moveUp();
          player.image = player.sprites.up;
          player.movingAnimation = true;
        });
      }
    }

    /*
     * Checks movement down
     */
    if (heldDirection === directions.down) {
      player.checkBorders(boundaries, { ...direction, y: direction.y - 4 });
      if (player.moving) {
        backgroundImages.forEach((backgroundImage) => {
          player.image = player.sprites.down;
          backgroundImage.moveDown();
          player.movingAnimation = true;
        });
      }
    }

    /*
     * Checks movement left
     */
    if (heldDirection === directions.left) {
      player.checkBorders(boundaries, { ...direction, x: direction.x + 4 });
      if (player.moving) {
        backgroundImages.forEach((backgroundImage) => {
          player.image = player.sprites.left;
          backgroundImage.moveLeft();
          player.movingAnimation = true;
        });
      }
    }

    /*
     * Checks movement right
     */
    if (heldDirection === directions.right) {
      player.checkBorders(boundaries, { ...direction, x: direction.x - 4 });
      if (player.moving) {
        backgroundImages.forEach((backgroundImage) => {
          player.image = player.sprites.right;
          backgroundImage.moveRight();
          player.movingAnimation = true;
        });
      }
    }
  } else {
    player.movingAnimation = false;
  }
};
export default movement;
