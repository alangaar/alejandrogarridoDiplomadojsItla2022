var prompt = require('prompt');
prompt.start();

console.log('Ingrese un numero para determinar si es par positivo');

prompt.get(['numero'], function(err, result){

    let numero = result.numero;

    if (numero < 0){

        console.log('El numero ingresado es negativo');
    }
    else if ( numero > 0 ) {
        
        if(numero%2 == 0){
            console.log('El numero ingresado es Par Positivo');
        }
        else{
            console.log('El Numero ingresado es Impar');
        }
    }
});