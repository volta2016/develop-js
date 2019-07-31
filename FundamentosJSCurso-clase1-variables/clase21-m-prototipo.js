

function Persona(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `)
}

Persona.prototype.soyAlto = function () => this.altura > 1.8


var sacha = new Persona('Sacha', 'lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.89)

// Persona.prototype.soyAlto = function () {
//     return this.altura > 1.8
// }
77 es muy importante ver donde van estar las funciones que va a tener el prototype, es mejor que 
siempre las coloquemos todas juntas, por que vamos creando el prototype de persona y queremos
que tenga las funciones al menos que mas adelante queramos modificar ese prototype
siempre es bueno definir clases(mas bien prototype), las funciones que vamos a usar y luego
ir utilizandolas pero no ir modificandola a medida que que va pasando nuestro codigo  y metemos algo
dentro de prototype y despues metemos otra cosa siempre conviene hacerlo en mismo lugar
para que despues sean accesibles una duda que puede tener