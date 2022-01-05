let parrafo = "Sigueme en @christ.ricardo.92";

document.write(parrafo);

// getElementsByID es de los que más se usa
let nodoDos = document.getElementById("parrafo");

document.write("<br><br>");

document.write(nodoDos);



document.write("<br><br>");

// getElementsByTagName no se usa muy frecuentemente
let nodoTres = document.getElementsByTagName("div");

document.write(nodoTres);



document.write("<br><br>");

/* querySelector es de lo más usados para seleccionar mediante nombre de Clase */


let nodoCuatro = document.querySelector(".parrafo");

document.write(nodoCuatro);


document.write("<br><br>");

let nodoCinco = document.querySelector("#adicional");

document.write(nodoCinco);



/* querySelectorAll almacena todos los elementos que coincidan con el selector ingresado dentro de un NodeList */

document.write("<br><br>");

let nodoSeis = document.querySelectorAll(".adicional");

document.write(nodoSeis[1]);



