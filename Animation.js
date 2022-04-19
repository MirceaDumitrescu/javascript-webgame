import { canvas } from './data/config.js';

export class Animation {
  constructor({
    ctx,
    map,
    player,
    mapDestinations,
    mapBoundaries,
    backgroundImages
  }) {
    this.ctx = ctx;
    this.map = map;
    this.mapDestinations = mapDestinations;
    this.mapBoundaries = mapBoundaries;
    this.backgroundImages = backgroundImages;
    this.player = player;
    this.animationId = 0;
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.player.enableMovement();
    this.map.draw();
    this.player.draw(this.animationId);
    this.player.move(
      this.mapDestinations,
      this.mapBoundaries,
      this.backgroundImages
    );
  }
}
