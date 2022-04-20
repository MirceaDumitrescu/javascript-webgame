import { Animation } from './Animation.js';
import { ctx } from '../data/config.js';
import { foregroundMap, secondMap } from '../Maps/maps.js';
import { player } from '../Entities/entities.js';
import { collisions } from '../boundaries/collisions.js';

export const map2Markers = {
  mapBoundaries: secondMap.drawBorders(collisions.map2)
};
export const Portal = new Animation({
  ctx: ctx,
  map: secondMap,
  player: player,
  foregroundMap: foregroundMap,
  mapMarkers: map2Markers
});
