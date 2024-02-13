let numeroSecreto = 0;
let intentos = 0;
let listaDeNumero = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }   else {
        //El usuario no acerto
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p","El número secreto es mayor");
        } else {
            asignarTextoElemento("p","El número secreto es menor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumero);

    if (listaDeNumero.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")
    } else {
        if (listaDeNumero.includes(numeroGenerado)) {
            return generarNumeroSecreto ();
        } else {
            listaDeNumero.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

function condicionesIniciales() {
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    asignarTextoElemento("h1","Juego del número secreto!");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Generar el número aleatorio
    
    //Inicializar el numero intentos
    
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
