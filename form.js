(function () {
  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const form = document.getElementById('leadForm');
  if (!form) return;

  const submitBtn = document.getElementById('submitBtn');
  const statusText = document.getElementById('statusText');
  const canaliError = document.getElementById('canaliError');

  function hasAtLeastOneChannel() {
    return form.querySelectorAll('input[name="canali[]"]:checked').length > 0;
  }

  function setStatus(msg, type) {
    if (!statusText) return;
    statusText.textContent = msg || '';
    statusText.style.color =
      type === 'ok' ? 'rgba(0,194,255,0.95)' :
      type === 'err' ? 'rgba(255,120,120,0.95)' :
      'var(--filalma-muted)';
  }

  function lockForm(locked) {
    if (!submitBtn) return;
    submitBtn.disabled = locked;
    submitBtn.innerHTML = locked
      ? `<span class="me-2"><i class="fa-solid fa-circle-notch fa-spin"></i></span>Invio...`
      : `<span class="me-2"><i class="fa-solid fa-paper-plane"></i></span>Invia richiesta`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validazione Bootstrap
    form.classList.add('was-validated');

    // Canali obbligatori
    const channelsOk = hasAtLeastOneChannel();
    if (canaliError) canaliError.style.display = channelsOk ? 'none' : 'block';

    if (!form.checkValidity() || !channelsOk) {
      setStatus('Controlla i campi evidenziati.', 'err');
      return;
    }

    const endpoint = form.getAttribute('action');
    if (!endpoint || endpoint === 'USEBASIN_ENDPOINT') {
      setStatus('Inserisci l’endpoint UseBasin nel form (action="...").', 'err');
      return;
    }

    lockForm(true);
    setStatus('', 'idle');

    try {
      const formData = new FormData(form);

      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (!res.ok) throw new Error('HTTP ' + res.status);

      form.reset();
      form.classList.remove('was-validated');
      if (canaliError) canaliError.style.display = 'none';

      setStatus('Richiesta inviata correttamente. Ti contatteremo a breve.', 'ok');
    } catch (err) {
      setStatus('Errore durante l’invio. Riprova o contattaci.', 'err');
    } finally {
      lockForm(false);
    }
  });
})();