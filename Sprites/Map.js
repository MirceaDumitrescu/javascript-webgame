import Boundary from '../boundaries/Boundary.js';
import { ctx, offset } from '../data/config.js';

class Map {
  static velocity = 4; // pixels per second

  constructor({ ctx, position, sprite, zoom3x, zoom2x, zoom1x, spriteSource }) {
    this.position = position;
    this.sprite = zoom1x;
    this.zoom3x = zoom3x;
    this.zoom2x = zoom2x;
    this.zoom1x = zoom1x;
    // this.sprite.src = spriteSource;
    this.ctx = ctx;
    this.collisionMap = [];
    this.boundaries = [];
  }

  zoomOut(zoomLevel) {
    console.log(this.sprite);
    console.log(zoomLevel);
    if (zoomLevel === 2) {
      console.log('first zoom in');
      console.log(zoomLevel);
      this.sprite = this.zoom2x;
    } else if (zoomLevel === 1) {
      console.log('last zoomOut');
      console.log(zoomLevel);
      this.sprite = this.zoom1x;
    } else {
      console.log('zoomOut');
      console.log(zoomLevel);
    }
  }

  zoomIn(zoomLevel) {
    console.log(this.sprite);
    console.log(zoomLevel);
    if (zoomLevel === 1) {
      this.sprite = this.zoom2x;
    } else if (zoomLevel === 2) {
      this.sprite = this.zoom3x;
    } else if (zoomLevel === 3) {
      this.sprite = this.zoom3x;
    }
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
