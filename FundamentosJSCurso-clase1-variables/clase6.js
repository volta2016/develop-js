var sasuke = {
	nombre : 'Sasuke',
	apellido : 'Uchiha',
	edad : 19
}
var itachi = {
	nombre : 'Itachi',
	apellido : 'Uchiha',
	edad : 21
}
var obito = {
	nombre : 'obito',
	apellido : 'uchiha',
	edad : 22
}
var kabuto = {
	nombre : 'KABUTO',
	apellido : 'rin',
	edad : 24
}

// function imprimirNombreEnMayuscula(persona) {
// 	console.log(persona.nombre.toUpperCase())
// }
//Acá podemos ver que la función sabe que tiene que acceder 
//al atributo - Abajo imprimimos la función 
function imprimirNombreEnMayuscula2 (persona) {
	console.log(persona.nombre.toUpperCase())

}

function imprimirenMinuscula({nombre}) {
	console.log(nombre.toLowerCase())
}
//función que recibe la propiedad de objeto como parametro

function imprimirNombreEnMayuscula3({nombre, apellido}) { 
	console.log(`hola ${nombre.toUpperCase()} ${apellido.toUpperCase()}`)
}
//aca colocamos el nombre de los atributos que nos interesa en este 
//caso el nombre, entonces acá ya persona no existe
//no podemos desglosar un objeto si no estamos seguro que siempre le vamos a mandar el "objeto" que espera

//funcion que recibe objeto como parametro
function imprimirNombreEnMayuscula(persona){
  console.log(`Hola, mi nombre es ${persona.nombre.toUpperCase()} ${persona.apellido.toUpperCase()} y tengo ${persona.edad} años`)
}

//funcion que recibe mas de una propiedad de objeto como parametro
function imprimirNombreEnMayuscula({nombre, apellido, edad}){
	console.log(`hola, mi nimbre es ${nombre.toUpperCase()} ${apellido.toUpperCase()} y tengo ${edad} años`)
}

// lo mismo que la funcion de arriba pero le saco el parametro del obj persona 
//y aplico los 3 atributos del objeto
// resumen de la funcion 
// function imprimirEnMayusculas(persona) {
//    var nombre = persona.nombre.toUpperCase();
//    console.log('Hola mi nombre es ' + nombre);
//}
imprimirNombreEnMayuscula(sasuke)
//imprime la funcion en consola

imprimirNombreEnMayuscula(itachi)
imprimirNombreEnMayuscula2(obito)
//podemos definir un un objeto acá mismo
imprimirNombreEnMayuscula3({nombre: 'Kakashi', apellido: 'hatake'})
imprimirenMinuscula(kabuto)
// imprimirNombreEnMayuscula({apellido: 'Gomez'})
//no va correr por el objeto que le pasamos 
//no tiene el atributo nombre

