//example let var operador ternario
let kyo = {
	nombre : 'Kyo',
	apellido : 'Ito',
	edad : 28,
	peso : 75
}
//defino el let con el objeto peso
let pesoInicial = kyo.peso 

const ANIO = 365
const PESO_VARIATION = 0.2

console.log(`Al inicio del año ${kyo.nombre} peso ${kyo.peso}kg`)
//for aplicado con let 
for (let i = 1; i < ANIO; i++) {
	let random = Math.random()
	if (random < 0.25) {
		kyo.peso += PESO_VARIATION
	} else if (random < 0.50) {
		kyo.peso -= PESO_VARIATION
	}
}

//var operador ternario
// (CONDICION) ? RESULTADO_CIERTO : RESULTADO_FALSO
var edad = 12;
// en caso de que la var sea > a 18 nos va asignar la cadena puede votar.
//en caso de que no se cumpla esta condicion el resultado sera el que hay despues de los : 

var puedeVotar = (edad > 18) ? `puede votar` : `no puede votar`
console.log(puedeVotar)


var diferencia = ({peso}) => peso > pesoInicial ? `subiste ${(peso - pesoInicial).toFixed(1)}kg` : `bajaste ${(pesoInicial - peso).toFixed(1)}kg`
//es un operador ternario con una condicion donde toma el peso del objeto
//pregunta si se cumple que peso > a pesoInicial si cumple toma subiste peso - pesoInicial 
//si bajaste pesoInicial - peso entrega la difencia de kg de lo que sube o bajas.

// imprimir resultado
console.log(`Al final del año ${kyo.nombre} pesa ${kyo.peso.toFixed(1)}kg y ${diferencia(kyo)}`)



