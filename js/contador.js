'use strict'

window.addEventListener('load', function() {
    cuenta();
});

function cuenta() {
    var max = 150;

    var numero = document.getElementById("contador").value.length;

    document.getElementById("maximo").value = numero;
    document.getElementById("resta").value = max - numero;
    if (numero < max) {
        document.getElementById("contador").classList.remove("focusIn");
        contenido_textarea = document.getElementById("contador").value;
    } else {
        document.getElementById("contador").classList.add("focusIn");
        document.getElementById("contador").setAttribute("maxlength", max);
    }
}