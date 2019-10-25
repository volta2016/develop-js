//arrays nos va permitir agrupar cierto tipo de dato por ejemplo 
//numero, letras, strings, objetos, boleanos, funciones etc.
//dentro de una coleccion. luego vamos a realizar ciertas operaciones
//dentro de esa colección.

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lyfszyc',
    altura: 1.72
}
var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}
var martin = {
    nombre: 'Martín',
    apellido: 'Perez',
    altura: 1.85
}
var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}
//pokemon objetos::
var raichu = {
    nombre: 'Raichu',
    tipo: 'eléctrico'
}
var bellsprout = {
    nombre: 'Bellsprout',
    tipo: 'planta'
}
var gengar = {
    nombre: 'Gengar',
    tipo: 'fantasma'
}
// para indicar que esto es un array vamos a indicar con signo corchete
//aca vamos a ir poniendo cada una de las variables que quiero que tengo
//mi array, podemos hacer de numeros, textos, objetos de funciones
//podemos incluso mezclar js nos permite
var personas = [sacha, alan, martin, dario, vicky, paula]

//Entonces para recorrerlo podemos hacer un ciclo for
//podemos comenzar nuesro contador en 0
//la propiedad length nos va inidcar cuantos elementos tiene var persona
//(la cantidad de personas que aya)
 
//luego lo que va hacer es ir guardandandolo por cada una vez que ejecutamos esto
//cada una de las personas utilizando el indice [i]que estamos usando en for
//para acceder a cada una de ellas que esta declarada en la var persona. 
//despues accedemos al objeto como template string
for (var i = 0; i < personas.length; ++i){
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura} mts`)
}

var pokemons = [raichu, bellsprout, gengar]

//en este caso aplicamos la var [i] que acceda al indice [i]
for (var i = 0; i < pokemons.length; ++i) {
    var pokemon = pokemons[i]
    //guardamos la iteracion del array pokemon cada una y luego entramos al atributo
    //por medio de console.log
    
    //detalles del objeto
    console.log(`${pokemon.nombre}es de tipo ${pokemon.tipo}`)

    // `${pokemon.nombre} es de tipo ${pokemon.tipo}`
}

//aclarando length
var x = 'Mozilla'
var empty = ''

console.log(`Mozilla is ${x.length} code units long`)
console.log(`the empty string has a length of ${empty.length}`)

//en num del programa pokemons
console.log(pokemons.length)





