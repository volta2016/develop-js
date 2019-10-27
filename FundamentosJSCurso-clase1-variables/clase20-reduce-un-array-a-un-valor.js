 //arrays nos va permitir agrupar cierto tipo de dato por ejemplo 
//numero, letras, strings, objetos, boleanos, funciones etc.
//dentro de una coleccion. luego vamos a realizar ciertas operaciones
//dentro de esa colección.

//____como filtrar elementos de los arrays_____//
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lyfszyc',
    altura: 1.72,
    cantidadLibros: 29
}
var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadLibros: 50
}
var martin = {
    nombre: 'Martín',
    apellido: 'Perez',
    altura: 1.85,
    cantidadLibros: 80
}
var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadLibros: 110
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadLibros: 20
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.6,
    cantidadLibros: 200
}

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura <= 1.6


var personas = [sacha, alan, martin, dario, vicky, paula]




// Pare esto es valido hacer un ciclo for de la siguiente manera.

// var acum = 0

// for(var i = 0; i < personas.length; i++){
//     acum = acum + personas [i].cantidadDeLibros
// }
// console.log(`Entotal todos tienen ${acum} libros`)
// //entonces vamos a ir a sumandole el acomulador el valor que ya tenia mas
// //la cantidadLibros que tiene cada una de las personas

// esto esta bien pero hay una manera mas prolija de escribirlo - también es una 
// manera validad de escribirlo
//const reducer que tenmos que escribir.
const reducer = (acum, {cantidadLibros}) =>  acum + cantidadLibros
//en la arrow funcion desectructuramos la persona y decimos que solamente vamos aceder
//a la cantidadLibros.
//enntonces vamos a retornar acum que es el valor que va ir siendo incrementado
//cada vez que se llame el reducer + persona.cantidad de libro



var totalDeLibros = personas.reduce(reducer, 0)

// para reducirlo necesitamos 2 cosas la funcion reducer que la aplicamos como arrow function
// y el valor inicial el valor original del acomulador que lo mismo que el var acum que aplicamos
//arriba
console.log(`todos tienen ${totalDeLibros} libros`)

