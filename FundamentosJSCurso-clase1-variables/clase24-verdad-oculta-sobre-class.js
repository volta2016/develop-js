//vamos a definir un funcion que va a definir el protipo 
//para definir un prototipo lo unico que tenemos que definir es una funcion 
//::esta funcion es la que se va a ejecutar cuando creemos una nueva persona, es como
//::en otro lenguaje se conoce como constructor
//entonces esta funcion se va crear cuado creemos una persona


//Con esto ya decimos lo que necesitamos hacer para generar la herencia 

function heredaDe(protipoHijo, protipoPadre) {
    var fn = function () {}
    fn.prototype = protipoPadre.prototype
    protipoHijo.prototype = new fn
    protipoHijo.prototype.constructor = protipoHijo //si no agregabamos a esta linea se
    //va estar llamando al constructor de protipo padre.
}
//lo que tenemos que hacer es decirle  al protipo hijo quien va a ser su padre,
//basicamente lo que tenemos que hacer asignarle un prototipo este protipo "clase"
//hija
//var con funcion anonima
//a continuación lo que vamos hacer es al prototipo hijo , e vamos a decir que su 
//prototype es un nuevo objeto de la funcion que creamos acá
//basicamente estamos haciendo lo mismo pero para no estar pisando el prototipe del
//protipoPadre lo pasamos a otro objeto.
//::ademas lo que tenemos qu hacer es asignar la funcion constructura
//la funcion contructora de la clase hija despues de new fn.

//___nuestro constructor o prototipo____
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
//otra cosa que podemos hacer es empezar a pasarle parametros a nuestro prototipo
//a nuestra funcion persona(nuestro constructor) que estamos usando para construir
//crear objetos con el prototipo persona entonces le podemos pasar parametros:
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


// Persona.prototype.soyAlto = () => {
//   debugger
//   return this.altura > 1.8
// }
// this === window //esto es true en consola

Persona.prototype.soyAlto = function() {
  return this.altura > 1.8
}
//esta condicion nunca se va dar por que es objeto window
//lo que quermos hacer un nuevo prototype que sea de desarrollador
//"un sub tipo de persona"

//luego de que todo lo que hicimos con el prototipo de persona
//esta funcion va a ser cuando la funcion que se va ejecutar cuando creemos 
//nuevos tipos de desarroladores

function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido

}

//vamos a pisar la funcion que tenia la persona
//entonces el saludo de los desarrolladores va a ser distinto 

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador/a`)
}
//lo que nosotros queremos hacer ante de empezar a utilizar nuestros objetos
//y crear objetos de nuestros prototipos
//vamos a querer llamar esta funcion - primero la clase hiha y luego la clase padre
//y ahora si vamos a definir la funcion hereda de


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
//en conlusión no se pueden usar prototipos en array fuction 


