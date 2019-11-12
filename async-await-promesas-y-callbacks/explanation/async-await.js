/*encontramos tano la peticion como la respuesta voy a consultar por UserId que nos envia el objeto
request y cuando User.findById(req.userId) como voy a manejarlo si no tengo promesas bueno
vamos utilizar una palabra clave llamada await, esta palabra await lo que esta tratando de decir 
es que este codigo que continua es un codigo que va tratar de tomar tiempo de ejcución es un metodo
asincorono entonces nosotros podemos esperar a la respuesta directamente.
await es un metodo asincrono, anteriormente en los callbacks nosotros recibimos al usuario en la funcion
async await dice este metodo de aqui es asincrono pero cuando termine el usuario que me retorne esta
consulta pues lo voy a guardar en esta constante puede ser let o sin nada solo ejecutar, pero 
para que esta await funciones debemos agregar una palabra mas arriba en la funcion esta palabra se llama
async para que funciones await tambien necesita de esa palabra.
estoy ejecutando 2 codigos asincronos una vez termine esto de aqui vamos a ejecutar el siguiente
como manejamos los errores en async await - si es codigo que es asincrono pero parece sincrono
entonces nosotros el codigo asincrono como lo manejamos los errores con las palabras
.try .catch
.try el try simplemente trata de ejecutar un código, en caso algo dle codigo aqui falle pues sera capturado
por este .catch entonces si quiero ejecutar el codigo de aqui. lo copio y lo pego dentro del try.
este código hace lo mismo que las promesas pero aquí yo puedo manejar el error.
en catch res.send(e) responde ese error para saber de que se trata.
por que basicamente todo lo que hacemos en el lenguaje es asyncrono acá estamos consultando una
base de datos que en este caso es mongoDB pero podría ser cualquier otra, puede ser msql, puede ser
una consulta a una API también toma tiempo de ejecución, puede ser un ana manipulacion de archivos a través
de node el modulo file sistem tiene que modificarlo crearlos o quiere modificar algo en disco modificar
algo tambien toma tiempo entonces son operaciones asyncronas recuerden que el objetivo de node es tomar
tareas que tomen bastante tiempo de procesado y no esperar por ellas no esperar qe terminen si no 
delegarlas una vez termine de ejecutarse pues node va continuar con el codigo pero nosotros vamos a modificar
ese codigo a través de promesas callback async await 
como ulilizar async await de manera asincrona de manera secuencial y de manera paralela
*/ 
//
User.findById(req.userId)
async function requestHandler(req, res) {
    try {
        const user = await User .findById(req.userId)
        const tasks = await Tasks.findById(user.tasksId)//esto de nuevo es metodo asincrono 
        tasks.complete = true
        await task.save()
        res.send('Tasks Complete')
    }
    catch(e) {
        res.send(e)
    }

    
}