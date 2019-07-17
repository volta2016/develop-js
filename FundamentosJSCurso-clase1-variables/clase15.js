var contador = 0 

const llueve = () => Math.random() < 0.25

//vamos hacer algo alguna una vez hasta que se cumpla la condicion 
// si este de código de abajo que es el while se cumple este códogo
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
// si no llueve do se va ejecutar de nuevo, si no llueve
// va dejar de ejecutar y va entrar el programa en la linea
// 11

