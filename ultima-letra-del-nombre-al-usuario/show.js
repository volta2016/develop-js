var nombre = document.getElementById("Nombre");
var apellido = document.getElementById("Apellido");
var boton = document.getElementById("boton");
boton.addEventListener("click", show);
var nombre_b = "dani";
var ultimaLetra = nombre_b.charAt(nombre_b.length - 1);
var nombre_c = "Joiler";
var str = nombre_c.substr(-1);

function show() {
	alert("la última letra de su nombre es:" + nombre.value.charAt(nombre.value.length - 1));
	alert("la útima letra de su apellido es:" + apellido.value.charAt(apellido.value.length - 1));
	console.log(nombre_b);
}
