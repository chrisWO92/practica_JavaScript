class Animal {
    constructor(nombre, especie, edad, color){
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Hola! Soy ${this.nombre}, ${this.especie}, tengo ${this.edad} años, soy color ${this.color}`;
    }

    verInformacion (){
        document.write(this.informacion + "<br>");
    }

}

class Perro extends Animal {
    constructor(nombre, especie, edad, color, raza){
        super(nombre, especie, edad, color);
        this.raza = null;
    }
    verInformacion(){
        document.write(this.informacion + ", y soy de raza " + this.raza + "<br>")
    }

    ladrar(){
        document.write("Hola soy un pedro y ladro!<br>")
    }

    set setRaza(newRaza){
        this.raza = newRaza;
    }

    get getRaza(){
        return this.raza;
    }

}

const perro = new Perro("bruno","perro",10,"blanco","rottwiler");
const gato = new Animal("tony","gato",5,"gris");
const tortuga = new Animal("poncha","tortuga",20,"verde");

perro.setRaza = "Pedro";

perro.ladrar();
perro.verInformacion();
gato.verInformacion();
tortuga.verInformacion();

document.write(perro.getRaza);