class Board {
  constructor(size) {
    this.board = document.createElement('div');
    this.board.id = 'board';
    this.createGrid(size);
    this.addToDOM('main');
    this.squares = document.querySelectorAll('.square');
    this.setupSquareClickEvents();
    this.createPieces();
  }

  addToDOM(elementID) {
    const element = document.getElementById(elementID);
    element.appendChild(this.board);
  }

  createGrid(size) {
    for (let i = 0; i < size; i ++) {
      for (let j = 0; j < size; j++) {
        if ((i+j) % 2 === 0) {
          this.board.appendChild(this.createSquare('black'));
        } else {
          this.board.appendChild(this.createSquare('white'));
        }
      }
    }
  }

  createSquare(color) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.classList.add(color + '-square');
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
  }

  setupRedPieces() {
    for (let i = 1; i < 9; i++) {
      for (let j = 1; j < 9; j++) {
        if ((i*j-1) % 2 === 0) {
          this.squares.item(i+j).appendChild(this.createPiece('red'));
        }
      }
    }
  }

}

const board = new Board(8);


