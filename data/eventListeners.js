import { foregroundMap, startingMap } from '../Maps/maps.js';
import { gameRunning, getMapMarkers } from '../Animations/initGame.js';

export let lastKeyPressed = [];
export let zoomLevel = 3;
export const directions = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right'
};
export const gameRun = () => {
  window.addEventListener('load', () => {
    const zoomIn = document.querySelector('.zoom-in-button');
    const zoomOut = document.querySelector('.zoom-out-button');

    const keys = {
      87: directions.up,
      65: directions.left,
      68: directions.right,
      83: directions.down
    };

    window.addEventListener('keydown', (eventKey) => {
      let dir = keys[eventKey.which];
      if (dir && lastKeyPressed.indexOf(dir) === -1) {
        lastKeyPressed.unshift(dir);
      }
    });

    window.addEventListener('keyup', (eventKey) => {
      let dir = keys[eventKey.which];
      let index = lastKeyPressed.indexOf(dir);
      if (index > -1) {
        lastKeyPressed.splice(index, 1);
      }
    });

    zoomOut.addEventListener('click', () => {
      if (zoomLevel > 1) {
        zoomLevel--;
        startingMap.zoomOut();
        foregroundMap.zoomOut();
        gameRunning.setMapMarkers(getMapMarkers());
      }
    });

    zoomIn.addEventListener('click', () => {
      if (zoomLevel < 3 && zoomLevel > 0) {
        zoomLevel++;
        startingMap.zoomIn();
        foregroundMap.zoomIn();
        gameRunning.setMapMarkers(getMapMarkers());
      }
    });

    gameRunning.setMapMarkers(getMapMarkers());
    gameRunning.animate();
  });
};
