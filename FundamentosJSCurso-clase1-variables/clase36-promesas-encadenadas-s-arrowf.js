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
