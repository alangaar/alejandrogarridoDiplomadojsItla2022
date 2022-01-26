var prompt  = require('prompt');

prompt.start();

console.log('Ingrese su Calificacion');

prompt.get(['nota'], function(err, result){

let nota = result.nota;

if (nota >= 0 && nota < 4){

    console.log('Muy Deficiente');
}

else if ( nota >= 4 && nota < 6){

    console.log('Insuficiente');
}

else if (nota >= 6 && nota < 7){
    console.log('Suficiente');
}

else if (nota >=7 && nota < 8 ){
    console.log('Bien');
}

else if (nota >=8 && nota < 10){
    console.log('Notable');
}
else{
    console.log('Notable');
}

});