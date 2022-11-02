"use strict";

class Persona  {
    nombre;
    apellido;
    
    constructor(nombre,apellido,peso){
        this.nombre = nombre;
        this.apellido = apellido;
        this.peso = peso;
    }

    presentarme(){
        return `${this.apellido} ${this.nombre}`;
    }

    static saludarA(nombre){
        console.log(`Buenos dias ${nombre}`);
    }
}

module.export = {Persona}