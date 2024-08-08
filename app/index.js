import ChangeBg from "./animations/HandleBG.js";


export default class App {
    constructor() {
        this._changeBg();


    }

    _changeBg() {
        document.addEventListener("DOMContentLoaded", (event) => {
            const sections = [...document.querySelectorAll('.section')];
            const container = document.querySelector('.container');

            sections.forEach((section, index) => {
                new ChangeBg({
                    element: section,
                    index: index,
                    bg: container
                })
            })
        })
    }
}

new App()

