const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

varnumber = prompt('Ingresa el numero del personaje que quieres que te salude: ')

const PjURL = `${API_URL}${PEOPLE_URL.replace(':id', number)}`
const opts =  {crossDomain: true}
var color_en = ''
var color_es = ''

function saludoDelPJ(pjdata,color_en){
    color_en = `${pjdata.eye_color}`
    //la siguiente seguiduilla de 'if' sirve para traducir los colores de ingles a español
    if(color_en === 'blue'){
        color_es = 'azul'
    }
    if(color_en === 'brown'){
        color_es = 'marron'
    }
    if(color_en === 'red'){
        color_es = 'rojo'
    }
    if(color_en === 'green'){
        color_es = 'verde'
    }
    if(color_en === 'yellow'){
        color_es = 'amarillo'
    }
    
    alert(`Hola yo soy ${pjdata.name} y mis ojos son de color ${color_es}`)
}   
$.get(PjURL, opts, saludoDelPJ)