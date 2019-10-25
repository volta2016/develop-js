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

//ejecuta almenos una vez el codigo 
do {
	contador++
} while (!llueve())

if (contador === 1) {
	console.log(`fui a ver si llovia ${contador} vez`)
} else {
	console.log(`fui a ver si llovia ${contador} veces`)
}
// el do donde se encuentra contador++ 
// esto se va a repetir mientras llueva.
// entonces acá podemos negar la condicion de que !llueve
// si "no" llueve do se va ejecutar de nuevo, si llueve esto se
// va a dejar de ejecutar y va entrar el programa en la linea
// 16
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

// otro ejemplo de la ejecucion do while:::

// var contador = 0

// const llueve = () => Math.random() < 0.25

// do {
//   contador++
// } while (!llueve())

// if (contador > 1) {
//   console.log(`Fui a ver si llovía ${contador} veces.`)
// } else {
//   console.log(`Fui a ver si llovía ${contador} vez.`)
// }

// //::::::
// var contador = 0;

// const llueve = () => Math.random() < 0.25;

// do {
//     contador++
// } while (!llueve()) // si no llueve, se va a volver a ejecutar el do.

// if (contador >= 2) {
//     console.log(`Fui a ver si llovia ${contador} veces`);
// } else {
//     console.log(`Fui a ver si llovia ${contador} vez`);
// }

do {
	esto se ejecuta 
	contador++
} while (mientras while se cumpla)
//si no llueve este se va ejecutar de nuevo el do
//si llueve esto se va dejar de ejecutar y va continuar el programa en la ninea
//fuera del do while
do {
	codigo que se ejecuta
} while (mietra se cumpla)




