//sin arrow function y sin template string

const SW_API_URL = 'https://swapi.co/api/'
const PLANETA_URL = 'planets/:id'

const CONNECTION = { crossDomain: true}

function obtenerPlanetas(id) {
  returnnewPromise((resolve,reject)=>{
    const URL_SW = `${SW_API_URL}${PLANETA_URL.replace(':id',id)}`
    $
     .get(URL_SW,CONNECTION,function (planeta) {
        resolve(planeta)
     })
     .fail((id) => reject(id))
  })
}

function Error_Planeta(id) {
  console.log(`Error al obtener planeta ${id}`)
}

obtenerPlanetas(1)
  .then(function (planeta1) {
    console.log(planeta1.name)
    return obtenerPlanetas(2)
  })
  .then(function (planeta2) {
    console.log(planeta2.name)
    return obtenerPlanetas(3)
  })
  .then(function (planeta3) {
    console.log(planeta3.name)
    return obtenerPlanetas(4)
  })
  .then(function (planeta4) {
    console.log(planeta4.name)
  })
  .catch(Error_Planeta)

  //_____::::::::
//resumen
// const API_URL ='https://swapi.co/api/'
// const PLANETA_URL = 'planets/:id'//apigrupo de objetos que trabajaremos
// const OPTS = {crossDomain: true }

// //armando la funcion para obtener el id del grupo de planeta que vamos a obtener
// function obtenerPLANETA(id) {
//     //retornamos y armamos la promesa que esya se tiene 2 estados 2 parametros
//   return new Promise ( (resolve, reject) => {
//     const url = `${API_URL}${PLANETA_URL.replace(':id', id)}`
//     //lo que vamos hacer con la data que nos llegue es resolver la promesa, es decir
//     //cuando la funcion se ejecute vamos a llamar recién al data al resolve es decir al
//     //al planeta
//     $
//       .get(url, OPTS, function (data) {
//           resolve(data)
//       })
//       .fail( () => reject (id) )
// } )
// }
// function onError(id) {
//   console.log(`Sucedio un error al obtener el planeta ${id}`)
// }
// //armamos la funcion del catch para luego invocarla despues del then

// //oy a pasarle la función obtener obtenerPLANETA pasándole el id que me interesa, 
// //no hay  ningún segundo parámetro ya que la forma de obtener el valor que esperamos 
// //de una promesa es llamando al .then 
// //aplicamos la funcion que se resuelve exitosamente al .then armando una arrow 
// //fuction mas el console del persona 

// //acá hay algo bastante clave que acá el primer .then va a ser el personaje1 y dentro del consolé.log va ir ${personaje1.name} y así sucesivamente para el .then del 
// //return obtenerPersonaje(2)

// //“Cuando obtengamos el return obtenerPersonaje(2) dentro del .then del personaje1" 
// //y cuando obtengamos el valor de return obtenerPersonaje(2) este valor va a ser el 
// //personaje de acá .then(personaje2  => {
// //})

// obtenerPLANETA(1)
//   .then((planeta1) => {
//     console.log(`El planeta 1 es ${planeta1.name}.`)
//     return obtenerPLANETA(2)
//   })
//   .then(planeta2 => {
//     console.log(`El planeta 2 es ${planeta2.name}.`)
//     return obtenerPLANETA(3)
//   })
//   .then(planeta3 => {
//     console.log(`El planeta 3 es ${planeta3.name}.`)
//     return obtenerPLANETA(4)
//   })
//   .then(planeta4 => {
//     console.log(`El planeta 4 es ${planeta4.name}.`)
//   })
//   .catch(onError)//estamos pasandoe el nombre de la funcion que se va ejecutar
//   //Y si sucede algún error vamos vamos a utilizar la función .catch(onError)

