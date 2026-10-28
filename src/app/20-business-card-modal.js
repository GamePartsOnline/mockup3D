export function register(app) {
  app.openBusinessCardModal = function() {
    const modal = document.querySelector('#businessCardModal');
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add('modal-open');
  };
  app.closeBusinessCardModal = function() {
    const modal = document.querySelector('#businessCardModal');
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
  };
}

export function initialize(app) {
  const modal = document.querySelector('#businessCardModal');
  const closeBtn = document.querySelector('#closeBusinessCardBtn');
  if (!modal) return;

  closeBtn?.addEventListener('click', app.closeBusinessCardModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) app.closeBusinessCardModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) app.closeBusinessCardModal();
  });
}
