var carlos = { 
    nombre: 'Carlos', 
    edad: 37 
}
var denisse = { 
    nombre: 'Denisse', 
    edad: 17
}

var aux = true
var asignada = aux?'hola':'adios'
alert(asignada)
//si es verdadero me va a ejecutar lo que esta inmediatamente después del signo de interrogación
//si me contesta que no entonces : "los 2 puntos valen si no entonces voy a realizar lo que este"
//despues de los 2 puntos
const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD ?
            `${persona.nombre} es mayor de edad` : `${persona.nombre} es menor de edad`

const puedeEntrar = ({ edad }) => !esMayorDeEdad ? 'Acceso Denegado' : 'Acceso Concedido'  





console.log(esMayorDeEdad(carlos))
console.log(puedeEntrar(denisse))