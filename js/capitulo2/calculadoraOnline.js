/*

Crear una calculadora Online

*/

// Definiendo función

const operar = () => {
    mensaje = "<br>1: suma  2: resta  3: multiplicación  4: división";
    operacion = parseInt(prompt("¿Qué operación desea realizar?" + mensaje));

    let numeroUno = parseInt(prompt("Ingrese el primer número: "));
    let numeroDos = parseInt(prompt("Ingrese el segundo número: "));
    let resultado = 0;

    if (operacion == 1) {
        resultado = `El resultado de la suma es ${numeroUno + numeroDos}`;
    }
    else if (operacion == 2) {
        resultado = `El resultado de la resta es ${numeroUno - numeroDos}`;
    }
    else if (operacion == 3) {
        resultado = `El resultado de la multiplicación es ${numeroUno * numeroDos}`;
    }
    else if (operacion == 4) {
        resultado = `El resultado de la división es ${numeroUno / numeroDos}`;
    }
    else {
        resultado = "Opción Incorrecta";
    }

    return resultado
}

// Llamando función

alert(operar())






