import Map from './Sprites/Map.js';
import Player from './Sprites/Player.js';
import { Animation } from './Animation.js';
import { ctx, offset } from './data/config.js';
import { collisions } from './boundaries/collisions.js';
import { battleZones } from './boundaries/battlezones.js';

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

const dustParticles = new Image();
dustParticles.src = './assets/Images/dust_particles_01.png';

const foregroundImage = new Image();
foregroundImage.src = './assets/Images/foreground.png';

const battleBackgroundImage = new Image();
battleBackgroundImage.src = './assets/Images/battleArena.png';

const newMap = new Image();
newMap.src = './assets/Images/map2.png';

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

export const trailDust = new Player({
  ctx: ctx,
  image: dustParticles,
  frames: {
    max: 3
  },
  position: {
    x: 550,
    y: 465
  }
});

export const player = new Player({
  ctx: ctx,
  sprites: {
    up: playerMovingUp,
    left: playerMovingLeft,
    right: playerMovingRight,
    down: playerMovingDown,
    trailDust: trailDust
  },
  image: playerMovingDown,
  frames: {
    max: 4
  },
  position: {
    x: 576,
    y: 398
  }
});

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

// this needs to be relative to the player's state [which map he is mainly]
const map1Boundaries = startingMap.drawBorders(collisions.map1);
const map1Destinations = startingMap.drawBorders(battleZones.map1);

const secondMap = new Map({
  ctx: ctx,
  sprite: newMap,
  position: {
    x: offset.x,
    y: offset.y
  }
});

const map2Boundaries = secondMap.drawBorders(collisions.map2);
const map2Destinations = secondMap.drawBorders(battleZones.map2);

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
  secondMap,
  ...map1Boundaries,
  foregroundMap,
  ...map1Destinations
];

export const destinationMap = new Animation({
  ctx: ctx,
  map: secondMap,
  player: player,
  mapDestinations: map2Destinations,
  mapBoundaries: map2Boundaries,
  backgroundImages: backgroundImages
});

export const gameRunning = new Animation({
  ctx: ctx,
  map: startingMap,
  player: player,
  mapDestinations: map1Destinations,
  mapBoundaries: map1Boundaries,
  backgroundImages: backgroundImages
});

gameRunning.animate();
