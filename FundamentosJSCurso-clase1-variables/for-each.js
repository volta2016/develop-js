// let dwarves = ['bifur', 'bofur', 'bombur', 'fili', 'kili', 'oin', 'gloin', 'thorin', 'thorin', 'balin', 
// 'dwalin', 'nori', 'dori']

// // dwarves.forEach(output)


// dwarves.forEach(function(item, index, array){
//     if (item === 'thorin'){
//         item = item.toUpperCase()
//     } else {
//         item = item.toLowerCase()
//     }
//     console.log(index, item,)
// })


//3 parametros del forEach
// function output(item, index, array) {
    
// }

//programa::: 2
let nombres = ['Valentina', 'Alicia', 'Gabriel', 'Pedro']
    nombres.numero = 10 

// for(let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i])

// }
// //for clasico con break y continue
// for (let i = 0; i < nombres.length; i++) {
//  if (nombres[i] === 'Alicia ')
//     break
// }
// // break: lo que va a pasar es que el va saltar ese elemento y va a salir del loop for 
// for (let i = 0; i < nombres.length; i++) {
//     if (nombres[i] === 'Alicia ')
//        continue
//    }
//conclusión: for clasico poco legible y con las cosas que tenemos en 2019 se puede mejorar 
//analizamos el for Each
// analizamos el array.forEach(element => {
    
// });
//forEech nos permite iterar de la siguiente manera le tienes que pasar un array una lista ante del 
//array.forEach para que este funcione y como parametro tienes que pasarle una funcion,
//y como parametros a la funcion le tienes que pasarle el elemento el nombre del elemento.
//que se va utilizar para iterar sobre cada uno de los elementos del array. en este caso voy utilizar nombre
//en sentido singular que es lo que tiene sentido en mi mente.

// nombres.forEach((nombre) => {
//     console.log(nombre)
// })
//sintaxys resumida de arrow function
// nombres.forEach(nombre => console.log(nombre))
//retorno implicito podemos borrar los parantesis del parametro por que hay solo

//conclusión: claulidades que veo la sintaxys es mucho mas limpia que el for clasico.
//no puedes utilizar no continue ni break 
//sirve y dependde para que lo vayas a utilizar.

//for in: sytanxys es limpia sigue los lineamientos de los nuevos for loop que tenemos en ECMASCRIPTS
//vemos que estamos utilizando index como elemento para iterar sobre el array nombres 
//contra: si quiere iterar directamente sobre los elementos del loop esto es una contra por que tienes 
//que ultizar el index y  el array para poder iterar sobre estos elementos, pero si necesitas el index este
//for loop te va ser de gran ayuda.
//otra cosa sobr el for in. estamos agregando la propiedad de numero al array del nombres que va a pasar como
//nos damos cuenta el esta agregando ahora  el elemento 10 el numero 10, a pesar de que no este dentro de array
//tiembien itera los elementos que fueron agregados al prototipo del array que esta modificando el protipo y
//cualquier otro elemento que este modificando el array original como en este caso una propiedad es pro y contra
//al mismo tiempo, puedes utilizar continuo y break 

// for(const index in nombres) {
//     console.log(nombres[index])
// }

//for of: utilizamos nombre par aiterar y ya no necesitariamos el index, for of no muetra los elementos 
//que se agregan que se agregan al prototipo o ni propiedades extras que esten dentro del array original, si solo quiere iterar sobre lo elementos y ya este for of te va ser de gran 
//ayuda en muchos casos de la vida cotindiana te va tocar iterr sobre listas elementos continuo o break se puede usar

for(const nombre of nombres) {
    if (nombre === 'Gabriel') {
        continue
    }
    console.log(nombre)
}
 