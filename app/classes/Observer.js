export default class Observer {

    constructor({ element, index }) {
        this.element = element;
        this._createObserver();
    }

    _createObserver() {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };


        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.onEnter();
                } else {
                    this.onLeave();
                }
            })
        }, options);

        this.observer.observe(this.element)
    }

    onEnter() { }
    onLeave() { }

}