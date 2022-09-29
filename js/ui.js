const blackSquares = document.querySelectorAll(".black-square")
const whiteSquares = document.querySelectorAll(".white-square")

blackSquares.forEach(square => {
  square.addEventListener('click', function handleClick(event) {
    console.log('black square clicked', event);
    square.setAttribute('style', 'border-color: #e74c3c; border-style: solid; border-width: 4pt;')
  })
})

whiteSquares.forEach(square => {
  square.addEventListener('click', function handleClick(event) {
    console.log('black square clicked', event);
    square.setAttribute('style', 'border-color: #0000ff; border-style: solid; border-width: 4pt;')
  })
})