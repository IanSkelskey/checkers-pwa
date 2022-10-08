const board = document.getElementById("board");

createBoard();

const squares = document.querySelectorAll(".square")

function highlightSquare(square) {
  square.setAttribute('style', 'border-color: #e74c3c; border-style: solid; border-width: 4pt;');
}

function createSquare(color, row, col) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.classList.add(color);
  square.id = "r" + row + "c" + col;
  return square;
}

function createBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i+j) % 2 === 0) {
        board.appendChild(createSquare('black', i, j));
      } else {
        board.appendChild(createSquare('white', i, j));
      }
    }
  }
  createPieces();
  console.log('Board created!');
}

function createPiece(color) {
  let piece = document.createElement('div');
  piece.classList.add('piece');
  piece.classList.add(color);
  return piece;
}

function createPieces() {
  setupRedPieces();
  setupBluePieces();
}

function setupRedPieces() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i+j) % 2 === 0) {
        let targetSquare = document.querySelector('#r' + i + 'c' + j);
        targetSquare.appendChild(createPiece('red'));
      }
    }
  }
}

function setupBluePieces() {
  for (let i = 5; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i+j) % 2 === 0) {
        let targetSquare = document.querySelector('#r' + i + 'c' + j);
        targetSquare.appendChild(createPiece('blue'));
      }
    }
  }
}

squares.forEach(square => {
  square.addEventListener('click', function handleClick(event) {
    console.log('square clicked', event);
    highlightSquare(square);
  })
})