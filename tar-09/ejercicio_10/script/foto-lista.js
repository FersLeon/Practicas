const PHOTO_LIST = [
    'images/conejo.jpg',
    'images/lobo.jpg',
    'images/gato.jpg',
    'images/mono.jpg',
    'images/panda.jpg',
    'images/perro.jpeg',
    'images/suricata.jpg',
    'images/tigre.jpg',
    'images/zorro.jpg'

]

/*
Realiza acciones dependiendo de la tecla presionada
Parametro: Evento
*/
function nextPhoto(event) {
    // Si la tecla presionada fue ESCAPE, ocultamos el dialogo modal
    if (event.key === 'Escape') {
        hideModal();
        return;
    }
    //Si la tecla es diferente de flacha izquierda o derecha hacemos nada
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        return;
    }
    //Guardamos el valor del indice actual
    let nextIndex = currentIndex;
    if (event.key === 'ArrowLeft') {
        // Si la tecla presionada es la flecha izquierda decrementamos el
        indice
        nextIndex--;
    } else {
        // Si la tecla presionada no es la flecha izquierda incrementamos el
        indice
        nextIndex++;
    }
    //Si hemos sobrepasado los limites del arreglo, hacer nada
    if (nextIndex < 0 || nextIndex == PHOTO_LIST.length) {
        return;
    }
    //asignar una imagen del arreglo de fotos con el nuevo indice
    const photoSrc = PHOTO_LIST[nextIndex];
    //eliminar el contenido actual de la vista
    modalView.innerHTML = '';
    //crear el nuevo elemento imagen
    const image = createImage(photoSrc);
    //adjuntar la imagen a la vista
    modalView.appendChild(image);
    //actualizar el valor del indice actual
    currentIndex = nextIndex;
}