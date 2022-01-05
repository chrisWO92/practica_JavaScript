const rangoEtario = document.querySelector(".rangoEtario");
let valorAtributo = rangoEtario.getAttribute("type");

rangoEtario.setAttribute("type","loco");
let valorAtributoDos = rangoEtario.getAttribute("type");

document.write("<br><br>");
document.write(valorAtributo);
document.write("<br><br>");
document.write(valorAtributoDos);

document.write("<br><br>");
rangoEtario.removeAttribute("type");
let valorAtributoTres = rangoEtario.getAttribute("type");
document.write(valorAtributoTres);


