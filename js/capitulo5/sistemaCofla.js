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

let materias = {
    fisica = ["fisica",90,7,4],
    matematicas = ["matematicas",95,6,3],
    quimica = ["quimica",100,8,4],
    historia = ["historia",91,9,3],
    ingles = ["ingles",100,10,4],
    gimnasia = ["gimnasia",85,7,3],
    geografia = ["geografia",90,8,4],
    frances = ["frances",70,6,2],
    estadistica = ["estadistica",100,9,4],
    programacion = ["programacion",100,10,4]
}

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

const info = (materia) => {
    return `
    ${materias[materia][0]} --> Asistencia: ${materias[materia][1]}  Promedio: ${materias[materia][2]}  Trabajos: ${materias[materia][3]}
    `
}

const apruebaDesaprueba = (materia) => {
    if (asistencia(materia) && promedio(materia) && trabajos(materia)){
        return true;
    }
    else{
        return false;
    }
}


const simulacion = () => {
    alert(
    `
    Hola Cofla! Bienvenido a tu programa interactivo de consulta para tus calificaciones escolares.
    <br><br>
    
    `
    );
}



