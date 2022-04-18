import { animateBattle } from '../index.js';

class Player {
  constructor({ ctx, position, frames = { max: 1 }, sprites, image }) {
    this.position = position;
    this.frames = { ...frames, value: 0, elapsedFrames: 0 };
    this.sprites = sprites;
    this.ctx = ctx;
    this.moving = true;
    this.image = image;
    this.image.onload = () => {
      this.height = this.image.height;
      this.width = this.image.width / this.frames.max;
    };
    this.movingAnimation = false;
    this.battleInitiated = false;
  }

  draw(animationId) {
    this.animationloop = animationId;
    this.ctx.drawImage(
      this.image,
      this.frames.value * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / this.frames.max) * 1.25,
      this.image.height * 1.25
    );
    // If there is no moving animation, do nothing.
    if (!this.movingAnimation) return;

    // if there is a moving animation, start counting the elapsed frames.
    if (this.frames.max > 1) {
      this.frames.elapsedFrames++;
    }

    // if the elapsed frames is equal to the max frames, reset the frames and start the animation again.
    if (this.frames.elapsedFrames % 10 === 0) {
      if (this.frames.value < this.frames.max - 1) this.frames.value++;
      else this.frames.value = 0;
    }
  }

  enableMovement() {
    this.moving = true;
  }

  disableMovement() {
    this.moving = false;
  }

  switchMapAnimation(nextAnimation) {
    gsap.to('.canvas-container--transition', {
      opacity: 1,
      duration: 1,
      onComplete() {
        gsap.to('.canvas-container--transition', {
          duration: 1,
          opacity: 1,
          onComplete: () => {
            nextAnimation();
            gsap.to('.canvas-container--transition', {
              duration: 0.4,
              opacity: 0
            });
          }
        });
      }
    });
  }

  checkBorders(object, direction) {
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

  checkBattleZoneCollisions(object) {
    for (let i = 0; i < object.length; i++) {
      const battleZone = object[i];
      const overlapingArea =
        (Math.min(
          this.position.x + this.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(this.position.x, battleZone.position.x)) *
        (Math.min(
          this.position.y + this.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(this.position.y, battleZone.position.y));

      if (
        this.collideWith({
          ...battleZone,
          x: battleZone.position.x,
          y: battleZone.position.y
        }) &&
        overlapingArea > (this.width * this.height) / 2 &&
        Math.random() < 0.01
      ) {
        this.battleInitiated = true;
        window.cancelAnimationFrame(this.animationloop);
        this.switchMapAnimation(animateBattle);
        break;
      }
    }
  }

  collideWith(object) {
    return (
      this.position.x < object.x + object.width &&
      this.position.x + this.width > object.x &&
      this.position.y < object.y + object.height - this.height / 2 &&
      this.position.y + this.height > object.y
    );
  }
}

export default Player;
