/*

La facultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos lo alumnos que se anotaron en dichas clases, pero necesitamos ver eso más ordenadamente.

CREAR SOLUCIONES:

-Crear una función que al pasarle como parámetro la materia nos devuelva: 

     *profesor asignado
     *el nombre de todos los alumnos

-Crear funcion que nos diga en cuantas clases está Cofla.
-Nombrar las clases en las que está y los profesores de cada una.

*/


// Se crea el array con la información.

let materias = {
    fisica: ["Nataly Betancour",["Andrés","Sofia","Cristian","Hugo","Lionel","Dalto","Evelia"],"fisica"],
    matematicas: ["Guillermo Cervantes",["Humberto","Rodrigo","Cesar","Juan","Fito","Kiko","Britney"],"matematicas"],
    quimica: ["Ana Polo",["Mark","Rock","Denis","Sid","Valentina","Sofia","Audry"],"quimica"],
    historia: ["Dalí Salvador",["Chubi","Ema","Hasdy","Margot","Stefy","Jesús","Fabiana"],"historia"],
    ingles: ["Ricardo Gutierrez",["José","Albert","Iván","René","Carol","Pardo","Jesús"],"ingles"],
    gimnasia: ["Simon Bayles",["Adriana","Lorenzo","Sofia","Julio","Xihara","Barbie","Julieta"],"gimnasia"],
    geografia: ["Cristobal Colon",["Donald","Alvaro","Gustavo","Fajardo","María","Pedro","Gregoria"],"geografia"],
    frances: ["Iván Campo",["Jeronimo","Karol","Nicho","Olimpo","Taufit","Sofia","Jessica"],"frances"],
    estadistica: ["Mario Bros",["Dalai","Olivia","Antonia","Pájaro","Ronald","Joe","Wayne"],"estadistica"],
    programacion: ["Cristian Pineda",["Cristiano","Ángel","Sofia","Gabriel","Inés","Leandro","Rosi"],"programacion"],
} 


// Función que retorna una cadena de texto con la información de la materia

const consultaProfeAlumnos = (materia) => {

    let resultado = 
        `
        <b>Materia: ${materias[materia][2]}</b>
        <br><br>
        Profesor: ${materias[materia][0]}
        <br>
        Alumnos:
        ${materias[materia][1][0]}, ${materias[materia][1][1]}, ${materias[materia][1][2]}, ${materias[materia][1][3]}, ${materias[materia][1][4]}, ${materias[materia][1][5]}, ${materias[materia][1][6]}.
        <br><br>
        `;

    return resultado;
        
}


// Función para retornar si sofía está en una clase o no. Retorna 1 si se encuentra y 0 si no se encuentra.

const inClass = (materia) => {
    let count = 0;
    for (alumno in materias[materia][1]){
        if (materias[materia][1][alumno] == "Sofia"){
            count += 1;
        }
    }
    return count;
}


// Función que suma la cantidad de materias en la que está inscrita Sofia. Usa la función inClass().
// Esta función también arma un array nuevo con las materias en las que está inscrita Sofía y su respectivo profesor.

const clasesSofia = () => {
    let count = 0;
    let array = [];
    let i = 0;
    for (materia in materias){
        count = count + inClass(materia);
        if (inClass(materia) > 0){
            array[i] = [materia,materias[materia][0]];
            i += 1;
        }
    }
    return [count, array];
}


// Función que toma el retorno de la función consultaProfeAlumnos() y lo imprime en pantalla para todas las materias.

const infoMaterias = () => {
    for (materia in materias){
        document.write(consultaProfeAlumnos(materia) + "<br><br>");

    }
}


// Función para simular la interacción con el usuario.

const simulacion = () => {

    infoMaterias();

    document.write(
        `
        <b>Sofia está en ${clasesSofia()[0]} materias.</b>
        <br>
        `
    );

    document.write(`<br>Las materias en las que está son las siguientes: <br><br>`);

    for (i in clasesSofia()[1]){
        document.write(`Materia: ${clasesSofia()[1][i][0]} // Profesor: ${clasesSofia()[1][i][1]}<br>`);
    }

}


// Llamada a la función interactiva.

simulacion();



