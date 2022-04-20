import { Animation } from './Animation.js';
import { ctx } from '../data/config.js';
import { foregroundMap, startingMap } from '../Maps/maps.js';
import { player } from '../Entities/entities.js';
import { collisions } from '../boundaries/collisions.js';
import { destinations } from '../boundaries/destinations.js';
import { Portal } from './portalMap.js';

export const map1Markers = {
  mapBoundaries: startingMap.drawBorders(collisions.map1),
  destinations: {
    0: startingMap.drawBorders(destinations.portal1, Portal),
    1: startingMap.drawBorders(destinations.dock1, 'Dock')
  }
};
export const gameRunning = new Animation({
  ctx: ctx,
  map: startingMap,
  foregroundMap: foregroundMap,
  player: player,
  mapMarkers: map1Markers
});
