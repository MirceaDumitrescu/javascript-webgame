import { battlezones } from './battlezones.js';
import { ctx, offset } from './config.js';
import BattleZone from './Battlezone.js';

let battleZones = [];
export const battlePatches = [];

/*
 * Creates a map of all the boundaries in the game.
 * Based on the height and width of the canvas.
 * Creates multiple arrays for each ROW.
 */
for (let i = 0; i < battlezones.length; i += 70) {
  battleZones.push(battlezones.slice(i, i + 70));
}

/*
 * Creates an array of only Boundary objects.
 * This is based on the value the boundary is set to in the collisionMap.
 * If the value is 0, it is not a boundary.
 */
battleZones.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battlePatches.push(
        new BattleZone({
          position: {
            x: j * BattleZone.width + offset.x,
            y: i * BattleZone.height + offset.y
          },
          ctx: ctx
        })
      );
  });
});
