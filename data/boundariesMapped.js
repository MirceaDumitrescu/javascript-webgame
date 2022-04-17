import collisions from './collisions.js';
import Boundary from './Boundary.js';
import { ctx, offset } from './config.js';

let collisionMap = [];
export const boundaries = [];

/*
 * Creates a map of all the boundaries in the game.
 * Based on the height and width of the canvas.
 * Creates multiple arrays for each ROW.
 */
for (let i = 0; i < collisions.length; i += 70) {
  collisionMap.push(collisions.slice(i, i + 70));
}

/*
 * Creates an array of only Boundary objects.
 * This is based on the value the boundary is set to in the collisionMap.
 * If the value is 0, it is not a boundary.
 */
collisionMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          ctx: ctx
        })
      );
  });
});
