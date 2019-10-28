//tenemos que hacer que el programa me diga si la persona es alta sobre 1.80 y si no lo es
//que muestre que es baja y que mide menos de la autura definida

function Persona (nombre, apelllido, altura) {
    this.nombre = nombre
    this.apellido = apelllido
    this.altura = altura 
}
 //definimos la altura minima para para ser alto

 const ALTURA_MINIMA = 1.8

//creamos el prototipo del constructor persona con el saludo y programa si cumple la altura ALTURA_MINIMA
//seria la accion o funcion 
// Persona.prototype.saludar = function () {
//     if (this.altura >= ALTURA_MINIMA) {
//         console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy alto mido ${this.altura}`)
//     } else {
//         console.log(`hola me llamo ${this.nombre} ${this.apellido} y mido menos de ${ALTURA_MINIMA}`)
//     }
// }
// //new objeto donde pasamos los parametos al constructor del objeto
// var david = new Persona ('David', 'Henriquez', 1.9)
// var diego = new Persona ('Alicia', 'Beltran', 1.6)
// var raul = new Persona ('Raul','Munich', 1.9)

// david.saludar()
// diego.saludar()
// raul.saludar()

//otro programa::
// function person(nombre, apellido, estatura) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.estatura = estatura
// }
// var p1 = new person('Persona', 'Uno', 1.80)
// var p2 = new person('Persona', 'Dos', 1.70)
// var p3 = new person('Persona', 'Tres', 1.60)
// var p4 = new person('Persona', 'Cuatro', 1.85)

// person.prototype.saludar = function() {
//     if(this.estatura < 1.80){
//         console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy bajo`)
//     } else{
//         console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy alto`)
//     }
// }
// p2.saludar()
// p3.saludar()
// p4.saludar()

//ortro programa 1::
function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre}${this.apellido}`);
}

// Desafio
Persona.prototype.soyAlto = function () {
    console.log(`Soy ${this.altura >= 1.8 ? 'alto' : 'bajito, mido ' + this.altura}`);
}

var cesar = new Persona('Cesar', 'Miranda', 1.8);
var erika = new Persona('Erika', 'Luna', 1.5);
var arturo = new Persona('Arturo', 'Martinez', 1.9);

cesar.soyAlto()
erika.soyAlto()