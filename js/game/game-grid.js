import {BoardTile} from "./board-tile.js";
customElements.define("board-tile", BoardTile);

export class GameGrid extends HTMLElement {
    constructor() {
        console.log("Creating game grid...")
        super();
    }

    populateTiles() {
        console.log("Populating tiles...");
        let size = 8;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let color = ((i + j) % 2 === 0) ? 'black' : 'white';
                let tile = document.createElement("board-tile");
                tile.setProperties(color, i, j);
                this.appendChild(tile);
            }
        }
    }

    getTiles() {
        return this.getElementsByTagName("board-tile");
    }

    getTile(row, col) {
        return this.querySelector('#r' + row + 'c' + col);
    }

    setupPieces(color) {
        let startRow = (color === 'red') ? 0 : 5;
        let endRow = (color === 'red') ? 3 : 8;
        for (let i = startRow; i < endRow; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    let tile = this.getTile(i, j);
                    tile.addPiece(color);
                }
            }
        }
    }
}


export class XLabel extends HTMLElement {
    constructor() {
        super();
    }
    populate() {
        for (let i = 0; i < 8; i++) {
            let tile = document.createElement("board-tile");
            tile.setProperties('white', 9, i);
            let letter = document.createElement("div");
            letter.textContent = String.fromCharCode('A'.charCodeAt(0) + i);
            letter.classList.add("label");
            if (i !== 8) {
                tile.appendChild(letter);
            }
            this.appendChild(tile);
        }
    }
}

export class YLabel extends HTMLElement {
    constructor() {
        super();
    }
    populate() {
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement("board-tile");
            tile.setProperties('white', i, -1);
            let number = document.createElement("div");
            number.textContent = 8-i;
            number.classList.add("label");
            if (i !== 8) {
                tile.appendChild(number);
            }
            this.appendChild(tile);
        }
    }
}