var contador = 0 
//arrow function
const llueve = () => Math.random() < 0.25 //25%
//funcion normal
// const llueve = function () {
//   returnMath.random() < 0.25;
// }
//vamos hacer algo almenos una vez hasta que se cumpla una condicion 
// si este de código de abajo que es el while se cumple este código
//se vuelve a ejecutar por que almenos se ejecuta una vez 
do {
	contador++
} while (!llueve())

if (contador === 1) {
	console.log(`fui a ver si llovia ${contador}vez`)
} else {
	console.log(`fui a ver si llovia ${contador}veces`)
}
// el do donde se encuentra contador++ 
// esto se va a repetir mientras llueva.
// entonces acá podemos negar la condicion de que !llueve
// si "no" llueve do se va ejecutar de nuevo, si no llueve
// va dejar de ejecutar y va entrar el programa en la linea
// 11
//otra forma
// if(contador != 1){
//     console.log(`fui a ver si llovía ${contador} veces`)
    
// } else {
//     console.log(`fui a ver si llovía ${contador} vez`)

// }

// operador condicional ternario
// contador === 1 ? console.log(`Fui a ver si llovia ${contador}vez`) : console.log(`Fui a ver si llovia ${contador}veces`)
//verificar code
// console.log(`Fui a ver si llovía ${contador}${contador > 1 ? 'veces' : 'vez'}`)



