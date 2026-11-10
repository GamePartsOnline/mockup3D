// Gestion de l'Espace Client Authentifié Pleine Page (Portail Client) :
// Profil personnel, Coordonnées de livraison, Suivi des commandes pas à pas avec BAT 3D, Messagerie directe avec l'Atelier.

const CLIENT_STORAGE_TOKEN = 'g2p_client_token';
const CLIENT_STORAGE_PROFILE = 'g2p_client_profile';

export function register(app) {
  app.currentClientProfile = null;
  app.activePortalTab = 'orders'; // 'orders' | 'messages' | 'profile'

  app.openClientAccountModal = async function() {
    const portal = document.querySelector('#clientPortalPage');
    if (!portal) return;

    portal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const token = localStorage.getItem(CLIENT_STORAGE_TOKEN);
    if (token) {
      await app.checkClientSession(token);
    } else {
      app.showClientLoginView();
    }
  };

  app.closeClientAccountModal = function() {
    const portal = document.querySelector('#clientPortalPage');
    if (portal) {
      portal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  app.showClientLoginView = function() {
    const authSection = document.querySelector('#portalAuthSection');
    const dashSection = document.querySelector('#portalDashboardSection');
    const headerInfo = document.querySelector('#portalUserHeaderInfo');
    const logoutBtn = document.querySelector('#btnClientPortalLogout');

    if (authSection) authSection.style.display = 'flex';
    if (dashSection) dashSection.style.display = 'none';
    if (headerInfo) headerInfo.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'none';
  };

  app.checkClientSession = async function(token) {
    try {
      const res = await fetch('/api/client/profile', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.ok && data.client) {
          app.currentClientProfile = data.client;
          localStorage.setItem(CLIENT_STORAGE_PROFILE, JSON.stringify(data.client));
          app.showClientDashboard(data.client);
          return;
        }
      }
    } catch (err) {
      console.warn('Session client expirée ou invalide:', err);
    }

    localStorage.removeItem(CLIENT_STORAGE_TOKEN);
    localStorage.removeItem(CLIENT_STORAGE_PROFILE);
    app.currentClientProfile = null;
    app.showClientLoginView();
  };

  app.showClientDashboard = function(client) {
    const authSection = document.querySelector('#portalAuthSection');
    const dashSection = document.querySelector('#portalDashboardSection');
    const headerInfo = document.querySelector('#portalUserHeaderInfo');
    const logoutBtn = document.querySelector('#btnClientPortalLogout');

    if (authSection) authSection.style.display = 'none';
    if (dashSection) dashSection.style.display = 'flex';
    if (headerInfo) headerInfo.style.display = 'block';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';

    const fullName = `${client.prenom || ''} ${client.nom || 'Client'}`.trim();
    const initials = ((client.prenom ? client.prenom[0] : '') + (client.nom ? client.nom[0] : 'C')).toUpperCase() || 'CL';

    // Header
    const headName = document.querySelector('#portalHeaderUserName');
    const headEmail = document.querySelector('#portalHeaderUserEmail');
    if (headName) headName.textContent = fullName;
    if (headEmail) headEmail.textContent = client.email;

    // Bannière Profil
    const avatar = document.querySelector('#portalUserAvatar');
    const bannerName = document.querySelector('#portalBannerUserName');
    const bannerEmail = document.querySelector('#portalBannerUserEmail');
    const bannerPhone = document.querySelector('#portalBannerUserPhone');
    const statOrders = document.querySelector('#portalStatOrdersCount');
    const statSpent = document.querySelector('#portalStatTotalSpent');

    if (avatar) avatar.textContent = initials;
    if (bannerName) bannerName.textContent = `Bonjour, ${fullName}`;
    if (bannerEmail) bannerEmail.textContent = client.email;
    if (bannerPhone) bannerPhone.textContent = client.telephone ? `Tél : ${client.telephone}` : 'Téléphone non renseigné';

    const ordersCount = client.orders ? client.orders.length : (client.ordersCount || 0);
    const totalVal = Number.isFinite(client.totalSpent) ? client.totalSpent.toFixed(2) : '0.00';
    if (statOrders) statOrders.textContent = String(ordersCount);
    if (statSpent) statSpent.textContent = `${totalVal} €`;

    // Badges des onglets
    const badgeOrders = document.querySelector('#badgePortalOrders');
    if (badgeOrders) badgeOrders.textContent = String(ordersCount);

    // Pré-remplir l'onglet Profil
    const pNom = document.querySelector('#profNom');
    const pPrenom = document.querySelector('#profPrenom');
    const pEmail = document.querySelector('#profEmail');
    const pTel = document.querySelector('#profTelephone');
    const pAdr = document.querySelector('#profAdresse');
    const pCp = document.querySelector('#profCodePostal');
    const pVille = document.querySelector('#profVille');

    if (pNom) pNom.value = client.nom || '';
    if (pPrenom) pPrenom.value = client.prenom || '';
    if (pEmail) pEmail.value = client.email || '';
    if (pTel) pTel.value = client.telephone || '';
    if (pAdr) pAdr.value = client.adresse || '';
    if (pCp) pCp.value = client.codePostal || '';
    if (pVille) pVille.value = client.ville || '';

    // Rendu des Commandes
    app.renderPortalOrders(client.orders || []);

    // Rendu de la Messagerie
    app.renderPortalMessages(client);

    // Afficher l'onglet actif
    app.switchPortalTab(app.activePortalTab || 'orders');
  };

  app.switchPortalTab = function(tabName) {
    app.activePortalTab = tabName;

    const btnOrders = document.querySelector('#tabBtnPortalOrders');
    const btnMessages = document.querySelector('#tabBtnPortalMessages');
    const btnProfile = document.querySelector('#tabBtnPortalProfile');

    const contentOrders = document.querySelector('#portalTabContentOrders');
    const contentMessages = document.querySelector('#portalTabContentMessages');
    const contentProfile = document.querySelector('#portalTabContentProfile');

    const setActiveBtn = (btn, isActive) => {
      if (!btn) return;
      btn.style.background = isActive ? '#7c3aed' : 'transparent';
      btn.style.color = isActive ? '#ffffff' : '#475569';
      btn.style.fontWeight = isActive ? '800' : '600';
    };

    setActiveBtn(btnOrders, tabName === 'orders');
    setActiveBtn(btnMessages, tabName === 'messages');
    setActiveBtn(btnProfile, tabName === 'profile');

    if (contentOrders) contentOrders.style.display = tabName === 'orders' ? 'flex' : 'none';
    if (contentMessages) contentMessages.style.display = tabName === 'messages' ? 'flex' : 'none';
    if (contentProfile) contentProfile.style.display = tabName === 'profile' ? 'flex' : 'none';
  };

  app.renderPortalOrders = function(orders) {
    const container = document.querySelector('#portalOrdersListContainer');
    if (!container) return;

    if (!orders || orders.length === 0) {
      container.innerHTML = `
        <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:14px; padding:48px 24px; text-align:center; box-shadow:0 4px 14px rgba(0,0,0,0.02);">
          <div style="width:64px; height:64px; background:#f1f5f9; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:28px; margin:0 auto 14px auto;">📦</div>
          <h4 style="margin:0 0 8px 0; font-size:17px; color:#0f172a; font-weight:800;">Aucune fabrication en cours</h4>
          <p style="margin:0 auto 20px auto; max-width:480px; font-size:13.5px; color:#64748b; line-height:1.5;">Vous n'avez pas encore validé de commande. Personnalisez votre premier objet sur le Studio 3D et transmettez votre création pour suivre sa fabrication en direct ici !</p>
          <button type="button" onclick="document.querySelector('#closeClientPortalBtn')?.click()" style="background:#7c3aed; color:#ffffff; border:none; padding:10px 22px; border-radius:8px; font-weight:700; font-size:13.5px; cursor:pointer;">
            Découvrir le Studio 3D
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = orders.map((order) => {
      const dateStr = order.date ? new Date(order.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date récente';
      const chk = order.checks || {};
      const isBatApproved = !!chk.batConforme;
      const isPrinted = !!chk.imprime;
      const isPressed = !!chk.presse;
      const isShipped = !!chk.expedie;

      const batImgSrc = `/api/admin/submissions/file?folder=${encodeURIComponent(order.folder)}&file=bat_mockup.png`;
      const visImgSrc = `/api/admin/submissions/file?folder=${encodeURIComponent(order.folder)}&file=visuel_client.png`;

      return `
        <div class="portal-order-card" data-folder="${order.folder}" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:14px; box-shadow:0 4px 16px rgba(0,0,0,0.04); overflow:hidden;">
          <!-- En-tête Commande -->
          <div style="background:#f8fafc; border-bottom:1px solid #e2e8f0; padding:14px 20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
              <span style="font-size:11px; font-weight:800; text-transform:uppercase; color:#7c3aed; letter-spacing:0.04em;">Dossier : ${order.id || order.folder}</span>
              <h4 style="margin:2px 0 0 0; font-size:16px; color:#0f172a; font-weight:800;">${order.product || 'Objet personnalisé'} (Qté : ${order.quantity || 1})</h4>
            </div>
            <div style="text-align:right;">
              <strong style="font-size:16px; color:#059669; display:block;">${order.totalPrice || ''}</strong>
              <small style="font-size:11.5px; color:#64748b;">Enregistrée le ${dateStr}</small>
            </div>
          </div>

          <div style="padding:18px 20px; display:flex; flex-direction:column; gap:18px;">
            ${(order.status === 'non_conforme' || order.status === 'refuse') ? `
              <div style="background:#fef2f2; border:2px solid #ef4444; border-radius:12px; padding:14px 18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; box-shadow:0 4px 12px rgba(239,68,68,0.12);">
                <div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="background:#dc2626; color:#ffffff; font-size:11px; font-weight:800; padding:2px 8px; border-radius:6px; text-transform:uppercase;">Visuel non conforme</span>
                    <strong style="color:#991b1b; font-size:14.5px;">Correction requise par le Studio</strong>
                  </div>
                  <p style="margin:4px 0 0 0; font-size:13px; color:#7f1d1d; line-height:1.4;">
                    ${order.rejectionReason || 'Votre fichier d’origine ne respecte pas les critères techniques de fabrication. Merci de fournir une nouvelle image en 300 DPI.'}
                  </p>
                </div>
                <button type="button" class="btn-ask-order-msg" data-folder="${order.folder}" style="background:#dc2626; color:#ffffff; border:none; padding:10px 18px; border-radius:8px; font-size:13px; font-weight:800; cursor:pointer;">
                  Envoyer un message / nouveau visuel
                </button>
              </div>
            ` : ''}

            ${(order.status === 'bat_a_valider' || (order.isWorkshopProposition && !isBatApproved)) ? `
              <div style="background:#fffbeb; border:2px solid #f59e0b; border-radius:12px; padding:14px 18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; box-shadow:0 4px 12px rgba(245,158,11,0.12);">
                <div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="background:#d97706; color:#ffffff; font-size:11px; font-weight:800; padding:2px 8px; border-radius:6px; text-transform:uppercase;">Action requise</span>
                    <strong style="color:#92400e; font-size:14.5px;">Proposition du Studio Graph2Print</strong>
                  </div>
                  <p style="margin:4px 0 0 0; font-size:13px; color:#78350f; line-height:1.4;">
                    Le studio a préparé votre visuel sur mesure. Vérifiez la maquette 3D ci-dessous et validez votre Bon à Tirer (BAT) pour lancer l'impression !
                  </p>
                </div>
                <button type="button" class="btn-client-approve-bat" data-folder="${order.folder}" style="background:#059669; color:#ffffff; border:none; padding:10px 20px; border-radius:8px; font-size:13.5px; font-weight:800; cursor:pointer; box-shadow:0 3px 10px rgba(5,150,105,0.35);">
                  ✓ Valider mon BAT et lancer la fabrication
                </button>
              </div>
            ` : ''}

            <!-- Stepper pas à pas de fabrication -->
            <div style="background:#faf5ff; border:1px solid #e9d5ff; border-radius:12px; padding:14px 16px;">
              <span style="font-size:11.5px; font-weight:800; text-transform:uppercase; color:#6b21a8; display:block; margin-bottom:10px;">Suivi de fabrication en direct :</span>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:10px; font-size:12px;">
                <div style="display:flex; align-items:center; gap:6px; color:#059669; font-weight:700;">
                  <span style="background:#dcfce7; color:#15803d; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:11px;">✓</span>
                  Reçu studio
                </div>
                <div style="display:flex; align-items:center; gap:6px; color:${isBatApproved ? '#059669; font-weight:700;' : '#94a3b8;'}">
                  <span style="background:${isBatApproved ? '#dcfce7' : '#f1f5f9'}; color:${isBatApproved ? '#15803d' : '#94a3b8'}; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:11px;">${isBatApproved ? '✓' : '2'}</span>
                  BAT 3D ${isBatApproved ? 'validé' : 'en attente'}
                </div>
                <div style="display:flex; align-items:center; gap:6px; color:${isPrinted ? '#059669; font-weight:700;' : '#94a3b8;'}">
                  <span style="background:${isPrinted ? '#dcfce7' : '#f1f5f9'}; color:${isPrinted ? '#15803d' : '#94a3b8'}; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:11px;">${isPrinted ? '✓' : '3'}</span>
                  Impression ${isPrinted ? 'faite' : 'à venir'}
                </div>
                <div style="display:flex; align-items:center; gap:6px; color:${isPressed ? '#059669; font-weight:700;' : '#94a3b8;'}">
                  <span style="background:${isPressed ? '#dcfce7' : '#f1f5f9'}; color:${isPressed ? '#15803d' : '#94a3b8'}; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:11px;">${isPressed ? '✓' : '4'}</span>
                  Pressage ${isPressed ? 'fait' : 'en attente'}
                </div>
                <div style="display:flex; align-items:center; gap:6px; color:${isShipped ? '#059669; font-weight:700;' : '#94a3b8;'}">
                  <span style="background:${isShipped ? '#dcfce7' : '#f1f5f9'}; color:${isShipped ? '#15803d' : '#94a3b8'}; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:11px;">${isShipped ? '✓' : '5'}</span>
                  ${isShipped ? 'Expédié / Remis' : 'Expédition prochaine'}
                </div>
              </div>
            </div>

            ${order.discount ? `
              <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:8px; padding:8px 12px; font-size:12.5px; color:#065f46; display:flex; justify-content:space-between; align-items:center;">
                <span>🎁 Remise appliquée : <strong>${order.discount.label || order.discount.code}</strong></span>
                <strong style="color:#059669; font-size:13.5px;">-${order.discount.amount || ''}</strong>
              </div>
            ` : ''}

            ${Array.isArray(order.cart) && order.cart.length > 0 ? `
              <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:12px 14px; display:flex; flex-direction:column; gap:8px;">
                <strong style="font-size:12px; text-transform:uppercase; color:#475569; letter-spacing:0.03em;">Détail des articles du lot commandé :</strong>
                ${order.cart.map(c => `
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:12.5px; padding:5px 0; border-bottom:1px dashed #e2e8f0;">
                    <div>
                      <strong>${c.productName}</strong> × ${c.quantity}
                      ${c.visualName ? `<span style="color:#64748b; font-size:11.5px; display:block;">Visuel : ${c.visualName}</span>` : ''}
                    </div>
                    <span style="font-weight:700; color:#7c3aed;">${c.totalItemPrice || ''}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <!-- Aperçus visuels côte à côte -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:12px; text-align:center;">
                <span style="font-size:12px; font-weight:700; color:#475569; display:block; margin-bottom:8px;">Aperçu BAT 3D Conforme</span>
                <img src="${batImgSrc}" alt="BAT 3D" style="max-height:160px; max-width:100%; object-fit:contain; border-radius:8px; background:#ffffff; border:1px solid #cbd5e1;" onerror="this.src='/logo-graph2print.png'" />
              </div>
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:12px; text-align:center;">
                <span style="font-size:12px; font-weight:700; color:#475569; display:block; margin-bottom:8px;">Visuel & Motif Imprimé</span>
                <img src="${visImgSrc}" alt="Visuel Client" style="max-height:160px; max-width:100%; object-fit:contain; border-radius:8px; background:#ffffff; border:1px solid #cbd5e1;" onerror="this.src='/logo-graph2print.png'" />
              </div>
            </div>

            <!-- Actions sur cette commande -->
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #f1f5f9; padding-top:12px; flex-wrap:wrap; gap:10px;">
              <span style="font-size:12.5px; color:#64748b;">${order.customText ? `Texte personnalisé : <strong>"${order.customText}"</strong>` : 'Conforme à votre maquette'}</span>
              <div style="display:flex; gap:8px; flex-wrap:wrap;">
                <button type="button" class="btn-toggle-favorite-order" data-folder="${order.folder}" data-product="${order.product || ''}" data-key="${order.productKey || ''}" style="background:#fffbeb; color:#b45309; border:1px solid #fde68a; border-radius:8px; padding:8px 12px; font-size:12.5px; font-weight:700; cursor:pointer;" title="Conserver cette création en favori">
                  ⭐ Mettre en favori
                </button>
                <button type="button" class="btn-reload-studio-order" data-key="${order.productKey || ''}" data-folder="${order.folder}" style="background:#f0fdf4; color:#15803d; border:1px solid #bbf7d0; border-radius:8px; padding:8px 12px; font-size:12.5px; font-weight:700; cursor:pointer;" title="Ouvrir à nouveau cette création dans l'atelier 3D">
                  🔄 Recharger dans le Studio 3D
                </button>
                <button type="button" class="btn-ask-order-msg" data-folder="${order.folder}" style="background:#f5f3ff; color:#7c3aed; border:1px solid #ddd6fe; border-radius:8px; padding:8px 14px; font-size:12.5px; font-weight:700; cursor:pointer;">
                  💬 Contacter le studio
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Raccourci vers les favoris
    container.querySelectorAll('.btn-toggle-favorite-order').forEach(btn => {
      btn.addEventListener('click', () => {
        const folder = btn.dataset.folder;
        const product = btn.dataset.product;
        const key = btn.dataset.key;
        let favs = [];
        try { favs = JSON.parse(localStorage.getItem('mockup3d_favorite_orders') || '[]'); } catch {}
        const idx = favs.findIndex(f => f.folder === folder);
        if (idx !== -1) {
          favs.splice(idx, 1);
          btn.textContent = '⭐ Mettre en favori';
          btn.style.background = '#fffbeb';
          btn.style.color = '#b45309';
          app.showToast?.('Création retirée des favoris.');
        } else {
          favs.push({ folder, product, productKey: key, date: new Date().toISOString() });
          btn.textContent = '★ En favori';
          btn.style.background = '#fef3c7';
          btn.style.color = '#92400e';
          app.showToast?.('Création ajoutée à vos favoris !');
        }
        localStorage.setItem('mockup3d_favorite_orders', JSON.stringify(favs));
      });
    });

    // Recharger dans le Studio 3D
    container.querySelectorAll('.btn-reload-studio-order').forEach(btn => {
      btn.addEventListener('click', () => {
        let key = btn.dataset.key;
        const folder = btn.dataset.folder;
        const order = (orders || []).find(o => o.folder === folder);

        if (!key || key === 'showcase' || !app.productDefinitions?.[key]) {
          const prodTitle = (order?.product || '').toLowerCase();
          if (prodTitle.includes('mug')) key = 'mug11oz';
          else if (prodTitle.includes('tapis')) key = 'mousePad';
          else if (prodTitle.includes('t-shirt') || prodTitle.includes('tshirt')) key = 'tshirt3D';
          else if (prodTitle.includes('coussin')) key = 'cushion';
          else if (prodTitle.includes('arcade')) key = 'arcadeCabinet';
          else if (prodTitle.includes('trousse')) key = 'pencilCase';
          else if (prodTitle.includes('verre')) key = 'coasterRound';
          else if (prodTitle.includes('cle') || prodTitle.includes('clé')) key = 'keychainSquare';
          else if (prodTitle.includes('gourde')) key = 'waterBottle';
          else key = 'mousePad';
        }

        app.closeClientAccountModal?.();

        if (key && app.switchToProduct) {
          app.switchToProduct(key);
        }

        setTimeout(() => {
          if (folder && (app.addImageFromUrl || app.loadCatalogImageDirect)) {
            const visUrl = `/api/admin/submissions/file?folder=${encodeURIComponent(folder)}&file=visuel_client.png`;
            const loader = app.addImageFromUrl || app.loadCatalogImageDirect;
            loader(visUrl, 'Création réimportée').then(ok => {
              if (!ok) {
                const wrapUrl = `/api/admin/submissions/file?folder=${encodeURIComponent(folder)}&file=wrap-${key}-210x95mm.png`;
                loader(wrapUrl, 'Wrap réimporté', { silent: true });
              }
            });
          }

          if (order?.customText) {
            const txtInput = document.querySelector('#customTextInput') || document.querySelector('#customText');
            if (txtInput) {
              txtInput.value = order.customText;
              txtInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }
        }, 300);

        app.showToast?.('Création rechargée dans le Studio 3D !');
      });
    });

    // Validation formelle du BAT par le client
    container.querySelectorAll('.btn-client-approve-bat').forEach(btn => {
      btn.addEventListener('click', async () => {
        const folder = btn.dataset.folder;
        if (!folder) return;
        btn.disabled = true;
        btn.textContent = 'Validation en cours…';
        try {
          const res = await fetch('/api/client/bat/approve', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ folder })
          });
          const data = await res.json();
          if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur lors de la validation.');

          app.showToast?.(data.message || 'Bon à Tirer validé avec succès !');
          const token = localStorage.getItem(CLIENT_STORAGE_TOKEN);
          if (token) await app.checkClientSession(token);
        } catch (err) {
          app.showToast?.(err.message || 'Erreur lors de la validation.');
          btn.disabled = false;
          btn.textContent = '✓ Valider mon BAT et lancer la fabrication';
        }
      });
    });

    // Raccourci vers la messagerie pour une commande
    container.querySelectorAll('.btn-ask-order-msg').forEach(btn => {
      btn.addEventListener('click', () => {
        const folder = btn.dataset.folder;
        app.switchPortalTab('messages');
        const sel = document.querySelector('#portalMsgTargetSelect');
        if (sel && folder) {
          sel.value = folder;
        }
        document.querySelector('#portalMsgInputText')?.focus();
      });
    });
  };

  app.renderPortalMessages = function(client) {
    const select = document.querySelector('#portalMsgTargetSelect');
    const thread = document.querySelector('#portalMessagesThread');
    const badgeMsg = document.querySelector('#badgePortalMessages');

    if (!select || !thread) return;

    // Remplir le sélecteur avec discussion générale + les commandes
    const orders = client.orders || [];
    select.innerHTML = '<option value="general">Discussion générale avec le Studio Graph2Print</option>' +
      orders.map(o => `<option value="${o.folder}">Commande : ${o.id || o.folder} (${o.product || 'Objet'})</option>`).join('');

    // Collecter l'ensemble des messages
    const allMessages = [];

    // Messages généraux
    if (Array.isArray(client.generalMessages)) {
      client.generalMessages.forEach(m => {
        allMessages.push({ ...m, folder: 'general', contextLabel: 'Général' });
      });
    }

    // Messages de chaque commande
    orders.forEach(o => {
      if (Array.isArray(o.messages)) {
        o.messages.forEach(m => {
          allMessages.push({ ...m, folder: o.folder, contextLabel: o.id || o.folder });
        });
      }
    });

    // Tri chronologique
    allMessages.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));

    if (badgeMsg) badgeMsg.textContent = String(allMessages.length);

    const filterAndRender = () => {
      const selectedTarget = select.value;
      const filtered = selectedTarget === 'general'
        ? allMessages.filter(m => m.folder === 'general')
        : allMessages.filter(m => m.folder === selectedTarget);

      const aiFaqQuick = `
        <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:10px; padding:12px 14px; margin-bottom:12px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
            <strong style="font-size:12.5px; color:#0369a1; display:flex; align-items:center; gap:6px;">
              <span>🤖</span> Assistant IA Studio (Réponse Instantanée) :
            </strong>
            <small style="color:#0284c7; font-size:11px;">Disponible 24h/24</small>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            <button type="button" class="btn-quick-ai-faq" data-question="Quels sont vos délais de fabrication au studio ?" style="background:#ffffff; border:1px solid #7dd3fc; color:#0284c7; border-radius:16px; padding:4px 10px; font-size:11.5px; font-weight:600; cursor:pointer;">⏱ Délais de fabrication ?</button>
            <button type="button" class="btn-quick-ai-faq" data-question="Comment valider mon Bon à Tirer (BAT) électronique ?" style="background:#ffffff; border:1px solid #7dd3fc; color:#0284c7; border-radius:16px; padding:4px 10px; font-size:11.5px; font-weight:600; cursor:pointer;">✓ Comment valider mon BAT ?</button>
            <button type="button" class="btn-quick-ai-faq" data-question="Quelle résolution et quel format d'image fournir (300 DPI) ?" style="background:#ffffff; border:1px solid #7dd3fc; color:#0284c7; border-radius:16px; padding:4px 10px; font-size:11.5px; font-weight:600; cursor:pointer;">📐 Résolution & 300 DPI ?</button>
            <button type="button" class="btn-quick-ai-faq" data-question="Comment retirer ma commande au studio de Givry-en-Argonne ?" style="background:#ffffff; border:1px solid #7dd3fc; color:#0284c7; border-radius:16px; padding:4px 10px; font-size:11.5px; font-weight:600; cursor:pointer;">📍 Retrait à Givry-en-Argonne ?</button>
            <button type="button" class="btn-quick-ai-faq" data-question="Comment bénéficier d'un code promo ou d'une remise cadeau ?" style="background:#ffffff; border:1px solid #7dd3fc; color:#0284c7; border-radius:16px; padding:4px 10px; font-size:11.5px; font-weight:600; cursor:pointer;">🎁 Codes cadeaux & Remises ?</button>
          </div>
        </div>
      `;

      if (filtered.length === 0) {
        thread.innerHTML = `
          ${aiFaqQuick}
          <div style="text-align:center; padding:24px 16px; color:#94a3b8;">
            <div style="font-size:28px; margin-bottom:8px;">💬</div>
            <strong style="color:#475569; font-size:14px; display:block;">Bienvenue sur la messagerie de votre studio</strong>
            <p style="margin:4px 0 0 0; font-size:12.5px;">Cliquez sur une question rapide ci-dessus ou écrivez votre message : notre assistant IA ou notre équipe vous répond immédiatement.</p>
          </div>
        `;
        bindQuickFaq();
        return;
      }

      thread.innerHTML = aiFaqQuick + filtered.map(m => {
        const isAtelier = (m.sender === 'atelier' || m.sender === 'admin');
        const isAi = m.isAi || (m.author && m.author.includes('IA'));
        const timeStr = m.date ? new Date(m.date).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' }) : '';
        return `
          <div style="background:${isAtelier ? (isAi ? '#f0f9ff' : '#ede9fe') : '#ffffff'}; border:1px solid ${isAtelier ? (isAi ? '#bae6fd' : '#c4b5fd') : '#cbd5e1'}; border-radius:10px; padding:10px 14px; align-self:${isAtelier ? 'flex-start' : 'flex-end'}; max-width:80%; box-sizing:border-box; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; gap:14px; margin-bottom:4px; align-items:center;">
              <div style="display:flex; align-items:center; gap:6px;">
                <strong style="font-size:12px; color:${isAtelier ? (isAi ? '#0369a1' : '#5b21b6') : '#1e293b'};">${m.author || (isAtelier ? 'Studio Graph2Print' : 'Vous')}</strong>
                ${isAi ? '<span style="background:#0284c7; color:#ffffff; font-size:10px; font-weight:800; padding:1px 6px; border-radius:4px;">IA Instantanée</span>' : ''}
              </div>
              <small style="font-size:11px; color:#64748b;">${timeStr}</small>
            </div>
            <div style="font-size:13.5px; color:#0f172a; line-height:1.45; white-space:pre-wrap;">${m.text}</div>
          </div>
        `;
      }).join('');

      bindQuickFaq();
      thread.scrollTop = thread.scrollHeight;
    };

    function bindQuickFaq() {
      thread.querySelectorAll('.btn-quick-ai-faq').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const q = e.currentTarget.dataset.question;
          const inp = document.querySelector('#portalMsgInputText');
          if (inp) {
            inp.value = q;
            document.querySelector('#formPortalSendMessage')?.requestSubmit();
          }
        });
      });
    }

    select.onchange = filterAndRender;
    filterAndRender();
  };
}

