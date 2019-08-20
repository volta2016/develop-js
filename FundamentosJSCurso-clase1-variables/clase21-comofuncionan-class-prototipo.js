//vamos a definir un prototipo que va a definir el protipo 
//para definir un prototipo lo unico que tenemos que definir es una funcion 
//::esta funcion es la que se va a ejecutar cuando creemos una nueva persona, es como
//::en otro lenguaje se conoce como constructor
//entonces esta funcion de va crear cuando creemos una persona
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
//this va hacer referencia a ese objeto que se acaba de construir
//entonces this.nombre le vamos a asignar nombre
Persona.prototype.saludar = function () {
    if (soyAlto(this)) {
        console.log(`hola, soy ${this.nombre} ${this.apellido}, soy alto`)
    } else {
        console.log(`Hola soy ${this.nombre} ${this.apellido}, no soy alto`)
    }
    // console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `)
}

// Persona.prototype.soyAlto = function () => this.altura > 1.8

//entonces esta funcion persona()se va crear cuado creemos una persona
//me refiero a la de arriba linea 6 del code
//notemos que por cada new persona se va ejecutar la funcion
//notemos que estamos utilizando la palabra reservada del lenguaje new
//como es reservada no la podemos usar como funcion por ejemplo
//"new": es una palabra para crear nuevos objetos dado un protipo

//si nostros no ponemos la palabra new en consola preguntamos por sacha vemos que es undefined
//esta palabra new seguida del protipo, "lo que hace es que se cree un nuevo objeto", como
//los objetos que venimos trabajando con llaves por ejemplo. var persona ={ key, value}
// y a ese objeto se le va asignar como prototipo el protipo que le indiquemos despues,
//luego se va a ejecutar el constructor esta funcion linea 6 code que lleva por nombre el protipo
//persona e implicitamente lo que se va hacer es retornar este objeto que se acaba de construir

//up

//arrow function
var soyAlto = persona => persona.altura >= 1.80

var sacha = new Persona('Sacha', 'lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.90)
arturo.saludar()

// Persona.prototype.soyAlto = function () {
//     return this.altura > 1.8
// }
// es muy importante ver donde van estar las funciones que va a tener el prototype, es mejor que 
// siempre las coloquemos todas juntas, por que vamos creando el prototype de persona y queremos
// que tenga las funciones al menos que mas adelante queramos modificar ese prototype
// siempre es bueno definir clases(mas bien prototype), las funciones que vamos a usar y luego
// ir utilizandolas pero no ir modificandola a medida que que va pasando nuestro codigo  y metemos algo
// dentro de prototype y despues metemos otra cosa siempre conviene hacerlo en mismo lugar
// para que despues sean accesibles una duda que puede tener