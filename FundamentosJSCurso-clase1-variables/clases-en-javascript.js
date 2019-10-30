//anonima
// var Poligono = class {
//     constructor(alto, ancho){
//         this.alto = alto
//         this.ancho = ancho
//     }
// }
// //Nombrada
// var Poligono = class Poligono {
//     constructor(alto, ancho){
//         this.alto = alto
//         this.ancho = ancho

//     }
// }

// Modo estricto
// El cuerpo de las declaraciones de clase y las expresiones de clase son ejecutadas en modo estricto. 
// En otras palabras, el código escrito aquí está sujeto a una sintaxis más estricta para aumentar el 
// rendimiento, se arrojarán algunos errores silenciosos y algunas palabras clave están reservadas para 
// versiones futuras de ECMAScript.

// Constructor
// El método constructor es un método especial para crear e inicializar un objeto creado con una clase. 
// Solo puede haber un método especial con el nombre "constructor" en una clase. Si esta contiene mas de 
// una ocurrencia del método constructor, se arrojará un Error SyntaxError

// Un constructor puede usar la palabra reservada super para llamar al constructor de una superclase

//  Métodos protitipo::

// class Poligono {
//     constructor (height, width) {
//         this.height = height
//         this.width = width
//     }
//     //getter
//     get area() {
//         return this.calcArea()
//     }
//     //metodo
//     calcArea() {
//         return this.height * this.width
//     }
// }

// const cuadrado = new Poligono (10, 10)

// console.log(cuadrado.area)

//Métodos estáticos
// La palabra clave static define un método estático para una clase. 
// Los métodos estáticos son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia
// de clase. Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.
//La palabra clave static define un método estático para una clase.

//Descripción
//Los métodos estáticos son llamados sin instanciar su clase. Son habitualmente utilizados para 
//crear funciones para una aplicación.
// El siguiente ejemplo demuestra varias cosas. Una de ellas es cómo un método estático es 
// implementado en una clase, otra es que una clase con un miembro estático puede ser sub-claseada. 
// Finalmente demuestra cómo un método estático puede (y cómo no) ser llamado.

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes/static
// class Punto {
//     constructor(x, y){
//         this.x = x
//         this.y = y
//     }

//     static distancia(a, b) {
//         const dx = a.x - b.x
//         const dy = a.y - b.y
       
//         return Math.sqrt(dx * dx + dy * dy)
//     } 
    
// }
// console
// const p1 = new Punto(5, 5)
// const p2 = new Punto(10, 10)

// console.log(Punto.distancia(p1, p2))

//otro ejemplo de metodos estaticos 
// class Operaciones {
//     static sumar(x, y) {
//         return x + y
//     }
//     static resta(x, y) {
//         return x - y
//     }
// }
// conclusion del programa no hay necesidad de instanciar la classe, POR QUE por que solamente
// colocando static vamos a poder acceder directamente al metodo o la funcion.
// let op = new Operaciones()
// console.log(Operaciones.sumar(10,20))
// console.log(Operaciones.resta(50,20))
//"Boxing" con prototipos y métodos estáticos

// Cuando un métodos estático o del prototipo es llamado sin un objecto evaluado 
// "this" (o con "this" como booleano, cadena, número, undefined o null), entonces 
// el valor de "this" será undefined dentro de la funciona llamada. Autoboxing no ocurrirá. 
// El comportamiento será igual inclusive si se escribe el código en modo no estricto.

// class Animal {
//     hablar(){
//         return this 
//     }

//     static comer() {
//         return this
//     } 
// }

// let obj = new Animal()
// obj.hablar()// Animal {}
// let hablar = obj.hablar
// hablar()//undefined

// Animal.comer()// class Animal 
// let comer = Animal.comer 
// comer() //undefined

// Si se escribe el código del cuadro superior usando clases función tradicionales, 
// entonces autoboxing ocurrirara porque tomará valor de "this" sobre la función que es llamada.

// function Animal() { }

// Animal.prototype.hablar = function(){
//   return this;
// }

// Animal.comer = function() {
//   return this;
// }

// let obj = new Animal();
// let hablar = obj.hablar;
// hablar(); // global object

// let hablar = Animal.hablar;
// hablar(); // global object

// Subclases con extends
// La palabra clave extends es usada en declaraciones de clase o
// expresiones de clase para crear una clase hija.

class Animal {
    constructor(nombre) {
        this.nombre = nombre 
    }
    hablar(){
        console.log(`${this.nombre} hace ruido`)
    }
}

class Perro extends Animal {
    hablar() {
        console.log(`${this.nombre} ladra`)

    }
}
//creando el objeto instanciar la clase 
let pajaro = new Animal('diuka')
let perro = new Perro ('inuyasha')

perro.hablar()
pajaro.hablar()

//También se pueden extender las classes tradicionales basadas en funciones:
//clase tradicional 
//nuestro constructor o prototipo
function Animal(nombre) {
    this.nombre = nombre
}
en el prototipo declaramos la funcion 
Animal.prototype.hablar 



