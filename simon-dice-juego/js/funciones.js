const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
//los botones los elemenetos del DOM
//para obtener el button lo que va hacer esta funcion es recibir un strings "con el id del elemento que
//queremos obtener en este caso es este de acá y su id es btnEmpezar ademas esta variable ya
//la tenemos disponible en cualquier parte de nuestro programa la estamos utilizando en espacio
//global"
const btnEmpezar = document.getElementById('btnEmpezar')

const ULTIMO_NIVEL = 10
// btnEmpezar.addEventListener('click', btnEmpezar)

// libreria
// swal("Hello world!"); este es un alert de la librería
    //la class Juego es la que va tener toda la logica de nuestro video jeugo
    class Juego {
        constructor() {
          
          this.inicializar = this.inicializar.bind(this)
          this.inicializar()
          this.generarSecuencia()
          setTimeout(this.siguienteNivel, 500)
        }

        inicializar() {
          //de esta manera la función siguiente siempre va estar atada al juego, no va poder cambiar el contexto
          //lo que nosotros queremos es que el this.elegirColor este siempre atado al juego.ahora siempre va quedar atado 
          //al juego al this (del contexto juego) this el juego y no cada uno de los botones
          //.bind enlaza o ata a un this por ejemeploque uno epecifique al lado de una funcion.
          //para referenciar al mismo this lo escriben como var _this o self 
          this.siguienteNivel = this.siguienteNivel.bind(this)
          this.elegirColor = this.elegirColor.bind(this)
          this.toggleBtnEmpezar()  
          this.nivel = 1//a medida que van pasando los niv este this-nivel va ir incrementando
          //para poder  tenerlos mas alcance y poder hacer operaciones con ellos los botones del juego
          //aplicamos este this hacer referencia a las const definida en el dom
        	this.colores = {
        		violeta,// Significa que el atributo celeste es igual a la varaible celeste
        		celeste,// === violeta: violeta //forma de llamar objeto
        		naranja,
        		verde
            }
          }
        toggleBtnEmpezar() {
          if (btnEmpezar.classList.contains('hide'))  {
            btnEmpezar.classList.contains('hide')
            btnEmpezar.classList.remove('hide')
          } else {
            btnEmpezar.classList.add('hide')
          }
        }

        generarSecuencia() {
          this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4))
          //esta es otra forma de generar array con la palabra new Array
        	// Nos dice que el atributo 'secuencia' es igual a un nuevo array cuya 
          // longitud es igual a '10' y que sera llenado('fill') con puros ceros
          // y con sera transformado('map()') vamos aggarrar este n sabemos que es un 0, lo que
          //vamos hacer cada cero y sera retornado un numero 
          // random multiplicado por   4 y redondeano para abajo, todo esto en un nuevo array.
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
            //en los ciclos for es donde mas debemos ocupar let y no var 
            //el bug es que cada vez que lamamos a var i cada vez que se cumpla el ciclo se va ir pisando
            //esa var color con el resultado final, es decir va quedar el ultimo color de la secuencia.
            //para poder corregir este bug cambiamos var por let para que el color se mantenga para el bloque 
            //para poder llamar a => this.iluminarColor(color), 1000 * i,
            //para evitar bug "como no tenemos reasigncion de color" usamos const, en el caso de i no podemos por que va ir cambiando.
            // la dejamos con let
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
        elegirColor(ev) {
            //este es el atributo dataset dentro esta el color 
            //se refiere al elemento del dom data-color el cual analizamos el con console.log(ev) el evento mouse 
            const nombreColor = ev.target.dataset.color
            //aca hay que referenciar el contexto de transformarColorANumero para que nos arroke undefined
            const numeroColor = this.transformarColorANumero(nombreColor)
            this.iluminarColor(nombreColor)
              if(numeroColor === this.secuencia[this.subnivel]){
                this.subnivel++
                // console.log(this.subnivel)
                if(this.subnivel === this.nivel){
                  this.nivel++
                  this.eliminarEventosClick()
                  //aca vamos a preguntar si el nivel nuevo al cual llego el usuario es igual al ultimo nivel mas 1
                  //listo gano entonces por parametos le pasamos la funcion, y si no es el ultimo nivel tiene que avanzar de nivel
                  //:::si el numero de color no es igual al boton que tenia que tocar el usuario - si no es correcto eso
                  //entonces listo perdio
                  if(this.nivel === (ULTIMO_NIVEL + 1)){
                    this.ganoElJuego()
                  } else {
                    //acá veamos que solamente estamos usando la referencia a la funcion - llama a la función pero no la estamos
                    //invicando aca le estamos diciendo cual es la función que tiene que llamar
                     setTimeout(this.siguienteNivel, 1500)
                  }
                }
            } else {
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
        //ponemos esta var dentro de window para poder debbugiarla para ver que esta pasando y acceder
        //a la secuencia generada.
      }

//esto es clave:
//mi duda es, si en el ciclo i < this.nivel, como aumenta this.secuencia[i], si el nivel esta el 1…?

//console.log(this)//ev escucha al evento del click MouseEvent(button) y this
            //escuchal al juego el cual le aplicamos un bind(this) al elegir color
            //pero que ejecutamos dentro de inicializar
//if siempre hay que relacionarlo como una pregunta
