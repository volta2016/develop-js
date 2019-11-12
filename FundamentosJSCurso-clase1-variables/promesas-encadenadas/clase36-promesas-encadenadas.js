   //vamos hacer este request para obtener los datos 
//para poder hacer este request tenemos que saber la url a la cual quermos acceder 
//esa url la vamos a poder guardar en una var 
const API_URL = 'https://swapi.co/api/'
//la parte de las personas y un id que todavia no conocemos pero que vamos a generar 
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}//idicamos a jquery que este request se va hacer hacia otra pag

//callback a esta funcion también la podemos llamar cv o fn
function obtenerPersonaje (id) {
   return new Promise((resolve,reject) => {
     const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`     
     $
     .get(url, opts, function (data) {
        resolve(data)
     })
     .fail(() => reject(id))  
    })
}

function onError(id) {
    console.log(`sucedio un error al obtener al personaje ${id}`)
}

obtenerPersonaje(1)
 .then(personaje1 => {
    console.log(`el personaje 1 es ${personaje1.name}`)
    return obtenerPersonaje(2)
 })
 .then(personaje2 =>{
    console.log(`el personaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(3)
 })
 .then(personaje3 =>{
    console.log(`el personaje 3 es ${personaje3.name}`)
    return obtenerPersonaje(4)//pedimos al personaje 4 cuando llegue pasamos al .then(personaje4)
 })
  .then(personaje4 =>{
    console.log(`el personaje 4 es ${personaje4.name}`)
    return obtenerPersonaje(5)
 })
 .then(personaje5 =>{
    console.log(`el personaje 5 es ${personaje5.name}`)
    return obtenerPersonaje(6)
 })
 .then(personaje6 =>{
    console.log(`el personaje 6 es ${personaje6.name}`)
    return obtenerPersonaje(7)
 })
 .then(personaje7 =>{
    console.log(`el personaje 7 es ${personaje7.name}`)
 })
 .catch(onError)

//aplicando for con promesas aca incocamos y mostramos la respuesta asincrona
// for (i = 1; i < 7; i++) {
//    obtenerPersonaje(i)
//      .then( function(personaje){
//         console.log(`El personaje ${i} es ${personaje.name}`)
//         return obtenerPersonaje(i+1)
//      })
//      .catch(onError)
// }

 
// obtenerPersonaje(1, function (personaje) {
//      console.log(`hola, yo soy ${personaje.name}`)
// })


// /** PROMESA: Callback o llamada a un Servicio Web que devuelve 'algo' para ser usado en mi app */
// const SEGUNDOS = 10000;
// let timeout = Math.random() * SEGUNDOS
// const getUser = newPromise(function (promesaExitosa, promesaRechazada){  /** Promise: recibe una función como parámetro que a su vez recibe dos funciones como parámetro */
//     if(timeout < 6000) {
//         setTimeout(function(){
//             promesaExitosa()
//         }, timeout)
//     } else {
//         setTimeout(function() {
//             promesaRechazada('Se acabó el tiempo')
//         },5000)
//     }
// })
// //console.log(timeout) /** Para saber cuánto tiempo tarda */
// getUser
//     .then(function() {
//         console.log('Promesa exitosa!!')
//     })
//     .catch(function(message) {
//         console.log(message)
//     })
