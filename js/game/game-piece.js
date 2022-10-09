export class GamePiece extends HTMLElement {
    constructor() {
        super();
    }
    setColor(color) {
        this.classList.add(color);
    }
}