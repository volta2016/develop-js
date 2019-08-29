const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
//para obtener el button lo que va hacer esta funcion es recibir un strings "con el id del elemento que
//queremos obtener en este caso es este de acá y su id es btnEmpezar ademas esta variable ya
//la tenemos disponible en cualquier parte de nuestro programa la estamos utilizando en espacio
//global"
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10
// btnEmpezar.addEventListener('click', btnEmpezar)

// libreria
// swal("Hello world!");

    class Juego {
        constructor() {
          this.inicializar = this.inicializar.bind(this)
          this.inicializar()
          this.generarSecuencia()
          setTimeout(this.siguienteNivel, 500)
        }

        inicializar() {
          this.siguienteNivel = this.siguienteNivel.bind(this)
          this.elegirColor = this.elegirColor.bind(this)
          this.toggleBtnEmpezar()  
        	this.nivel = 1//a medida que van pasando los niv este this-nivel va ir incrementando
        	this.colores = {
        		violeta,// Significa que el atributo celeste es igual a la varaible celeste
        		celeste,// === violeta: violeta //forma de llamar objeto
        		naranja,
        		verde
            }
          }
        toggleBtnEmpezar() {
          if (btnEmpezar.classList.contains('hide'))  {
            btnEmpezar.classList.remove('hide')
          } else {
            btnEmpezar.classList.add('hide')
          }
        }

        generarSecuencia() {
        	this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4))
        	// Nos dice que el atributo 'secuencia' es igual a un nuevo array cuya 
// longitud es igual a '10' y que sera llenado('fill') con puros ceros
// y con sera transformado('map()') cada cero y sera retornado un numero 
// random por  4 y redondeano para abajo.
        }
        siguienteNivel() {
            this.subnivel = 0
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
        transformarColorANumero(color) {
            switch (color){
                case 'celeste':
                 return 0
                case 'violeta':
                 return 1
                case 'naranja':
                 return 2
                case 'verde':
                 return 3
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
            this.colores.celeste.addEventListener('click', this.elegirColor)
            this.colores.verde.addEventListener('click', this.elegirColor)
            this.colores.violeta.addEventListener('click', this.elegirColor)
            this.colores.naranja.addEventListener('click', this.elegirColor)
        }
        eliminarEventosClick() {
            this.colores.celeste.removeEventListener('click', this.elegirColor)
            this.colores.verde.removeEventListener('click', this.elegirColor)
            this.colores.violeta.removeEventListener('click', this.elegirColor)
            this.colores.naranja.removeEventListener('click', this.elegirColor)
        }
        elegirColor(ev){
            const nombreColor = ev.target.dataset.color
            const numeroColor = this.transformarColorANumero(nombreColor)
            this.iluminarColor(nombreColor)
              if(numeroColor === this.secuencia[this.subnivel]){
                this.subnivel++
                // console.log(this.subnivel)
                if(this.subnivel === this.nivel){
                  this.nivel++
                  this.eliminarEventosClick()
                  if(this.nivel === ULTIMO_NIVEL + 1){
                    this.ganoElJuego()
                  }else {
                     setTimeout(this.siguienteNivel, 1500)
                  }
              }
            }else {
              this.perdioElJuego()
            }
          }
          
          ganoElJuego() {
            swal('Juego Simón dice', 'Felicitaciones, ganaste el juego!', 'success')
            .then(this.inicializar)
          }
          perdioElJuego() {
            swal('Juego Simón dice', 'lo lamentamos, perdiste :(', 'error')
            .then(() => {
                this.eliminarEventosClick()
                this.inicializar()
            })
          }
    }

      function empezarJuego() {

        window.juego = new Juego()
        //ponemos esta var dentro de window para poder debbuger
      }

//esto es clave:
//mi duda es, si en el ciclo i < this.nivel, como aumenta this.secuencia[i], si el nivel esta el 1…?

//console.log(this)//ev escucha al evento del click MouseEvent(button) y this
            //escuchal al juego el cual le aplicamos un bind(this) al elegir color
            //pero que ejecutamos dentro de inicializar
//if siempre hay que relacionarlo como una pregunta
