'use strict'

window.addEventListener('load', function() {
    reloj();
    setInterval('reloj()', 1000);
});

function reloj() {
    var horaSistema = new Date();

    var hora = horaSistema.getHours()
    var min = horaSistema.getMinutes()
    var seg = horaSistema.getSeconds()

    hora = agregarCero(hora);
    min = agregarCero(min);
    seg = agregarCero(seg);

    var horaImp = hora + ":" + min + ":" + seg;

    document.getElementById("reloj").innerHTML = horaImp;

}

function agregarCero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}