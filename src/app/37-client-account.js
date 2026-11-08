// Gestion de l'Espace Client : Suivi de commande en ligne, aperçu BAT 3D et messagerie avec l'atelier
const CLIENT_STORAGE_EMAIL = 'g2p_client_email';

export function register(app) {
  app.openClientAccountModal = function() {
    const modal = document.querySelector('#clientAccountModal');
    if (!modal) return;

    const savedEmail = localStorage.getItem(CLIENT_STORAGE_EMAIL);
    if (savedEmail) {
      app.loadClientAccountOrders(savedEmail);
    } else {
      const loginView = document.querySelector('#clientAccountLoginView');
      const ordersView = document.querySelector('#clientAccountOrdersView');
      if (loginView) loginView.style.display = 'flex';
      if (ordersView) ordersView.style.display = 'none';
    }

    modal.hidden = false;
    modal.removeAttribute('hidden');
    modal.style.display = 'flex';
    modal.style.zIndex = '100020';
  };

  app.closeClientAccountModal = function() {
    const modal = document.querySelector('#clientAccountModal');
    if (modal) {
      modal.hidden = true;
      modal.setAttribute('hidden', '');
      modal.style.display = 'none';
    }
  };

  app.loadClientAccountOrders = async function(email) {
    if (!email) return;
    const cleanEmail = email.trim().toLowerCase();
    const loginView = document.querySelector('#clientAccountLoginView');
    const ordersView = document.querySelector('#clientAccountOrdersView');
    const emailLabel = document.querySelector('#clientAccountConnectedEmail');
    const listContainer = document.querySelector('#clientOrdersListContainer');
    const loginMsg = document.querySelector('#clientAccountLoginMsg');

    if (emailLabel) emailLabel.textContent = cleanEmail;

    try {
      if (listContainer) {
        listContainer.innerHTML = '<p style="text-align:center; color:#64748b; font-size:13px; padding:20px;">Chargement de vos commandes…</p>';
      }
      const res = await fetch(`/api/client/orders?email=${encodeURIComponent(cleanEmail)}`);
      if (!res.ok) throw new Error('Erreur réseau');
      const data = await res.json();
      const orders = data.orders || [];

      if (loginView) loginView.style.display = 'none';
      if (ordersView) ordersView.style.display = 'flex';
      localStorage.setItem(CLIENT_STORAGE_EMAIL, cleanEmail);

      if (orders.length === 0) {
        if (listContainer) {
          listContainer.innerHTML = `
            <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:32px 20px; text-align:center;">
              <span style="font-size:36px; display:block; margin-bottom:10px;">📋</span>
              <h4 style="margin:0 0 6px 0; font-size:16px; color:#0f172a;">Aucune commande trouvée</h4>
              <p style="margin:0; font-size:13px; color:#64748b; line-height:1.5;">Aucun dossier n'a été trouvé pour l'adresse <strong>${cleanEmail}</strong>.<br>Vérifiez l'orthographe ou créez votre premier objet dans le Showroom 3D !</p>
            </div>
          `;
        }
        return;
      }

      app.renderClientOrdersList(orders, cleanEmail);
    } catch (err) {
      console.warn('Erreur chargement commandes client:', err);
      if (loginMsg) {
        loginMsg.style.display = 'block';
        loginMsg.style.background = '#fef2f2';
        loginMsg.style.color = '#dc2626';
        loginMsg.textContent = 'Impossible de récupérer vos commandes. Vérifiez votre connexion.';
      }
    }
  };

  app.renderClientOrdersList = function(orders, clientEmail) {
    const listContainer = document.querySelector('#clientOrdersListContainer');
    if (!listContainer) return;

    listContainer.innerHTML = orders.map((order) => {
      const dateStr = order.date ? new Date(order.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';
      const chk = order.checks || {};
      const msgs = Array.isArray(order.messages) ? order.messages : [];

      // Statuts de progression
      const isBatApproved = !!chk.batConforme;
      const isPrinted = !!chk.imprime;
      const isPressed = !!chk.presse;
      const isShipped = !!chk.expedie;

      // Fichiers visuels
      const batFile = (order.files || []).find(f => f.name.includes('bat_mockup') || f.name.includes('mockup'));
      const visFile = (order.files || []).find(f => f.name.includes('visuel_client') || f.name.includes('wrap'));

      const batImgSrc = batFile ? batFile.url : `/api/admin/submissions/file?folder=${encodeURIComponent(order.folder)}&file=bat_mockup.png`;
      const visImgSrc = visFile ? visFile.url : `/api/admin/submissions/file?folder=${encodeURIComponent(order.folder)}&file=visuel_client.png`;

      return `
        <div class="client-order-card" data-folder="${order.folder}" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.04); overflow:hidden;">
          <!-- En-tête commande -->
          <div style="background:#f8fafc; border-bottom:1px solid #e2e8f0; padding:12px 18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div>
              <span style="font-size:11px; font-weight:800; text-transform:uppercase; color:#7c3aed; letter-spacing:0.04em;">Dossier : ${order.id}</span>
              <h4 style="margin:2px 0 0 0; font-size:15px; color:#0f172a;">${order.product} (Qté : ${order.quantity})</h4>
            </div>
            <div style="text-align:right;">
              <strong style="font-size:15px; color:#059669; display:block;">${order.totalPrice || ''}</strong>
              <small style="font-size:11px; color:#64748b;">Validé le ${dateStr}</small>
            </div>
          </div>

          <div style="padding:16px 18px; display:flex; flex-direction:column; gap:16px;">
            <!-- Stepper d'avancement de la fabrication -->
            <div style="background:#faf5ff; border:1px solid #e9d5ff; border-radius:10px; padding:12px 14px;">
              <span style="font-size:11px; font-weight:800; text-transform:uppercase; color:#6b21a8; display:block; margin-bottom:8px;">Suivi de votre fabrication à l'atelier :</span>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:8px; font-size:11.5px;">
                <div style="display:flex; align-items:center; gap:6px; color:#059669; font-weight:700;">
                  <span>✓</span> Reçu à l'atelier
                </div>
                <div style="display:flex; align-items:center; gap:6px; color:${isBatApproved ? '#059669; font-weight:700;' : '#94a3b8;'}">
                  <span>${isBatApproved ? '✓' : '⏳'}</span> BAT 3D ${isBatApproved ? 'conforme' : 'en attente'}
                </div>
                <div style="display:flex; align-items:center; gap:6px; color:${isPrinted ? '#059669; font-weight:700;' : '#94a3b8;'}">
                  <span>${isPrinted ? '✓' : '⏳'}</span> Impression ${isPrinted ? 'réalisée' : 'prévue'}
                </div>
                <div style="display:flex; align-items:center; gap:6px; color:${isPressed ? '#059669; font-weight:700;' : '#94a3b8;'}">
                  <span>${isPressed ? '✓' : '⏳'}</span> Presse ${isPressed ? 'effectuée' : 'en cours'}
                </div>
                <div style="display:flex; align-items:center; gap:6px; color:${isShipped ? '#059669; font-weight:700;' : '#94a3b8;'}">
                  <span>${isShipped ? '✓' : '⏳'}</span> ${isShipped ? 'Expédié / Remis' : 'Expédition bientôt'}
                </div>
              </div>
            </div>

            <!-- Aperçus graphiques -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                <span style="font-size:11px; font-weight:700; color:#475569; display:block; margin-bottom:6px;">Aperçu BAT 3D</span>
                <img src="${batImgSrc}" alt="Aperçu BAT 3D" style="max-height:140px; max-width:100%; object-fit:contain; border-radius:6px; background:#ffffff; border:1px solid #cbd5e1;" onerror="this.src='/logo-graph2print.png'" />
              </div>
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                <span style="font-size:11px; font-weight:700; color:#475569; display:block; margin-bottom:6px;">Votre Visuel Personnalisé</span>
                <img src="${visImgSrc}" alt="Visuel Client" style="max-height:140px; max-width:100%; object-fit:contain; border-radius:6px; background:#ffffff; border:1px solid #cbd5e1;" onerror="this.src='/logo-graph2print.png'" />
              </div>
            </div>

            <!-- Messagerie directe avec l'Atelier Graph2Print -->
            <div style="border-top:1px solid #e2e8f0; padding-top:14px;">
              <strong style="font-size:12.5px; color:#1e1b4b; display:block; margin-bottom:8px;">Échanges avec l'Atelier Graph2Print :</strong>
              <div class="client-msg-thread" style="max-height:150px; overflow-y:auto; display:flex; flex-direction:column; gap:8px; margin-bottom:10px; padding:10px; background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
                ${msgs.length === 0 ? '<span style="color:#94a3b8; font-size:11.5px; text-align:center; padding:6px;">Aucun message. Vous pouvez poser une question ou envoyer une précision ci-dessous.</span>' : ''}
                ${msgs.map(m => {
                  const isAtelier = (m.sender === 'atelier' || m.sender === 'admin');
                  const time = m.date ? new Date(m.date).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' }) : '';
                  return `
                    <div style="background:${isAtelier ? '#ede9fe' : '#ffffff'}; border:1px solid ${isAtelier ? '#c4b5fd' : '#cbd5e1'}; border-radius:8px; padding:7px 11px; align-self:${isAtelier ? 'flex-start' : 'flex-end'}; max-width:85%; box-sizing:border-box;">
                      <div style="display:flex; justify-content:space-between; gap:10px; margin-bottom:2px;">
                        <strong style="font-size:11px; color:${isAtelier ? '#5b21b6' : '#1e293b'};">${m.author || (isAtelier ? 'Atelier Graph2Print' : 'Vous')}</strong>
                        <small style="font-size:10px; color:#64748b;">${time}</small>
                      </div>
                      <div style="font-size:12px; color:#1e293b; line-height:1.4;">${m.text}</div>
                    </div>
                  `;
                }).join('')}
              </div>
              <div style="display:flex; gap:8px;">
                <input type="text" class="input-client-order-msg" placeholder="Écrire un message à l'atelier…" style="flex:1; padding:7px 10px; border-radius:6px; border:1px solid #cbd5e1; font-size:12.5px;" />
                <button type="button" class="btn-send-client-msg admin-btn primary" data-folder="${order.folder}" style="background:#7c3aed; font-size:12px; padding:7px 12px; white-space:nowrap;">Envoyer à l'atelier</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Listener sur l'envoi de message client
    listContainer.querySelectorAll('.btn-send-client-msg').forEach(btn => {
      btn.addEventListener('click', async () => {
        const folder = btn.dataset.folder;
        const card = btn.closest('.client-order-card');
        const input = card?.querySelector('.input-client-order-msg');
        const text = (input?.value || '').trim();
        if (!text) return;

        btn.disabled = true;
        try {
          const res = await fetch('/api/submissions/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ folder, text, sender: 'client', clientEmail })
          });
          if (res.ok) {
            input.value = '';
            app.loadClientAccountOrders(clientEmail);
            app.showToast?.('Message envoyé à l’atelier Graph2Print.');
          }
        } catch (e) {
          app.showToast?.('Erreur lors de l’envoi de votre message.');
        } finally {
          btn.disabled = false;
        }
      });
    });
  };
}

export function initialize(app) {
  document.querySelector('#btnClientAccount')?.addEventListener('click', () => app.openClientAccountModal());
  document.querySelector('#closeClientAccountBtn')?.addEventListener('click', () => app.closeClientAccountModal());

  document.querySelector('#btnClientAccountLogin')?.addEventListener('click', () => {
    const email = document.querySelector('#clientAccountEmailInput')?.value;
    if (!email || !email.includes('@')) {
      const msg = document.querySelector('#clientAccountLoginMsg');
      if (msg) {
        msg.style.display = 'block';
        msg.style.background = '#fef2f2';
        msg.style.color = '#dc2626';
        msg.textContent = 'Veuillez saisir une adresse courriel valide.';
      }
      return;
    }
    app.loadClientAccountOrders(email);
  });

  document.querySelector('#clientAccountEmailInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.querySelector('#btnClientAccountLogin')?.click();
    }
  });

  document.querySelector('#btnClientAccountLogout')?.addEventListener('click', () => {
    localStorage.removeItem(CLIENT_STORAGE_EMAIL);
    const loginView = document.querySelector('#clientAccountLoginView');
    const ordersView = document.querySelector('#clientAccountOrdersView');
    if (loginView) loginView.style.display = 'flex';
    if (ordersView) ordersView.style.display = 'none';
    const emailInp = document.querySelector('#clientAccountEmailInput');
    if (emailInp) emailInp.value = '';
    const loginMsg = document.querySelector('#clientAccountLoginMsg');
    if (loginMsg) loginMsg.style.display = 'none';
  });
}
