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
    nombre: 'Alan',
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
// para indicar que esto es un array vamos a indicar con signo corchete
//aca vamos a ir poniendo cada una de las variables que quiero que tengo
//mi array, podemos hacer de numeros, textos, objetos de funciones
//podemos incluso mezclar js nos permite
var personas = [sacha, alan, martin, dario, vicky, paula]

//Entonces para recorrerlo podemos hacer un ciclo for
//la propiedad length no va inidcar cuantos elementos tiene.
// y luego lo que va hacer es ir guardandandolo por cada una vez que ejecutamos esto
// cada una de las personas utilizando el indice [i]que estamos usando en for
// para acceder a cada una de ellas que esta declara en la var persona. 
for (var i = 0; i < personas.length; ++i){
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura}mts`)
}

