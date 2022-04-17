class Boundary {
  static width = 48;
  static height = 48;

  constructor({ ctx, position }) {
    this.position = position;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      Boundary.width,
      Boundary.height
    );
  }
}

export default Boundary;
