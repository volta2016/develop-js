var jhonatan = {
  nombre:'Jhonatan',
  altura :1.85
}

var Alexander = {
  nombre: 'Alexander',
  altura :1.80
}

var Javier = {
  nombre: 'Javier',
  altura :1.65
}

var Alberto = {
  nombre: 'Alberto',
  altura :1.75
}

const ALTO = 1.85

var personas = [jhonatan,Alexander,Javier,Alberto]

const esAlta= ({ altura}) => altura >= ALTO
const esBaja = ({altura})=> altura < ALTO





var PersonasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log('Las personas altas fueron: ')
for(var i = 0; i<PersonasAltas.length; i++){
  console.log(` ${PersonasAltas[i].nombre} con una altura de  ${PersonasAltas[i].altura}`)
}

console.log('Las personas bajas fueron:')
for(var i = 0; i<personasBajas.length; i++){
  console.log(` ${personasBajas[i].nombre} con una altura de  ${personasBajas[i].altura}`)
}


