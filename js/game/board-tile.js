import {GamePiece} from "./game-piece.js";

customElements.define("game-piece", GamePiece);

export class BoardTile extends HTMLElement {
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
        this.removeAttribute("style");
        this.highlighted = false;
    }
}