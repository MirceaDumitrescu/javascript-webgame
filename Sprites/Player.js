class Player {
  constructor({ ctx, position, frames = { max: 1 }, sprite }) {
    this.position = position;
    this.frames = frames;
    this.sprite = sprite;
    this.ctx = ctx;
    this.moving = true;
    this.sprite.onload = () => {
      this.height = this.sprite.height;
      this.width = this.sprite.width / this.frames.max;
    };
  }

  draw() {
    this.ctx.drawImage(
      this.sprite,
      0,
      0,
      this.sprite.width / this.frames.max,
      this.sprite.height,
      this.position.x,
      this.position.y,
      this.sprite.width / this.frames.max,
      this.sprite.height
    );
  }

  enableMovement() {
    this.moving = true;
  }

  disableMovement() {
    this.moving = false;
  }

  checkCollisions(object, direction) {
    for (let i = 0; i < object.length; i++) {
      const boundary = object[i];
      if (
        this.collideWith({
          ...boundary,
          x: boundary.position.x + direction.x,
          y: boundary.position.y + direction.y
        })
      ) {
        this.disableMovement();
        break;
      }
    }
  }

  collideWith(object) {
    return (
      this.position.x < object.x + object.width &&
      this.position.x + this.width > object.x &&
      this.position.y < object.y + object.height &&
      this.position.y + this.height > object.y
    );
  }
}

export default Player;
