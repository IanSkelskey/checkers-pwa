const blackSquares = document.querySelectorAll(".black-square")
const whiteSquares = document.querySelectorAll(".white-square")

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

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