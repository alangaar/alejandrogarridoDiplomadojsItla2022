var prompt = require('prompt');

  //
  // iniciar el prompt
  //
  prompt.start();

// Se Realiza una solicitud al usuario
 
  console.log('Ingrese su edad:')

// obtener una propiedad del usuario: edad
  prompt.get(['edad'], function (err, result) {
    
// los resultados se obtendran por consola luego de una evaluacion
    let edad = result.edad;


   if (edad >= 18){
       console.log('Usted puede ya puede conducir');
   }
   else{
       console.log('Usted no puede Conducir');
   }

});