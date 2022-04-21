// const fetchApi = async () => {
//   try {
//     const response = await fetch('http://localhost:5050/');
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
//
// const gameLoaded = fetchApi();
// console.log(gameLoaded);

import { gameRunning } from './Animations/initGame.js';

gameRunning.setMapMarkers();
gameRunning.animate();
