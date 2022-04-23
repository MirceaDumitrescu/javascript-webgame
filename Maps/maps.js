import Map from '../Sprites/Map.js';
import { ctx } from '../data/config.js';

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

export const startingMap = new Map({
  ctx: ctx,
  zoom1x: map1x,
  zoom2x: map2x,
  zoom3x: map3x
});

export const secondMap = new Map({
  ctx: ctx
});

export const foregroundMap = new Map({
  ctx: ctx,
  zoom3x: f13x,
  zoom2x: f12x,
  zoom1x: f11x
});
