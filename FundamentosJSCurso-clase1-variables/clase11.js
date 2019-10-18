var kyo = {
	nombre : 'Kyo',
	apellido : 'Ito',
	edad : 19,
	ingeniero: false,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}
var Fukui  = {
	nombre : 'Fukui',
	apellido : 'Akiyama',
	edad : 13
}

function imprimirProfesiones(persona) {
	console.log(`${persona.nombre} es: ` )
	//aplico template string
	if (persona.ingeniero){
		console.log('Ingeniero')
	} else {
		console.log('No es ingeniero')
	}
	if (persona.cocinero){
		console.log('Cocinero')
	}
	if (persona.cantante){
		console.log('Cantante')
	}
	if (persona.dj){
		console.log('Dj')
	}
	if(persona.guitarrista){
		console.log('Guitarrista')
	}
	if (persona.drone) {
		console.log('Piloto de drone')
	}
}
const MAYORIA_DE_EDAD = 18
//magic number para reconocer el programa
//const no puede modificar queda como valor fijo de programa
// const MENOR_DE_EDAD < 18

//aplicamos esta funcion aparte para orden del code
function esMayorDeEdad(persona) {
	return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
	//var {nombre} = persona
	console.log(`¿Es menor o mayor de edad?`)
	//dentro del if le estoy pasando como parametro la funcion que retorna el resultado si 
	//persona,edad es mayor de edad
	if (esMayorDeEdad(persona)){

		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	}

}


imprimirProfesiones(kyo)
imprimirSiEsMayorDeEdad(kyo)
imprimirSiEsMayorDeEdad(Fukui)

