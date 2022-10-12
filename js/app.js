import { GameLogic	 } from './game/game-logic.js';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      
		  .register("/checkers-pwa/sw.js")
        

		.then((res) => console.log('service worker registered'))
        


	.catch((err) => console.log('service worker not registered', err));
}
	



	const	 game = new GameLogic();

game.newGame();
