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