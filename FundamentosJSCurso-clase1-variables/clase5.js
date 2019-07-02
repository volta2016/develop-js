var nombre = `Sacha` 

function imprimirNombreEnMayuscula(nombre) {
	nombre = nombre.toUpperCase()
	console.log(nombre)
}

imprimirNombreEnMayuscula(nombre)

//nuevo entorno
var nombreMusica = 'JAZZ'

function imprimirMusicaMinuscula(nombreMusica) {
	var minus = nombreMusica.toLowerCase()
	console.log(`en minuscula ${minus}`)
	console.log(`impresion de nombre local dentro de la funcion ${nombreMusica}`)
	console.log(`impresion de nombre Global dentro de la funcion ${window.nombreMusica}`)
	console.log(`Su ultima letra es ${nombreMusica.charAt(3)}`)
	console.log(`su primeras 2 letras ${nombreMusica.substr(0,2)}`)

	//forma de concatenar con template literals
} 
imprimirMusicaMinuscula(nombreMusica)
console.log(`impresion fuera de la funcion` + nombreMusica)