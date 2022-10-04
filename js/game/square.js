export class Square extends HTMLDivElement {
    constructor(color, row, col) {
        super();
        this.classList.add('square');
        this.classList.add(color);
        this.id = "r" + row + "c" + col;
    }
}