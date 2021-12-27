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
    fisica = [["Nataly Betancour"],["Andrés","Sofia","Cristian","Hugo","Lionel","Dalto","Evelia"]],
    matematicas = [["Guillermo Cervantes"],["Humberto","Rodrigo","Cesar","Juan","Fito","Kiko","Britney"]],
    quimica = [["Ana Polo"],["Mark","Rock","Denis","Sid","Valentina","Betsi","Audry"]],
    historia = [["Dalí Salvador"],["Chubi","Ema","Hasdy","Margot","Stefy","Jesús","Fabiana"]],
    ingles = [["Ricardo Gutierrez"],["José","Albert","Iván","René","Carol","Pardo","Jesús"]],
    gimnasia = [["Simon Bayles"],["Adriana","Lorenzo","Vicente","Julio","Xihara","Barbie","Julieta"]],
    geografia = [["Cristobal Colon"],["Donald","Alvaro","Gustavo","Fajardo","María","Pedro","Gregoria"]],
    frances = [["Iván Campo"],["Jeronimo","Karol","Nicho","Olimpo","Taufit","Lucho","Jessica"]],
    estadistica = [["Mario Bros"],["Dalai","Olivia","Antonia","Pájaro","Ronald","Joe","Wayne"]],
    programacion = [["Cristian Pineda"],["Cristiano","Ángel","Jeremías","Gabriel","Inés","Leandro","Rosi"]],
} 

const consulta = (materia) => {
    if (materia == "fisica"){
        index = 0;
    }
    else if (materia == "matematicas"){
        index = 1;
    }
    else if (materia == "quimica"){
        index = 3;
    }
    else if (materia == "historia"){
        index = 4;
    }
    else if (materia == "ingles"){
        index = 5;
    }
    else if (materia == "gimnasia"){
        index = 6;
    }
    else if (materia == "geografia"){
        index = 7;
    }
    else if (materia == "frances"){
        index = 8;
    }
    else if (materia == "estadistica"){
        index = 9;
    }
    else if (materia == "programacion"){
        index = 10;
    }
    else {
        alert("Debe ingresar un número entre 0 y 10 inclusive");
    }


}


// La seguidilla de if y else if puede ponerse en una función a parte, o mejor dejarlo así? Evaluar