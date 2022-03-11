function iniciar(){
    const type = "outcome";
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

    salvarTransaccion(transaccion)
}

window.addEventListener('load', function(event) {
    iniciar();

    document.getElementById("mi-form").addEventListener("submit", salvar)
})