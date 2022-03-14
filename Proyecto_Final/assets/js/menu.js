function menu() {
    const menu  = document.getElementById('menu');
    menu.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient ">
    <div class="container-fluid ">
      <a class="navbar-brand text-white" href="/">Finanzas</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/gastos">Gastos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/ingresos">Ingresos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        `;
}