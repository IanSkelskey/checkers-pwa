import { GameGrid } from './game-grid.js';

customElements.define('game-grid', GameGrid);

export class GameLogic {
    #board;
    constructor() {
        this.#board = document.createElement('game-grid');
        this.#board.populateTiles();
        const main = document.getElementsByTagName('main').item(0);
        main.appendChild(this.#board);
    }

    newGame() {
        this.#board.setupPieces('red');
        this.#board.setupPieces('blue');
    }
}
