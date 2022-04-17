class Map {
  constructor({ ctx, position, sprite }) {
    this.position = position;
    this.sprite = sprite;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.drawImage(this.sprite, this.position.x, this.position.y);
  }
}

export default Map;
