import Boundary from '../boundaries/Boundary.js';
import { ctx } from '../data/config.js';
import { zoomLevel } from '../data/eventListeners.js';

class Map {
  static velocity = 4; // pixels per second

  constructor({ ctx, zoom3x, zoom2x, zoom1x, spriteSource }) {
    this.sprite = zoom3x;
    this.zoom3x = zoom3x;
    this.zoom2x = zoom2x;
    this.zoom1x = zoom1x;
    // this.sprite.src = spriteSource;
    this.ctx = ctx;
    this.collisionMap = [];
    this.boundaries = [];
    this.zoomLevel = 3;
    this.boundaryWidth = 72;
    this.boundaryHeight = 72;
    this.offsetX = -1300;
    this.offsetY = -1000;
  }

  zoomOut() {
    if (zoomLevel === 2) {
      this.boundaryWidth = this.boundaryWidth - 12;
      this.boundaryHeight = this.boundaryHeight - 12;
      this.offsetX = this.offsetX - this.offsetX / 4;
      this.offsetY = this.offsetY - this.offsetY / 4;
      this.sprite = this.zoom2x;
    } else if (zoomLevel === 1) {
      this.boundaryWidth = this.boundaryWidth - 12;
      this.boundaryHeight = this.boundaryHeight - 12;
      this.offsetX = this.offsetX - this.offsetX / 3;
      this.offsetY = this.offsetY - this.offsetY / 3;
      this.sprite = this.zoom1x;
    }
  }

  zoomIn() {
    if (zoomLevel === 2) {
      this.boundaryWidth = this.boundaryWidth + 12;
      this.boundaryHeight = this.boundaryHeight + 12;
      this.offsetX = this.offsetX + this.offsetX / 2;
      this.offsetY = this.offsetY + this.offsetY / 2;
      this.sprite = this.zoom2x;
    } else if (zoomLevel === 3) {
      this.boundaryWidth = this.boundaryWidth + 12;
      this.boundaryHeight = this.boundaryHeight + 12;
      this.offsetX = this.offsetX + this.offsetX / 3;
      this.offsetY = this.offsetY + this.offsetY / 3;
      this.sprite = this.zoom3x;
    }
  }

  draw() {
    this.ctx.drawImage(this.sprite, this.offsetX, this.offsetY);
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
              height: this.boundaryHeight,
              width: this.boundaryWidth,
              position: {
                x: j * this.boundaryWidth + this.offsetX,
                y: i * this.boundaryHeight + this.offsetY
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
    this.offsetY += Map.velocity;
  }

  moveDown() {
    this.offsetY -= Map.velocity;
  }

  moveLeft() {
    this.offsetX += Map.velocity;
  }

  moveRight() {
    this.offsetX -= Map.velocity;
  }
}

export default Map;
