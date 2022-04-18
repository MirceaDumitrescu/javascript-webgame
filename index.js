import Map from './Sprites/Map.js';
import Player from './Sprites/Player.js';
import movement from './Movement/movement.js';
import { canvas, ctx, offset, pixelSize } from './data/config.js';
import { boundaries } from './boundaries/boundariesMapped.js';
import { keysPressed } from './data/eventListeners.js';
import { battlePatches } from './battlezones/battlezonesMapped.js';

const mapImage = new Image();
mapImage.src = './assets/Images/map.png';

const playerMovingUp = new Image();
playerMovingUp.src = './assets/Images/playerUp.png';

const playerMovingDown = new Image();
playerMovingDown.src = './assets/Images/playerDown.png';

const playerMovingLeft = new Image();
playerMovingLeft.src = './assets/Images/playerLeft.png';

const playerMovingRight = new Image();
playerMovingRight.src = './assets/Images/playerRight.png';

const foregroundImage = new Image();
foregroundImage.src = './assets/Images/foreground.png';

const battleBackgroundImage = new Image();
battleBackgroundImage.src = './assets/Images/battleArena.png';

/*
 * Creates a new Player Object
 * @param {ctx} context - The context of the canvas
 * @param {image} image - The image of the player
 * @param {x} x - The x coordinate of the player
 * @param {y} y - The y coordinate of the player
 * @param {frames} - The number of frames/images in the original image
 * @param {sprites} - walking sprite direction
 *
 */
export const player = new Player({
  ctx: ctx,
  sprites: {
    up: playerMovingUp,
    left: playerMovingLeft,
    right: playerMovingRight,
    down: playerMovingDown
  },
  image: playerMovingDown,
  frames: {
    max: 4
  },
  position: {
    // 192 x 68 represents the size of the player image
    x: canvas.width / 2 - (32 * pixelSize) / 4 / 2,
    y: canvas.height / 2 - (11 * pixelSize) / 2
  }
});

console.log(player.position);
console.log(canvas.width);

const battleBackground = new Map({
  ctx: ctx,
  sprite: battleBackgroundImage,
  position: {
    x: 0,
    y: 0
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
// All the images that have to move to simulate camera movement
const backgroundImages = [
  startingMap,
  ...boundaries,
  foregroundMap,
  ...battlePatches
];

const animate = () => {
  const animationId = window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.enableMovement();
  startingMap.draw();
  player.draw(animationId);
  foregroundMap.draw();

  // boundaries.forEach((boundary) => {
  //   boundary.draw();
  // });

  // battlePatches.forEach((battlePatch) => {
  //   battlePatch.draw();
  // });
  movement(keysPressed, player, backgroundImages, boundaries, battlePatches);
};

export const animateBattle = () => {
  window.requestAnimationFrame(animateBattle);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  battleBackground.draw();
};

animate();
