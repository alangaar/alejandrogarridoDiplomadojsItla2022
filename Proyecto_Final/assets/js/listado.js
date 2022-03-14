function formatearFecha(fecha){
    const meses = [
        
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
    ]

    return `${fecha.getDate()}/${meses[fecha.getMonth()]}/${fecha.getFullYear()}`
}

window.addEventListener('load', function(event) {
    const data = getTransacciones();
    const listado = document.querySelector("#listado");

    for(let i=0; i < data.length; i++) {
        const tran = data[i];
        const fechaRegistro = formatearFecha(new Date(tran.fecha_registro))
        listado.innerHTML = listado.innerHTML +
        `
         <a href="#" class="list-group-item list-group-item-action bg-primary bg-gradient text-white">
            <div class="d-flex w-100 justify-content-between text-white">
            <h5 class="mb-1">${tran.cuenta.name}</h5>  
            <small class="text-light">${fechaRegistro}</small>
            </div>
            <p class="mb-1 ">descripcion: ${tran.notas}</p>
            <small class="text-light">${tran.cuenta.type}: RD$ ${tran.amount}</small>
        </a>
        `;
    }
})

