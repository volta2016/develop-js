// var nombre = prompt(`imgrese el nombre`)
// var edad = prompt(`ingrese la edad`)

var nombre = 'Sacha', edad = '28'

function imprimirEdad(n, e) {
	console.log(`${n} tiene ${e} años`)
	//codigo re utilizable
}

function escribirEdadNombre(name, age) {
	document.write(`Hola ${name} tiene ${age} años`)
}

//nota: ojo con los template String

escribirEdadNombre('Harry', 33)
imprimirEdad(nombre, edad)
imprimirEdad(`Vicky`, 28)
imprimirEdad(`Edgar`, 24)
imprimirEdad(`Marco`, 27)
imprimirEdad(27, `Kyo`)
//vamos a ver que no tenemos ningún error pero js lo ejecuta
//cambiando los valores.
imprimirEdad()
//nos va arrojar nada definido.

//no podemos tener una var que se llame var function son palabras reservadas del lenguaje.

//estoy asignando los valores asignados de de la var nombre y edad

