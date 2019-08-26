const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
//para obtener el button lo que va hacer esta funcion es recibir un strings "con el id del elemento que
//queremos obtener en este caso es este de acá y su id es btnEmpezar ademas esta variable ya
//la tenemos disponible en cualquier parte de nuestro programa la estamos utilizando en espacio
//global"
const btnEmpezar = document.getElementById('btnEmpezar')
// btnEmpezar.addEventListener('click', btnEmpezar)


      class Juego {
        constructor() {
          this.inicializar()
          this.generarSecuencia()
          this.siguienteNivel()
        }

        inicializar() {
          btnEmpezar.classList.add('hide')
        	this.nivel = 7//a medida que van pasando los niv este this-nivel va ir incrementando
        	this.colores ={
        		violeta,// Significa que el atributo celeste es igual a la varaible celeste
        		celeste,// === violeta: violeta //forma de llamar objeto
        		naranja,
        		verde
            }
        }
        generarSecuencia() {
        	this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
        	// Nos dice que el atributo 'secuencia' es igual a un nuevo array cuya 
// longitud es igual a '10' y que sera llenado('fill') con puros ceros
// y con sera transformado('map()') cada cero y sera retornado un numero 
// random por  4 y redondeano para abajo.
        }
        siguienteNivel() {
        	this.iluminarSecuencia()
            this.agregarEventosClick()
        }
        transformarNumeroAColor(numero) {
        	switch (numero){
        		case 0:
        		 return 'celeste'
        		case 1:
        		 return 'violeta'
        		case 2:
        		 return 'naranja'
        		case 3:
        		 return 'verde'
        	}

        }

        iluminarSecuencia() {
        	for(let i = 0; i  < this.nivel; i++) {
        		const color = this.transformarNumeroAColor(this.secuencia[i])
        		setTimeout(() => this.iluminarColor(color), 1000 * i)
        	}
        }
        iluminarColor(color) {
        	this.colores[color].classList.add('light')
        	setTimeout(() => this.apagarColor(color), 350)
		}
		apagarColor(color) {
			this.colores[color].classList.remove('light')
		}
        agregarEventosClick() {
            this.colores.celeste.addEventListener('click', this.elejircolor)
            this.colores.celeste.addEventListener('click', this.elejircolor)
            this.colores.celeste.addEventListener('click', this.elejircolor)
            this.colores.celeste.addEventListener('click', this.elejircolor)
        }
      }

      function empezarJuego() {

        window.juego = new Juego()
        //ponemos esta var dentro de window para poder debbuger
      }

//esto es clave:
 mi duda es, si en el ciclo i < this.nivel, como aumenta this.secuencia[i], si el nivel esta el 1…?

