import Map from '../Sprites/Map.js';
import { ctx, offset } from '../data/config.js';

const mapImage = new Image();
mapImage.src = './assets/Images/map.png';

const foregroundImage = new Image();
foregroundImage.src = './assets/Images/foreground.png';

const newMap = new Image();
newMap.src = './assets/Images/map2.png';

export const startingMap = new Map({
  ctx: ctx,
  sprite: mapImage,
  position: {
    x: offset.x,
    y: offset.y
  }
});

export const secondMap = new Map({
  ctx: ctx,
  sprite: newMap,
  position: {
    x: offset.x,
    y: offset.y
  }
});

export const foregroundMap = new Map({
  ctx: ctx,
  sprite: foregroundImage,
  position: {
    x: offset.x,
    y: offset.y
  }
});
