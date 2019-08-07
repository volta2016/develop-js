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
const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain: true}//idicamos a jquery que este request se va hacer hacia otra pag 
//const opts = a este objeto
const onPeopleResponse = function (persona) {
    console.log(`hola yo soy ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)//por ultimo vamos estar poniendo nuestro famoso callback
//$get va a ser encargado de llamarla, cuando en un futuro cuando termine el request se va a llamar

