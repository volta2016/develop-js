var nombre = `Sacha` 

function imprimirNombreEnMayuscula(nombre) {
	//wnindow.nombre
	nombre = nombre.toUpperCase()
	console.log(nombre)
}

imprimirNombreEnMayuscula(nombre) //le enviamos este parametro de nombre cuando lo invocamos 
//no podemos acceder a la var global nombre al menos que nos refiramos explicitamente a window.nombre
//pero si mos referimos a nombre por parametro no estamos refiriendo a la variable local de esta funcion.
//si modificamos a nombre de alcancce local no vamos estar contaminando a var global nombre.

//nuevo entorno
var nombreMusica = 'JAZZ'
//var global 

//funcion + parametro nombre musica
function imprimirMusicaMinuscula(n) {
	var nombre_x = `dataerror`
	var d = nombre.toLowerCase()
	//var local
	var minus = n.toLowerCase()
	console.log(`en minuscula ${minus}`)
	console.log(`impresion de nombre Global dentro de la funcion local ${n} y ${d}`)
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
// resumen conclusion Cuando Llamas a la función global y le pasas 
//los argumentos, estos automáticamente se copian dentro de los parámetros de la función local

//resumen code:

//el parametro n solo esta definido en la funcion imprimirNombreEnMayuscula
//vamos a ver que el var(pararemtro) n tiene un alcance local que significa que solo existe en dentro del cuerpo 
//de esta funcion, si nostros quiseriamos acceder a n fuera de la funcion, vamos a ver que no existe  ese valor 
//no esta definido, la var n no esta definida. solo esta definida en la funcion dentro en  imprimirNombreEnMayuscula

//vamos a ver que solo estamos modificando la var locan n pero no la var local nombre
//js nos permite hacer utilizar el mismo nombre de var. Para pasar como parametro o var local en vez de n - nombre
//resumen nombre existe con un alcance global y nombre tambien va existir con otro valor en el alcance local
//de la funcion  imprimirNombreEnMayuscula