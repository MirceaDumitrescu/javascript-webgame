import { canvas } from '../data/config.js';

export class Animation {
  constructor({ ctx, map, player, foregroundMap = [] }) {
    this.ctx = ctx;
    this.map = map;
    this.player = player;
    this.foregroundMap = foregroundMap;
    this.mapDestinations = [];
    this.mapBoundaries = [];
    this.backgroundImages = [];
    this.animationId = 0;
  }

  setMapMarkers(mapMarkers) {
    for (let key in mapMarkers.destinations) {
      this.mapDestinations.push(...mapMarkers.destinations[key]);
    }

    this.mapBoundaries = mapMarkers.mapBoundaries;

    this.backgroundImages = [
      this.map,
      this.foregroundMap,
      ...this.mapDestinations,
      ...this.mapBoundaries
    ];
  }

  restartAnimation(mapMarkers) {
    cancelAnimationFrame(this.animationId);
    this.setMapMarkers(mapMarkers);
    this.animate();
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.player.enableMovement();
    this.map.draw(this.animationId);
    this.player.draw(this.animationId);
    this.foregroundMap.draw();
    // this.mapBoundaries.forEach((boundary) => boundary.draw());
    this.player.move(
      this.mapDestinations,
      this.mapBoundaries,
      this.backgroundImages
    );
  }
}
