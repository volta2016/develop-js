//arrays nos va permitir agrupar cierto tipo de dato por ejemplo 
//numero, letras, strings, objetos, boleanos, funciones etc.
//dentro de una coleccion. luego vamos a realizar ciertas operaciones
//dentro de esa colección.

//____como filtrar elementos de los arrays_____//
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
//definimos el arrow function esta condicion va ir resiviendo, cada uno
//de los elementos del array.Entonces filter va  iterar por nosotros el array
//y pasando cada uno de los elementos, etonces lo que tenemos que hacer es 
//return si esta persona cumple la condicion de ser alta o no y esa condicion
//la estamos definiendo en el "arrow".
//entonces lo que tenemos que return si la persona mide mas de 1.80
//vamos a dejar mas prolijo el arrow function , en las arrow que solo tenemos
//un solo parametro no hace falta los parentesis así que lo vamos a quitar.
//y luego si solo lo que estamos haciendo en la funcion es un return de algo
//no hacen falta las llaves
const esAlta = ({persona}) => altura > 1.8

//si queremos mejorar nuestro arrow un poco mas lo podemos desglosar
//acedemos a la altura y preguntamos por altura en la condición

// para indicar que esto es un array vamos a indicar con signo corchete
//aca vamos a ir poniendo cada una de las variables que quiero que tengo
//mi array, podemos hacer de numeros, textos, objetos de funciones
//podemos incluso mezclar js nos permite
var personas = [sacha, alan, martin, dario, vicky, paula]

//para "filtrar siempre necesitamos 2 cosas un array y una condicion"
//y esa condición va ser una función.
//vamos a poner en una variable a las personasAltas y lo que vamos hacer
//y lo que vamos hacer sobre el array original de personas la función filter
//ahora bien esta funcion filter lo que lleva como parametro es una condicion
//
var personasAltas = personas.filter(esAlta)
//otra forma de declarar el filter.dentro del parametro es donde definimos
//la función muchas veces ultilizamos un funcion anonima dentro del filter
//donde ponemos la persona acá y el return. Esto funciona igual
//PERO ES MAS PROLIGO TENER LA CONDICIÓN POR SEPARADO EN VEZ DE PONER 
//LA FUNCIÓN ANONIMA
// var personasAltas = personas.filter(function(persona) {
//     return persona.altura > 1.8
// })
//tenemos que tener en cuenta que filter nos va devolver un nuevo array
//seguimos teniendo el array original no lo perdemos.

console.log(personasAltas)

