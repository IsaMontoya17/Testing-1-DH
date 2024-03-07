const prompt = require("prompt-sync")({ sigint: true });

console.log("Qué desea hacer?: ");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");

let opcion = prompt("Ingrese el número de la operación que desea realizar: ");
opcion = opcion.toLowerCase(); 

let num1 = prompt("Ingrese el numero 1: ");
let num2 = prompt("Ingrese el numero 2: ");
num1 = parseFloat(num1);
num2 = parseFloat(num2);

let resultado;

switch(opcion) {
    case "1":
    case "suma":
        resultado = suma(num1, num2);
        console.log("La suma de "+ num1 + " y " + num2 + " es: " + resultado);
        break;
    case "2":
    case "resta":
        resultado = resta(num1, num2);
        console.log("La resta de "+ num1 + " y " + num2 + " es: " + resultado);
        break;
    case "3":
    case "multiplicacion":
        resultado = multiplicacion(num1, num2);
        console.log("La multiplicación de "+ num1 + " y " + num2 + " es: " + resultado);
        break;
    case "4":
    case "division":
        resultado = division(num1, num2);
        console.log("La división de "+ num1 + " entre " + num2 + " es: " + resultado);
        break;
    default:
        console.log("Opción no válida");
}

function suma(num1, num2){
    return num1 + num2;
}

function resta(num1, num2){
    return num1 - num2;
}

function multiplicacion(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    if(num2 === 0) {
        return "No se puede dividir por cero";
    } else {
        return num1 / num2;
    }
}
