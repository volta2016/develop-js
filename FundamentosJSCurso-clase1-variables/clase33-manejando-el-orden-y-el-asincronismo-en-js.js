//vamos hacer este request para obtener los datos 
//para poder hacer este request tenemos que saber la url a la cual quermos acceder 
//esa url la vamos a poder guardar en una var 
const API_URL = 'https://swapi.co/api/'
//la parte de las personas y un id que todavia no conocemos pero que vamos a generar 
const PEOPLE_URL = 'people/:id'

//para poder hacer un request con jquery tenemos que llamar al metodo $.get
//este metodo nos prermite hacer un request y acepta varios parametros.
//1-.el primero de los parametros va hacer la url a la cual queremos acceder en este caso
//va hacer la url completa en primer lugar queremos obtener a Luke Skywalker y que se encuentra
//en people 1, //**entonces vamos a llamar al metodo que tienen todo los string. que .replace
//y le tenemos que decir que strings queremos que cambie en este caso :id y por que strings
//queremos que cambie a 1
//tenemos que remplazar el :id por un id valido en caso de luke es el 1
//js lo reconoce como numero pero lo pasa a string
//$.get(`${$API_URL}${PEOPLE_URL.replace(':id', 1)}`)
//esto todo lo que esta aca es parametro de la funcion peso get de jquery
//2-. el segundo parametro es indicarle a jquery que este request se va hacer hacia
//otra pagina no es la pagina actual no es el archivo que tenemos aca, etonces eso lo 
//hacemos con una "," y poniendo un objeto podemos poner varias opciones que queremos
//decirle a jquery pero la que nos intereza es {cross domain : true}
//Ahora al ultimo vamos estas poniendo nuestro famoso callback.
//que es un callback es una funcion que se va ejecutar en algún futuro que no sabemos
//cuando se va ejecutar pero que este peso $.get va ser el encargado de llamarla.
//cuando en un futuro cuando termine el request se v a lamar tambien puede ser que ese 
//request nunca se complete la funcion nunca se llame (pero lo qu tenemos que enteder 
//es que esta funcion puedo o no llamarse en algún futuro con los datos que nos mande
//el request de respuesta), entonces lo que hacemos es poner una funcion directamente acá 
//anonima y vamos a ver que parametros nos llega no sabemos cuanto paramtos nos llegue
//en principio.
//vamos a cortar la funcion que invocamos en el get y vamos aplicarle en el onResponse

const opts = {crossDomain: true}//idicamos a jquery que este request se va hacer hacia otra pag

//callback a esta funcion también la podemos llamar cv o fn
function obtenerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` //entonces vamos a llamar al metodo que tienen todo los string. que .replace
//ahora el $.get termina ejecutando esta funcion que esta definida por parametros.    
    $.get(url, opts, function (persona) {
        console.log(`hola, yo soy ${persona.name}`)
        if (callback) {
            callback()
        }
})
}
obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6, function() {
                        obtenerPersonaje(7)
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