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

import Player from '../Sprites/Player.js';
import { ctx } from '../data/config.js';

const playerMovingUp = new Image();
playerMovingUp.src = './assets/Images/playerUp.png';

const playerMovingDown = new Image();
playerMovingDown.src = './assets/Images/playerDown.png';

const playerMovingLeft = new Image();
playerMovingLeft.src = './assets/Images/playerLeft.png';

const playerMovingRight = new Image();
playerMovingRight.src = './assets/Images/playerRight.png';

// const dustParticles = new Image();
// dustParticles.src = './assets/Images/dust_particles_01.png';

// const runAnimation = new Image();
//
// export const trailDust = new Player({
//   ctx: ctx,
//   image: dustParticles,
//   frames: {
//     max: 3
//   },
//   position: {
//     x: 550,
//     y: 465
//   }
// });

export const player = new Player({
  ctx: ctx,
  sprites: {
    up: playerMovingUp,
    left: playerMovingLeft,
    right: playerMovingRight,
    down: playerMovingDown
  },
  image: playerMovingRight,
  frames: {
    max: 4
  },
  position: {
    x: 576,
    y: 398
  }
});
