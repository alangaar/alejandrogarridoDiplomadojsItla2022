function salvarTransaccion(transaccion){
    let transacciones = getTransacciones();
    transacciones.push(transaccion)
    localStorage.setItem("transacciones", JSON.stringify(transacciones))
}

function getTransacciones(){
    const transacciones = JSON.parse(localStorage.getItem("transacciones"))
    
    if(transacciones){
        return transacciones;
    }else{
        return[];
    }
}