var segundos = 33;
var minutos = 44;
var horas = 1;
var dias = 185;

function print() {
    document.getElementById("segundos").innerText = segundos;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("horas").innerText = horas;
    document.getElementById("dias").innerText = dias;
}

window.onload = print();

function timer() {
    if (segundos > 0 && minutos >= 0) {
        segundos = segundos - 1;
        print();
    } else if (segundos == 0 && minutos > 0) {
        segundos = 59;
        minutos = minutos - 1;
        print();
    } else if (segundos == 0 && minutos == 0 && horas > 0) {
        segundos = 59;
        minutos = 59;
        horas = horas - 1;
        print();
    } else if (segundos == 0 && horas == 0 && minutos == 0) {
        segundos = 59;
        minutos = 59;
        horas = 23;
        dias = dias - 1;
        print();
    }
}

window.setInterval(timer, 1000);