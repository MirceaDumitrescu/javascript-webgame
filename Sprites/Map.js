class Map {
  static velocity = 4; // pixels per second

  constructor({ ctx, position, sprite }) {
    this.position = position;
    this.sprite = sprite;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.drawImage(this.sprite, this.position.x, this.position.y);
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
