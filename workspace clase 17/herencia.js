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
 
    static saludarA(){
        console.log(`Buenos dias ${this.nombre}`);
    }
 }
 
 Persona.saludarA();


 var persona = new Persona("miguel","cicha",80);
 var persona2 = new Persona("pedro","zapata",70);

  
 persona.saludarA();




 
//  class Alumno extends Persona{
//     notas; 

//     constructor(nombre,apellido,notas){
//         super(nombre,apellido);
//         this.notas = notas;
//     }

//     listarNotas(){
//         console.log(super.presentarme() + ` notas: ${this.notas}`);
//     }

//     presentarme(){
//         return `${this.apellido} ${this.nombre} (Alumno)`;
//     }

//  }
 
//  class Docente extends Persona{
//     curso;
//     constructor(nombre,apellido,curso){
//         super(nombre,apellido);
//         this.curso = curso;
//     }
//  }
 
//  var docente1 = new Docente("Miguel","Cicha","Nivel 2");
//  var alumno1 = new Alumno("Arturo","Gonzalez","10,8");
 
//  console.log(alumno1.presentarme());
//  console.log(docente1.presentarme());



class ServidorDrive{


    static subirFile(file,funcionExito){
        console.log("subiendo");
        console.log("subiendo");
        console.log("subiendo");
        console.log("subiendo");
        funcionExito();
    }

}