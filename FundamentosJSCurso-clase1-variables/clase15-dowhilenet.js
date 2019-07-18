var x = 4;

do {
	document.write(`este es el numero ${x}  <br/>`)
	x++
} while (x<=10)

// por que viene llaves directo o no parentesis?
//el bucle do while lo que hace primero ejecuta código
//y despues nos hace una comprobación 
//while es el que va comprobar nuestra condición

//en la primera pasada del bucle el numero ya es 5 por que cuando
//entra al do le suma 1 , luego pasa al while x<=10 si es 5 se vuelve
//a ejecutar el código otra vez así sucesivamente.
//si x es mayor 11 - y 11 es mayor que 10 etonces asi que no es = o menor
//quiere decir que nuestra comprobacion es falsa asi que se corta 
//nuestro bucle
//js funciona de arriba hacia abajo. lo primero que estamos declarando
//es nuestra var despues después estamos ejecutando un code, después
//estamos comprobando nuestra condicion 
