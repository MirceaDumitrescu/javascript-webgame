import { mapZoom } from '../data/config.js';

class Boundary {
  static velocity = 4; // pixels per second
  static width = mapZoom;
  static height = mapZoom;

  constructor({ ctx, position, destination }) {
    this.position = position;
    this.ctx = ctx;
    this.width = Boundary.width;
    this.height = Boundary.height;
    this.destination = destination;
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

  moveUp() {
    this.position.y += Boundary.velocity;
  }

  moveDown() {
    this.position.y -= Boundary.velocity;
  }

  moveLeft() {
    this.position.x += Boundary.velocity;
  }

  moveRight() {
    this.position.x -= Boundary.velocity;
  }
}

export default Boundary;
