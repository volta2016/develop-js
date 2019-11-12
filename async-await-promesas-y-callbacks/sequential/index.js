const {tasksOne, tasksTwo} = require('./tasks')
/*quiero importar desde el modulo tarea, mis 2 funciones*/
async function main (){
    
    console.time('Measuring time')
    const valueOne = await tasksOne()
    const valueTwo = await tasksTwo()
    console.timeEnd('Measuring time')
    
    
    console.log('Task One returned', valueOne)
    console.log('Task two returned', valueTwo)

    
}
main()
/*que es lo que hace nuestro programa hasta el momento, mi programa principal importa 2 
metodos, esos 2 metodos lo voy a ejecutar 1 x 1 esos 2 metodos son asincronos aquí vamos a
necesitar async await entonces lo que voy hacer es que voy a colocar la palabra await pero no
funciona si no tiene la palabra async entonces voy a colocar todo dentro de uan funcion llamada
main VOY agregar una medida de tiempo para eso voy utilizar console.time, luego quiero que mida e
el tiempo de estas 2 tareas agrego su par que es onsole.timeEnd quiere decir voy a medir hasta cuando
acabe este codigo de aqui. como quiero saber cuanto tiempo toma en ejecutarse voy ejecutar esos 2
consolelog entre codigos este codigo secuencial nos quiere decir una vez termine con una tarea 
va a continuar con la otra. Nosotros podemos lanzar o crear un error nosotros mismos utlizando 
una palabra de js llamada throw 
Mi programa hace lo siguinte al ejecutarse index.js trata de ekjecutar tasksOne entonces va a buscar tarea
1 y lo primero que hace esa tarea es lanzar un error y acabar con la ejecucion del programa entonces
va acabar con esto de aqui y ya no se va ejecutar ya no va esperar 4 segundo por que ha ocurrido un 
problema y luego si acabado con esto lo natural sería que me lanze un error y continue con el siguiente
ya que son procesos independientes entonces si el segundo se esta ejecutando lo que me devolveria seria 
2 minutos de ejecucion. lo que ha hecho el error es cancelar todo el programa */
