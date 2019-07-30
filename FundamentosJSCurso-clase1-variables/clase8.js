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
//lo que estamos haciendo es crear un nuevo objeto modificado
//modifica edad le pasa +1 pero no afecta al sasuke de alcance global
function cumpleanos(persona){
	console.log(`sasuke mas viejo edad: ${persona.edad}`)
	return {
		...persona,
		edad: persona.edad + 1
	}
	// new object
	// persona.edad += 1
}
cumpleanos(sasuke)
