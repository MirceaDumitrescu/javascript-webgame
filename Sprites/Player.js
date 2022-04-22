import {
  directions,
  lastKeyPressed,
  zoomLevel
} from '../data/eventListeners.js';

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
    this.overlap = 0;
    this.direction = {
      x: 0,
      y: 0
    };
  }

  setImageDimensions() {
    if (zoomLevel === 2) {
      this.drawWidth = (this.image.width / this.frames.max) * 0.85;
      this.drawHeight = this.image.height * 0.85;
    } else if (zoomLevel === 1) {
      this.drawWidth = (this.image.width / this.frames.max) * 0.75;
      this.drawHeight = this.image.height * 0.75;
    } else {
      this.drawWidth = this.image.width / this.frames.max;
      this.drawHeight = this.image.height;
    }
  }

  setPosition() {
    if (zoomLevel === 2) {
      this.position.x = 587;
      this.position.y = 408;
    } else if (zoomLevel === 1) {
      this.position.x = 590;
      this.position.y = 420;
    } else {
      this.position.x = 576;
      this.position.y = 398;
    }
  }

  draw(animationId) {
    this.setImageDimensions();
    this.setPosition();
    this.animationloop = animationId;
    this.ctx.drawImage(
      this.image,
      this.frames.value * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.drawWidth,
      this.drawHeight
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

  getOverlapValue(object) {
    this.overlap =
      (Math.min(
        this.position.x + this.width,
        object.position.x + object.width
      ) -
        Math.max(this.position.x, object.position.x)) *
      (Math.min(
        this.position.y + this.height,
        object.position.y + object.height
      ) -
        Math.max(this.position.y, object.position.y));
    return this.overlap;
  }

  checkLocationOverlap(object) {
    const overlapValue = this.getOverlapValue(object);

    if (
      this.collideWith({
        ...object,
        x: object.position.x,
        y: object.position.y
      }) &&
      overlapValue > (this.width * this.height) / 2
      // && Math.random() < 0.01
    ) {
      this.battleInitiated = true;
      this.stopAnimation(this.animationloop);
      this.switchMapAnimation(object.destination);
    }
  }

  stopAnimation(animationId) {
    cancelAnimationFrame(animationId);
  }

  switchMapAnimation(destinationMap) {
    this.battleInitiated = false;
    gsap.to('.canvas-container--transition', {
      opacity: 1,
      duration: 1,
      onComplete() {
        gsap.to('.canvas-container--transition', {
          duration: 1,
          opacity: 1,
          onComplete: () => {
            destinationMap.setMapMarkers();
            destinationMap.animate();
            console.log('finishing animation');
            gsap.to('.canvas-container--transition', {
              duration: 0.4,
              opacity: 0
            });
          }
        });
      }
    });
  }

  collideWith(object) {
    return (
      this.position.x < object.x + object.width &&
      this.position.x + this.width > object.x &&
      this.position.y < object.y + object.height - this.height / 2 &&
      this.position.y + this.height > object.y
    );
  }

  showTrailDust() {}

  move(destinations, mapBoundaries, backgroundImages) {
    this.heldDirection = lastKeyPressed[0];
    if (this.battleInitiated) {
      this.movingAnimation = false;
      return;
    }
    if (this.heldDirection) {
      destinations.forEach((destination) => {
        this.checkLocationOverlap(destination);
      });

      /*
       * Checks movement up
       */
      if (this.heldDirection === directions.up) {
        this.checkBorders(mapBoundaries, {
          ...this.direction,
          y: this.direction.y + 4
        });
        if (this.moving) {
          backgroundImages.forEach((backgroundImage) => {
            backgroundImage.moveUp();
            this.image = this.sprites.up;
            this.movingAnimation = true;
          });
        }
      }

      /*
       * Checks movement down
       */
      if (this.heldDirection === directions.down) {
        this.checkBorders(mapBoundaries, {
          ...this.direction,
          y: this.direction.y - 4
        });
        if (this.moving) {
          backgroundImages.forEach((backgroundImage) => {
            this.image = this.sprites.down;
            backgroundImage.moveDown();
            this.movingAnimation = true;
          });
        }
      }

      /*
       * Checks movement left
       */
      if (this.heldDirection === directions.left) {
        this.checkBorders(mapBoundaries, {
          ...this.direction,
          x: this.direction.x + 4
        });
        if (this.moving) {
          backgroundImages.forEach((backgroundImage) => {
            this.image = this.sprites.left;
            backgroundImage.moveLeft();
            this.movingAnimation = true;
          });
        }
      }

      /*
       * Checks movement right
       */
      if (this.heldDirection === directions.right) {
        this.checkBorders(mapBoundaries, {
          ...this.direction,
          x: this.direction.x - 4
        });
        if (this.moving) {
          backgroundImages.forEach((backgroundImage) => {
            this.image = this.sprites.right;
            // this.sprites.trailDust.draw();
            backgroundImage.moveRight();
            this.movingAnimation = true;
          });
        }
      }
    } else {
      this.movingAnimation = false;
    }
  }
}

export default Player;
