(function () {
  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Smooth micro: if user clicks anchor, close any open offcanvas (if present from navbar)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;

    // close bootstrap offcanvas if exists
    const ocEl = document.querySelector('.offcanvas.show');
    if (ocEl && window.bootstrap) {
      const instance = bootstrap.Offcanvas.getInstance(ocEl);
      if (instance) instance.hide();
    }
  });
})();
// ===== Preventivo form (UseBasin) =====
(function () {
  const form = document.getElementById('quoteForm');
  const statusEl = document.getElementById('quoteStatus');
  const submitBtn = document.getElementById('quoteSubmit');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validazione HTML5
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      if (statusEl) statusEl.textContent = "Controlla i campi evidenziati.";
      return;
    }

    // Stato invio
    if (submitBtn) submitBtn.disabled = true;
    if (statusEl) statusEl.textContent = "Invio in corso…";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.reset();
        form.classList.remove('was-validated');
        if (statusEl) statusEl.textContent = "Richiesta inviata ✔ Ti ricontatteremo a breve.";
      } else {
        if (statusEl) statusEl.textContent = "Errore nell’invio. Riprova tra poco.";
      }
    } catch (err) {
      if (statusEl) statusEl.textContent = "Connessione non disponibile. Riprova.";
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
})();