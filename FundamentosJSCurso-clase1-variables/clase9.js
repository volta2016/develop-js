var x = 4, y = '4'

var kyo = {
	nombre: 'kyo'
}


// var otraPersona = kyo
// aca corre como el mismo objeto. otraPersona y kyo apuntan al
// mismo lugar entonces se va modificar en los 2


var otraPersona = {
	nombre: 'kyo'
}
// tienen los 2 el atributo nombre con el valor kyo  pero son 
//diferentes objetos es otra posicion en memoria ram , 
//si lo hacemos como estaba antes 

//modificamos otra persona, tienen los mismos valores pero apuntan a 
//a diferentes direcciones en momoria ram kyo se sigue llamando kyo
// y otraPersona el valor que midifcamos que fue este otraPersona.nombre = 'Pepe'
//cambia kyo por Pepe


var jugador = {

nombre: 'riot',
edad: 20

}
// var jugador2 = jugador
var jugador2= {

    nombre: 'riot',
    edad: 20
}

if (jugador === jugador2) {
    console.log('Verdadero')
} else {
    console.log('Falso')
}