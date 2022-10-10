import {GameTile} from "./game-tile.js";
import {LabelTile} from "./label-tile.js";

customElements.define("game-tile", GameTile);
customElements.define("label-tile", LabelTile);

export class GameGrid extends HTMLElement {
    constructor() {
        console.log("Creating game grid...")
        super();
    }

    populateTiles() {
        console.log("Populating tiles...");
        let size = 8;
        let tile;
        for (let i = 0; i < size + 1; i++) {
            for (let j = 0; j < size + 1; j++) {
                if (i === size ? j !== 0 : j === 0) {
                    let label = (i === size) ? String.fromCharCode('A'.charCodeAt(0) + j - 1) : 8 - i;
                    tile = document.createElement("label-tile");
                    tile.setLabel(label);
                } else { // Game Grid
                    let color = ((i + j) % 2 === 0 && i !== size) ? 'black' : 'white';
                    tile = document.createElement("game-tile");
                    tile.setProperties(color, i, j - 1);
                }
                this.appendChild(tile);
            }
        }
    }

    getTiles() {
        return this.getElementsByTagName("game-tile");
    }

    getTile(row, col) {
        return this.querySelector('#r' + row + 'c' + col);
    }

    setupPieces(color) {
        let startRow = (color === 'red') ? 0 : 5;
        let endRow = (color === 'red') ? 3 : 8;
        for (let i = startRow; i < endRow; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    let tile = this.getTile(i, j);
                    tile.addPiece(color);
                }
            }
        }
    }
}