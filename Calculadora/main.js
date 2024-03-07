const prompt = require("prompt-sync")({ sigint: true });

let pregunta = prompt("Qué desea hacer?: \n1.Suma\n2.Resta\n3.Multiplicación\n4.división\n");
pregunta = pregunta.toLowerCase(); 

let num1 = prompt("Ingrese el numero 1: ");
let num2 = prompt("Ingrese el numero 2: ");
num1 = parseFloat(num1);
num2 = parseFloat(num2);

if(pregunta === "1" || pregunta === "suma") {
    let sum = suma(num1,num2);
    console.log("La suma de "+ num1 + " y " + num2 + " es: " + sum);
} else if(pregunta === "2" || pregunta === "resta") {
    let rest = resta(num1,num2);
    console.log("La resta de "+ num1 + " y " + num2 + " es: " + rest);
} else if(pregunta === "3" || pregunta === "multiplicacion") {
    let multi = multiplicacion(num1,num2);
    console.log("La multiplicacion de "+ num1 + " y " + num2 + " es: " + multi);
} else if(pregunta === "4" || pregunta === "division") {
    let div = division(num1,num2);
    console.log("La division de "+ num1 + " entre " + num2 + " es: " + div);
}

function suma(num1, num2){
    let suma;
    suma = num1 + num2;
    return suma;
}

function resta(num1, num2){
    let resta;
    resta = num1 - num2;
    return resta;
}

function multiplicacion(num1, num2){
    let multiplicacion;
    multiplicacion = num1 * num2;
    return multiplicacion;
}

function division(num1, num2){
    let division;
    division = num1 / num2;
    return division;
}
