import {Board2} from "../board";

class Board {
  constructor(size) {
    this.size = size;
    this.board = document.createElement('div');
    this.board.id = 'board';
    this.createGrid();
    this.addToDOM('main');
    this.squares = document.querySelectorAll('.square');
    this.setupSquareClickEvents();
    this.createPieces();
  }

  addToDOM(elementID) {
    const element = document.getElementById(elementID);
    element.appendChild(this.board);
  }

  createGrid() {
    for (let i = 0; i < this.size; i ++) {
      for (let j = 0; j < this.size; j++) {
        if ((i+j) % 2 === 0) {
          this.board.appendChild(this.createSquare('black', i, j));
        } else {
          this.board.appendChild(this.createSquare('white', i, j));
        }
      }
    }
  }

  createSquare(color, row, col) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.classList.add(color);
    square.id = "r" + row + "c" + col;
    return square;
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

customElements.define('board', Board2)
const test = document.createElement('div');
test.classList.add('black');
document.getElementById('main').appendChild(new Board2(8));
// const board = new Board(8);


