var kyo = {
	nombre : 'Kyo',
	apellido : 'Ito',
	edad : 28,
	peso : 75
}
console.log(`Al inicio del año ${kyo.nombre} pesa ${kyo.peso}kg`)

//aumentar de peso va a ser una una función, los parametros van entre parentesis que va 
//a recibir el obj persona y un incremento => y lo que va hacer es 
//persona punto peso += incremento es decir le va a retornar un valor.

const INCREMENTO_PESO = 0.2
//cuando dio negativo fue por que estaba en 200kg y tiene que estar en 200gr
const DIAS_DEL_ANO = 365

// function aumentarDePeso (persona) {
// 	return persona.peso +=200
// }
// el arrow function es lo misma funcion que esta arriba
const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = (persona) => persona.peso -= INCREMENTO_PESO
// como vimos anteriormente 200 son magic number no sabemos bn de donde salen.
// entonces vamos a ponerlos en una constante.



for (var i = 1; i <= DIAS_DEL_ANO; i++) {
	var random = Math.random()
	
	if (random < 0.25) {
		aumentarDePeso(kyo)
	} else if (random < 0.5){
		adelgazarDePeso(kyo)
	}
}
// recordemos como kyo acá arriba es un objeto ese objeto se va a ver moodificado fuera
//de la opcion también si no queremos que eso ocurra tenemos que deglozar el objeto original
//también

console.log(`Al final del año ${kyo.nombre} pesa ${kyo.peso.toFixed(2)}kg`)

