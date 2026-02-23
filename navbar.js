document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('navbar-container');
    if (!container) return;
  
    container.innerHTML = `
      <nav class="navbar navbar-expand-lg filalma-navbar fixed-top">
        <div class="container-fluid px-3 px-lg-4">
          <!-- BRAND -->
          <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
            <!-- Sostituisci src con il logo reale del consorzio -->
            <img src="img/filalma.png" alt="Filalma Logo">
          </a>
  
          <!-- Toggler mobile -->
          <button class="navbar-toggler" type="button"
                  data-bs-toggle="offcanvas" data-bs-target="#filalmaOffcanvas"
                  aria-controls="filalmaOffcanvas" aria-label="Apri menu">
            <span class="navbar-toggler-icon-custom">
              <i class="fas fa-bars"></i>
            </span>
          </button>
  
          <!-- MENU DESKTOP -->
          <div class="collapse navbar-collapse justify-content-end d-none d-lg-flex">
            <ul class="navbar-nav me-3 mb-2 mb-lg-0 gap-lg-2">
              <!-- Home -->
              <li class="nav-item">
                <a class="nav-link active" href="index.html"> <i class="fa-solid fa-house"></i> Home</a>
              </li>
  
              <!-- Dropdown Consorzio -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  Consorzio
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#chi-siamo">Chi siamo</a></li>
                  <li><a class="dropdown-item" href="#governance">Governance</a></li>
                  <li><a class="dropdown-item" href="formAdesione.html">Vantaggi soci</a></li>
                  <li><a class="dropdown-item" href="#certificazioni">Certificazioni e iscrizioni</a></li>
                </ul>
              </li>
  
              <!-- Dropdown Servizi -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  Servizi
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="traslochi.html">Trasloco</a></li>
                  <li><a class="dropdown-item" href="#servizi">Facility management</a></li>
                  <li><a class="dropdown-item" href="#servizi">Pulizie civili</a></li>
                  <li><a class="dropdown-item" href="#servizi">Pulizie industriali</a></li>
                  <li><a class="dropdown-item" href="#servizi">Manutenzioni</a></li>
                  <li><a class="dropdown-item" href="#servizi">Aree verdi</a></li>
                  <li><a class="dropdown-item" href="#servizi">Deposito</a></li>
                  <li><a class="dropdown-item" href="#servizi">Servizi di giardinaggio</a></li>
                </ul>
              </li>
            </ul>
  
            <div class="d-flex gap-2">
              
             
              <a href="areaRiservata.html" class="btn filalma-btn-nav filalma-btn-area" style="color: white;">
                <i class="fa-solid fa-lock"></i>
                <span>Area riservata</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
  
      <!-- OFFCANVAS MOBILE -->
      <div class="offcanvas offcanvas-start filalma-offcanvas" tabindex="-1"
           id="filalmaOffcanvas" aria-labelledby="filalmaOffcanvasLabel">
        <div class="offcanvas-header">
          <div class="d-flex flex-column">
            <span class="offcanvas-title" id="filalmaOffcanvasLabel">
              MENU FILALMA
            </span>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Chiudi"></button>
        </div>
        <div class="offcanvas-body">
          <nav class="nav flex-column">
            <!-- Home -->
            <a class="nav-link mb-2" href="index.html" data-bs-dismiss="offcanvas">
              <i class="fa-solid fa-house me-2"></i> Home
            </a>
  
            <!-- Consorzio -->
            <div class="filalma-offcanvas-section-label">Consorzio</div>
            <a class="nav-link" href="#chi-siamo" data-bs-dismiss="offcanvas">Chi siamo</a>
            <a class="nav-link" href="#governance" data-bs-dismiss="offcanvas">Governance</a>
            <a class="nav-link" href="#vantaggio-soci" data-bs-dismiss="offcanvas">Vantaggi soci</a>
            <a class="nav-link mb-2" href="#certificazioni" data-bs-dismiss="offcanvas">Certificazioni e iscrizioni</a>
  
            <!-- Servizi -->
            <div class="filalma-offcanvas-section-label">Servizi</div>
            <a class="nav-link" href="#servizi" data-bs-dismiss="offcanvas">Trasloco</a>
            <a class="nav-link" href="#servizi" data-bs-dismiss="offcanvas">Facility management</a>
            <a class="nav-link" href="#servizi" data-bs-dismiss="offcanvas">Pulizie civili</a>
            <a class="nav-link" href="#servizi" data-bs-dismiss="offcanvas">Pulizie industriali</a>
            <a class="nav-link" href="#servizi" data-bs-dismiss="offcanvas">Manutenzioni</a>
            <a class="nav-link" href="#servizi" data-bs-dismiss="offcanvas">Aree verdi</a>
            <a class="nav-link" href="#servizi" data-bs-dismiss="offcanvas">Deposito</a>
            <a class="nav-link mb-3" href="#servizi" data-bs-dismiss="offcanvas">Servizi di giardinaggio</a>
  
            <!-- Bottoni azione -->
            <div class="mt-3 d-grid gap-2">
              
              <a href="#areaRiservata.html"
                 class="btn filalma-offcanvas-btn filalma-btn-area"
                 data-bs-dismiss="offcanvas">
                <i class="fa-solid fa-lock me-1"></i> Area riservata
              </a>
            </div>
          </nav>
        </div>
      </div>
    `;
  });