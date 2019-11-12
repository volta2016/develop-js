//::callbacks
// function requestHandler(res, res) {
  
     
//     User.findById(req.UserId, function(error, user){
//         if (err) {
//             res.send(error)
//         } else {
//             tasks.findById(user.tasksId, function(err, taks){
//                 if (err) {
//                     return res.send(err)
//                 } else {
//                     tasks.complete = true
//                     tasks.save(function (err){
                    
//                         if (err) {
//                             return res.send(err)
//                         } else {
                            
//                             task.complete = true
                            
//                             tasks.save(function(err){
//                                 if(err){
//                                     return res.send(err)
//                                 } else {
//                                     res.send('taks complete')
//                                 }
//                             })
//                         }
//                     })
//                 }

//             })
//         }
//     }
// }
//::promesas
/* el .then se ejecuta cuando termina de ejecutarse la operación de User.findbyId(req.userId), pues 
yo voy a manejar ese fin de ejecucion como una funcion tambien - en esta funcion voy recibir tal solo
las cosas buenas cuando el proceso vaya bien- pues lo que deberia recibir si estoy buscando a un usuario pues
obviamnte es el usuario
-caso contrario podria capturar un error con .catch - entonces para capturar ese error también voy 
a utilizar una funcion que capture el error o mostrarlo por pantalla por ejemplo y de esta manera estoy
manejando el error, pero también necesito manejar el dato que viene(el de la respuesta positiva
una promesa esta conformada por el metodo .then y por el .catch
el metodo .then es cuando todo va bien, es el que esperamos
.catch ocurre cuando pasa algún error,aqui es cuando viene la ventaja
podemos escribir mas operacione podemos seguir añadiendo tareas con .then 
el código se peuede leer de la siguiente manera podemos buscar un usuario por Id  a través que me esta 
enviando el usuario a través de la peticion del navegador una vez lo encuentre en lugar de devolverlo
voy a tratar de hacer una consulta a la base de datos voy a consultar a la base de datos Tasks 
o modelo tasks en este caso voy buscar de nuevo por ID por este usuario que encontrado antes pero en 
su propiedad .taskId una vez empieze a ejecutar el primer .then lo que esta dentro también es una operación
asincrona, es decir es una operacion que va tomar tiempo en la base de datos.
luego continuamos con un return con otro .then dentro una funcion que tome las tareas de la 
consulta anterior en caso de ocurra un catch no tenemos que volverlo a ejecutar por ya lo hemos escrito una 
vez, en entonces en segundo .then devemos actualizar, vamos a retornarlo y vamos a continuarla con 
otra promesa. En la ultima instacia quiero devolver al navegador simplemente un mensaje que diga tareas
completadas 
*/
function requestHandler(req, res) {
    User.findbyId(req.userId)
        .then(function(user){
            return Task.findById(user.taskId)
        })
        .then(function(tasks){
            tasks.complete = true
            return tasks.save()
            //recuerda que también necesitamos guardarlo
        })
        .then(function(){
            res.send('tasks complete')
        }) 
        .catch(function(errors)) {
            res.send(errors)
        }
}