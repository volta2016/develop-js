var kyo = {
	nombre : 'kyo',
	apellido : 'Ito',
	edad : 19
	igeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}

function imprimirProfesiones(persona) {
	console.log(`${persona.nombre} es: ` )
	//aplico template string
	if (persona.ingeniero === true){
		console.log('ingeniero')
	}
}