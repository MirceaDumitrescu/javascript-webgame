import Boundary from '../boundaries/Boundary.js';
import { ctx, offset } from '../data/config.js';

class Map {
  static velocity = 4; // pixels per second

  constructor({ ctx, position, sprite }) {
    this.position = position;
    this.sprite = sprite;
    this.ctx = ctx;
    this.collisionMap = [];
    this.boundaries = [];
  }

  draw() {
    this.ctx.drawImage(this.sprite, this.position.x, this.position.y);
  }

  drawBorders(collisions, locationName) {
    this.collisionMap = [];
    this.boundaries = [];
    for (let i = 0; i < collisions.length; i += 70) {
      this.collisionMap.push(collisions.slice(i, i + 70));
    }

    this.collisionMap.forEach((row, i) => {
      row.forEach((symbol, j) => {
        if (symbol === 1025)
          this.boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
              },
              ctx: ctx,
              destination: locationName
            })
          );
      });
    });
    return this.boundaries;
  }

  moveUp() {
    this.position.y += Map.velocity;
  }

  moveDown() {
    this.position.y -= Map.velocity;
  }

  moveLeft() {
    this.position.x += Map.velocity;
  }

  moveRight() {
    this.position.x -= Map.velocity;
  }
}

export default Map;
