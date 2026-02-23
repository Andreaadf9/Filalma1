// navbar.js

// ===== THEME SWITCH (2 CSS) =====
const THEME_KEY = "filalma-theme"; // 'dark' | 'light'

function applyTheme(theme) {
  const darkLink = document.getElementById("theme-dark");
  const lightLink = document.getElementById("theme-light");

  // Se i link non esistono, non rompiamo nulla
  if (!darkLink || !lightLink) return;

  const t = theme === "light" ? "light" : "dark";

  // Opzione: usa disabled per non caricare/valutare l'altro foglio
  if (t === "light") {
    darkLink.disabled = true;
    lightLink.disabled = false;
  } else {
    darkLink.disabled = false;
    lightLink.disabled = true;
  }

  localStorage.setItem(THEME_KEY, t);
  updateThemeButtons(t);
}

function getSavedTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  return saved === "light" ? "light" : "dark";
}

function updateThemeButtons(theme) {
  const isLight = theme === "light";

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(isLight));
    btn.setAttribute("title", isLight ? "Passa a tema scuro" : "Passa a tema chiaro");

    // UX: in light mostro "luna" (torna dark), in dark mostro "sole" (vai light)
    btn.innerHTML = isLight
      ? `<i class="fa-solid fa-moon"></i>`
      : `<i class="fa-solid fa-sun"></i>`;
  });
}

function toggleTheme() {
  const next = getSavedTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
}

// Applica tema il prima possibile (dopo che il DOM esiste)
document.addEventListener("DOMContentLoaded", function () {
  applyTheme(getSavedTheme());

  const container = document.getElementById("navbar-container");
  if (!container) return;

  container.innerHTML = `
      <nav class="navbar navbar-expand-lg filalma-navbar fixed-top">
        <div class="container-fluid px-3 px-lg-4">
          <!-- BRAND -->
          <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
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
              <li class="nav-item">
                <a class="nav-link active" href="index2.html">
                  <i class="fa-solid fa-house"></i> Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  Consorzio
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="index2.html#chi-siamo">Chi siamo</a></li>
                  <li><a class="dropdown-item" href="governance.html">Governance</a></li>
                  <li><a class="dropdown-item" href="formAdesione.html">Vantaggi soci</a></li>
                  <li><a class="dropdown-item" href="index2.html#certificazioni">Certificazioni e iscrizioni</a></li>
                  <li><a class="dropdown-item" href="governance.html#whistleblowing">Segnalazioni</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  Servizi
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="facility.html">Facility management</a></li>
                  <li><a class="dropdown-item" href="pulizie.html">Pulizie civili</a></li>
                  <li><a class="dropdown-item" href="pulizie.html#industriali">Pulizie industriali</a></li>
                  <li><a class="dropdown-item" href="serviziDiGiardinaggio.html#manutenzioni">Manutenzioni</a></li>
                  <li><a class="dropdown-item" href="serviziDiGiardinaggio.html#aree-verdi">Aree verdi</a></li>
                  <li><a class="dropdown-item" href="deposito.html">Deposito</a></li>
                  <li><a class="dropdown-item" href="serviziDiGiardinaggio.html#giardinaggio">Servizi di giardinaggio</a></li>
                  <li><a class="dropdown-item" href="traslochi.html">Logistica Integrata</a></li>
                </ul>
              </li>
            </ul>

            <div class="d-flex gap-2 align-items-center">
              <!-- ✅ THEME TOGGLER (DESKTOP) -->
              <button class="btn filalma-theme-toggle"
                      type="button"
                      data-theme-toggle
                      aria-label="Cambia tema"
                      aria-pressed="false">
                <i class="fa-solid fa-sun"></i>
              </button>

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

          <div class="d-flex align-items-center gap-2">
            <!-- ✅ THEME TOGGLER (OFFCANVAS) -->
            <button class="btn filalma-theme-toggle"
                    type="button"
                    data-theme-toggle
                    aria-label="Cambia tema"
                    aria-pressed="false">
              <i class="fa-solid fa-sun"></i>
            </button>

            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Chiudi"></button>
          </div>
        </div>

        <div class="offcanvas-body">
          <nav class="nav flex-column">
            <a class="nav-link mb-2" href="index.html" data-bs-dismiss="offcanvas">
              <i class="fa-solid fa-house me-2"></i> Home
            </a>

            <div class="filalma-offcanvas-section-label">Consorzio</div>
            <a class="nav-link" href="index2.html#chi-siamo" data-bs-dismiss="offcanvas">Chi siamo</a>
            <a class="nav-link" href="governance.html" data-bs-dismiss="offcanvas">Governance</a>
            <a class="nav-link" href="index2.html#vantaggio-soci" data-bs-dismiss="offcanvas">Vantaggi soci</a>
            <a class="nav-link mb-2" href="index2.html#certificazioni" data-bs-dismiss="offcanvas">Certificazioni e iscrizioni</a>
            <a class="nav-link mb-2" href="governance.html#whistleblowing" data-bs-dismiss="offcanvas">Segnalazioni</a>

            <div class="filalma-offcanvas-section-label">Servizi</div>
            <a class="nav-link" href="facility.html" data-bs-dismiss="offcanvas">Facility management</a>
            <a class="nav-link" href="pulizie.html" data-bs-dismiss="offcanvas">Pulizie civili</a>
            <a class="nav-link" href="pulizie.html#industriali" data-bs-dismiss="offcanvas">Pulizie industriali</a>
            <a class="nav-link" href="serviziDiGiardinaggio.html#manutenzioni" data-bs-dismiss="offcanvas">Manutenzioni</a>
            <a class="nav-link" href="serviziDiGiardinaggio.html#aree-verdi" data-bs-dismiss="offcanvas">Aree verdi</a>
            <a class="nav-link" href="deposito.html" data-bs-dismiss="offcanvas">Deposito</a>
            <a class="nav-link mb-3" href="serviziDiGiardinaggio.html#giardinaggio" data-bs-dismiss="offcanvas">Servizi di giardinaggio</a>
            <a class="nav-link" href="traslochi.html" >Logistica Integrata</a>

            <div class="mt-3 d-grid gap-2">
              <a href="areaRiservata.html"
                 class="btn filalma-offcanvas-btn filalma-btn-area"
                 data-bs-dismiss="offcanvas">
                <i class="fa-solid fa-lock me-1"></i> Area riservata
              </a>
            </div>
          </nav>
        </div>
      </div>
    `;

  // bind click toggle (per entrambi i bottoni creati)
  container.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });

  // sincronizza icone allo stato attuale
  updateThemeButtons(getSavedTheme());

  // ✅ Fix navigazione link offcanvas: chiudi e poi naviga
const offcanvasEl = document.getElementById("filalmaOffcanvas");

if (offcanvasEl) {
  const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

  offcanvasEl.querySelectorAll('a[href]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");

      // ignora link vuoti o #
      if (!href || href === "#") return;

      // se è un link a un'altra pagina o con hash, gestiscilo noi
      e.preventDefault();

      // chiudi offcanvas
      bsOffcanvas.hide();

      // dopo che è chiuso, naviga
      offcanvasEl.addEventListener(
        "hidden.bs.offcanvas",
        () => {
          window.location.href = href;
        },
        { once: true }
      );
    });
  });
}
});