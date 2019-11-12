var Pedro = 
{
    nombre: 'Pedro',
    apellido: 'Martinez',
    altura: 1.75,
    cantidadLibros: 29,
    nota: 7.5
}

var Mario = 
{
    nombre: 'Mario',
    apellido: 'Juarez',
    altura: 1.80,
    cantidadLibros: 50,
    nota: 4.5
}

var Camila = 
{
    nombre: 'Camila',
    apellido: 'Milter',
    altura: 1.65,
    cantidadLibros: 110,
    nota: 8.9
}

var Fernanda = 
{
    nombre: 'Fernanda',
    apellido: 'Portillo',
    altura: 1.68,
    cantidadLibros: 80,
    nota: 6.9
}
var personas = [Pedro, Mario, Camila, Fernanda];

const sumaNota = (d, {nota}) => (d+nota);
var notaMedia = (personas.reduce(sumaNota, 0).toFixed(2))/personas.length;
console.log(notaMedia);

