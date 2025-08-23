function agregarNumero(num){
    let pantalla = document.getElementById("pantalla");
    pantalla.value += num;
}

function limpiar(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}

function borrarUltimo(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcularResultado(){
    let pantalla = document.getElementById("pantalla");
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = "Error";
    }
}

function operacion(operator){
    let pantalla = document.getElementById("pantalla");
    if(pantalla.value.endsWith("+") || pantalla.value.endsWith("-") || pantalla.value.endsWith("*") || pantalla.value.endsWith("/")) {
        borrarUltimo(); // Elimina el último operador si ya hay uno
    }
    if (pantalla.value !== "") {
        pantalla.value += operator;
    }
}