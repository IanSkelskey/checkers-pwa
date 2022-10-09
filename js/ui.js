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

class BoardTile extends HTMLElement {
    constructor() {
        super();
        this.highlighted = false;
        this.addEventListener('click', function handleClick(event) {
            if (this.hasPiece()) {
                if (!this.highlighted) {
                    this.highlightPiece();
                } else {
                    this.unhighlightPiece();
                }
            }
        })
    }
    setProperties(color, row, col) {
        this.classList.add(color);
        this.id = "r" + row + "c" + col;
    }
    addPiece(color) {
        let piece = document.createElement('game-piece');
        piece.setColor(color);
        this.appendChild(piece);
    }
    hasPiece() {
        return (this.getElementsByTagName("game-piece").length !== 0)
    }
    highlightPiece() {
        this.setAttribute("style", "border-color: #81CE5E;");
        this.highlighted = true;
    }
    unhighlightPiece() {
        this.setAttribute("style", "");
        this.highlighted = false;
    }
}

class GamePiece extends HTMLElement {
    constructor() {
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