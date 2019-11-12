 var signo = prompt(`¿cual es tu signo?`)

 switch (signo) {
 	case `acuario`:
 	console.log(`Deberá ser más cuidadoso y más selectivo en las relaciones que tiene. 
 		Evite depositar toda la confianza en las personas que lo rodean habitualmente.`)
 		break 
 	case `piscis`:
 	console.log(`Probablemente sus propios temores lo amenazarán con disuadirlo. 
 		Hoy, será el momento para dejar de lado la prudencia y enfrentarse a ciertos riesgos.`)
 	    break
 	case `cancer`:
 	case`cáncer`:
 	console.log(`Deje de obstinarse en que todo se haga a su modo. Permita que los demás 
 		manifiesten sus opiniones, de lo contrario, será rechazado por la gente que lo rodea.`)
 		break
 	 case`tauro`:
    console.log(`algo sucede en tu interior que debes evaluar y cambiar de inmediato.`)
    break
  
  case`géminis`:
  case`geminis`:
    console.log(`Hoy, alguien muy querido pedirá tu ayuda, dásela, pero con límites.`)
    break
   case`leo`:
    console.log(`Hoy es un día altamente productivo.`)
    break
  
  case`virgo`:
    console.log(`Detente y analiza cuál opción te conviene más y actúa sólo cuando sea justo y necesario.`)
    break

  case`libra`:
    console.log(`Eres el centro de atención y puedes propiciar encuentros inolvidables.`)
    break
    case`escorpión`:
  case`escorpion`:
    console.log(`Hay pérdidas temporales, pero las posibilidades de recuperarte son a corto plazo.`)
    break

  case`sagitario`:
    console.log(`El futuro es incierto, pero lo es más si pospones y pospones.`)
    break

  case`capricornio`:
    console.log(`Las respuestas llegarán, y si son “no”, haz un plan para hacer el cambio.`)
    break
  default:
    console.log(`El signo que ingresaste no existe.`)
    break
}

// alert('hola')

var a = 'Hola'