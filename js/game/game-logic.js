import {GameBoard} from "./game-board.js";

customElements.define("game-board", GameBoard);

export class GameLogic {
    #board;
    constructor() {
        this.#board = document.createElement("game-board");
        this.#board.setup();
        const main = document.getElementsByTagName("main").item(0);
        main.appendChild(this.#board);
    }

    newGame() {
        this.#board.setupPieces();
    }
}