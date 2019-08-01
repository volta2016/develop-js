//El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, 
//que son objetos tipo lista de alto nivel.

//Crear un Array

var frutas = ['Manzana', 'Banana']
console.log(frutas.length)
//La propiedad length de un objeto String representa la longitud de una cadena, 
//en unidades de código

//::La propiedad length de un objeto que es una instancia de tipo Array establece
//::o devuelve la cantidad de elementos en esa matriz. El valor es un entero sin signo 
//::de 32 bits que siempre es numéricamente mayor que el índice más alto en la matriz.
//otro ejemplo
//var clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);

//::Acceder (por índice) a un elemento Array::
var primero = frutas[0]
var ultimo = frutas[frutas.length - 1]//ultimo elemento
console.log(primero,ultimo)
//::Añadir elemento al final de un Array:: si estuviera al ultimo el push no lo lee el 
//forEach
var nuevaLongitud = frutas.push('Naranja')
//::eliminar elemento final de un array::
var ultimo = frutas.pop();//elimina naranja del final

//::eliminar elemento del inicio de un array::
var ultimo = frutas.shift(); //elimina manzana del inicio

//::Añadir elemento al inicio de un Array::
var nuevaLongitud = frutas.unshift('Fresa')

//::Encontrar el índice de un elemento en el Array::
var pos = frutas.indexOf('Banana')

//::Eliminar un elemento con el índice de posición::
var elementoEliminado = frutas.splice(pos, 1)


//::Eliminar elementos con el índice de posición::

var vegetales = ['Repollo', 'Nabo', 'Rabano', 'Zanahoria']
console.log(vegetales)
var pos = 1, n = 2
var elementoEliminado = vegetales.splice(pos, n);
// así es como se eliminan elementos, n define la cantidad de elementos a eliminar,
// de esa posicion(pos) en adelante hasta el final del array.
console.log(vegetales)
// ["Repollo", "Zanahoria"] (el array original ha cambiado)
console.log(elementoEliminado)
// ["Nabo", "Rábano"]

//::Copiar un Array::
var copiaSuperficial = frutas.slice()
// esta es la forma de crear una copia

//::Bucle sobre un Array::
frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice, array);
})

//elementoN
//Un array de JavaScript es inicializado con los elementos dados, exceptuando el 
//caso cuando un solo argumento es dado al constructor del objeto Array y ese objeto 
//es un número (ver el parámetro longitudDelArray abajo). Tenga en cuenta que este caso 
//especial solo aplica a los arrays de JavaScript creados con el constructor Array, no con 
//arrays literales creados con la sintaxis de paréntesis.

//longitudDelArray
//Si el único argumento dado al constructor de Array  es un entero entre 0 y 232-1 
//(inclusive), este retorna un nuevo array de JavaScript con la propiedad length 
//establecida en ese número (Nota: esto implica un array de longitud arrayLength con 
//espacios vacíos, no de espacios con el valor undefined).  Si el argumento es 
//cualquier otro número, una excepción del tipo RangeError es lanzada.

//::El siguiente ejemplo crea un objeto Array con una matriz unidimensional de textos, 
//::la matriz unidimensional bebidas contiene tres elementos y una longitud de tres:
var bebidas = ["Café", "Té", "Chocolate"];


//Puede contruir una matriz unidimensional de dos o más elementos comenzando con 
//el índice 0 si define valores iniciales para todos los elementos. El siguiente 
//código crea una matriz unidimensional con tres elementos:

miMatriz = new Array("Hola", miVariable, 3.14159);

//Indexando una matriz unidimensional
//Indexe una matriz unidimensional por sus números ordinales. Por ejemplo, se asume 
//que define la siguiente matriz unidimensional:

miMatriz = new Array("Viento", "Lluvia", "Fuego");

//Puede referirse a los elementos de esta forma:

//miMatriz[0] es el primer elemento
//miMatriz[1] es el segundo elemento
//miMatriz[2] es el tercer elemento

//Especificando un sólo parámetroSección
//Cuando especifica un único parámetro numérico con el constructor de un Array, 
//especifica la longitud inicial de la matriz unidimensional. El siguiente código 
//crea una matriz unidimensional de cinco elementos:

Métodoconstructor = new Array(5)
//El comportamiento del constructor de un  Array depende de si el único parámetro es un número.


//El siguiente código crea una matriz unidimensional de longitud 25, luego asigna los valores para los tres primeros elementos:

Tipomúsica = new Array(25);
Tipomúsica[0] = "R&B";
Tipomúsica[1] = "Blues";
Tipomúsica[2] = "Jazz";

//Incrementar la longitud de una matriz unidimensional indirectamente

//La longitud de una matriz unidimensional se incrementa si se asigna un 
//valor a un elemento mayor que la longitud actual de una matriz unidimensional. 
//El siguiente código crea una matriz unidimensional de longitud cero 0, luego asigna 
//un valor al elemento 99. Esto cambia la longitudo de una matriz unidimensional a 100.

colores = new Array();
colores[99] = "amarillopatito";

// Coincidencia de una d seguida de uno o más b seguida de una d
// Recordar las coincidencias de b y la siguiente d
// Ignorar el resto del caso

var miExpresionRegular = /d(b+)(d)/i;
var miMatriz  = miexpresiónRegular.exec("cdbBdbsbz");

//Propiedad/Elemento  Descripción Ejemplo

//input   Una propiedad sólo de lectura que refleja la cadena original con la expresión regular que fue coincidente.  cdbBdbsbz

//index   Una propiedad sólo de lectura que está basada en cero su índice de las cadenas coincidentes.    1
//[0] Un elemento sólo de lectura que especifica los últimos caracteres coincidentes. dbBd

