const prompt = require('prompt');
prompt.start();

prompt.get(['diametro', 'grosor'], function (err, result) {

    let diametro = result.diametro;
    let grosor = result.grosor;

if (diametro > 1.4){
    if(grosor < 0.4){
        console.log('El Grosor es inferior al recomendado');
    }
    else{
        console.log('La rueda es para un vehiculo grande');
    }
}
else if(diametro <= 1.4 && diametro > 0.8){
    if(grosor < 0.25){
        console.log('El Grosor es inferior al recomendado');
    }
    else {
        console.log('La rueda es para un vehiculo mediano');
    }
}
else{
    console.log('La rueda es para un vehiculo pequeño');
}  


   
   

});
