//sin arrow function y sin template string

const API_URL = 'https://swapi.co/api/'
//la parte de las personas y un id que todavia no conocemos pero que vamos a generar 
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

function obtenerPersonaje (id) {
   return new Promise((resolve,reject) => {
     const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`     
     $
     .get(url, opts, function(data) {
        resolve(data)
     })
     .fail(() => reject(id))  
    })
}

function onError(id) {
    console.log(`sucedio un error al obtener al personaje ${id}`)
}

//lo que vamos hacer es generar un vuevo array con
//multiples promesas "donde cada elemento del array sea una promesa" que promesa
//la de obtenerPersonaje con cierto id

// var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(function (id){
//     return obtenerPersonaje(id)
// })

//vamos a ver otra forma de escribir esto: con arrow function
var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map( id => obtenerPersonaje(id))

//como obtenemos los valores de esta promesa cuando se resuelvan

Promise
 .all(promesas)
 .then(personajes => console.log(personajes))
 .catch(onError)

//las promesas tienen un gran potencia por sobre los callback
//:::::::::ejemplo con planetas id

// const SW_API_URL = 'https://swapi.co/api/'
// const PLANETA_URL = 'planets/:id'

// const CONNECTION = { crossDomain: true}

// function obtenerPlanetas(id) {
//   return new Promise((resolve,reject)=>{
//     const URL_SW = `${SW_API_URL}${PLANETA_URL.replace(':id',id)}`
//     $
//      .get(URL_SW,CONNECTION,function (planeta) {
//        resolve(planeta)
//      })
//      .fail(()=>reject(id))
//   })
// }

// var Planetas = [1,2,3,4,5,6,7,8,9,10]

// var Promesas_Planetas = Planetas.map( (numero) => obtenerPlanetas(numero))

// function PlanetaSuccess(planeta) {
//   for (var i = 0; i < planeta.length; i++) {
//     console.log(`El planeta ${i+1} es ${planeta[i].name}`)
//   }
// }

// function PlanetaReject(id) {
//   console.log(`Error al obtener el planeta ${id}`)
// }

// Promise
//  .all(Promesas_Planetas)
//  .then(PlanetaSuccess)
//  .catch(PlanetaReject)
///::::otro ejemplo con fetch
// const URL ='https://swapi.co/api/people/:id';

// function obtenerPersonajeid(ids){
//    let id = ids;
//     return new Promise((resolve, reject) => {
//       fetch(`${URL.replace(':id', id)}`)
//       .then( response => resolve(response.json())) 
//       .catch(err => {  
//         var error = `${err} Reference id #${id}`;
//         reject(error);
//       })
//     })
// }

// var ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var promesas = ids.map(ids => obtenerPersonajeid(ids));

// Promise
// .all( promesas )
//  .then( Personaje => {
//     Personaje.forEach((personaje, index) => {
//       console.log(`EL PERSONAJE ${index + 1} ES: ${personaje.name}`);
//     })
//  })
//  .catch( error => {
//    console.log(`HA OCURRIDO UN ERROR -> ${error}`);
//  }); 
// obtenerPersonaje(1)
//  .then(personaje1 => {
//     console.log(`el personaje 1 es ${personaje1.name}`)
//     return obtenerPersonaje(2)
//  })
//  .then(personaje2 =>{
//     console.log(`el personaje 2 es ${personaje2.name}`)
//     return obtenerPersonaje(3)
//  })
//  .then(personaje3 =>{
//     console.log(`el personaje 3 es ${personaje3.name}`)
//     return obtenerPersonaje(4)//pedimos al personaje 4 cuando llegue pasamos al .then(personaje4)
//  })
//   .then(personaje4 =>{
//     console.log(`el personaje 4 es ${personaje4.name}`)
//     return obtenerPersonaje(5)
//  })
//  .then(personaje5 =>{
//     console.log(`el personaje 5 es ${personaje5.name}`)
//     return obtenerPersonaje(6)
//  })
//  .then(personaje6 =>{
//     console.log(`el personaje 6 es ${personaje6.name}`)
//     return obtenerPersonaje(7)
//  })
//  .then(personaje7 =>{
//     console.log(`el personaje 7 es ${personaje7.name}`)
//  })
//  .catch(onError)

