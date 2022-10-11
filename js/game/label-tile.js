export class LabelTile extends HTMLElement {
    constructor() {
        super();
    }

    setLabel(label) {
        this.classList.add('white');
        this.textContent = label;
    }
}