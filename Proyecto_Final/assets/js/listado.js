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

    return `${fecha.getDate()}/ ${meses[fecha.getMonth()]} /${fecha.getFullYear()}`
}

window.addEventListener('load', function(event) {
    renderizarLista(getTransacciones());
    const form = document.querySelector("#mi-form")
    
    form.addEventListener("submit", event => {
        event.preventDefault();
        const data = getTransacciones();
        const amount = +event.target.elements['amount'].value;
        const fecha = event.target.elements['fecha'].value ? new Date(event.target.elements['fecha'].value) : new Date(); 
        

        let filterData = data.filter( tran => tran.amount < amount)
       /* filterData = data.filter( tran => {
            const tranFecha = new Date(tran.fecha_registro)
            return tranFecha.getTime() < fecha.getTime()
        })*/
        renderizarLista(filterData)
    
    })
        
})

function renderizarLista(data){
    
    const listado = document.querySelector("#listado")
    listado.innerHTML = '';
    for(let i=0; i < data.length; i++) {
        
        const tran = data[i];
        const fechaRegistro = formatearFecha(new Date(tran.fecha_registro))
        listado.innerHTML = listado.innerHTML +
        `
         <a href="#" class="list-group-item list-group-item-action bg-primary bg-gradient text-white">
            <div class="d-flex w-100 justify-content-between text-white">
            <h5 class="mb-1"><i class="bi bi-award"></i>Cuenta: ${tran.cuenta.name}</h5>  
            <small class="text-light">${fechaRegistro}&nbsp;<i class="bi bi-calendar-check"></i></small>
            </div>
            <p class="mb-1 "><i class="bi bi-book"></i>&nbsp;descripcion: ${tran.notas}</p>
            <small class="text-light"><i class="bi bi-arrow-left-right"></i>&nbsp;${tran.cuenta.type}=  RD$ ${tran.amount}</small>
        </a>
        `    ;
         }
}

