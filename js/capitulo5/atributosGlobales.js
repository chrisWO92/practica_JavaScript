

const titulo = document.querySelector(".parrafo");
const segundo = document.querySelector(".segundo");
const tercero = document.querySelector(".tercero");
const cuarto = document.querySelector(".cuarto");
const quinto = document.querySelector(".quinto");
const sexto = document.querySelector(".sexto");



titulo.setAttribute("contentEditable","true");

segundo.setAttribute("dir","rtl");

segundo.setAttribute("tabindex","1");
segundo.setAttribute("title","titulo segundo");

tercero.setAttribute("tabindex","2  ");
tercero.setAttribute("title","titulo tercero");

cuarto.setAttribute("tabindex","3");
cuarto.setAttribute("title","titulo cuarto");

quinto.setAttribute("tabindex","4");
quinto.setAttribute("title","titulo quinto");


sexto.setAttribute("tabindex","5");
sexto.setAttribute("title","titulo sexto");


const cualquierCosa = document.querySelector(".cualquierCosa");
document.write("<br><br>");
cualquierCosa.type = "file";
cualquierCosa.accept = "image/gif"

const enviar = document.getElementById("enviar");
enviar.setAttribute("form","formulario");

const textSubmit = document.querySelector("#textSubmit");
//textSubmit.setAttribute("minlength","4");
textSubmit.placeholder = "a que no me escibis";
textSubmit.required = "";

const tituloDos = document.querySelector(".tituloDos");
tituloDos.style.color = "white";
tituloDos.style.backgroundColor = "blue";
tituloDos.style.padding = "25px";

//tituloDos.classList.add("grande");
tituloDos.classList.add("color");
const item = tituloDos.classList.item(0);
document.write(item);
const itemDos = tituloDos.classList.item(1);
document.write("<br>" + itemDos);

let valor = tituloDos.classList.contains("grande");
document.write("<br>" + valor);

tituloDos.classList.toggle("grande");

tituloDos.classList.replace("grande","chico");



