import {Square} from "./square";

export class Board2 extends HTMLDivElement {
    constructor(size) {
        super();
        this.size = size;
        this.id = 'board';
        this.createGrid();
        this.squares = document.querySelectorAll('.square');
        this.setupSquareClickEvents();
        this.createPieces();
    }

    createGrid() {
        for (let i = 0; i < this.size; i ++) {
            for (let j = 0; j < this.size; j++) {
                if ((i+j) % 2 === 0) {
                    this.board.appendChild(new Square('black', i, j));
                } else {
                    this.board.appendChild(new Square('white', i, j));
                }
            }
        }
    }

    setupSquareClickEvents() {
        this.squares.forEach(square => {
            square.addEventListener('click', function handleClick(event) {
                console.log('square clicked', event);
                square.setAttribute('style', 'border-color: #e74c3c; border-style: solid; border-width: 4pt;');
            })
        })
    }

    createPiece(color) {
        let piece = document.createElement('div');
        piece.classList.add('piece');
        piece.classList.add(color);
        return piece;
    }

    createPieces() {
        this.setupRedPieces();
        this.setupBluePieces();
    }

    setupRedPieces() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < this.size; j++) {
                if ((i+j) % 2 === 0) {
                    let targetSquare = document.querySelector('#r' + i + 'c' + j);
                    targetSquare.appendChild(this.createPiece('red'));
                }
            }
        }
    }

    setupBluePieces() {
        for (let i = 5; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if ((i+j) % 2 === 0) {
                    let targetSquare = document.querySelector('#r' + i + 'c' + j);
                    targetSquare.appendChild(this.createPiece('blue'));
                }
            }
        }
    }

}