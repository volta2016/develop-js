/*//::callbacks
supongamos que estamos creando un servidor con node.js en cual vamos a manejar la peticiones 
que vienen de los usuarios y vamos tratar de responder algo. pero ante de responder algo
vamos hacer una consulta en la base de datos, cambiar datos y después devolver esa respuesta
manejador de peticion por parametro se le agrega request y response función tipica de los servidores
de node. suppngamos vamos estar conectados a una base de datos y queremos consultar esa base de datos
lo primero que tenemos que hacer es la consulta entonces supongamos estoy utilizando mongo db por ejemplo
voy a consultar un modelo de dato user tiene un metodo llamado .findById
como voy encontrar el dato que parametro le voy a dar - req.UserId voy a buscar un usuario por ID 
lo que dice node js dice esto va ser ejecutado por la base de datos, entonces yo no tengo que esperar
a que eso termine y cuando termine me enviara un respuesta de la informacion.
como manejamos eso para eso existen los callbacks, al costado de la caracteristica que es la consulta
vamos a agregar una, y lo manejamos a través de una funcion, entonces esta funcion que es otro
parametro lo que hace esperar por la respuesta. la respuesta nos puede dar 2 cosas
un error o un usuario (el usuario de la consulta)
es por eso que esto se llama un callback por que aqui adentro, y es por eso que llama
un callback por que nosotros aqui dentro vamos a tener que continuar con
la ejecucion del codigo es por eso que la documentación es importante
este es código valido es de ecmascript 5 pero el el codio esta bastante dificil ce leer 
esto es la piramide de la muerte calback hell*/
function requestHandler(res, res) {
    //voy consultar a un usuario a través de una id, cuando la base de dato termine de devolverme
    //una respuesta o esta consulta voy manejar la respuesta a través de esta función 
    //en node js las cosas se manejan de manera asincrona
     
    User.finById(req.UserId, function(error, user){
    //si yo quiero escribir un codigo que dependa del anterior lo que tendria que hacer es 
    //escribirlo dentro de la funcion
        if (err) {
            res.send(error)
        } else {
            tasks.findById(user.tasksId, function(err, taks){
                if (err) {
                    return res.send(err)
                } else {
                    //caso contrario voy a manipular los datos (actualizarlos)
                    tasks.complete = true
                    //para guardarlo tambien es un proceso de la bd requiere tiempo
                    tasks.save(function (err){
                        //en este caso este metodo nos devuelve nada mas que un error en caso existe
                        //si no existe no nos devuelve nada
                        if (err) {
                            return res.send(err)
                        } else {
                            //coso conrario si no ha corrido ningun error voy a tratar de manipular 
                            //los datos actualizarlos
                            task.complete = true
                            //para guardar el dato
                            tasks.save(function(err){
                                if(err){
                                    return res.send(err)
                                } else {
                                    res.send('taks complete')
                                }
                            })
                        }
                    })
                }

            })
            //la base d edato busca todas las tareas que le pertenescan a este usuario.
            //esta funcion va tomar tiempo como la manejamos a través de una funcion, también
            //nos puede devolver 2 cosas no puede devolver un error o no puede devolver tareas

        }
    }
    //whetever code
}