var nombre = 'Sacha', apellido = 'Lifszyc'
var ultimaLetra = nombre.charAt(nombre.length - 1)

var nombreYApellido = `${nombre} ${apellido}`
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length //este es un atributo no lo invocamos como funciones 
var ultimaletra2 = nombre.charAt(cantidadDeLetrasDelNombre - 1);

var str_b = nombre.substr(1, 4)

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`//dentro de etsa llamaves podemos escribir codigo js
var str = nombre.charAt(0) + ' ' + nombreCompleto.charAt(2) //accede a S y c
console.log(`nombre ` + `${nombre}`)
var nombre_2 = 'kiot'
console.log(`y las primeras 2 letras son: ${nombre_2.substr(0,2)}`); //si le decimos 1 va tomar i - 2 va tomar i - o
console.log(ultimaLetra,cantidadDeLetrasDelNombre)
console.log(nombreCompleto)
console.log(str_b)
console.log(str) //consulto srt con la aplicacion de la var nombre
console.log(ultimaLetra)
console.log(ultimaLetra)
// \n nueva linea linea 
// \n nueva linea 
// \n nueva linea
// \f un tabulador 
// \f un tabulador 
// \t tabulacion
//\b espacio atras
//\b espacio atras 



//Si queremos saber cual es primer carácter de un string y 
//debemos pasarle por parámetro la posición del primer carácter 
//de todo string este se encuentra la posición 0, si queremos el ultimo
//caracter pasamos por parametro la posicion 4.
// var primeraLetraDelNombre = nombre.charAt(0)

//También podemos ver la cantidad de letras de la var nombre así:
// var cantidadDeLetrasDelNombre = nombre.length
//No llamamos a los paréntesis simplemente llamamos al atributo length.
//length ve el recorrido

//Vamos usar otra función que se substr
//Y le tenemos que decir desde donde queremos que empiece desde la 
//posición 1 y cuanto caracteres queremos que tome si le paso 1 solo 
//va tomar la a si le decimos 2 va a tomar la a-c
//Var srt = nombre.substr(1, 2)
//primero la posición de donde quiero que comience despues el rango
//de letra que quiero que tome hasta la posición defined


