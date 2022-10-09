import {GameGrid, XLabel, YLabel} from "./game-grid.js";

customElements.define("game-grid", GameGrid);
customElements.define("x-label", XLabel);
customElements.define("y-label",YLabel);

export class GameBoard extends HTMLElement {
    #grid;
    #xLabel;
    #yLabel;
    constructor() {
        console.log("Creating game board.")
        super();
        this.#grid = document.createElement("game-grid");
        this.#grid.populateTiles();
        this.#xLabel = document.createElement("x-label");
        this.#yLabel = document.createElement("y-label");
        this.#xLabel.populate();
        this.#yLabel.populate();
    }

    setup() {
        this.appendChild(this.#yLabel);
        this.appendChild(this.#grid);
        this.appendChild(this.#xLabel);
    }

    setupPieces() {
        this.#grid.setupPieces('red');
        this.#grid.setupPieces('blue');
    }
}


