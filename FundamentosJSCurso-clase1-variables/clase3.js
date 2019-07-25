var edad = 27;
//edad = edad + 1;
edad += 1;
var peso = 75;
//var peso = peso - 2;
 
// var res = peso -= 2;
var sandwich = 1;
peso += sandwich;
var jugarAlFutbol = 3;
peso -= jugarAlFutbol;

var precioDeVino = 200.3
var total = Math.round(precioDeVino * 100 * 3) / 100;
var totalStr = total.toFixed(2); 
var total2 = parseFloat(totalStr);

var pizza = 8;
var personas = 2;
var catidadDePorcionesPorPersonas = pizza / personas;
console.log(peso)

//tenemos que tener en cuenta siempre que hagamos 
//funciones que trabajen con decimales la manera de almacenar decimales no están precisa
//entonces no termina de ser tan preciso.
//Para sobrepasar este problema podemos aplicar esto
//var total = precioDeVino * 100 * 3 / 100;

//var totalStr = total.toFixed(2); 
//es decir siempre ten en cuenta 2 decimales después de la coma. Le aplicamos a la var total

//var total2 = parseFloat(totalStr)
//Si lo queremos pasar de string a numero entero se debe aplicar. 

//También puedes utilizar otros operadores acompañados del signo de asignación (=):
//‘edad *= 2’ Multiplicación
//’edad **= 2’ Potencia
//’edad /= 2’ División
