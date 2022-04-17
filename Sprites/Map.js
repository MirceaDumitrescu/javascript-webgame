class Map {
  constructor({ ctx, position, sprite, velocity = 4 }) {
    this.position = position;
    this.sprite = sprite;
    this.ctx = ctx;
    this.velocity = velocity;
  }

  draw() {
    this.ctx.drawImage(this.sprite, this.position.x, this.position.y);
  }

  moveUp() {
    this.position.y += this.velocity;
  }

  moveDown() {
    this.position.y -= this.velocity;
  }

  moveLeft() {
    this.position.x += this.velocity;
  }

  moveRight() {
    this.position.x -= this.velocity;
  }
}

export default Map;
