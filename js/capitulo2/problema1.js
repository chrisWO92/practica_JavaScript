/*


PROBLEMA:

Un amigo llamado Cofla se ha ganado la lotería y quiere hacer una gran fiesta para celebrarlo.

Busca un programador para que le diseñe una aplicación con la cual pueda hacer control de las personas
que entran a su fiesta.

Las condiciones para el diseño son las siguientes:

  -La fiesta tiene una capacidad máxima de 30 personas.
  -La fiesta abre sus puertas a las 2 am y cierra a las 7 am.
  -No se permite la entrada a menores de 18 años.
  -La primera persona en entrar después de las 2 am, entra gratis.
  -Las entrada cuestan 1000 pesos.
  -El programa debe hacer un registro de la cantidad de personas que van entrando, con orden de llegada, hora de llegada y nombre del invitado.
  -El programa debe hacer el conteo de la cantidad de dinero recaudado.


*/

const aleatorio = (min,max) => {
    return Math.floor(Math.random()*(max-min))+min;
}

let listaNombres = ["Cristian","Cesar","Francisco","Romy","Juan","Antonia","Julian","Pisu","María","Romeo","Karol","Constancio","Melany","Bela","Silvestre","CR7","Jorge","Domingo","Mariana","Franco","David","Hasdy","Taufit","Andres","Sofia","Evelia","Margot","Sebas","Nicho","Joche","Armando"];

const nombreAleatorio = () => {
    let ind = aleatorio(0,30);
    return listaNombres[ind];
}

let listaInvitados = [];
let personasDentro = 0;
let dineroRecaudado = 0;
let i = 0;
let time = 1;

const validarInvitado = () => {

    if (listaInvitados[i][2] < 2 || listaInvitados[i][2] > 7) {
        document.write(`El ${listaInvitados[i][0]} se llama ${listaInvitados[i][3]}, tiene ${listaInvitados[i][1]} años de edad y llegó a las ${listaInvitados[i][2]}. No estaba dentro del horario de entrada. <br>`);
    }
    else {
        if (listaInvitados[i][1] >= 18){
            if (personasDentro == 0){
                document.write(`El ${listaInvitados[i][0]} se llama ${listaInvitados[i][3]}, tiene ${listaInvitados[i][1]} años de edad y llegó a las ${listaInvitados[i][2]}. ENTRÓ PRIMERO Y GRATIS. <br>`);
                personasDentro++;
            }
            else {
                document.write(`El ${listaInvitados[i][0]} se llama ${listaInvitados[i][3]}, tiene ${listaInvitados[i][1]} años de edad y llegó a las ${listaInvitados[i][2]}. ENTRÓ PAGANDO ENTRADA. <br>`);
                personasDentro++;
                dineroRecaudado += 1000;
            }
        }
        else {
            document.write(`El ${listaInvitados[i][0]} se llama ${listaInvitados[i][3]}, tiene ${listaInvitados[i][1]} años de edad y llegó a las ${listaInvitados[i][2]}. No pudo entrar por ser menor de edad. <br>`);
        }
    }

}
while (personasDentro < 40 && time < 7) {
    listaInvitados[i] = [`Cliente ${i}`,aleatorio(12,30),time,nombreAleatorio()];
    validarInvitado();
    i++;
    time += 0.15;
}
// for (i = 0;i <= 30;i++){

//     listaInvitados[i] = [`Invitado ${i}`,aleatorio(12,30),time,nombreAleatorio()];
//     validarInvitado();
//     time += 0.25;
// }

document.write(`<br><br>Entraron ${personasDentro} personas y se recaudaron ${dineroRecaudado} ARS.`)


