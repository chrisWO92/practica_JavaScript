let nombres = ["pedro", "maria", "jorge"];




document.write(nombres.push("juansito","robert"));

document.write("<br><br>");

document.write(nombres);

document.write("<br><br>");

document.write(nombres.reverse());

document.write("<br><br>");

nombres.unshift(1,2,3);

document.write(nombres);

let numeros = [1,2,3,4,5,8,7,0,8];

document.write("<br><br>");

document.write(numeros.sort());

numeros.splice(-1,0,"hola","mundo");

document.write("<br><br>");

document.write(numeros);

document.write("<br><br>");

document.write(numeros.lastIndexOf("8 "));

document.write("<br><br>");

document.write("<br><br>");

document.write(numeros.filter(numero => numero.length > 3 ));


