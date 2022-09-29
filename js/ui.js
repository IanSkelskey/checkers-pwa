const board = document.getElementById("board");

createBoard();

const squares = document.querySelectorAll(".square")

function highlightSquare(square) {
  square.setAttribute('style', 'border-color: #e74c3c; border-style: solid; border-width: 4pt;');
}

function createSquare(color) {
  let square = document.createElement('div')
  square.classList.add('square');
  square.classList.add(color + '-square');
  return square;
}

function createBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i+j) % 2 === 0) {
        board.appendChild(createSquare('black'));
      } else {
        board.appendChild(createSquare('white'));
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