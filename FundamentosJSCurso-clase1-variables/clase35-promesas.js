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
 .then(function(personaje){
    console.log(`el personaje 1 es ${personaje.name}`)

 })
 .catch(onError)//estamos pasandoe el nombre de la funcion que se va ejecutar
 
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
