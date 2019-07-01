var nombre = 'Sacha', apellido = 'Lifszyc'
var ultimaLetra = nombre.charAt(nombre.length - 1)

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

// var nombreEnMayusculas = nombre.toUpperCase()
// var apellidoEnMinusculas = apellido.toLowerCase()

// var primeraLetraDelNombre = nombre.charAt(0)
// var cantidadDeLetrasDelNombre = nombre.length
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
var str = nombre.charAt(1) + nombreCompleto.charAt(2)
console.log(`nombre ` + `${nombre}`)
var nombre_2 = 'kiot'
console.log(`y las primeras 2 letras son: ${nombre_2.substr(0,2)}`);
console.log(ultimaLetra,cantidadDeLetrasDelNombre)



var str = nombre.substr(1, 2)
