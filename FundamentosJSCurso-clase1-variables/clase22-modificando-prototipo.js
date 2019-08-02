//vamos a definir un prototipo que va a definir el protipo 
//para definir un prototipo lo unico que tenemos que definir es una funcion 
//::esta funcion es la que se va a ejecutar cuando creemos una nueva persona, es como
//::en otro lenguaje se conoce como constructor
//entonces esta funcion de va crear cuado creemos una persona
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
//podemos hacer referencia a ese objeto dentro de esta funcion como como this
//this va hacer referencia a ese objeto que se acaba de contruir
//entonces this.nombre le vamos a asignar nombre
Persona.prototype.soyAlto = function () {
    if (soyAlto(this)) {
        console.log(`hola, soy ${this.nombre} ${this.apellido}, soy alto`)
    } else {
        console.log(`Hola soy ${this.nombre} ${this.apellido}, no soy alto`)
    }
    // console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `)
}

Persona.prototype.saludar = function() {
    console.log(`hola me llamos ${this.nombre} ${this.apellido}`)
}

// ::applied forma  teacher::
//lo que tenemos que entender es que el prototipo es un objeto mas dentro de js
//si lo modificamos, en una cierta altura del codigo y partir de ahi va quedar 
//modifica 

// la aplicamos como arrow function

Persona.prototype.soyAlto = function =>  return this.altuta


var soyAlto = persona => persona.altura >= 1.80

var sacha = new Persona('Sacha', 'lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.90)
arturo.soyAlto()
arturo.saludar()

