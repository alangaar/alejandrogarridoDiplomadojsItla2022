var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['nombre', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Datos Ingresados:');
    console.log('  Nombre: ' + result.nombre);
    console.log('  email: ' + result.email);
    console.log("Muchas Gracias");
});