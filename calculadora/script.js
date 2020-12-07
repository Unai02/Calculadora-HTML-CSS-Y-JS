//Elementos para la calculadora
const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName ("data-opera");
const botonIgual = document.getElementsByName ("data-igual");
const botonDelete = document.getElementsByName ("data-delete");

var result = document.getElementById("result");

//Estas variables nos ayudaran con el Metodo para la operacion
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

/********************************************************** 
¿Por qué const los botones y var la parte donde va el resultado?

Porque los botones no van a cambiar el valor, mientras que el resultado si va a cambiar, por lo que se pone como variable y los botones constantes
***********************************************************/

//Eventos de la calculadora
botonNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.forEach(function(boton){
    boton.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
    })
});

botonDelete.forEach(function(boton){
    boton.addEventListener("click", function(){
        clear();
        actualizarDisplay();
    })
});

/*Los Métodos para la calculadora*/
function selectOperacion(op){
    if(opeActual === "") return;
    if(opeAnterior !== ""){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case "+":
        calculo = anterior + actual;
        break;
        case "-":
            calculo = anterior - actual;
            break;
        case "X":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
            default:
                return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActual = "";
    opeAnterior = "";
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}
clear();

