import Map from '../Sprites/Map.js';
import { mapZoom } from '../data/config.js';

class Boundary extends Map {
  static width = mapZoom;
  static height = mapZoom;

  constructor({ ctx, position, moveUp, moveDown, moveLeft, moveRight }) {
    super({ moveUp, moveDown, moveLeft, moveRight });
    this.position = position;
    this.ctx = ctx;
    this.width = Boundary.width;
    this.height = Boundary.height;
  }

  draw() {
    this.ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export default Boundary;
