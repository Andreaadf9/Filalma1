(function () {
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Form UseBasin
  const form = document.getElementById('depositForm');
  const statusEl = document.getElementById('depositStatus');
  const submitBtn = document.getElementById('depositSubmit');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      if (statusEl) statusEl.textContent = "Controlla i campi evidenziati.";
      return;
    }

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