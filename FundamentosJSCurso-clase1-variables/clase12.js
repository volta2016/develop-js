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

function imprimirSiEsMayorDeEdad(persona){
	//var {nombre} = persona
	console.log(`¿Es menor o mayor de edad?`)
	if (esMayorDeEdad(persona)){

		console.log(`${persona.nombre} es mayor de edad`)
	} else {
		console.log(`${persona.nombre} es menor de edad`)
	}

}

// const esMayorDeEdad = function (persona) {
// 	return persona.edad >= MAYORIA_DE_EDAD
// }
// const esMayorDeEdad =  persona => persona.edad >= MAYORIA_DE_EDAD
const esMayorDeEdad =  ({edad}) => edad >= MAYORIA_DE_EDAD
//de esta manera lo que hacemos a la funcion esMayorDeEdad le pasamos una funcion 
//que le vamos a pasar un objeto que tiene una edad ({edad}) y nos va retornar si esa
//edad es mayor e igual de edad a la const MAYORIA_DE_EDAD = 18 que es una constante que en este 
//caso va a ser 18
const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD
//lo que estamos haciendo es que a la funcion es esMenorDeEdad le pasamos una funcion
//que le vamos a pasar el objeto edad, luego => quiere decir que se aplica la función
//como una arrow function, esto va retornar si es menor  MAYORIA_DE_EDAD


//aquí aplico la funcion al if solo aplicando el nombre de la const
function permitirAccesoDesafio(persona)  {
	if (!esMayorDeEdad(persona)){
		console.log("Acceso Denegado")
	} 
	if (!esMenorDeEdad(persona)) {
		console.log("Acceso Permitido")
	}
}
// denegar Acceso
// function permitirAcceso(persona) {
// 	if (!esMayorDeEdad(persona)) {
// 		console.log("acceso denegado")
// 	}
// }
imprimirProfesiones(kyo)
imprimirSiEsMayorDeEdad(kyo)
imprimirSiEsMayorDeEdad(Fukui)
//Mejorar code
// function ImprimirSiEsMenorDeEdad (persona) {
// 	if (esMenorDeEdad(persona) >= esMenorDeEdad) {
// 		console.log(`${persona.nombre} no es menor de edad`)
// 	} else { 
// 		console.log(`${persona.nombre} si es menor de edad`)
// 	}
// }

// const esMenorDeEdad = ({edad}) => edad <= MAYORIA_DE_EDAD 
