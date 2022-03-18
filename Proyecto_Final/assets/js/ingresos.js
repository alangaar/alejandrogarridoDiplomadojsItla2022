function iniciar(){
    const type = "income";
    const cuentas = getCuentas();
    const cuentasGastos = cuentas.filter(function(cuenta, index, cuentas){
        if(cuenta.type === type){
            return true;
        }
        return false;
    })

    const listadoGastos = document.querySelector('#listado-tipos');

    for (let i=0; i < cuentasGastos.length; i++) {
        const cuenta = cuentasGastos[i];
       listadoGastos.innerHTML = listadoGastos.innerHTML +
       `
        <option value="${cuenta.name}">${cuenta.name}</option>
       `;     
    }
}

function salvar(event) {
    event.preventDefault();
    const cuentaSeleccionada = event.target.elements["cuenta"].value
    const cuenta = getCuentas().find(function(cuenta){
        if(cuenta.name === cuentaSeleccionada){
            return true;
        }
        return false;
    })
    const transaccion ={
        amount: event.target.elements["amount"].value,
        fecha_registro: event.target.elements["fecha"].value,
        cuenta: cuenta,
        notas: event.target.elements["notas"].value
    }

    if(camposNovacios(transaccion)){
        salvarTransaccion(transaccion)
    }
    
    function camposNovacios(transaccion){
        
        if(+transaccion.amount === 0){
            
            alert('El Monto es un Campo Obligatorio')
            return false
        }
        else if (!transaccion.fecha_registro) {
            alert('La Fecha es un Campo Obligatorio')
            return false
        }
        else if(!transaccion.notas){
            alert('Notas es un Campo Obligatorio')
            return false
        }
         else{
            alert('Los datos han sido guardados exitosamente!!!')
            return true
            
         }
    }
    
}

window.addEventListener('load', function(event) {
    iniciar();

    document.getElementById("mi-form").addEventListener("submit", salvar)
})