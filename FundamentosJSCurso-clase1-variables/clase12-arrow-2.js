var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad.`)
  } else if (esMenorDeEdad(persona)) {
    console.log(`${persona.nombre} es menor de edad.`)
  }
}
imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(juan)


// :::other code::
//bota resultado::
// var Fernando = {
//   nombre:'Fernando',
//   apellido:'Hipster',
//   edad: 18,
//   ingeniero:false,
  
// }

// var Juan = {
//   nombre:'Juan',
//   apellido:'Gomez',
//   edad:13
// }
// const MAYORIA_DE_EDAD_EN_PERU = 18
// const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD_EN_PERU
// const esMenorDeEdad = (persona) => !esMayorDeEdad(persona)
// console.log(esMenorDeEdad(Fernando))
// console.log(esMenorDeEdad(Juan))

// :::resumen::: 
// var jin = {
//   nombre: "jin",
//   edad : 22
// };
// var ki = {
//     nombre:'ki',
//     edad: 17
// }

// const MAYORIA_EDAD = 18;

// function imprimirSiesMayorEdad(persona) {
//   if (esMayordeEdad(persona)) {
//     console.log(`${persona.nombre} es mayor de edad`);
//   } else {
//     console.log(`${persona.nombre} es menor de edad`);
//   }
// }

// const esMayordeEdad = ({ edad }) => edad >= MAYORIA_EDAD;
// //reto
// const esMenoredad = ({ edad }) => edad <= MAYORIA_EDAD;

// const permitirAcceso = persona => !esMayordeEdad(persona) ? console.log("ACCESO DE NEGADO"): console.log("ACCESO Permitido");

// permitirAcceso(jin)
// permitirAcceso(ki)
// imprimirSiesMayorEdad(jin)
// imprimirSiesMayorEdad(ki)

// :::resumen de los 3 sin declarar const menor de edad::

// var carlos = {
//     nombre: 'Carlos',
//     apellido: 'Guédez',
//     edad: 26,
//     ingeniero: true,
  
// }

// var david = {
//     nombre: 'David',
//     apellido: 'Rangel',
//     edad: 16,
//     ingeniero: false,
    
// }

// const MAYOR = 18;

// //funcion normal
// functionmayorDeEdad(persona){
//     return persona.edad >= MAYOR;
// }

// //otra forma de declarar una funcion es colocarla dentro de una variable
// const MAYOR_EDAD = function(persona){
//     return persona.edad >= MAYOR;
// }

// //arrow function
// const MAYOR_DE_EDAD = persona => persona.edad >= MAYOR;

// functionprofesiones(persona){

//     if(MAYOR_EDAD(persona)){
//         console.log('es mayor de edad');
//     }else{
//         console.log('eres menor de edad');
//     }

// }

// const ACCESO = ({ edad }) => {
//     if (!MAYOR_EDAD({ edad })) {
//         console.log('acceso denegado');
//     }else{
//         console.log('acceso permitido');
//     }
// }
// ver code
// const esMenorDeEdad = ({edad}) => ! esMayorDeEdad < MAYORIA_DE_EDAD

// functionimprimirSiEsMenorDeEdad(persona)
// {
//   console.log(`${persona.nombre} es:`)
//   if (esMenorDeEdad(persona))
//   {
//     console.log('Menor de edad')
//   }else
//   {
//     console.log('Mayor de edad')
//   }
// }
