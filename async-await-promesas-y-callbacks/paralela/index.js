const {tasksOne, tasksTwo} = require('./tasks')
/*quiero importar desde el modulo tarea, mis 2 funciones*/
async function main (){
    try{
        console.time('Measuring time')
        const results = await Promise.all([tasksOne(),tasksTwo() ])//dentro del metodo pasamos una array
        
        console.timeEnd('Measuring time')
        
        console.log('Task One returned', results[0])
        console.log('Task two returned', results[1])
    } catch(e) {
        console.log(e)
    }
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
2 minutos de ejecucion. lo que ha hecho el error es cancelar todo el programa 
parralel o metodos de forma paralela y que pasa si nosotros no queremos ejecutar codigo de manera
secuencial si no de manera paralala lo que no queremos es que se ejecute el primer proceso no 
tenemos que esperar que se ejcute el primero para pasar el segundo si no lo que queremos
es que se ejecute en todo en mismo tiempo en mis caso le voy a dar await no a cada uno de los 
metodos si no a mi promesa completa.
las 2 tareas inician al mismo tiempo de forma paralela ya que l aprimeras e 4 ms ta solo
veria la tarea que se demora mas
 */
