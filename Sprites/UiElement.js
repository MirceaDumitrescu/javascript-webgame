import { menuCtx, offset } from '../data/config.js';

export class UiElement {
  constructor({ image }) {
    this.image = image;
    this.ctx = menuCtx;
    this.offset = offset;
  }

  draw(x, y) {
    this.ctx.drawImage(this.image, x, y);
  }
}
