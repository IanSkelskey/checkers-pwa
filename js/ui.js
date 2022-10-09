import {GameBoard, XLabel, YLabel} from "./game/game-board.js";

customElements.define("game-board", GameBoard);
customElements.define("x-label", XLabel);
customElements.define("y-label", YLabel);

const main = document.getElementsByTagName("main").item(0);
const board = document.createElement("game-board");
const xLabel = document.createElement("x-label");
const yLabel = document.createElement("y-label");

board.populateTiles();
board.setupPieces('red');
board.setupPieces('blue');
yLabel.populate();
main.appendChild(yLabel);
main.appendChild(board);
xLabel.populate();
main.appendChild(xLabel);