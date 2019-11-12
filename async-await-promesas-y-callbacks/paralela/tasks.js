const util = require('util')
//este codigo de aqui hace la misma funcion que setTimeout pero lo 
//puede ejecutar a través de async await, voy ejecutar una funcion asincrona que la funcion sleep
const sleep = util.promisify(setTimeout)
module.exports = {
    async tasksOne() {
        try {
            await sleep(4000)
            return  'ONE VALUE'
        } catch(e) {
            console.log(e)
        }
        
    },
    async tasksTwo() {
        try {
            await sleep(2000)
            return 'TWO VALUE'
        } catch(e) {
            console.log(e)
        }
       
    }
}
/*en resumen que tenemos aquí simplemente tenemos un modulo que recibe 2 funciones la cual
la primera se demora 4 seg  y la segunda se demora 2 seg en ejecutarse.*/
