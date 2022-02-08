const prompt = require('prompt');
prompt.start();

console.log('Ingresar tiempo de duracion en parqueo en minutos: ');

prompt.get(['tiempo'], function(err, result){

// 1hora = 60 minutos

const valorHora = 1500; 
let tiempo = result.tiempo;

let resultadoPrecio = (valorHora * tiempo)/60;
let resultadoHoras = tiempo/60;
let dosDecimales = resultadoHoras.toFixed(2);

if (dosDecimales >= 1){
console.log('Debe Pagar por tiempo en parqueo: '+ resultadoPrecio + ' por un total de '+ dosDecimales + ' horas');
}
else{
    console.log('Debe Pagar por tiempo en parqueo: '+ resultadoPrecio + ' por un total de '+ tiempo + ' minutos');
}


});