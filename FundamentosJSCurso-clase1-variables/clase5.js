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
function imprimirMusicaMinuscula(n) {
	var nombre_x = `dataerror`
	var d = nombre.toLowerCase()
	//var local
	var minus = n.toLowerCase()
	console.log(`en minuscula ${minus}`)
	console.log(`impresion de nombre Global dentro de la funcion global ${n} y ${d}`)
	console.log(`impresion de nombre Global dentro de la funcion ${window.n}`)
	console.log(`Su ultima local letra es ${n.charAt(3)}`)
	console.log(`su primeras local 2 letras ${n.substr(0,2)}`)
	console.log(`local ${nombre_x}`)
	//lo que hace nombreMusica dentro de parametro n de la funcion imprimirMusicaMinuscula
	//existe en alcance local 
	//de la funcion sin importar el alcance global.
	//la var nombreMusica nivel global no vamos a poder acceder a ella
	//dentro de la funcion function imprimirMusicaMinuscula(n) nivel local
	//excepto que nos refiramos explicitamente a window.nombre que es a n global
	//el objeto en el navegador es window
	//forma de concatenar con template literals
} 
imprimirMusicaMinuscula(nombreMusica)
// imprimirMusicaMinuscula(nombre_x)
//no la toma esta en alcance de scope a nivel local
console.log(`impresion fuera de la funcion ${nombreMusica}`)
//n no vive a nivel global
// resumen conclusion Cuando Llamas a la función local y le pasas 
//los argumentos, estos automáticamente se copian dentro de los parámetros de la función global

