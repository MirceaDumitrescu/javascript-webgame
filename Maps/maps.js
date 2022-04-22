import Map from '../Sprites/Map.js';
import {ctx, offset} from '../data/config.js';

// const mapImage = new Image();
// mapImage.src = './assets/Images/map.png';
const map1x = new Image();
map1x.src = './assets/Images/map1/map1x.png';

const map3x = new Image();
map3x.src = './assets/Images/map1/map3x.png';

const map2x = new Image();
map2x.src = './assets/Images/map1/map2x.png';

const f13x = new Image();
f13x.src = './assets/Images/map1/f1-3x.png';

const f12x = new Image();
f12x.src = './assets/Images/map1/f1-2x.png';

const f11x = new Image();
f11x.src = './assets/Images/map1/f1-1x.png';

// const foregroundImage = new Image();
// foregroundImage.src = './assets/Images/foreground.png';
//
// const newMap = new Image();
// newMap.src = './assets/Images/map2.png';

export const startingMap = new Map({
  ctx: ctx,
  // sprite: mapImage,
  zoom1x: map1x,
  zoom2x: map2x,
  zoom3x: map3x
  // spriteSource: '../assets/Images/map.png',
  // position: {
  //   x: offset.x,
  //   y: offset.y
  // }
});

export const secondMap = new Map({
  ctx: ctx,
  // sprite: newMap,
  position: {
    x: offset.x,
    y: offset.y
  }
});

export const foregroundMap = new Map({
  ctx: ctx,
  // sprite: foregroundImage,
  zoom3x: f13x,
  zoom2x: f12x,
  zoom1x: f11x
  // position: {
  //   x: offset.x,
  //   y: offset.y
  // }
});
