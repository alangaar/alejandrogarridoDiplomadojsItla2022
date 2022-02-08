const prompt = require('prompt');
prompt.start();

  //
  // 2 propiedades desde el usuario
  //
  prompt.get(['cantidadDocena', 'precioProducto'], function (err, result) {

    let cantidadDocena = result.cantidadDocena;
    let precioProducto = result.precioProducto;


    let precioDocena = precioProducto*12;
    let precioTotal = precioDocena*cantidadDocena;
    let productosRegalos = cantidadDocena-3;
    
    
    

    // si hay mas de 3 docenas

    if(cantidadDocena > 3){

    //descuentos    
        let descuentoQuince = (precioTotal*15)/100;
        let totalDescuentoQquince = precioTotal - descuentoQuince;

        console.log('Monto de Compra: '+precioTotal);
        console.log('Monto del Descuento: '+descuentoQuince);
        console.log('Monto a Pagar: '+totalDescuentoQquince);
        console.log('Cantidad de Productos de Regalo:'+ productosRegalos);

    }

       // si hay menos o igual a  3 docenas
    else if(cantidadDocena <= 3){

        let descuentoDiez = (precioTotal*10)/100;
        let totalDescuentoDiez = precioTotal - descuentoDiez;

        console.log('Monto de Compra: '+precioTotal);
        console.log('Monto del Descuento: '+descuentoDiez);
        console.log('Monto a Pagar: '+totalDescuentoDiez);
     

    }
   
   

});