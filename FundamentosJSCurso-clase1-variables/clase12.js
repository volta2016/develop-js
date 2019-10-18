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
// ____otra forma de imprimirSiEsMayorDeEdad con else if___
// function imprimirSiEsMayorDeEdad(persona) {
//   if (esMayorDeEdad(persona)) {
//     console.log(`${persona.nombre} es mayor de edad.`)
//   } else if (esMenorDeEdad(persona)) {
//     console.log(`${persona.nombre} es menor de edad.`)
//   }
// }
//:::funcion anonima:::
// const esMayorDeEdad = function (persona) {
// 	return persona.edad >= MAYORIA_DE_EDAD
// }
//esto es exactamente igual a lo que teniamos antes para escribir una arrow function podemos
//seguir ahorrando caracteres
// const esMayorDeEdad =  (persona) => {
// 	return persona.edad >= MAYORIA_DE_EDAD
// }
// const esMayorDeEdad =  persona => persona.edad >= MAYORIA_DE_EDAD
//podeos borrar return y las llaves que rodean al cuerpo de la funcion implicitamente
//van retornar lo que sigue a continuacion de => en este caso se va hacer la comparacion
//y va a devolverse el valor de esta comparacion. resumimos el codigo que teniamos de 3 lineas en 1
//algo mas que podemos hacer si solo nos interesa el parametro edad es desestructurar persona.edad
//tenemos que poner parentesis y las llaves 

const esMayorDeEdad =  ({edad}) => edad >= MAYORIA_DE_EDAD
//de esta manera lo que hacemos a la funcion esMayorDeEdad le pasamos una funcion 
//que le vamos a pasar un objeto que tiene una edad ({edad}) y nos va retornar si esa
//edad es mayor e igual de edad a la const MAYORIA_DE_EDAD = 18 que es una constante que en este 
//caso va a ser 18
const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD

//lo que estamos haciendo es que a la funcion es esMenorDeEdad le pasamos una funcion
//que le vamos a pasar el objeto edad, luego => quiere decir que se aplica la función
//como una arrow function, esto va retornar si es menor  MAYORIA_DE_EDAD
// otra forma de const en la cual aplico no esMayorDeEdad

// const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})
//const esMenorDeEdad = (persona) => !esMayorDeEdad(persona)

//aquí aplico la funcion al if solo aplicando el nombre de la const
function permitirAccesoDesafio(persona)  {
	if (!esMayorDeEdad(persona)){
		console.log("Acceso Denegado")
	} 
	if (!esMenorDeEdad(persona)) {
		console.log("Acceso Permitido")
	}
}
//tambien puede ser de estas 2 formas el denegaracceso
// denegar Acceso
// function permitirAcceso(persona) {
// 	if (!esMayorDeEdad(persona)) {
// 		console.log("acceso denegado")
// 	}
// }

imprimirProfesiones(kyo)
imprimirSiEsMayorDeEdad(kyo)
imprimirSiEsMayorDeEdad(Fukui)
permitirAccesoDesafio(Fukui)
ImprimirSiEsMenorDeEdad(kyo)
//Mejorar code
function ImprimirSiEsMenorDeEdad (persona) {
	if (esMenorDeEdad(persona)) {
		console.log(`${persona.nombre} si es menor de edad`)
	} else { 
		console.log(`${persona.nombre} no es menor de edad`)
	}
}

// //puedo aplicar este if en  ImprimirSiEsMenorDeEdad  
// if (esMenorDeEdad(persona) < esMayorDeEdad) 


