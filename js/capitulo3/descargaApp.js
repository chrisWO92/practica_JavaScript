/* 

Cofla ya tiene su nuevo celular y ahora está mirando aplicaciones del Play Store ya que quiere jugar juegos que sean muy populares, que tengan buena puntuación y que pesen poco, pero las 7 apps que llamaron su atención son un tanto similares y sabe que si descarga todas, probablemente juegue con todas, pero él se va a descargar sólo 2 para tener perdidas innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede decidirse cual de todas estas aplicaciones es la que va a descargar.

CREAR SOLUCIONES:

-Crear un sistema que ayude a Cofla a decidir cual app descargar.

-La información de los instaladores debe contener la cantidad de descargas, la puntuación y el peso.

-Las Apps se deben poder instalar, abrir, cerrar y desinstalar.

*/

class App {

    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = false;
        this.abierta = false;
    }

    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            document.write(`App instalada <br><br>`)
        }else{
            document.write(`La App ya está instalada <br><br>`);
        }
    }

    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            document.write(`App desinstalada <br><br>`);
        }else{
            document.write(`La App ya está desinstalada <br><br>`);
        }
    }

    abrir(){
        if (this.abierta == false && this.instalada == true){
            this.abierta = true;
            document.write(`App abierta <br><br>`);
        }
        else if (this.instalada == false){
            document.write(`La App no está instalada aún <br><br>`);
        }                
        else{
            document.write(`La App ya está abierta <br><br>`);
        }
    }

    cerrar(){
        if (this.abierta == true && this.instalada == true){
            this.abierta = false;
            document.write(`App cerrada <br><br>`);
        }
        else if (this.instalda == false){
            document.write(`La App no está instalada aún <br><br>`);
        }
        else{
            document.write(`La App ya está cerrada <br><br>`);
        }
    }

    info(){
        return `
        Cantidad de descargas: ${this.descargas} <br>
        Puntuación: ${this.puntuacion} <br>
        Peso: ${this.peso} <br><br>
        `
    }
}

const app1 = new App("5M", "4.5", "18MB");

document.write(app1.info());

app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();

app1.abrir();
app1.cerrar();

