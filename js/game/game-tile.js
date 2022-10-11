import { GamePiece } from './game-piece.js';

customElements.define('game-piece', GamePiece);

export class GameTile extends HTMLElement {
    constructor() {
        super();
        this.highlighted = false;
        this.addEventListener('click', this.handleClick);
    }
    setProperties(color, row, col) {
        this.classList.add(color);
        this.id = 'r' + row + 'c' + col;
    }
    addPiece(color) {
        let piece = document.createElement('game-piece');
        piece.setColor(color);
        this.appendChild(piece);
    }
    hasPiece() {
        return this.getElementsByTagName('game-piece').length !== 0;
    }
    handleClick() {
        if (this.hasPiece()) {
            if (!this.highlighted) {
                this.highlightPiece();
            } else {
                this.unhighlightPiece();
            }
        }
    }
    highlightPiece() {
        this.setAttribute('style', 'border-color: #81CE5E;');
        this.highlighted = true;
    }
    unhighlightPiece() {
        this.removeAttribute('style');
        this.highlighted = false;
    }
}
