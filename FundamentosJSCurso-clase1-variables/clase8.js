var sasuke = {
	nombre : 'Sasuke',
	apellido : 'Uchiha',
	edad : 19
}
var itachi = {
	nombre : 'Itachi',
	apellido : 'Uchiha',
	edad : 21
}


//función destructurar obj
function imprimirNombreEnMayuscula(persona) {
	//var nombre = persona.nombre
	var {nombre} = persona
	var {apellido} = persona
	var {edad} = persona
	console.log(`hola me llamo ${nombre} ${apellido} y tengo y tengo ${edad} `)

}

/*resumen: 
los objetos que pasamos como parametros se pasan por referecia (eso quiere decir que si los modificamos dentro del cuerpo de una
funcion su valor se va ver modificado de fuera de esa funcion )
que podemos hacer con esto podemos hacer 2 cosas 
1-. lo dejamos asi como esta y decimos que esta funcion va a tener ese efecto de helado(side effect) que puede ser lo que queramos
que podemos decir ok el objeto que le pasamos queremos que se vea modificado despues de pasarle la funcion. 
2-. o tambien podemos devolver un nuevo objeto, y este nuevo objeto podria tener todo lo mismo de la persona excepto la edad
que deberia ser + 1
entonces lo que podemos hacer retornar de esta funcion un objeto nuevo, copiando todo lo que tenia el objeto anterior 
eso lo hacemos de la siguiente manera:
...persona 
es decir desglosamos a la persona dentro de este nuevo obj pero podemos pisar algunos de sus atributos podemos incorporar nuevos
también si quisieramos pero si quermos podemos modificar la edad por ejemplo diciendo que sea.
entonces lo que va hacer el return es devolvernos (un nuevo objeto)una persona mas vieja que va tener una edad + 1 que la anterior 
*/

imprimirNombreEnMayuscula(sasuke)
imprimirNombreEnMayuscula(itachi)
//imprime la funcion en consola
//lo que estamos haciendo es crear un nuevo objeto modificado
//modifica edad le pasa +1 pero no afecta al sasuke de alcance global
//hay que dejar el ejemplo como estava persona ya que tenia como parametro edad
function cumpleanos(persona){
	// console.log(`sasuke mas viejo edad: ${persona.edad}`)
	//... los 3 puntos que usa para crear nuevos obj se llaman  spread operator
	// return {
	// 	...persona,
	// 	edad: persona.edad + 1
	// }
	// new object
	// persona.edad += 1
	return {
		...persona, 
		apellido: 'zero',
		edad : persona.edad + 1 
	}
}
// Spread Operator: permite propagar la información del objeto hacia un nuevo destino (se crea una copia). 
//Es decir, todas sus propiedades y valores ahora forman parte de este nuevo objeto

var sasukeMasViejo = cumpleanos(sasuke) 
console.log(sasukeMasViejo.edad)

// de esta forma estoy pisando los atributos de los objetos
// function apellido(persona){ //recibir el objeto
// 	return{ 
// 		...persona,
// 		apellido:'hola soy yo',
// 		edad:persona.edad + 3
// 	}
// }
