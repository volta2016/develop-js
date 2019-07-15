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

//función destructurar obj
function imprimirNombreEnMayuscula(persona) {
	//vamos a declara la va nombre que va a salir de del objeto persona.nombre
	//var nombre = persona.nombre
	var {nombre} = persona
	var {apellido} = persona
	var {edad} = persona
	console.log(`hola me llamo ${nombre} ${apellido} y tengo y tengo ${edad} `)

}

//vamos hacer que la funcion reciba el objeto de la persona y que sepa accerder al nombre
// function imprimirNombreEnMayuscula(persona) {
// 	console.log(persona.nombre.toUpperCase())
// }
//Acá podemos ver que la función sabe que tiene que acceder 
//al atributo - Abajo imprimimos la función 
//______esto es desglosar el objeto._____________
//función que recibe la propiedad de objeto como parametro NO ES NECESARIO PASARLE PERSONA
// function imprimirNombreEnMayuscula2({ nombre }) {
// 	console.log(nombre.toUpperCase())
// }
//aca colocamos el nombre de los atributos que nos interesa en este 
//caso el nombre, entonces acá ya persona no existe

//funcion que recibe objeto como parametro
// function imprimirNombreEnMayuscula(persona){
//   console.log(`Hola, mi nombre es ${persona.nombre.toUpperCase()} ${persona.apellido.toUpperCase()} y tengo ${persona.edad} años`)
// }

//funcion que recibe mas de una propiedad deL objeto como parametro
// function imprimirNombreEnMayuscula({nombre, apellido, edad}){
// 	console.log(`hola, mi nimbre es ${nombre.toUpperCase()} ${apellido.toUpperCase()} y tengo ${edad} años`)
// }

// lo mismo que la funcion de arriba pero le saco el parametro del obj persona 
//y aplico los 3 atributos del objeto

imprimirNombreEnMayuscula(sasuke)
//imprime la funcion en consola

imprimirNombreEnMayuscula(itachi)
//podemos definir un un objeto acá mismo
// imprimirNombreEnMayuscula2({nombre: 'Kakashi' })
// imprimirNombreEnMayuscula({apellido: 'Gomez'})
//no va correr por el objeto que le pasamos 
//no tiene el atributo nombre si fuera kakashi o gomez

