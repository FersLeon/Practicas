class Regalo {
    constructor(containerElement) {
        this.containerElement = containerElement;
        this.abrirRegalo = this.abrirRegalo.bind(this);
        this.image = document.createElement('img');
        this.image.src = 'images/regalo.png';
        this.image.addEventListener('click', this.abrirRegalo);
        this.containerElement.appendChild(this.image);
    }
    abrirRegalo(event) {
        this.image.src = 'images/pastel.png';
        this.image.removeEventListener('click', this.abrirRegalo);
    }
}

