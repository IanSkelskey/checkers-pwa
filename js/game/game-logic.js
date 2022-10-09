import {GameBoard, XLabel, YLabel} from "./game-board.js";

customElements.define("game-board", GameBoard);
customElements.define("x-label", XLabel);
customElements.define("y-label", YLabel);

export class GameLogic {
    #board;
    constructor() {
        this.#board = document.createElement("game-board");
        this.#board.populateTiles();
        const main = document.getElementsByTagName("main").item(0);
        const xLabel = document.createElement("x-label");
        const yLabel = document.createElement("y-label");
        yLabel.populate();
        main.appendChild(yLabel);
        main.appendChild(this.#board);
        xLabel.populate();
        main.appendChild(xLabel);
    }

    newGame() {
        this.#board.setupPieces('red');
        this.#board.setupPieces('blue');
    }
}