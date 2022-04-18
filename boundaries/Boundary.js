import Map from '../Sprites/Map.js';

class Boundary extends Map {
  static width = 48;
  static height = 48;

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
