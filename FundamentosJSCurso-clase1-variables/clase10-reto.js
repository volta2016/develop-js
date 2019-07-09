var nombre = document.getElementById('nombreUsuario')
var edad = document.getElementById('edadUsuario')
boton = document.getElementById('boton')
boton.addEventListener('click', mayorEdad)

function mayorEdad() {
	if (edad.value >= 18){
		alert(`${nombre.value} es maryor de edad`)
	} else {
			alert(`${nombre.value} eres menor de edad`)
		}
}


