window.onload = function() {
    const IMAGENES = [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg'
    ];
    const TIEMPO = 3000;

    var posicionActual = 0;

    var imagen = document.getElementById("imagen");



    setInterval(pasarFoto, TIEMPO);

    renderizarImagen();

    function renderizarImagen() {
        imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }


}