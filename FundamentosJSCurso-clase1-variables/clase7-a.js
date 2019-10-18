var Oracion = document.getElementById("Oracion")
var Fernando = {
  nombre:'Fernando',
  apellido:'Huaman',
  edad:18
}

var Miguel = {
  nombre:'Miguel',
  apellido:'Garcia',
  edad:19
}
var Mike = {
	nombre: 'Mike',
	apellido: 'Valencia',
	edad: 19
}

function imprimirNombreYEdad(humano) {
  Oracion.innerHTML = Oracion.innerHTML + `Hola me llamo ${humano.nombre}
  ${humano.apellido} y tengo ${humano.edad} años.` + "</br>" + "</br>"
}

imprimirNombreYEdad(Fernando)
imprimirNombreYEdad(Miguel)
imprimirNombreYEdad(Mike)

// :::code con clase:::
class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre
		this.edad = edad
		//this es el objeto contexto de javascript en cual se esta ejecutando el código
		//this escucha a nombre y edad del constuctor del new obj
	}
}

//crea un class con su constructor: 
class Pokemon {
	constructor(nombre, tipo){
		this.nombre = nombre
		this.tipo = tipo
	}
	
}

// class Humano {
// 	constructor(sexo, edad){
// 		this.sexo = sexo
// 		this.edad = edad
// 	}
// }

function queTipoDePokemon(Pokemon){
	console.log(`${Pokemon.nombre} es de tipo ${Pokemon.tipo}`)

}
var pikachu = new Pokemon('Pikachu','Electrico')

function ImprimirNombreYEdad ({nombre, edad}) {
	//var { nombre, edad } = persona //es lo mis pero lleva persona como parametro en la function
	console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

var nacho = new Persona('Nacho', 20)
var hector = new Persona('Hector', 14)
var luis = new Persona('Luis', 35)
//var objeto = new Persona('parametos','parametro')

ImprimirNombreYEdad(nacho)
ImprimirNombreYEdad(hector)
ImprimirNombreYEdad(luis)

queTipoDePokemon(pikachu)

// otro ejemplo::
// function imprimirNombreYEdad(persona) {
//     var { nombre, edad } = persona
//     console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
// }

// imprimirNombreYEdad(gonzalo)

// como arrow function:: 
// let rocio = { 
// 	nombre:'Rocio' , 
// 	apellido:'Chavoya', 
// 	edad:30 
//   };
  
//   let imprimirNombreYEdad = ({nombre, edad}) => { console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)};
  
//   imprimirNombreYEdad(rocio);

// Tres diferentes formas de realizar la actividad:
// functionimprimirNombreYEdad(persona) {
//     var { nombre, edad } = persona;
//     console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
// }
// practico metodo
// functionimprimirNombreYEdad2({nombre, edad}) {
//     console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
// }

// functionimprimirNombreYEdad3(persona) {
//     console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`);
// }