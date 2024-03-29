var kyo = {
	nombre : 'Kyo',
	apellido : 'Ito',
	edad : 28,
	peso : 75
}
console.log(`Al inicio del año ${kyo.nombre} pesa ${kyo.peso}kg`)

// podríamos ejecutar este programa multiples veces y podriamos sacar el promedio de cuantos días pasan 
// cuando llega a la meta de peso 

//aumentar de peso va a ser una una función, los parametros van entre parentesis que va 
//a recibir una persona y un incremento => y lo que va hacer es 
//persona punto peso += incremento.

// function aumentarDePeso (persona) {
// 	return persona.peso +=200
// }
// el arrow function es lo misma funcion que esta arriba
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = persona => persona.peso -= INCREMENTO_PESO
// como vimos anteriormente 200 son magic number no sabemos bn de donde salen.
//por eso lo definimos como const


//como calculamos si aumenta o baja de peso con el randon que teniamos 
//pero declaramos unn arrow function que se llame comeMucho
//no va recibir ningun parametro y simplemente no va a devolver math.random menor a 
//coloquemos que solo 30% de los días come mucho pero puede ser que aumente de peso
//el mismo día también.
const comeMucho = () => Math.random() < 0.3
// que es el 40% de los días realiza deporte
const realizaDeporte = () => Math.random() < 0.4


// entonces vamos a ponerlos en una constante.
//vamos a definir en una const a la meta que tiene que llegar
const META = kyo.peso - 3
var dias = 0
//como funciona el while es que el codigo que esta entre llaves se va repetir siempre 
//que esta condicion se cumpla entre los parenstesis vamos poner esa condicion y mientra que
//sea verdadera entonces el código entre llaves se va a repetir (miestras el peso de kyo
//este por arriba de la meta este code se va a repetir)

//vamos a debugiar nuestro programa es decir meternos en la ejecucion del el mismo 
//si tenemos la consola de desarrollo abierta va a detener la ejecución del programa
//cada vez que lea la palabra debugger, podemos ver esto en sources
//podemos dar entrar a la siguiente opcion con la flecha hacia abajo podemos entrar a la 
//funcion de la condicion y ver el error tenemos Math.random pero nunca la estamos invocando.
//si queremos salir de la ejeccion y subir donde esa funcion fue llamada damos a flecha hacia arriba
while (kyo.peso > META) {
	// debugger
	if (comeMucho()) {
		aumentarDePeso(kyo)
	}
	if (realizaDeporte()){
		adelgazarDePeso(kyo)
	}
	dias += 1
}

// recordemos como kyo acá arriba es un objeto ese objeto se va a ver moodificado fuera
//de la opcion también si no queremos que eso ocurra tenemos que deglozar el objeto original
//también

console.log(`Pasaron ${dias} días hasta que ${kyo.nombre} adelgazó 3kg`)

while () {
	codigo que se ejecuta
}
while () {
	codigo que se jecuta
}
while () {
	codigo que se ejecuta
}
while () {
	codigo que se ejecuta 
}