//[1], ...[n] Elemento sólo de lectura que especifica las cadenas coincidentes parentizadas, si son incluidas en la expresión regular. El número de las posibles cadenas parentizadas es ilimitado.   [1]: bB
//[2]: d
// ::::propiedades:::
// Array.constructor
// Especifica la función que crea un prototipo de Objeto.
// Array.length
// Refleja el número de elementos en una matriz unidimensional.
// Array.prototype
// Permite la adición de propiedades a todos los objetos.

// MétodosSección
// Array.from()
// Crea un nuevo Array de un objeto iterable o parecido a un array.
// Array.isArray()
// Devuelve true si una variable es un Array, de lo contrario devuelve false.
// Array.observe() 
// Observa los cambios del Array asincronicamente, similar a Object.observe() para los objetos. Provee un flujo de cambio en orden.
// Array.of()
// Crea un nuevo Array con un numero de argumentos variable, sin importar numero o tipo de argumentos.


// Métodos transformadores [Mutator]Sección
// Estos métodos modifican la matriz unidimensional:

// Array.prototype.pop()
// Elimina el último elemento de una matriz unidimensional y retorna este elemento.
// Array.prototype.push()
// Añade uno o más elementos al final de una matriz unidimensional y retorna la nueva longitud de una matriz unidimensional.
// Array.prototype.reverse()
// Invierte el orden de los elementos de una matriz unidimensional - el primero llega a ser el último y el último llega aser el primero.
// Array.prototype.shift()
// Elimina el primer elemento de una matriz unidimensional y retorna este elemento.
// Array.prototype.sort()
// Ordena los elementos de una matriz unidimensional.
// Array.prototype.splice()
// Añade y/o elimina elementos de una matriz unidimensional.
// Array.prototype.unshift()
// Añade uno o más elementos al comienzo de una matriz unidimensional y retorna la nueva longitud de la matriz unidimensional.
// Métodos accesores [Accessor methods]Sección

// Estos métodos no modifican una matriz unidimensional y retornan alguna representación de la matriz unidimensional.

// Array.prototype.concat()
// Devuelve un nueva matriz unidimensional que comprende esta matriz unidimensional unida con otras matriz unidimensionales y/o valores.
// Array.prototype.join()
// Une todos los elementos de una matriz unidimensional en una cadena.
// Array.prototype.slice()
// Extrae una sección de una matriz unidimensional y devuelve una nueva matriz unidimensional.
// Array.prototype.toSource()
// Devuelve una matriz unidimensional literal representando la matriz unidimensional especificada; puede utilizar este valor para crea una nueva matriz unidimensional. Sobre escribe al método Object.toSource().
// Array.prototype.toString()
// Devuelve una cadena representando la matriz unidimensional y sus elementos. Sobre escribe el método Object.toString().
// Array.prototype.valueOf
// Devuelve el valor primitivo de una matriz unidimensional. Sobre escribe el método Object.valueOf().


Array.prototype.indexOf()
//Devuelve el primer índice (el menor) de un elemento dentro de una matriz unidimensional igual al valor especificado, o -1 si ninguno es encontrado.
Array.prototype.lastIndexOf()
//Devuelve el último índice (el mayor) de un elemento dentro de una matriz unidimensional igual al valor especificado, o -1 si ninguno es encontrado.

//Métodos en generalSección
//Muchos métodos para el objeto Array de JavaScript están diseñados para ser aplicados generalmente a todos 
//los objetos los cuales "se asemejan" a las matrices unidimensionales. Esto es, pueden ser utilizados sobre 
//cualquier objeto que tenga una propiedad de length que indique la longitud y los cuales pueden ser útiles 
//para ser accedidos utilizando nombres de propiedades numéricas (tal como con la indexación  array[5]).

//Algunos métodos, tales como join(), únicamente leen la longitud  length y las propiedades numéricas del objeto son invocadas. Otros, como reverse(), requieren que las propiedades numéricas del objeto y la longitud  length sean mutables; estos métodos pueden sin embargo no ser invocados sobre objetos como String, los cuales no permiten que su propiedad  length o propiedades numéricas sintetizadas sean configuradas.

//Los métodos que trabajan sobre cualquier matriz unidimensional como objeto y  no necesitan alterar las propiedades numéricas o la longitud  length son:

Array.prototype.concat(),
Array.prototype.every()  (JS 1.6+)
Array.prototype.filter() (JS 1.6+)
Array.prototype.forEach() (JS 1.6+)
Array.prototype.indexOf() (JS 1.6+)
Array.prototype.join()
Array.prototype.lastIndexOf() (JS 1.6+)
Array.prototype.map() (JS 1.6+)
Array.prototype.slice()
Array.prototype.some() (JS 1.6+)
Array.prototype.toSource()
Array.prototype.toString()
Array.prototype.valueOf()
//Los métodos que alteran las propiedades numéricas o la longitud  length de un objeto son invocados como:

Array.prototype.pop()
Array.prototype.push()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.unshift()
//Este ejemplo muestra como utilizar Array.prototype.map() sobre un objeto String para obtener una matriz unidimensional de bytes codificados en representación de valores de caracteres ASCII:

var a = Array.prototype.map.call("¡Hola Mundo!", function(x) { return x.charCodeAt(0); })
// y ahora igual a [72,101,108,108,111,32,87,111,114,108,100]

//::Creación de una matriz unidimensionalSección
//::El siguiente ejemplo crea una matriz,  msgMatriz, con una longitud de 0, luego asigna valores para  msgArray[0] y  msgArray[99], cambiando la longitud de la matriz unidimensional a 100.

var msgMatriz = [];
msgMatriz[0] = "Hola";
msgMatriz[99] = "mundo";

if (msgMatriz.length === 100) {
   console.log("La longitud es de 100.");
}







