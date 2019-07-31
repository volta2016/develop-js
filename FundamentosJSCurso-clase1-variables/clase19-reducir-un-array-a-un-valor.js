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
    altura: 1.6
}

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura <= 1.6


var personas = [sacha, alan, martin, dario, vicky, paula]



//forma no mas proliga como funcion
// var personasBajas = personas.filter(esBaja = ({altura}) => altura <= 1.79)

const personaAlturaACms = persona => {
    //persona.altura = persona.altura * 100
    persona.altura *= 100
    return persona
}
//map lo que va hacer es ejecutar esta funcion por cada persona y retornar la persona entonces
// lo que va hacer es generarnos un nuevo array con estas personas con la atura en 100
//para que return el valor de las personas en 100 debemos envolver en parentesis después de la funcion

const pasarAlturaACms = persona => ({
       ...persona,
    altura: persona.altura * 100
})
//nos queda mas prolijo.
    // persona.altura = persona.altura * 100
    // persona.altura *= 100



var personasCms = personas.map(pasarAlturaACms)



console.log(personasCms)

