var nombre = `Sacha` 

function imprimirNombreEnMayuscula(nombre) {
	nombre = nombre.toUpperCase()
	console.log(nombre)
}

imprimirNombreEnMayuscula(nombre)

//nuevo entorno
var nombreMusica = 'JAZZ'

function imprimirMusicaMinuscula(nombreMusica) {
	nombreMusica.toLowerCase()
	console.log(`impresion de nombre dentro de la funcion ${nombreMusica}`)
	console.log(`impresion de nombre Global dentro  ${window.nombreMusica}`)
	console.log(`Su ultima letra es ${nombre.charAt(3)}`)
} 
imprimirMusicaMinuscula(nombreMusica)
console.log('impresion fuera de la funcion' + nombreMusica)