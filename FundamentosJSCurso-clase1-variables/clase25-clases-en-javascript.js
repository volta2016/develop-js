//Clases en JavaScript







//___nuestro constructor o prototipo____
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
// function Humano (nombre, altura, peso, profesion) {
//     this.nombre = nombre
//     this.altura = altura
//     this.peso = peso
//     this.profesion = profesion
// }
//otra cosa que podemos hacer es empezar a pasarle parametros a nuestro prototipo
//a nuestra funcion persona(nuestro constructor) que estamos usando para construir
//crear objetos con el prototipo persona entonces le podemos pasar son parametros:
//nombre y apellido por ejemplo

//y para guardarlo dentro de este objeto que se esta construyendo en la memoria
//podemos hacer referencia a ese objeto dentro de esta funcion como como this.
//this va hacer referencia a ese objeto que se acaba de contruir
//entonces this.nombre le vamos a asignar nombre

// Persona.prototype.soyAlto = function () {
//     if (soyAlto(this)) {
//         console.log(`hola, soy ${this.nombre} ${this.apellido}, soy alto`)
//     } else {
//         console.log(`Hola soy ${this.nombre} ${this.apellido}, no soy alto`)
//     }
//     // console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `)
// }

//___por ejemplo para agregar una nueva funcion que ejecute en navegador debemos agregar
//a nuestro constructor persona.prototype.saludar

//lo aplicamos justo despues del contructor Persona() nuestro nuestro constructor persona.prototype.salud 
Persona.prototype.saludar = function() {
    console.log(`hola me llamo: ${this.nombre} ${this.apellido}`)
}
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

Persona.prototype.soyAlto = function() {
  return this.altura > 1.8
}
//esta condicion nunca se va dar por que es objeto window
//lo que queremos hacer un nuevo prototype que sea de desarrollador
//"un sub tipo de persona"

//luego de que todo lo que hicimos con el prototipo de persona
//::esta funcion va a ser la funcion que se va ejecutar cuando creemos 
//nuevos tipos de desarroladores::

function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido

}

//entonces lo que nosotros queremos hacer antes de empezar a usar nuestros obj y crear obj
//de estos prototipos vamos a querer llamar esta funcion.  

//___priemero prototipo hijo Desarrollador___y luego __el prototipo padre Persona___
//y ahora si vamos a escirbir la funcion heredaDe


//para arreglar el bug debemos organizar bien la estructura: primero nuestro protipo constructor
//luego la funcion que invoca (o mecanismo de herencia)
//Lo que deberíamos hacer es que el mecanismo 
//de herencia deberíamos llamarlo después de llamar la función (persona y desarrollador)
//si no vamos a volver a pisar el saludo con el de la persona
//entonces ahi si hereda de la persona conoce todos los metodos que estan en persona y luego 
//pisamos en el protipo del  desarrollador, pisamos el metodo de saludo
heredaDe(Desarrollador, Persona) 

//vamos a pisar la funcion que tenia la persona
//entonces el saludo de los desarrolladores va a ser distinto 
//el resto tambien queremos que tenga los otros metodos que tiene el prototipo persona()
//es decir soy alto ¿como hacemos para el prototipo tenga la herencia prototipal y heredeDe
//otro prototipo? en resumen que desarrollador() herede de persona()
//ir a linea 10 ...
Desarrollador.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador/a`)
}
//lo que nosotros queremos hacer ante de empezar a utilizar nuestros objetos
//y crear objetos de nuestros prototipos
//vamos a querer llamar esta funcion - primero la clase hija y luego la clase padre
//mejor dicho el protitipo padre persona()
//y ahora si vamos a definir la funcion heredaDe


var soyAlto = persona => persona.altura >= 1.80

// var sacha = new Persona('Sacha', 'lifszyc', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez', 1.90)
// arturo.soyAlto()
// arturo.saludar()

//__orden:
//function 
//var
//function()invocar
//en conlusión no se pueden usar prototipos en array function 


