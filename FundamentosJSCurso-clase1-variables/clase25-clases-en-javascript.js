//Clases en JavaScript
//de esta manera vamos a decir que  va existir la class persona y que va a tener un metodo llamado 
//constructor que es el que se va ejecutar cuando creemos objetos  de esta clase ademas vamos agregar
//el saludar.
//___vemos que aca no hace falta la palabra function 
class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`hola me llamo: ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.8
    }
}
//como aplicamos la herencia: ante de las llaves le vamos a poner la parte de la herencia 
//como hacemos que herede de otra clase lo que se llama herencia acá se llama extension,
//vamos a decir que esta clase extiende de Persona
class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super (nombre, apellido, altura)//para llamar al constructor de la clase padre debemos utilizar super
        //a partir de acá podemos llamar a this sin super js lo marca como un erros
        // this.nombre = nombre
        // this.apellido = apellido
        // this.altura = altura
    }

    saludar() {
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador/a`)
    }

}
//nos lanza un error que nos dice debemos llamar al constructor super antes de acceder a this
//lo que significa que no podemos utilizar this hasta que no hallamos llamado al constructor
//De la clase padre y para llamar al constructor de la clase padre.

//Para llamar al constructor de clase padre: tenemos que utilizar la palabra super a super le
//pasamos:  super (nombre, apellido, altura)















//vamos a pisar la funcion que tenia la persona
//entonces el saludo de los desarrolladores va a ser distinto 
//el resto tambien queremos que tenga los otros metodos que tiene el prototipo persona()
//es decir soy alto ¿como hacemos para el prototipo tenga la herencia prototipal y heredeDe
//otro prototipo? en resumen que desarrollador() herede de persona()
//ir a linea 10 ...
// Desarrollador.prototype.saludar = function () {
    
// }
//lo que nosotros queremos hacer ante de empezar a utilizar nuestros objetos
//y crear objetos de nuestros prototipos
//vamos a querer llamar esta funcion - primero la clase hija y luego la clase padre
//mejor dicho el protitipo padre persona()
//y ahora si vamos a definir la funcion heredaDe


// var soyAlto = persona => persona.altura >= 1.80

var sacha = new Persona('Sacha', 'lifszyc', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez', 1.90)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.90)
// arturo.soyAlto()
// arturo.saludar()

//__orden:
//function 
//var
//function()invocar
//en conlusión no se pueden usar prototipos en array function 


// si lo definimos como arrow function sale this del new object como undefinded

// ::applied form  teacher::
//lo que tenemos que entender es que el prototipo es un objeto mas dentro de js
//si lo modificamos, en una cierta altura del codigo y partir de ahi va quedar 
//modificado 

// Persona.prototype.soyAlto = function () {
//      return this.altura > 1.8
//  }
//para transformar en arrow sacamos function aplicams () sacamos {}
//y borramos return

// la aplicamos como arrow function

// Persona.prototype.soyAlto = () =>  this.altura > 1.8
//dejamos el codigo hasta con un bug lo unico que hemos hecho fue pasar una funcion 
//a arrow function.
//que pasa con las arrow function ? que pasa con el this dentro de ellas?
//vamos a volverlo a estado anterior y aplicamos un debugger

//Lo que pasa con las arrow function 
//Asigna esta función pero cambia el this dentro de la función.
//(dentro de las llaves)
//Lo que hace es que el this va apuntar al this que este afuera  
//de esta función acá o sea a linea  fuera del function.
// Persona.prototype.soyAlto = () => {
//   debugger
//   return this.altura > 1.8
// }
// this === window //esto es true en consola

