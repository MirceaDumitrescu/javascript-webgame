import { canvas } from '../data/config.js';

export class Animation {
  constructor({ ctx, map, player, mapMarkers, foregroundMap = [] }) {
    this.ctx = ctx;
    this.map = map;
    this.player = player;
    this.foregroundMap = foregroundMap;
    this.mapMarkers = mapMarkers;
    this.mapDestinations = [];
    this.mapBoundaries = [];
    this.backgroundImages = [];
    this.animationId = 0;
  }

  setMapMarkers() {
    for (let key in this.mapMarkers.destinations) {
      this.mapDestinations.push(...this.mapMarkers.destinations[key]);
    }

    this.mapBoundaries = this.mapMarkers.mapBoundaries;

    this.backgroundImages = [
      this.map,
      this.foregroundMap,
      ...this.mapDestinations,
      ...this.mapBoundaries
    ];
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.player.enableMovement();
    this.map.draw();
    this.player.draw(this.animationId);
    this.foregroundMap.draw();
    this.player.move(
      this.mapDestinations,
      this.mapBoundaries,
      this.backgroundImages
    );
  }
}
