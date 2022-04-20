// const fetchApi = async () => {
//   const response = await fetch('http://localhost:5050/');
//   const data = await response.json();
//   console.log(data);
//   return data;
// };
//
// const gameLoaded = fetchApi();
// console.log(gameLoaded);

import { gameRunning } from './Animations/initGame.js';

gameRunning.setMapMarkers();
gameRunning.animate();
