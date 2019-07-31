

function Persona(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

var sacha = new Persona('Sacha', 'lifszyc', 1.72)
var sacha = new Persona('Erika', 'Luna', 1.65)
var sacha = new Persona('Arturo', 'Martinez', 1.89)