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
	//var nombre = persona.nombre
	var {nombre} = persona
	var {apellido} = persona
	var {edad} = persona
	console.log(`hola me llamo ${nombre} ${apellido} y tengo y tengo ${edad} `)

}




imprimirNombreEnMayuscula(sasuke)
imprimirNombreEnMayuscula(itachi)
//imprime la funcion en consola

function cumpleanos(persona){
	return {
		...persona,
		edad: persona.edad + 1
	}
}
