var prompt = require('prompt');
prompt.start();

console.log('Ingresar tiempo de duracion en parqueo en minutos: ');

prompt.get(['tiempo'], function(err, result){

// 1hora = 60 minutos

const valorHora = 1500; 
let tiempo = result.tiempo;

let resultado = (valorHora * tiempo)/60;

console.log('Debe Pagar por tiempo en parqueo: '+ resultado);

});