var carlos = { 
    nombre: 'Carlos', 
    edad: 37 
}
var denisse = { 
    nombre: 'Denisse', 
    edad: 17
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD ?
            `${persona.nombre} es mayor de edad` : `${persona.nombre} es menor de edad`

const puedeEntrar = ({ edad }) => !esMayorDeEdad ? 'Acceso Denegado' : 'Acceso Concedido'  





console.log(esMayorDeEdad(carlos))
console.log(puedeEntrar(denisse))