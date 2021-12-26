/*

Cofla ya está terminando el primer semenestre del primer ciclo, la tarea que le debe realizar es mucho más avanzada que la que tenía antes, además de suma, resta, multiplicación y división, ahora también necesitará calcular potencias, raices cuadradas y cúbicas.

CREAR SOLUCIONES:

-Perfeccionar calculadora para poder implementar las nuevas funciones.

*/


class Calculadora {
    constructor(){
    }

    sumar(num1,num2){
        return num1 + num2;
    }
    restar(num1,num2){
        return num1 - num2;
    }
    multiplicar(num1,num2){
        return num1 * num2;
    }
    dividir(num1,num2){
        return num1 / num2;
    }
    potencia(num,pot){
        return num ** pot;
    }
    raizcuadrada(num){
        return Math.sqrt(num);
    }
    raizcubica(num){
        return Math.cbrt(num);
    }
}

const operar = () => {
    mensaje = "<br>1: suma  2: resta  3: multiplicación  4: división  5: potencia  6: raíz cuadrada  7: raíz cúbica";
    operacion = parseInt(prompt("¿Qué operación desea realizar?" + mensaje));

    let numeroUno = parseInt(prompt("Ingrese el primer número: "));
    let numeroDos = parseInt(prompt("Ingrese el segundo número: "));
    let resultado = 0;
    const calculadora = new Calculadora();

    if (operacion == 1) {
        resultado = `El resultado de la suma es ${calculadora.sumar(numeroUno, numeroDos)}`;
    }
    else if (operacion == 2) {
        resultado = `El resultado de la resta es ${calculadora.restar(numeroUno, numeroDos)}`;
    }
    else if (operacion == 3) {
        resultado = `El resultado de la multiplicación es ${calculadora.multiplicar(numeroUno, numeroDos)}`;
    }
    else if (operacion == 4) {
        resultado = `El resultado de la división es ${calculadora.dividir(numeroUno, numeroDos)}`;
    }
    else if (operacion == 5) {
        resultado = `El resultado de la potencia es ${calculadora.potencia(numeroUno, numeroDos)}`;
    }
    else if (operacion == 6) {
        resultado = `El resultado de la raiz cuadrada es ${calculadora.raizcuadrada(numeroUno)}`;
    }
    else if (operacion == 7) {
        resultado = `El resultado de la raiz cubica es ${calculadora.raizcubica(numeroUno)}`;
    }
    else {
        resultado = "Opción Incorrecta";
    }

    return resultado
}

// Llamando función

alert(operar())
