/*

Cofla vuelve de la comisaría exhausto y por lo cansado que estaba se fue a dormir...
Al otro día comienzan las clases del ciclo básico de la universidad (porque Cofla quiere ser programador y se inscribió en la facultad de ingeniería para estudiar desarrollo de software).
En su cursp en total son 19 alumnos, pero surgió un problema que complicó un poco la facultad:
Se rompió el sistema de registro de asistencias y durante los próximos 30 días no se podrán hacer registros de datos de ningún tipo, por ende las clases no podrás comenzar hasta que se solucione el inconveniente.

-Crear mini-sistema que nos permita registrar los alumnos que están presentes (P) y ausentes (A) en clase.
-Pasados los 30 días mostrar la situación final de todos los alumnos (Nro total de presentes y ausentes).
-Se puede tener un máximo de 10% de ausencias por semestres, si se tienen más aclarar que está reprobado.



*/

// Declaro Arrow function para generar número aleatorio:

const aleatorio = (min,max) => {
    return Math.floor(Math.random()*(max-min))+min;
}


// Declaro la lista de alumnos:

let listaAlumnos = ["Cristian","Cesar","Francisco","Romy","Juan","Antonia","Julian","Pisu","María","Romeo","Karol","Constancio","Melany","Bela","Silvestre","CR7","Jorge","Domingo","Mariana","Franco","David","Hasdy","Taufit","Andres","Sofia","Evelia","Margot","Sebas","Nicho","Joche","Armando"];

// Declaro lista de duplas alumno-asistencias:

let alumnoAsistencias = [];

for (alumno in listaAlumnos) {
    alumnoAsistencias[alumno]= [listaAlumnos[alumno], 0];
}

// Declaro array de posibles respuestas: 
// ¿Está el alumno presente? p: Presente, a: Ausente.

let respuestas = ["p", "a"];

// Declaro Arrow function para tomarasistencia: 

const tomarAsistencia = (alumno) => {
    asistencia = respuestas[aleatorio(0, 2)];
    if (asistencia == "p"){
        alumnoAsistencias[alumno][1] += 1;
    }
}


for (i = 0; i < 30; i++){
    for (alumno in alumnoAsistencias){
        tomarAsistencia(alumno);
    }
}


for (alumno in alumnoAsistencias){
    let resultadoAlumno = `${alumnoAsistencias[alumno][0]} -- >  Asistencias: ${alumnoAsistencias[alumno][1]} /  Ausencias: ${alumnoAsistencias.length - alumnoAsistencias[alumno][1]}`;

    if (alumnoAsistencias[alumno][1] > 0.65*30){
        resultadoAlumno += "<b style='color:red'> REPROBADO POR INASISTENCIAS </b>"
        resultadoAlumno += "<br><br>"
    }
    else {
        resultadoAlumno += "<b style='color:green'> ASISTENCIAS CUMPLIDAS </b>"
        resultadoAlumno += "<br><br>"
    }


    document.write(resultadoAlumno);
}


