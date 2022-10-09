class GameBoard extends HTMLElement {
    constructor() {
        console.log("Creating game board...")
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
        this.setupTileClickEvents();
    }

    getTiles() {
        return this.getElementsByTagName("board-tile");
    }

    getTile(row, col) {
        return this.querySelector('#r' + row + 'c' + col);
    }

    setupTileClickEvents() {
        let tiles = this.getTiles();
        for (let i = 0; i < tiles.length; i++) {
            let tile = tiles.item(i);
            tile.addEventListener('click', function handleClick(event) {
                console.log('square clicked', event);
                tile.setAttribute('style', 'border-color: #e74c3c; border-style: solid; border-width: 4pt;');
            })
        }
    }

    setupPieces(color) {
        let startRow = (color === 'red') ? 0 : 5;
        let endRow = (color === 'red') ? 3 : 8;
        for (let i = startRow; i < endRow; i++) {
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    let targetTile = this.getTile(i, j);
                    let piece = document.createElement('game-piece');
                    piece.setColor(color);
                    targetTile.appendChild(piece);
                }
            }
        }
    }
}

class BoardTile extends HTMLElement {
    constructor() {
        super();
    }
    setProperties(color, row, col) {
        this.classList.add(color);
        this.id = "r" + row + "c" + col;
    }
}

class GamePiece extends HTMLElement {
    constructor(color) {
        super();
    }
    setColor(color) {
        this.classList.add(color);
    }
}

customElements.define("game-board", GameBoard);
customElements.define("board-tile", BoardTile)
customElements.define("game-piece", GamePiece)

const main = document.getElementsByTagName("main").item(0);
const board = document.createElement("game-board");
board.populateTiles();
board.setupPieces('red');
board.setupPieces('blue');
main.appendChild(board);