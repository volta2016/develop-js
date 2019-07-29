// var Oracion = document.getElementById("Oracion")
// var Fernando = {
//   nombre:'Fernando',
//   apellido:'Huaman',
//   edad:18
// }

// var Miguel = {
//   nombre:'Miguel',
//   apellido:'Garcia',
//   edad:19
// }

// function imprimirNombreYEdad(humano){
//   Oracion.innerHTML = Oracion.innerHTML + `Hola me llamo ${humano.nombre}
//   ${humano.apellido} y tengo ${humano.edad} años.` + "</br>" + "</br>"
// }

// imprimirNombreYEdad(Fernando)
// imprimirNombreYEdad(Miguel)

// :::code con clase:::
class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre
		this.edad = edad
	}
}
function ImprimirNombreYEdad ({nombre, edad}) {
	console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

var nacho = new Persona('Nacho', 20)
var hector = new Persona('Hector', 14)

ImprimirNombreYEdad(nacho)
ImprimirNombreYEdad(hector)