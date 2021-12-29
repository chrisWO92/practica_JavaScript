/*

La facultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos lo alumnos que se anotaron en dichas clases, pero necesitamos ver eso más ordenadamente.

CREAR SOLUCIONES:

-Crear una función que al pasarle como parámetro la materia nos devuelva: 

     *profesor asignado
     *el nombre de todos los alumnos

-Crear funcion que nos diga en cuantas clases está Cofla.
-Nombrar las clases en las que está y los profesores de cada una.

*/

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


const consultaProfeAlumnos = (materia) => {

    let mat = materia;

    let resultado = 
        `
        <b>Materia: ${materias[mat][2]}</b>
        <br><br>
        Profesor: ${materias[mat][0]}
        <br>
        Alumnos:
        ${materias[mat][1][0]}, ${materias[mat][1][1]}, ${materias[mat][1][2]}, ${materias[mat][1][3]}, ${materias[mat][1][4]}, ${materias[mat][1][5]}, ${materias[mat][1][6]}.
        <br><br>
        `;

    return resultado;
        
}

const clasesSofia = (materia) => {
    
}

document.write(consultaProfeAlumnos("matematicas"));


