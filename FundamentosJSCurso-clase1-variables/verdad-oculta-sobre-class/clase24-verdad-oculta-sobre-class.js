 //vamos a definir un funcion que va a definir el protipo 
//para definir un prototipo lo unico que tenemos que definir es una funcion 
//::esta funcion es la que se va a ejecutar cuando creemos una nueva persona, es como
//::en otro lenguaje se conoce como constructor
//entonces esta funcion se va crear cuado creemos una persona


//Con esto ya decimos lo que necesitamos hacer para generar la herencia 

//____para hacer herencia tenemos que escribir una funcion propia nuestra.
//recordemos que los prototitpos siempre son objetos como los objetos que venimos trabajando
//hasta acá

//::recoredemos que los parametros que estan dentro de heredaDe son funciones, todas 
//las funciones tienen el atributo prototipe.
function heredaDe(protipoHijo, protipoPadre) {
    var fn = function () {}
    //definimos como funcion vacia var fn = function () {} //se le asigna a una var que llame fn
    //var con funcion anonima

    //lo que vamos hacer a esta funcion le vamos a asignar a su protitpo"prototype" el prototipo
    //del prototipo padre 

    //y lo que vamos hacer a esta funcion le vamos a asignar a su protitpo"prototype" el prototipo
    //del prototipo padre 
    fn.prototype = protipoPadre.prototype
    //a continuacion lo que vamos hacer al prototipo hijo, le vamos a decir que su prototype va a ser
    //un nuevo obj de esta funcion que acabamos de crear acá //nuevo obj = new fn
    //basicamente estamos haciendo lo mismo pero para no estar pisando el prototipe del
    //protipoPadre lo pasamos a otro objeto.
    //::ademas lo que tenemos qu hacer es asignar la funcion constructura
    //la funcion contructora de la clase hija despues de new fn.
    //clasehijo.constructor = clasehijo (prototipo en este caso en js no clase)
    protipoHijo.prototype = new fn
    protipoHijo.prototype.constructor = protipoHijo //si no agregabamos a esta linea se
    //va estar llamando al constructor de protipo padre.
}
//explicacion de la funcion heredaDe:
//lo que tenemos que hacer es decirle  al protipo hijo quien va a ser su padre,
//basicamente lo que tenemos que hacer asignarle un prototipo este protipo "clase"
//hijo







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
//a nuestro constructor Persona.prototype.saludar

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

//Persona.prototype.soyAlto = () =>  this.altura > 1.8
//dejamos el codigo hasta con un bug lo unico que hemos hecho fue pasar una funcion 
//a arrow function.
//que pasa con las arrow function ? que pasa con el this dentro de ellas?
//vamos a volverlo a estado anterior y aplicamos un debugger

//Lo que pasa con las arrow function 
//Asigna esta función pero cambia el this dentro de la función.
//(dentro de las llaves)
//Lo que hace es que el this va apuntar al this que este afuera  
//de esta función acá o sea a linea fuera del function.
//this dentro de la arrow function es window
// Persona.prototype.soyAlto = () => {
//   debugger
//   return this.altura > 1.8
// }
// this === window //esto es true en consola
const ALTURA_MAX = 1.8
Persona.prototype.soyAlto = function() {
    if (this.altura <= 1.8) {
        console.log(`hola soy ${this.nombre} soy bajo mido ${this.altura}`)
    } else if (this.altura >= 1.8) {
        console.log(`eres alto mides lo mismo o mas que ${ALTURA_MAX} `)
    }
    
}
//esta condicion nunca se va dar por que es objeto window
//lo que queremos hacer un nuevo prototype que sea de desarrollador
//"un sub tipo de persona"

//luego de que todo lo que hicimos con el prototipo de persona
//::esta funcion va a ser la funcion que se va ejecutar cuando creemos 
//nuevos tipos de desarroladores::

function Desarrollador (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura

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
Desarrollador.prototype.soyAlto = function () {
    if (this.altura > 1.8) {
        console.log(`hola me llamo ${this.nombre} ${this.apellido}  mido ${this.altura}`)
    }
}

// var soyAlto = persona => persona.altura >= 1.80

var sacha = new Persona('Sacha', 'lifszyc', 1.62)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez', 1.90)
// arturo.soyAlto()
// arturo.saludar()
var arturo = new Desarrollador('Arturo', 'Martinez', 1.90)
//__orden:
//function 
//var
//function()invocar
//en conlusión no se pueden usar prototipos en arrow

sacha.saludar()
sacha.soyAlto()
arturo.saludar()
arturo.soyAlto()