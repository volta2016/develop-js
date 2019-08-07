//Clases en JavaScript
//de esta manera vamos a decir que  va existir la class persona y que va a tener un metodo llamado 
//constructor que es el que se va ejecutar cuando creemos objetos  de esta clase ademas vamos agregar
//el saludar.
//___vemos que aca no hace falta la palabra function 
class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var { nombre, apellido} = this 
        // var nombre = this.nombre
        // var apellido = this.apellido
        console.log(`hola, me llamo: ${nombre} ${apellido}`)
        //preguntamos de esta manera si esta funcion tiene un valor es decir si nos pasaron un valor en
        //saludar(fn) este bloque de codigo se va ejecutar es decir esta condicion va ser verdadera,
        //si acá no nos pasaron nada entonces no se va ejecutar y esta condicion va a ser falsa.
        //otros ejemplos (null) va a ser siempre false (0) va a ser siempre false. si tenemos algun valor que 
        //de 0 va a dar siempre false, cualquier cosa ({}) un objeto que este vacio va a ser verdadero, 
        //un array([]) aunque este vacio va a ser verdadero, un strigs ('jkhkj')va a ser verdadro (ya un strins)
        //vacio no. 
        //*una funcion existe si nos pasan algo va a da verdadero dentro de una condición.
        //si no estamos pasando nada saludar() y el if va terminando siendo undifined dentro de un 
        //if es falso. entonces si existe esta funcion la vamos a llamar simplemente poniendo el nombre y los
        //parentesis como si la estuvieramos llamando.
        //o simplemente omitimos ese parametro undifined evaluado como una condicion va a dar false
        if (fn) {
            fn(nombre, apellido) //podemos definirlo como false o no definirlo por que no es dev la persona
        }
    }
        soyAlto() {
            return this.altura > 1.8
        }
}

//**ahora vamos a saludar de persona lo que vamos hacer es recibir como parametro esta funcion 
//podemos ponerle al paremetro "el nombre que nosotros queramos fn por ejemplo, entonces lo que 
//vamos hacer es que esta funcion sea opcional, tal vez nos la mandan o tal vez no"
//a sahca podemos no mandarsela y borramos *responderSaludo este debe funcionar correctamente
//se le responde a erika y arturo
//**entonces vamos a ir al saludar y vamos a preguntar dentro de la funcion con un if si nos 
//algo aqui dentro de la funcion puede ser que esta funcion no lo venga nada entonces
//tenemos que preguntar si esta funcion esta definida


//como aplicamos la herencia: ante de las llaves le vamos a poner la parte de la herencia 
//como hacemos que herede de otra clase lo que se llama herencia acá se llama extension,
//vamos a decir que esta clase extiende de Persona
class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super (nombre, apellido, altura)//para llamar al constructor de la clase padre debemos utilizar super
        //a partir de acá podemos llamar a this sin super js lo marca como un erros
        // this.nombre = nombre
        // this.apellido = apellido
        // this.altura = altura
    }

    saludar(fn) {
        var { nombre, apellido} = this //definimos this que resume el code de aplicarlo en console.log
        
        console.log(`hola me llamo ${nombre} ${apellido} y soy desarrolador/a`)
        if (fn) {
            fn(nombre, apellido, true) //aca aplcamos true para que nos diga yo si soy dev
        }
    }

}
//para eso vamos a crear una funcion 
// y despues queremos decirle a mira no sabia que eres desarrollador entonces de donde sacamos 
//el nombre y el apellido, bueno en esta funcion no va a llegar por parametro.
//ademas vamos a enviar un boleano que sea un true o false que no va a decir si es dev o no
//despues vamos a preguntar si es Dev o no.
//lo que vamos a hacer ahora es pasar nuestra funcion responderSaludo a la funcion saludar como parametro

function responderSaludo (nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`ah mirá, no sabia que eras desarrollador/a`)
    }

}


var sacha = new Persona('Sacha', 'lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.90)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)



//nos lanza un error que nos dice debemos llamar al constructor super antes de acceder a this
//lo que significa que no podemos utilizar this hasta que no hallamos llamado al constructor
//De la clase padre y para llamar al constructor de la clase padre.

//Para llamar al constructor de clase padre: tenemos que utilizar la palabra super a super le
//pasamos:  super (nombre, apellido, altura)









//vamos a pisar la funcion que tenia la persona
//entonces el saludo de los desarrolladores va a ser distinto 
//el resto tambien queremos que tenga los otros metodos que tiene el prototipo persona()
//es decir soy alto ¿como hacemos para el prototipo tenga la herencia prototipal y heredeDe
//otro prototipo? en resumen que desarrollador() herede de persona()
//ir a linea 10 ...
// Desarrollador.prototype.saludar = function () {
    
// }
//lo que nosotros queremos hacer ante de empezar a utilizar nuestros objetos
//y crear objetos de nuestros prototipos
//vamos a querer llamar esta funcion - primero la clase hija y luego la clase padre
//mejor dicho el protitipo padre persona()
//y ahora si vamos a definir la funcion heredaDe


// var soyAlto = persona => persona.altura >= 1.80

// arturo.soyAlto()
// arturo.saludar()

//__orden:
//function 
//var
//function()invocar
//en conlusión no se pueden usar prototipos en array function 


// si lo definimos como arrow function sale this del new object como undefinded

// ::applied form  teacher::
//lo que tenemos que entender es que el prototipo es un objeto mas dentro de js
//si lo modificamos, en una cierta altura del codigo y partir de ahi va quedar 
//modificado 

// Persona.prototype.soyAlto = function () {
//      return this.altura > 1.8
//  }
//para transformar en arrow sacamos function aplicams () sacamos {}
//y borramos return

// la aplicamos como arrow function

// Persona.prototype.soyAlto = () =>  this.altura > 1.8
//dejamos el codigo hasta con un bug lo unico que hemos hecho fue pasar una funcion 
//a arrow function.
//que pasa con las arrow function ? que pasa con el this dentro de ellas?
//vamos a volverlo a estado anterior y aplicamos un debugger

//Lo que pasa con las arrow function 
//Asigna esta función pero cambia el this dentro de la función.
//(dentro de las llaves)
//Lo que hace es que el this va apuntar al this que este afuera  
//de esta función acá o sea a linea  fuera del function.
// Persona.prototype.soyAlto = () => {
//   debugger
//   return this.altura > 1.8
// }
// this === window //esto es true en consola

