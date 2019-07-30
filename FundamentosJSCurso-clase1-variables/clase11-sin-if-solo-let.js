let gabriel = {
	nombre: 'Gabriel',
	edad: 27
}

let daniel = {
	nombre: 'Daniel',
	edad: 17
}

const MAYORIA_DE_EDAD = 18

function isAdult(persona) {
	let { nombre, edad } = persona
	let mensajeMayor = `${nombre} tiene ${edad}, por lo tanto es mayor de edad`
	let mensajeMenor = `${nombre} tiene ${edad}, por lo tanto es menor de edad`

	let mensaje = edad >= MAYORIA_DE_EDAD ? mensajeMayor : mensajeMenor

	console.log(mensaje)
}

isAdult(gabriel)
isAdult(daniel


otro metodo

const MAYORIA_DE_EDAD = 18

functionmayorDeEdad(persona){
  return persona.edad>= MAYORIA_DE_EDAD
}


function imprimirSiEsMayorDeEdad(persona){
  if(mayorDeEdad(persona)){
    return(`${persona.nombre} es mayor de edad, tiene ${persona.edad}`)
  } else{
    return(`${persona.nombre} es menor de edad, tiene ${persona.edad}`)
  }
}


console.log(imprimirSiEsMayorDeEdad(Gabriel))
console.log(imprimirSiEsMayorDeEdad(Astrid))
console.log(imprimirSiEsMayorDeEdad(Mauiricio))



