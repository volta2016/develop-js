//HERENCIA ENTRE CLASES JavaScript
//Lo primero que tenemos que entender es que en Js no existen como tal las clases,
//lo que si existe son prototipos.
//Entendemos por prototipo a una función creadora, la cual acepta parámetros que definirán 
//las características de un objeto

function Gamer(nombre, score) {
    this.nombre = nombre
    this.score = score
}
//Sabemos que tenemos un prototipo llamado Jugador al cual vamos a utilizar para crear un nuevo objeto
var gamer1 = new Gamer('Eloy',320)
var gamer2 = new Gamer('Rey',900)

//Una vez creado nuestro objeto necesitamos agregar algún método a este. Un método no es más que otra función 
//que interactua con las caracteristicas de nuestro objeto por ejemplo saludar

Gamer.prototype.saludar = function () {
    console.log(`soy ${this.nombre} y soy un Jugador normal tengo ${this.score}`)
}

//El nombre del método será saludar y utilizará los paramertos definidos en el prototipo Jugador

//ATRIBUTO .prototype : es un atributo con el cuentan todas las funciones que indica que métodos 
//y parametros entiende


//Ahora bien ¿Qué y si queremos crear otro prototipo llamado JugadorExperto que herede los 
//parametros de Jugador (nuestro prototipo padre) ?

//HERENCIA PROTOTIPAL : en este caso JugadorExperto será un subtipo del prototipoGamer 
//que necesita heredar sus métodos y parametros

//Para ello necesitamos crear una función global que sea capaz de cambiar la Herencia que tiene 
//JugadorExperto por defecto. Entendamos la manera difícil de hacer esto para entenderlo por completo

//creamos la función que aceptará por parametro el prototipo/subtipo o (prototipoHijo) y el 
//prototipo/original o (prototipoPadre)

function heredaDe(prototipoHijo, prototipoPadre){
    //dentro de nuestra función de cambio de Herencia creamos una dummy function 
    //(función que no hace nada - le llaman noop o fn) 
    //e indicamos que su atributo .prototype apunte al .prototype del prototipoPadre
    var noop = function(){}
    noop.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new noop;
    prototipoHijo.prototype.constructor = prototipoHijo
}

//Y listo ! ya tenemos nuestra función para cambiar la herencia prototipal, lo unico que resta es 
//invocarla justo antes de que queramos cambiar la herencia, para ello y volviendo a nuestro ejemplo:
//invocaremos heredaDe() para heredar los métodos y parametros de Jugador en JugadorExperto

heredaDe(GamerExperto, Gamer)


function GamerExperto(nombre, score){
    this.nombre = nombre
    this.score = score
}

//utilizar método de prototipo padre y modificarlo, lo cuál creará un método en el subtipo que se 
//llame exactamente igual al método original del prototipoPadre pero con las modificaciones 
//sobrescritas o pisadas

GamerExperto.prototype.jugar = function(){
    console.log(`Soy ${this.nombre} y soy un Jugador Experto`)
}

