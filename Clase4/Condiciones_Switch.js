const prompt = require('prompt');
prompt.start();

prompt.get(['fruta'], function (err, result) {

let fruta = result.fruta;

switch(fruta){
    case 'uvas':
        console.log('precio: 150.00 1lb');
        break;
case 'limon':
        console.log('precio: 100.00 1lb');
        break;
case 'kiwi':
        console.log('precio: 250.00 1lb');
        break;
case 'papas':
        console.log('precio: 60.00 1lb');
        break;
case 'zanahoria':
        console.log('precio: 75.00 1lb');
        break;
case 'brocoli':
        console.log('precio: 60.00 1lb');
        break;
default:
        console.log('no se encontro ninguna fruta')
        break;        

    } 

});