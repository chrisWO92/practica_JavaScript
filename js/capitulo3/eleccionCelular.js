/* 

Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse uno nuevo. De todos los modelos que hay disponibles en la tienda, le llamaron la atención 3 telefonos específicamente. EL problema es que ningún vendedor sabe nada al respecto, por lo que no pueden ayudarle con su elección.

CREAR SOLUCIONES:

-Crear un sistema para mostrar a Cofla las particularidades de los 3 celulares.
-Cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria ram.
-Cada celular debe poder prender, reiniciar, apagar, tomar foto y grabar.

*/

class Celular {
    constructor(color, peso, tamano, rsc, ram){
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        this.rsc = rsc;
        this.ram = ram;
        this.encendido = false;
    }

    encenderApagar(){
        if (this.encendido == false){
            document.write("celular encendido <br>");
            this.encendido = true;
        }else{
            document.write("celular apagado <br>");
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true){
            document.write("celular reiniciando <br>");
        }else{
            document.write("celular está apagado, no puede reiniciar <br>");
        }
    }

    tomarFoto(){
        if (this.encendido == true){
            document.write(`tomando foto con resolución ${this.rsc}` + "<br>");
        }else{
            document.write("celular no puede tomar foto si está apagado <br>");
        }
    }

    grabarVideo(){
        if (this.encendido == true){
            document.write(`grabando video con resolución ${this.rsc}` + "<br>");
        }else{
            document.write("celular no puede grabar video si está apagado <br>");
        }
    }

    info(){
        let infoCelular = `Color: ${this.color}` + "<br>" + `Peso: ${this.peso}` + "<br>" + `Tamaño: ${this.tamano}` + "<br>" + `Resolución: ${this.rsc}` + "<br>" + `Ram: ${this.ram}` + "<br>";
        return infoCelular;
    }

}

const celular1 = new Celular("black","150 g","5'","hd","2 GB");
const celular2 = new Celular("white","140 g","5.5'","full hd","2 GB");
const celular3 = new Celular("pink","155 g","5.8'","full hd","3 GB");

document.write(celular1.info() + "<br>");
document.write(celular2.info() + "<br>");
document.write(celular3.info() + "<br>");


celular1.encenderApagar();
celular1.reiniciar();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.encenderApagar();

document.write("<br><br>");

celular2.encenderApagar();
celular2.reiniciar();
celular2.tomarFoto();
celular2.grabarVideo();
celular2.encenderApagar();

document.write("<br><br>");

celular3.encenderApagar();
celular3.reiniciar();
celular3.tomarFoto();
celular3.grabarVideo();
celular3.encenderApagar();


/*

Cofla no está satisfecho con los celulares que vió, así que decide ir a la sección de celulares de alta gama. Ve dos celulares que le gustan mucho, que pueden hacer todo lo que podían hacer los 3 anteriores pero tienen mejores características, y además, pueden grabar en cámara super lenta, tiene reconocimiento facial y una cámara extra.

CREAR SOLUCIONES:

-Implementar todas estas cualidades en los celulares de alta gama.

*/

class celularAltaGama extends Celular {
    constructor(color, peso, tamano, rsc, ram, rsc2){
        super(color, peso, tamano, rsc, ram);
        this.rsc2 = rsc2;
        this.encendido = false;
    }

    grabarVideoLento(){
        if (this.encendido == true){
            document.write(`grabando video lento con resolución ${this.rsc2}` + "<br>");
        }else{
            document.write("celular no puede grabar video si está apagado <br>");
        }
    }

    reconocimientoFacial(){
        if (this.encendido == true){
            document.write(`haciendo reconocimiento facial` + "<br>");
        }else{
            document.write("celular no puede reconocer si está apagado <br>");
        }
    }

    infoAltaGama(){
        return "<br>" + this.info() + `Resolución2: ${this.rsc2}`;
    }

}

const celular4 = new celularAltaGama("white","140 g","5.7'","full hd","3 GB","hd");
const celular5 = new celularAltaGama("pink","155 g","5.9'","full hd","4 GB","hd");

document.write("<br>");

document.write(celular4.infoAltaGama() + "<br><br>");
document.write(celular5.infoAltaGama() + "<br><br>");

celular4.encenderApagar();
celular4.reiniciar();
celular4.tomarFoto();
celular4.grabarVideo();
celular4.grabarVideoLento();
celular4.reconocimientoFacial();
celular4.encenderApagar();

document.write("<br><br>");

celular4.encenderApagar();
celular4.reiniciar();
celular4.tomarFoto();
celular4.grabarVideo();
celular4.grabarVideoLento();
celular4.reconocimientoFacial();
celular4.encenderApagar();