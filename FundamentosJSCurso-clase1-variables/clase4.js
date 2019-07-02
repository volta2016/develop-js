var nombre = `Sacha`, edad = `28`

function imprimirEdad(n, e) {
	console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad(`Vicky`, 28)
imprimirEdad(`Edgar`, 24)
imprimirEdad(`Marco`, 27)
imprimirEdad(27, `Kyo`)
//vamos a ver que no tenemos ningún error pero js lo ejecuta
//cambiando los valores.
imprimirEdad()
//nos va arrojar nada definido.


