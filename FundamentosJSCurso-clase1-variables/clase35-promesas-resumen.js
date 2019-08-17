// Declaración de una promesa
// Las promesas son utiles para manejar nuestro código asincrono (código que en un determinado momento
// puede resolverse correctamente o fallar. Como una petición a una API)
// 
// Las promesas son objetos que representan el exito o fracaso de una operacon asincrona
// 
// Al crear una promesa debemos pasarle como argumento una función, la cual contiene instrucciones que se ejecutaran de manera asincrona
// 
// El primer parametro es una función que se ejecutará si la promesa se resuelve correctamente,
// El segundo parametro es una función que se ejecutara si la promesa falla
const getUser = newPromise(function(resolve, reject) {
    // Simular una llamada a una API via AJAX
    // Este código se ejecuta despues de 3000 milisegundos. No bloquea las instrucciones que están fuera de el.
    setTimeout(function() {
        // Luego de 3 segundos se ejecuta este bloque de código.
        // Simulamos que la promesa se resuleve correctamente invocando la función del primer parametro
        let datos = ['María', 'Demetrio', 'Miguel Angel', 'Alejandro'];
        // Podemos enviar parametros a dicha función para que la  parte solicitante haga algo con ellos.
        // En este caso serían los resultados obtenidos a través de la consulta a la API
        // resolve()
        resolve(datos)
        // 
        // Si la promesa falla debo ejecutar la función del segundo parametro
        // Podemos enviar parametros a dicha función para que la parte solicitante tenga mayor contexto sobre lo que ha pasado
        // reject()
        // reject('Error interno en el servidor')
    }, 3000)
})

// Invocar una promesa
getUser
    .then(function(data) {
        // Esta función se ejecuta si la promesa se resuelve
        // El valor devuelto por la promesa depende internamente de su implementación.
        console.log('Excelente, la promesa se resolvío satisfactoriamente: ' + data)
    })
    .catch(function(error) {
        // Esta función se ejecuta si la promesa falla
        // Es como un decorador para hacer algo a nivel de interfaz como una notificación.
        // El valor devuelto de error, depende de la implementación interna de la promesa (invocacion reject())
        console.error('Lo sentimos, la promesa no se resolvió: ' + error)
    })


// Declaración de promesas adicionales para que posteriormente se ejecuten de forma paralela
// En este caso se simulan operaciones asincronas con tiempo en milisegundos diferentes
const getDias = newPromise((resolve, reject) => {
    setTimeout(() => {
        let dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
        //resolve(dias)
        reject('Error en el servidor de DÍAS')
    }, 5000)
})
const getEstaciones = newPromise((resolve, reject) => {
    setTimeout(() => {
        let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno']
        resolve(estaciones)
        // reject('Error en el servidor de ESTACIONES')
    }, 1000)
})


// Ejecutar promesas en paralelo 
// Inspeccionar que todas las promesas se resuelvan para realizar una tarea determinada
// Una analogía sería como una transacción de promesas
Promise.all([getUser, getEstaciones, getDias])
    .then(function(data) {
        // Esta función se ejecuta si y solo si se resuelven todas las promesas
        console.log('Felicidades las promesas se resolvieron correctamente')
        // La data contiene un array con los datos devueltos por cada una de las promesas. Si es que
        // su interfaz interna asi lo decide (que envien datos)
        console.log(data)
    })
    .catch(function(error) {
        // Esta función se ejecuta si alguna de las promesas listadas es rechazada
        console.error('Rayos, alguna de las promesas falló')
        // En este caso el error devuelto corresponde a la promesa que ha fallado
        console.error(error)
    })


// Ejecutar promesas en paralelo por carrera
// inspeccionar que promesa se resuelve primero y realizar una tarea determinada
// 
// Una analogía sería, que todas las promesas se comuniquen a diferentes servidores de replica apuntando al mismo recurso.
// dependiendo de que servidor responda primero, se resolvera su promesa relacionada.
// Ante esto, damos por terminada la ejecución en paralelo
Promise.race([getUser, getEstaciones, getDias])
    .then(data => {
        // Se ejecuta esta función con la data devuelta por la promesa que se resolvío primero
        // Despues de eso. se da por terminado el proceso.
        console.log('Felicidades, alguna de las promesas se ha resulto primero que las demás')
        console.log(data)
    })
    .catch(error => {
        // Esta función se ejecuta si la promesa en atenderse primero falla
        console.error('Lo sentimos, una de las promesas ha fallado')
        console.info(error)
    })