export function initialize(app) {
  // Ouverture depuis la barre supérieure
  document.querySelector('#btnClientAccount')?.addEventListener('click', () => {
    app.openClientAccountModal();
  });

  // Fermeture du portail plein écran
  document.querySelector('#closeClientPortalBtn')?.addEventListener('click', () => {
    app.closeClientAccountModal();
  });

  // Déconnexion
  const doLogout = () => {
    localStorage.removeItem(CLIENT_STORAGE_TOKEN);
    localStorage.removeItem(CLIENT_STORAGE_PROFILE);
    app.currentClientProfile = null;
    app.showClientLoginView();
    app.showToast?.('Vous êtes déconnecté de votre espace.');
  };

  document.querySelector('#btnClientPortalLogout')?.addEventListener('click', doLogout);

  // Bascule Onglets Portail Connecté
  document.querySelector('#tabBtnPortalOrders')?.addEventListener('click', () => app.switchPortalTab('orders'));
  document.querySelector('#tabBtnPortalMessages')?.addEventListener('click', () => app.switchPortalTab('messages'));
  document.querySelector('#tabBtnPortalProfile')?.addEventListener('click', () => app.switchPortalTab('profile'));

  // Bouton Actualiser Commandes
  document.querySelector('#btnRefreshPortalOrders')?.addEventListener('click', async () => {
    const token = localStorage.getItem(CLIENT_STORAGE_TOKEN);
    if (token) {
      await app.checkClientSession(token);
      app.showToast?.('Commandes actualisées.');
    }
  });

  // Bascule Onglets Non Connecté (Connexion / Inscription)
  const tabLogin = document.querySelector('#tabBtnClientLogin');
  const tabReg = document.querySelector('#tabBtnClientRegister');
  const formLogin = document.querySelector('#formClientLogin');
  const formReg = document.querySelector('#formClientRegister');
  const authMsg = document.querySelector('#clientAccountAuthMsg');

  const setAuthTab = (isLogin) => {
    if (tabLogin) {
      tabLogin.style.background = isLogin ? '#ffffff' : 'transparent';
      tabLogin.style.color = isLogin ? '#0f172a' : '#64748b';
      tabLogin.style.fontWeight = isLogin ? '700' : '600';
      tabLogin.style.boxShadow = isLogin ? '0 1px 3px rgba(0,0,0,0.1)' : 'none';
    }
    if (tabReg) {
      tabReg.style.background = !isLogin ? '#ffffff' : 'transparent';
      tabReg.style.color = !isLogin ? '#0f172a' : '#64748b';
      tabReg.style.fontWeight = !isLogin ? '700' : '600';
      tabReg.style.boxShadow = !isLogin ? '0 1px 3px rgba(0,0,0,0.1)' : 'none';
    }
    if (formLogin) formLogin.style.display = isLogin ? 'flex' : 'none';
    if (formReg) formReg.style.display = !isLogin ? 'flex' : 'none';
    if (authMsg) authMsg.style.display = 'none';
  };

  tabLogin?.addEventListener('click', () => setAuthTab(true));
  tabReg?.addEventListener('click', () => setAuthTab(false));

  // Soumission Connexion
  formLogin?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#clientLoginEmail')?.value?.trim();
    const password = document.querySelector('#clientLoginPassword')?.value?.trim();
    const btn = document.querySelector('#btnSubmitClientLogin');

    if (!email || !password) return;
    if (btn) btn.disabled = true;
    if (authMsg) authMsg.style.display = 'none';

    try {
      const res = await fetch('/api/client/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur lors de la connexion.');

      localStorage.setItem(CLIENT_STORAGE_TOKEN, data.token);
      localStorage.setItem(CLIENT_STORAGE_PROFILE, JSON.stringify(data.client));
      app.showToast?.('Connexion réussie !');
      await app.checkClientSession(data.token);
    } catch (err) {
      if (authMsg) {
        authMsg.style.display = 'block';
        authMsg.style.background = '#fef2f2';
        authMsg.style.color = '#dc2626';
        authMsg.textContent = err.message;
      }
    } finally {
      if (btn) btn.disabled = false;
    }
  });

  // Soumission Inscription
  formReg?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nom = document.querySelector('#clientRegNom')?.value?.trim();
    const prenom = document.querySelector('#clientRegPrenom')?.value?.trim();
    const email = document.querySelector('#clientRegEmail')?.value?.trim();
    const password = document.querySelector('#clientRegPassword')?.value?.trim();
    const telephone = document.querySelector('#clientRegTel')?.value?.trim();
    const adresse = document.querySelector('#clientRegAdresse')?.value?.trim();
    const codePostal = document.querySelector('#clientRegCp')?.value?.trim();
    const ville = document.querySelector('#clientRegVille')?.value?.trim();
    const btn = document.querySelector('#btnSubmitClientRegister');

    if (!nom || !email || !password) return;
    if (btn) btn.disabled = true;
    if (authMsg) authMsg.style.display = 'none';

    try {
      const res = await fetch('/api/client/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, prenom, email, password, telephone, adresse, codePostal, ville })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur lors de la création du compte.');

      localStorage.setItem(CLIENT_STORAGE_TOKEN, data.token);
      localStorage.setItem(CLIENT_STORAGE_PROFILE, JSON.stringify(data.client));
      app.showToast?.('Votre compte a été créé avec succès !');
      await app.checkClientSession(data.token);
    } catch (err) {
      if (authMsg) {
        authMsg.style.display = 'block';
        authMsg.style.background = '#fef2f2';
        authMsg.style.color = '#dc2626';
        authMsg.textContent = err.message;
      }
    } finally {
      if (btn) btn.disabled = false;
    }
  });

  // Soumission Mise à jour du Profil
  const formProfile = document.querySelector('#formPortalProfileUpdate');
  formProfile?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = localStorage.getItem(CLIENT_STORAGE_TOKEN);
    if (!token) return;

    const nom = document.querySelector('#profNom')?.value?.trim();
    const prenom = document.querySelector('#profPrenom')?.value?.trim();
    const telephone = document.querySelector('#profTelephone')?.value?.trim();
    const adresse = document.querySelector('#profAdresse')?.value?.trim();
    const codePostal = document.querySelector('#profCodePostal')?.value?.trim();
    const ville = document.querySelector('#profVille')?.value?.trim();

    const newPassword = document.querySelector('#profNewPassword')?.value?.trim();
    const confirmPassword = document.querySelector('#profConfirmPassword')?.value?.trim();
    const feedbackMsg = document.querySelector('#profFeedbackMsg');
    const btnSave = document.querySelector('#btnSaveProfile');

    if (feedbackMsg) feedbackMsg.style.display = 'none';

    if (newPassword && newPassword !== confirmPassword) {
      if (feedbackMsg) {
        feedbackMsg.style.display = 'block';
        feedbackMsg.style.background = '#fef2f2';
        feedbackMsg.style.color = '#dc2626';
        feedbackMsg.textContent = 'Les deux nouveaux mots de passe ne correspondent pas.';
      }
      return;
    }

    if (btnSave) btnSave.disabled = true;

    try {
      const payload = { nom, prenom, telephone, adresse, codePostal, ville };
      if (newPassword && newPassword.length >= 6) {
        payload.newPassword = newPassword;
      }

      const res = await fetch('/api/client/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur lors de la mise à jour.');

      // Réinitialiser les champs de mot de passe
      const npInput = document.querySelector('#profNewPassword');
      const cpInput = document.querySelector('#profConfirmPassword');
      if (npInput) npInput.value = '';
      if (cpInput) cpInput.value = '';

      if (feedbackMsg) {
        feedbackMsg.style.display = 'block';
        feedbackMsg.style.background = '#ecfdf5';
        feedbackMsg.style.color = '#059669';
        feedbackMsg.textContent = 'Vos modifications ont été enregistrées avec succès.';
      }

      app.showToast?.('Profil mis à jour !');
      await app.checkClientSession(token);
    } catch (err) {
      if (feedbackMsg) {
        feedbackMsg.style.display = 'block';
        feedbackMsg.style.background = '#fef2f2';
        feedbackMsg.style.color = '#dc2626';
        feedbackMsg.textContent = err.message;
      }
    } finally {
      if (btnSave) btnSave.disabled = false;
    }
  });

  // Soumission Messagerie Atelier
  const formMsg = document.querySelector('#formPortalSendMessage');
  formMsg?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = localStorage.getItem(CLIENT_STORAGE_TOKEN);
    if (!token) return;

    const select = document.querySelector('#portalMsgTargetSelect');
    const input = document.querySelector('#portalMsgInputText');
    const btn = document.querySelector('#btnSubmitPortalMessage');

    const folder = select ? select.value : 'general';
    const text = (input ? input.value : '').trim();

    if (!text) return;
    if (btn) btn.disabled = true;

    try {
      const res = await fetch('/api/client/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ folder, text })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur lors de l\'envoi du message.');

      if (input) input.value = '';
      app.showToast?.('Message envoyé au studio Graph2Print.');
      await app.checkClientSession(token);
    } catch (err) {
      app.showToast?.(err.message || 'Erreur lors de l’envoi.');
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}
