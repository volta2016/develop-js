var nombre = document.getElementById("Nombre");
var apellido = document.getElementById("Apellido");
var boton = document.getElementById("boton");
boton.addEventListener("click", show);
var nombre_b = "dani";
var ultimaLetra = nombre_b.charAt(nombre.length-1)

function show() {
	alert("la última letra de su nombre es:" + nombre.value.charAt(nombre.length - 1));
	alert("la útima letra de su apellido es:" + apellido.value.charAt(apellido.length - 1));
}
