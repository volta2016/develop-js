var sasuke = {
	nombre : 'Sasuke',
	apelido : 'Uchiha',
	edad : 19
}
var itachi = {
	nombre : 'Itachi',
	apelido : 'Uchiha',
	edad : 21
}

function imprimirNombreEnMayuscula({ nombre }) {
	console.log(nombre.toUpperCase())
}

// function imprimirNombreEnMayuscula(persona) {
// 	console.log(persona.nombre.toUpperCase())
// }
//Acá podemos ver que la función sabe que tiene que acceder 
//al atributo nombre Abajo imprimimos la función 


imprimirNombreEnMayuscula(sasuke)
//imprime la funcion en consola

imprimirNombreEnMayuscula(itachi)
//poemos poner un objeto acá mismo
imprimirNombreEnMayuscula({nombre: 'Kakashi'})
// imprimirNombreEnMayuscula({apellido: 'Gomez'})
//no va correr por el objeto que le pasamos 
//no tiene el atributo nombre

