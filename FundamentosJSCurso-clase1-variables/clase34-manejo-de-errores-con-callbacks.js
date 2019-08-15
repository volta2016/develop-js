//vamos hacer este request para obtener los datos 
//para poder hacer este request tenemos que saber la url a la cual quermos acceder 
//esa url la vamos a poder guardar en una var 
const API_URL = 'https://swapi.co/api/'
//la parte de las personas y un id que todavia no conocemos pero que vamos a generar 
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}//idicamos a jquery que este request se va hacer hacia otra pag

//callback a esta funcion también la podemos llamar cv o fn
function obtenerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`     
    $
     .get(url, opts, callback )
     .fail(() => {
        console.log(`sucedio un error. No se pudo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function (personaje) {
     console.log(`hola, yo soy ${personaje.name}`)
        
    obtenerPersonaje(2, function(personaje) {
        console.log(`hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje){
            console.log(`hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje) {
                console.log(`hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje){
                    console.log(`hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function(personaje) {
                        console.log(`hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function(personaje){
                            console.log(`hola, yo soy ${personaje.name}`)
                        })
                    })
                })
            })
        })
    })
})
//esto es e asincrinismo de js en su maximo explendor entender que vamos a llamar a un metodo asincronico 
//en este caso multiple metodos asincornicos que no sabemos en que orden no van a llegar
//las respuestas eso simplemente depende del servidor y de cuanto tarda en responder cada
//uno de los request,  nosotros sabemos en que orden uniciamos los request pero no sabemos
//en que ornder no va a llegar podemos hacer obtener esto de multiples manera podemos
//hacer un for y obtener los primeros 100 personajes pero no los garantiza nada que el 
//orden que los pedimos sea el orden en el que llega 

// //_________pidiendo ingresar al usuario 
// const URL_BASE = "https://swapi.co/api/";
// const PEOPLE_SEARCH_URL = "people/?search="
// const OPTS = {crossDomain: true};

// const onSearchedPeopleResponse = (person) => (console.log(`El primer personaje encontrado fue: ${person.results[0].name}.`));

// function buscarPersonaje(personaje){
//     const URL = `${URL_BASE}${PEOPLE_SEARCH_URL}${personaje}`
//     $.get(URL,OPTS,onSearchedPeopleResponse);
// }

// var personajeBuscado = prompt(`Ingrese el personaje que desea buscar:\n("" para salir)`);
// buscarPersonaje(personajeBuscado);


//_____________pidiendo planete
// const API_URL ='https://swapi.co/api/'
// const PLANETA_URL = 'planets/:id'
// const OPTS = {crossDomain: true }

// const onresponse = function(planeta) {
//   console.log(`Hola, yo soy ${planeta.name}`)
// }
// function obtenerPLANETA(id) {
//   consturl = `${API_URL}${PLANETA_URL.replace(':id', id)}`
//   $.get(url, OPTS, onresponse)
// }

// obtenerPLANETA(1)
// obtenerPLANETA(2)
// obtenerPLANETA(3)
// obtenerPLANETA(4)
// obtenerPLANETA(5)


//_________Impresión de los 25 primeros personajes:

// const API_URL = 'https://swapi.co/api/'
// const PEOPLE_URL ='people/:id'

// const options = {crossDomain: true}
// const onePeopleResponse = function(people){
//   console.log(`Hola, yo soy ${people.name}`)
// }

// function obtenerPersonaje(id){
//   consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)} `
//   $.get(url, options, onePeopleResponse)
// }
// var contador = 0
// for(var i = 0; i < 25; i++){
//   contador++ //con esto le va sumando uno en teoria 
//   obtenerPersonaje(contador)
// }