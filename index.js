import Map from './Sprites/Map.js';
import Player from './Sprites/Player.js';
import movement from './Movement/movement.js';
import {canvas, ctx, offset} from './data/config.js';
import {boundaries} from './data/boundariesMapped.js';
import {keysPressed} from './data/eventListeners.js';

/*
 * The order of image creation matters.
 * If you create the playerImage after the mapImage,
 * the player will be drawn behind the map.
 */
const playerImage = new Image();
playerImage.src = './Images/playerDown.png';

const mapImage = new Image();
mapImage.src = './Images/map.png';

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
  velocity: 3,
  frames: {
    max: 4
  },
  position: {
    // 192 x 68 represents the size of the player image
    x: canvas.width / 2 - 192 / 4 / 2,
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

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  startingMap.draw();
  player.draw();
  player.enableMovement();
  movement(keysPressed, player, boundaries);
};

animate();
