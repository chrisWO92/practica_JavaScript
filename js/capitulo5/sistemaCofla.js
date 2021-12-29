/*

Terminó el primer semestre y Cofla no sabe si aprobará o no las materias, para lograrlo necesitará:

    -Contar con al menos el 85% de asistencia. 
    -El promedio por materia debe ser de al menos 7 / 10.
    -Debe tener al menos del 75% de los trabajos prácticos entregados.

CREAR SOLUCIONES:

    -Solicitar los datos y decirle si aprueba o no.
    -Mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo).
    -Todo esto estructurado como tabla.

*/


// Se creear el arrray con la información.

let materias = {
    fisica: ["fisica",90,7,4],
    matematicas: ["matematicas",95,6,3],
    quimica: ["quimica",100,8,4],
    historia: ["historia",91,9,3],
    ingles: ["ingles",100,10,4],
    gimnasia: ["gimnasia",85,7,3],
    geografia: ["geografia",90,8,4],
    frances: ["frances",70,6,2],
    estadistica: ["estadistica",100,9,4],
    programacion: ["programacion",100,10,4]
}


// Se crean funciones para corroborar el cumplimiento o incumplimiento de los criterios de aprobación, uno por uno.

const asistencia = (materia) => {
    let asistencias = materias[materia][1];
    if (asistencias >= 85){
        return true
    }
    else{
        return false
    }
}

const promedio = (materia) => {
    let promedio = materias[materia][2];
    if (promedio >= 7){
        return true
    }
    else{
        return false
    }
}

const trabajos = (materia) => {
    let trabajos = materias[materia][1];
    if (trabajos >= 3){
        return true
    }
    else{
        return false
    }
}


// Función para mostrar la información de la materia en particular.

const info = (materia) => {
    console.log(`
    ${materias[materia][0]} --> Asistencia: ${materias[materia][1]}  Promedio: ${materias[materia][2]}  Trabajos: ${materias[materia][3]}
    `);
}


// Función para evaluar todos los criterios de aprobación juntos, y mostrar si el alumno está aprobado o desaprobado.

const apruebaDesaprueba = (materia) => {
    if (asistencia(materia) && promedio(materia) && trabajos(materia)){
        console.log("%c MATERIA APROBADA", "color: green; font-weight: bolder");
        console.log("%c Asistencia cumplida", "color: green");
        console.log("%c Promedio cumplido", "color: green");
        console.log("%c Trabajos cumplidos", "color: green");
    }
    else{
        console.log("%c MATERIA DESAPROBADA", "color: red");

        if(asistencia(materia) == false){
            console.log("%c Asistencia no cumplida", "color: red");
        }
        else {
            console.log("%c Asistencia cumplida", "color: green");
        }

        if(promedio(materia) == false){
            console.log("%c Promedio no cumplido", "color: red");
        }
        else {
            console.log("%c Promedio cumplido", "color: green");
        }

        if(trabajos(materia) == false){
            console.log("%c Trabajos no cumplidos", "color: red");
        }
        else {
            console.log("%c Trabajos cumplidos", "color: green");
        }
    }
}


// Función para ejecutar la solución con todas las materias.

const simulacion = () => {
    for (i in materias){
        info(i);
        apruebaDesaprueba(i);
    }
}


// Llamada a la función simulación.

simulacion();

console.table(materias);

/* Me falta estructurar la salida como tabla con console.table() */

