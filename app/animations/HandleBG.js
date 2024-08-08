import Observer from "../classes/Observer.js";


export default class ChangeBg extends Observer {
    constructor({ element, index, bg }) {
        super({ element, index })
        this.element = element;
        this.index = index;
        this.bg = bg;

        this.colors = [
            '#f6e0a4', // Issue #8
            '#ff608c', // Issue #7
            '#fff', // Issue #6
            '#00c1b5', // Issue #5
            '#ff6519', // Issue #4
            '#ffbe00', // Issue #3
            '#1d3fbb', // Issue #2
            '#E30512'  // Issue #1
        ];

    }


    onEnter() {
        gsap.to(this.bg, {
            backgroundColor: this.colors[this.index]
        })
        // console.log(`el fondo es: ${this.element}`)
    }
}