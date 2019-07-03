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

imprimirNombreEnMayuscula(sasuke)

imprimirNombreEnMayuscula(itachi)
//poemos poner un objeto acá mismo
//imprimirNombreEnMayuscula({nombre: 'Kakashi'})
imprimirNombreEnMayuscula({apellido: 'Gomez'})
//no va correr por el objeto que le pasamos 
//no tiene el atributo nombre

