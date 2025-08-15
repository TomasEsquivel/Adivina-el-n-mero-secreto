let numeroSecreto;
let intentos;
let numerosGenerados = [];
function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumSecreto(){
    //Primero almaceno el número secreto en una variable.
    let numeroGenerado = Math.floor(Math.random()*10) + 1;
    
    if(numerosGenerados.length >= 10){
        numerosGenerados.splice(0, 10);
        return generarNumSecreto();
    }
    if(numerosGenerados.includes(numeroGenerado)){
        //si ya existe en el array, le pido que la función devuelva otro número.
        return generarNumSecreto();
    }
    else{
        //Si no existe, lo guarda y lo retorna
        numerosGenerados.push(numeroGenerado);
        return numeroGenerado;
    };
};

function intentar(){
    let numeroElegido = parseInt(document.getElementById('valorUsuario').value);
    if(numeroElegido === numeroSecreto){
        asignarTexto('p', `Haz acertado el número secreto en ${intentos} ${intentos == 1 ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroElegido > numeroSecreto) asignarTexto('p', 'El número secreto es menor');
        else asignarTexto('p', 'El número secreto es mayor');
        intentos++;
        limpiarCaja();
    }
    return;
};

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
};

function condicionesDelJuego(){
    asignarTexto('h1', 'Bienvenido al juego secreto');
    asignarTexto('p', 'Indica el número del 1 al 10');
    numeroSecreto = generarNumSecreto();
    intentos = 1;
    return;
};

function reiniciarJuego(){
    limpiarCaja();
    condicionesDelJuego();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    return; 
};
   
condicionesDelJuego();
