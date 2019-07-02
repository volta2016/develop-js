var nombre = `Sacha` 

function imprimirNombreEnMayuscula(nombre) {
	nombre = nombre.toUpperCase()
	console.log(nombre)
}

imprimirNombreEnMayuscula(nombre)

//nuevo entorno
var nombreMusica = 'JAZZ'
//var global 

//funcion + parametro n local
function imprimirMusicaMinuscula(nombreMusica) {
	nombreMusica.toLowerCase()
	var minus = nombreMusica.toLowerCase()
	console.log(`en minuscula ${minus}`)
	console.log(`impresion de nombre local dentro de la funcion ${nombreMusica}`)
	console.log(`impresion de nombre Global dentro de la funcion ${window.nombreMusica}`)
	console.log(`Su ultima letra es ${nombreMusica.charAt(3)}`)
	console.log(`su primeras 2 letras ${nombreMusica.substr(0,2)}`)
	// lo que hace nombreMusica dentro de par existe en alcance local 
	// de la funcion sin importar el alncance global.
	//la var nombreMusica n global lo vamos a poder acceder dentro de la funcion 
	//excepto que nos refiramos explicitamente a window.nombre que es a n global
	//el obejeto en el navegador es window
	//forma de concatenar con template literals
} 
imprimirMusicaMinuscula(nombreMusica)
console.log(`impresion fuera de la funcion ${nombreMusica}`)