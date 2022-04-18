import Map from './Sprites/Map.js';
import Player from './Sprites/Player.js';
import movement from './Movement/movement.js';
import { canvas, ctx, offset } from './data/config.js';
import { boundaries } from './data/boundariesMapped.js';
import { keysPressed } from './data/eventListeners.js';

const mapImage = new Image();
mapImage.src = './Images/map.png';

const playerImage = new Image();
playerImage.src = './Images/playerDown.png';

const foregroundImage = new Image();
foregroundImage.src = './Images/foreground.png';

/*
 * Creates a new Player Object
 * @param {ctx} context - The context of the canvas
 * @param {playerImage} image - The image of the player
 * @param {x} x - The x coordinate of the player
 * @param {y} y - The y coordinate of the player
 * @param {velocity} - The velocity of the player
 * @param {frames} - The number of frames/images in the original image
 *
 */
const player = new Player({
  ctx: ctx,
  sprite: playerImage,
  frames: {
    max: 4
  },
  position: {
    // 192 x 68 represents the size of the player image
    x: canvas.width / 2 - 192 / 2,
    y: canvas.height / 2 - 68 / 2
  }
});

const startingMap = new Map({
  ctx: ctx,
  sprite: mapImage,
  position: {
    x: offset.x,
    y: offset.y
  }
});

const foregroundMap = new Map({
  ctx: ctx,
  sprite: foregroundImage,
  position: {
    x: offset.x,
    y: offset.y
  }
});

const backgroundImages = [startingMap, ...boundaries, foregroundMap];
const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.enableMovement();

  startingMap.draw();
  player.draw();
  foregroundMap.draw();

  // boundaries.forEach((boundary) => {
  //   boundary.draw();
  // });
  movement(keysPressed, player, backgroundImages, boundaries);
};

animate();
