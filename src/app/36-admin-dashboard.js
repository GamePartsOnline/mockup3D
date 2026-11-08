// Contrôleur du Tableau de Bord d'Administration MockUp3D
export function register(app) {
  app.openAdminDashboard = function(tabName = 'tab-overview') {
    const overlay = document.querySelector('#adminDashboardOverlay');
    if (!overlay) return;
    overlay.hidden = false;
    document.body.classList.add('modal-open');
    app.switchAdminTab(tabName);
    app.refreshAdminDashboardData();
  };

  app.closeAdminDashboard = function() {
    const overlay = document.querySelector('#adminDashboardOverlay');
    if (overlay) {
      overlay.hidden = true;
      document.body.classList.remove('modal-open');
    }
  };

  app.switchAdminTab = function(tabName) {
    document.querySelectorAll('.admin-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll('.admin-tab-pane').forEach(pane => {
      const match = (pane.id === tabName);
      pane.classList.toggle('active', match);
      pane.style.display = match ? 'block' : 'none';
    });
    if (tabName === 'tab-stats') {
      app.renderAdminVisualStats?.();
    } else if (tabName === 'tab-consignment') {
      if (!app.consignmentData || !app.consignmentData.stores) {
        app.loadAdminConsignment?.();
      } else {
        app.renderAdminConsignment?.();
      }
    } else if (tabName === 'tab-clients') {
      if (!app.adminSubmissionsList || app.adminSubmissionsList.length === 0) {
        app.loadAdminSubmissions?.().then(() => app.renderAdminClientsTable?.());
      } else {
        app.renderAdminClientsTable?.();
      }
    } else if (tabName === 'tab-products') {
      app.renderAdminProductsTable?.();
    } else if (tabName === 'tab-catalog') {
      app.loadAdminCatalog?.();
    } else if (tabName === 'tab-submissions' || tabName === 'tab-orders') {
      if (!app.adminSubmissionsList || app.adminSubmissionsList.length === 0) {
        app.loadAdminSubmissions?.().then(() => app.renderAdminOrdersTable?.());
      } else {
        app.renderAdminOrdersTable?.();
      }
    }
  };

  app.refreshAdminDashboardData = async function() {
    await Promise.all([
      app.loadAdminSubmissions(),
      app.loadAdminProducts(),
      app.loadAdminCatalog(),
      app.loadAdminCategories(),
      app.loadAdminConsignment()
    ]);
    app.renderAdminVisualStats?.();
    app.updateAdminKpis();
  };

  app.updateAdminKpis = function() {
    const ordersCount = (app.adminSubmissionsList || []).length;
    const catalogCount = (app.catalogImages || []).filter(c => c.status !== 'trash').length;
    const activeProducts = (app.productsConfig || []).filter(p => p.active !== false).length;
    const totalProducts = (app.productsConfig || []).length;

    const clientEmails = new Set();
    (app.adminSubmissionsList || []).forEach(s => {
      const email = (s.clientEmail || s.email || '').trim().toLowerCase();
      if (email) clientEmails.add(email);
    });
    const clientsCount = clientEmails.size;

    const elOrders = document.querySelector('#kpiOrdersCount');
    const elCatalog = document.querySelector('#kpiCatalogCount');
    const elProducts = document.querySelector('#kpiActiveProductsCount');
    const badgeOrders = document.querySelector('#adminOrdersBadge');
    const badgeCatalog = document.querySelector('#adminCatalogBadge');
    const badgeClients = document.querySelector('#adminClientsBadge');

    if (elOrders) elOrders.textContent = ordersCount;
    if (elCatalog) elCatalog.textContent = catalogCount;
    if (elProducts) elProducts.textContent = `${activeProducts} / ${totalProducts}`;
    if (badgeOrders) badgeOrders.textContent = ordersCount;
    if (badgeCatalog) badgeCatalog.textContent = catalogCount;
    if (badgeClients) badgeClients.textContent = clientsCount;
  };

  // Gestion des Commandes
  app.loadAdminSubmissions = async function() {
    try {
      const res = await fetch('/api/admin/submissions');
      if (res.ok) {
        const data = await res.json();
        app.adminSubmissionsList = data.submissions || [];
        app.renderAdminOrdersTable();
        app.renderAdminClientsTable();
        app.renderAdminVisualStats();
      }
    } catch (err) {
      console.warn('Erreur chargement commandes:', err.message);
    }
  };

  app.renderAdminOrdersTable = function() {
    const tbody = document.querySelector('#ordersTableBody');
    if (!tbody) return;

    // Détection des commandes prises hors-ligne en mode Stand
    const offlineList = JSON.parse(localStorage.getItem('mockup3d_stand_orders') || '[]');
    const syncBtn = document.querySelector('#btnSyncOfflineOrders');
    if (syncBtn) {
      if (offlineList.length > 0) {
        syncBtn.style.display = 'inline-block';
        syncBtn.textContent = `🔄 Synchroniser Stand (${offlineList.length})`;
      } else {
        syncBtn.style.display = 'none';
      }
    }

    const filterText = (document.querySelector('#orderSearchInput')?.value || '').toLowerCase().trim();
    const filterStatus = document.querySelector('#orderStatusFilter')?.value || 'all';

    tbody.innerHTML = '';
    const list = (app.adminSubmissionsList || []).filter(item => {
      const matchStatus = filterStatus === 'all' || item.status === filterStatus;
      const clientStr = `${item.client?.nom || ''} ${item.client?.prenom || ''} ${item.client?.email || ''} ${item.client?.telephone || ''} ${item.productKey || ''}`.toLowerCase();
      const matchText = !filterText || clientStr.includes(filterText);
      return matchStatus && matchText;
    });

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:32px; color:#94a3b8;">Aucune commande correspondante.</td></tr>`;
      return;
    }

    list.forEach(item => {
      const tr = document.createElement('tr');
      const dateStr = item.date ? new Date(item.date).toLocaleString('fr-FR') : 'Date inconnue';
      const clientName = `${item.client?.nom || 'Client'} ${item.client?.prenom || ''}`.trim();
      const clientPhone = item.client?.telephone || '—';
      const clientEmail = item.client?.email || '';
      const prodName = item.product || item.productKey || 'Produit standard';
      const qty = item.quantity || 1;
      const totalStr = item.totalPrice || item.price || '—';

      let qualityBadge = '<span class="badge-status approved">OK</span>';
      if (item.imageResolutionDiagnostic?.status === 'warning') {
        qualityBadge = '<span class="badge-status pending">Moyen</span>';
      } else if (item.imageResolutionDiagnostic?.status === 'danger') {
        qualityBadge = '<span class="badge-status trash">Faible</span>';
      }

      tr.innerHTML = `
        <td>
          <strong>${item.id || item.folder}</strong><br>
          <small style="color:#64748b;">${dateStr}</small>
        </td>
        <td>
          <strong>${clientName}</strong><br>
          <small style="color:#64748b;">${clientEmail} • ${clientPhone}</small>
        </td>
        <td><strong style="color:#1e1b4b;">${prodName}</strong></td>
        <td style="text-align:center;"><span style="font-size:12.5px; font-weight:800; background:#e0e7ff; color:#4338ca; padding:3px 8px; border-radius:6px;">${qty} ex.</span></td>
        <td style="text-align:right;"><strong style="color:#7c3aed;">${totalStr}</strong></td>
        <td>${qualityBadge}</td>
        <td>
          <select class="admin-select order-status-select" data-folder="${item.folder}" style="font-size:12px; padding:4px 8px;">
            <option value="nouveau" ${item.status === 'nouveau' ? 'selected' : ''}>Nouveau</option>
            <option value="bat_valide" ${item.status === 'bat_valide' ? 'selected' : ''}>BAT validé</option>
            <option value="en_production" ${item.status === 'en_production' ? 'selected' : ''}>En production</option>
            <option value="termine" ${item.status === 'termine' ? 'selected' : ''}>Terminé</option>
          </select>
        </td>
        <td style="text-align:right; white-space:nowrap;">
          <button type="button" class="btn-open-order-dossier" data-folder="${item.folder}" style="font-size:11.5px; padding:5px 10px; font-weight:700; background:#4f46e5; color:#ffffff; border:none; border-radius:6px; cursor:pointer; margin-right:6px;" title="Ouvrir le dossier complet avec validation des visuels">📁 Dossier</button>
          <a href="/api/admin/submissions/file?folder=${encodeURIComponent(item.folder)}&file=FICHE_ATELIER.html" target="_blank" class="admin-btn outline" style="font-size:11.5px; padding:5px 9px; font-weight:700; margin-right:6px;" title="Ouvrir la fiche atelier imprimable">📄 Fiche</a>
          <a href="/api/admin/submissions/download-zip?folder=${encodeURIComponent(item.folder)}" class="admin-btn outline" style="font-size:11.5px; padding:5px 9px; font-weight:700; text-decoration:none; margin-right:12px;" title="Télécharger l'archive ZIP complète de fabrication">📦 ZIP</a>
          <button type="button" class="btn-delete-order" data-folder="${item.folder}" data-id="${item.id}" data-client="${clientName}" style="font-size:11px; padding:4px 8px; color:#dc2626; border:1px solid #fecaca; background:#fef2f2; border-radius:6px; cursor:pointer; font-weight:600;" title="Supprimer définitivement la commande">Suppr.</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Événements d'ouverture du dossier client
    tbody.querySelectorAll('.btn-open-order-dossier').forEach(btn => {
      btn.addEventListener('click', () => {
        const folder = btn.dataset.folder;
        const item = (app.adminSubmissionsList || []).find(s => s.folder === folder);
        if (item) app.openOrderDossierModal(item);
      });
    });

    // Événements sur les changements de statut
    tbody.querySelectorAll('.order-status-select').forEach(sel => {
      sel.addEventListener('change', async (e) => {
        const folder = e.target.dataset.folder;
        const newStatus = e.target.value;
        try {
          const res = await fetch('/api/admin/submissions/status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ folder, status: newStatus })
          });
          if (res.ok) {
            app.showToast?.(`Statut de la commande mis à jour : ${newStatus}`);
          }
        } catch (err) {
          app.showToast?.('Erreur lors du changement de statut');
        }
      });
    });

    // Événements de suppression
    tbody.querySelectorAll('.btn-delete-order').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const folder = e.target.dataset.folder;
        if (!confirm(`Confirmez-vous la suppression définitive du dossier de commande "${folder}" ?`)) return;
        try {
          const res = await fetch('/api/admin/submissions/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ folder })
          });
          if (res.ok) {
            app.showToast?.('Commande supprimée avec succès.');
            app.loadAdminSubmissions();
          }
        } catch (err) {
          app.showToast?.('Erreur lors de la suppression');
        }
      });
    });
  };

  // Gestion des Produits
  app.loadAdminProducts = async function() {
    if (!Array.isArray(app.productsConfig) || app.productsConfig.length === 0) {
      await app.fetchProductsConfig?.();
    }
    app.renderAdminProductsTable();
  };

  const RESELLER_ELIGIBLE_KEYS = ['mug11oz', 'mousePad', 'keychainRect', 'keychainRound', 'keychainHeart', 'coaster', 'coasterRound'];

  app.renderAdminProductsTable = function() {
    const tbody = document.querySelector('#productsAdminTableBody');
    if (!tbody || !Array.isArray(app.productsConfig)) return;

    tbody.innerHTML = '';
    app.productsConfig.forEach(prod => {
      const tr = document.createElement('tr');
      const thumb = app.shopThumbnails?.[prod.key] || `/logo-graph2print.png`;
      const isActive = prod.active !== false;

      const pVente = prod.price || '—';
      const stock = Number.parseInt(prod.stockQuantity ?? 10);
      let stockBadgeHtml = '';

      if (stock === 0) {
        stockBadgeHtml = `<span class="badge-status trash" style="font-size:11px;">Sur demande (0)</span>`;
      } else if (stock <= 3) {
        stockBadgeHtml = `<span class="badge-status pending" style="font-size:11px;">⚠️ Alerte : ${stock}</span>`;
      } else {
        stockBadgeHtml = `<span class="badge-status approved" style="font-size:11px;">✓ En stock (${stock})</span>`;
      }

      const isResellerEligible = RESELLER_ELIGIBLE_KEYS.includes(prod.key);
      const resellerBadge = isResellerEligible
        ? `<span style="font-size:10.5px; font-weight:700; color:#047857; background:#ecfdf5; border:1px solid #a7f3d0; padding:2px 6px; border-radius:4px; margin-left:4px;" title="Disponible en dépôt-vente revendeur">Revendeur</span>`
        : `<span style="font-size:10.5px; font-weight:600; color:#64748b; background:#f1f5f9; padding:2px 6px; border-radius:4px; margin-left:4px;" title="Vente atelier direct uniquement">Atelier direct</span>`;

      tr.innerHTML = `
        <td>
          <img src="${thumb}" alt="${prod.name}" style="width:40px; height:40px; object-fit:contain; border-radius:6px; border:1px solid #e2e8f0; background:#f8fafc;" />
        </td>
        <td>
          <strong style="font-size:13px; color:#0f172a;">${prod.name}</strong><br>
          <small style="color:#64748b;">Réf : <code>${prod.key}</code></small>
          ${resellerBadge}
        </td>
        <td><span style="font-size:11px; font-weight:700; text-transform:uppercase; color:#64748b; background:#f1f5f9; padding:2px 6px; border-radius:4px;">${prod.category || 'deco'}</span></td>
        <td>
          <strong style="font-size:13.5px; color:#15803d;">${pVente}</strong>
        </td>
        <td>
          ${stockBadgeHtml}
        </td>
        <td style="text-align:center;">
          <label class="admin-switch" title="Activer ou désactiver ce produit en boutique">
            <input type="checkbox" class="product-toggle-checkbox" data-key="${prod.key}" ${isActive ? 'checked' : ''} />
            <span class="switch-slider"></span>
          </label>
        </td>
        <td style="text-align:right;">
          <button type="button" class="btn-open-product-sheet admin-btn outline" data-key="${prod.key}" style="font-size:11.5px; padding:5px 12px; font-weight:700;" title="Ouvrir la fiche produit complète avec la décomposition des chiffres">⚙️ Fiche Produit</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Bascule en temps réel du commutateur Actif / Inactif
    tbody.querySelectorAll('.product-toggle-checkbox').forEach(chk => {
      chk.addEventListener('change', async (e) => {
        const key = e.target.dataset.key;
        const active = e.target.checked;
        try {
          const res = await fetch('/api/admin/products/toggle', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key, active })
          });
          if (res.ok) {
            const prod = app.productsConfig.find(p => p.key === key);
            if (prod) prod.active = active;
            app.syncProductSelectOptions?.();
            app.refreshShowcaseVisibility?.();
            app.renderShop2D?.();
            app.updateAdminKpis();
            app.showToast?.(`Produit "${prod?.name || key}" : ${active ? 'Activé' : 'Désactivé'}`);
          }
        } catch (err) {
          app.showToast?.('Erreur lors du changement de statut produit');
        }
      });
    });

    // Événements d'ouverture de la fiche produit
    tbody.querySelectorAll('.btn-open-product-sheet').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        const prod = (app.productsConfig || []).find(p => p.key === key);
        if (prod) app.openProductSheetModal(prod);
      });
    });
  };

  // Logique de la Fiche Produit détaillée
  let currentProductSheetItem = null;

  app.openProductSheetModal = function(prod) {
    if (!prod) return;
    currentProductSheetItem = prod;
    const modal = document.querySelector('#productSheetModal');
    if (!modal) return;

    const img = document.querySelector('#psPreviewImg');
    if (img) img.src = app.shopThumbnails?.[prod.key] || `/logo-graph2print.png`;

    const name = document.querySelector('#psProductName');
    if (name) name.textContent = prod.name;

    const key = document.querySelector('#psProductKey');
    if (key) key.innerHTML = `Réf : <code>${prod.key}</code>`;

    const cat = document.querySelector('#psCategory');
    if (cat) cat.value = prod.category || 'deco';

    const activeToggle = document.querySelector('#psActiveToggle');
    if (activeToggle) activeToggle.checked = prod.active !== false;

    const costInp = document.querySelector('#psCostPrice');
    if (costInp) costInp.value = prod.costPrice || '';

    const timeInp = document.querySelector('#psTimeMinutes');
    if (timeInp) timeInp.value = prod.timeMinutes ?? 5;

    const creatInp = document.querySelector('#psCreationCost');
    if (creatInp) creatInp.value = prod.creationCost || '—';

    const consInp = document.querySelector('#psConsumablesCost');
    if (consInp) consInp.value = prod.consumablesCost || '0,20 €';

    const packInp = document.querySelector('#psPackagingCost');
    if (packInp) packInp.value = prod.packagingCost || '—';

    const labInp = document.querySelector('#psLaborCost');
    if (labInp) labInp.value = prod.laborCost || '4,17 €';

    const amortInp = document.querySelector('#psAmortizationCost');
    if (amortInp) amortInp.value = prod.amortizationCost || '0,50 €';

    const totalCostInp = document.querySelector('#psTotalCost');
    if (totalCostInp) totalCostInp.value = prod.totalCost || '';

    const priceTTCInp = document.querySelector('#psPriceTTC');
    if (priceTTCInp) priceTTCInp.value = prod.price || '';

    const pVente = Number.parseFloat(String(prod.price || '').replace(',', '.')) || 0;
    const resellerInp = document.querySelector('#psResellerPrice');
    if (resellerInp) resellerInp.value = prod.resellerPrice || (pVente > 0 ? (pVente * 0.80).toFixed(2).replace('.', ',') + ' €' : '');

    const resellerInp30 = document.querySelector('#psResellerPrice30');
    if (resellerInp30) resellerInp30.value = prod.resellerPrice30 || (pVente > 0 ? (pVente * 0.70).toFixed(2).replace('.', ',') + ' €' : '');

    const suggestedInp = document.querySelector('#psSuggestedPriceTTC');
    if (suggestedInp) suggestedInp.value = prod.suggestedPriceTTC || '';

    const markupInp = document.querySelector('#psMarkupRate');
    if (markupInp) markupInp.value = prod.markupRate || '';

    const stockQtyInp = document.querySelector('#psStockQty');
    if (stockQtyInp) stockQtyInp.value = prod.stockQuantity ?? 10;

    const updateSheetMargin = () => {
      const v = Number.parseFloat(String(priceTTCInp?.value || '').replace(',', '.')) || 0;
      const c = Number.parseFloat(String(totalCostInp?.value || '').replace(',', '.')) || 0;
      const mDisp = document.querySelector('#psMarginDisplay');
      if (mDisp) {
        if (v > 0 && c > 0) {
          const m = (v / 1.2 - c).toFixed(2).replace('.', ',');
          mDisp.textContent = `${m} €`;
          mDisp.style.color = (v / 1.2 >= c) ? '#059669' : '#dc2626';
        } else {
          mDisp.textContent = prod.margin || '—';
          mDisp.style.color = '#059669';
        }
      }
      if (v > 0) {
        if (resellerInp && (!resellerInp.value || resellerInp.dataset.auto === 'true')) {
          resellerInp.value = (v * 0.80).toFixed(2).replace('.', ',') + ' €';
          resellerInp.dataset.auto = 'true';
        }
        if (resellerInp30 && (!resellerInp30.value || resellerInp30.dataset.auto === 'true')) {
          resellerInp30.value = (v * 0.70).toFixed(2).replace('.', ',') + ' €';
          resellerInp30.dataset.auto = 'true';
        }
      }

      const stVal = Number.parseInt(stockQtyInp?.value) || 0;
      const stBadge = document.querySelector('#psStockBadge');
      if (stBadge) {
        if (stVal === 0) {
          stBadge.className = 'badge-status trash';
          stBadge.textContent = 'Sur demande (0)';
        } else if (stVal <= 3) {
          stBadge.className = 'badge-status pending';
          stBadge.textContent = `Alerte : ${stVal}`;
        } else {
          stBadge.className = 'badge-status approved';
          stBadge.textContent = `En stock (${stVal})`;
        }
      }
    };

    priceTTCInp.oninput = updateSheetMargin;
    totalCostInp.oninput = updateSheetMargin;
    stockQtyInp.oninput = updateSheetMargin;
    updateSheetMargin();

    modal.style.display = 'flex';
  };

  app.closeProductSheetModal = function() {
    const modal = document.querySelector('#productSheetModal');
    if (modal) modal.style.display = 'none';
    currentProductSheetItem = null;
  };

  app.saveProductSheet = async function() {
    if (!currentProductSheetItem) return;
    const p = currentProductSheetItem;

    p.category = document.querySelector('#psCategory')?.value.trim() || p.category;
    p.active = document.querySelector('#psActiveToggle')?.checked ?? true;
    p.costPrice = document.querySelector('#psCostPrice')?.value.trim() || p.costPrice;
    p.timeMinutes = Number.parseFloat(document.querySelector('#psTimeMinutes')?.value) || p.timeMinutes;
    p.creationCost = document.querySelector('#psCreationCost')?.value.trim() || p.creationCost;
    p.consumablesCost = document.querySelector('#psConsumablesCost')?.value.trim() || p.consumablesCost;
    p.packagingCost = document.querySelector('#psPackagingCost')?.value.trim() || p.packagingCost;
    p.laborCost = document.querySelector('#psLaborCost')?.value.trim() || p.laborCost;
    p.amortizationCost = document.querySelector('#psAmortizationCost')?.value.trim() || p.amortizationCost;
    p.totalCost = document.querySelector('#psTotalCost')?.value.trim() || p.totalCost;
    p.price = document.querySelector('#psPriceTTC')?.value.trim() || p.price;
    p.resellerPrice = document.querySelector('#psResellerPrice')?.value.trim() || p.resellerPrice;
    p.resellerPrice30 = document.querySelector('#psResellerPrice30')?.value.trim() || p.resellerPrice30;
    p.suggestedPriceTTC = document.querySelector('#psSuggestedPriceTTC')?.value.trim() || p.suggestedPriceTTC;
    p.markupRate = document.querySelector('#psMarkupRate')?.value.trim() || p.markupRate;
    p.stockQuantity = Number.parseInt(document.querySelector('#psStockQty')?.value) ?? 10;
    p.margin = document.querySelector('#psMarginDisplay')?.textContent.trim() || p.margin;

    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(app.productsConfig)
      });
      if (res.ok) {
        app.renderAdminProductsTable();
        app.syncProductSelectOptions?.();
        app.refreshShowcaseVisibility?.();
        app.renderShop2D?.();
        app.updateAdminKpis();
        app.closeProductSheetModal();
        app.showToast?.(`Fiche produit "${p.name}" enregistrée avec succès.`);
      }
    } catch (err) {
      app.showToast?.('Erreur lors de l\'enregistrement de la fiche produit');
    }
  };

  // Logique du Dossier Client et Validation Graphique
  let currentDossierItem = null;

  app.openOrderDossierModal = function(item) {
    if (!item) return;
    currentDossierItem = item;
    const modal = document.querySelector('#orderDossierModal');
    if (!modal) return;

    const refTitle = document.querySelector('#dossierRefTitle');
    if (refTitle) refTitle.textContent = `${item.id || item.folder}`;

    const statBadge = document.querySelector('#dossierStatusBadge');
    if (statBadge) {
      statBadge.textContent = item.status || 'Nouveau';
      statBadge.className = `badge-status ${item.status === 'termine' ? 'approved' : (item.status === 'en_production' ? 'pending' : '')}`;
    }

    const c = item.client || {};
    const clientBox = document.querySelector('#dossierClientInfo');
    if (clientBox) {
      clientBox.innerHTML = `
        <strong style="font-size:14px; color:#0f172a;">${c.nom || 'Client'} ${c.prenom || ''}</strong><br>
        Courriel : <a href="mailto:${c.email || ''}" style="color:#4f46e5; text-decoration:none;">${c.email || '—'}</a><br>
        Téléphone : <strong>${c.telephone || '—'}</strong><br>
        Adresse : ${c.adresse || '—'}, ${c.codePostal || ''} ${c.ville || ''}
      `;
    }

    const orderBox = document.querySelector('#dossierOrderInfo');
    if (orderBox) {
      const dateStr = item.date ? new Date(item.date).toLocaleString('fr-FR') : '—';
      orderBox.innerHTML = `
        Article : <strong style="color:#1e1b4b;">${item.product || item.productKey || 'Produit standard'}</strong><br>
        Quantité : <strong style="color:#4f46e5; font-size:14px;">${item.quantity || 1} ex.</strong><br>
        Total TTC : <strong style="color:#059669; font-size:14px;">${item.totalPrice || item.price || '—'}</strong><br>
        Date : <small style="color:#64748b;">${dateStr}</small>
      `;
    }

    const checks = item.checks || {};
    const chkBat = document.querySelector('#chkDossierBatPreview');
    const chkBatConf = document.querySelector('#chkDossierBatConforme');
    const chkCliVis = document.querySelector('#chkDossierClientVisual');
    const chkSrcFile = document.querySelector('#chkDossierSourceFile');

    if (chkBat) chkBat.checked = checks.batPreview !== false;
    if (chkBatConf) chkBatConf.checked = checks.batConforme === true;
    if (chkCliVis) chkCliVis.checked = checks.clientVisual !== false;
    if (chkSrcFile) chkSrcFile.checked = checks.sourceFile !== false;

    const chkImp = document.querySelector('#chkDossierImprime');
    const chkPre = document.querySelector('#chkDossierPresse');
    const chkExp = document.querySelector('#chkDossierExpedie');
    const txtAutre = document.querySelector('#txtDossierAtelierAutre');

    if (chkImp) chkImp.checked = !!checks.imprime;
    if (chkPre) chkPre.checked = !!checks.presse;
    if (chkExp) chkExp.checked = !!checks.expedie;
    if (txtAutre) txtAutre.value = checks.atelierAutre || '';

    const singleFaceBadge = document.querySelector('#dossierSingleFaceBadge');
    if (singleFaceBadge) {
      const isSingle = ['mousePad', 'puzzle', 'coaster', 'coasterRound', 'cap', 'cushion', 'poster', 'photoFrame'].includes(item.productKey);
      singleFaceBadge.style.display = isSingle ? 'inline-block' : 'none';
    }

    const folder = item.folder || '';
    const batImg = document.querySelector('#dossierBatImg');
    const batDl = document.querySelector('#dossierBatDownloadBtn');
    const visImg = document.querySelector('#dossierVisualImg');
    const visDl = document.querySelector('#dossierVisualDownloadBtn');

    const batUrl = `/api/admin/submissions/file?folder=${encodeURIComponent(folder)}&file=bat_mockup.png`;
    const visUrl = `/api/admin/submissions/file?folder=${encodeURIComponent(folder)}&file=visuel_client.png`;

    if (batImg) {
      batImg.src = batUrl;
      batImg.onerror = () => {
        batImg.src = `/api/admin/submissions/file?folder=${encodeURIComponent(folder)}&file=mockup-front.png`;
      };
    }
    if (batDl) batDl.href = batUrl;

    if (visImg) {
      visImg.src = visUrl;
      visImg.onerror = () => {
        visImg.src = `/api/admin/submissions/file?folder=${encodeURIComponent(folder)}&file=wrap.png`;
      };
    }
    if (visDl) visDl.href = visUrl;

    const ficheBtn = document.querySelector('#dossierFicheAtelierBtn');
    const zipBtn = document.querySelector('#dossierZipBtn');
    if (ficheBtn) ficheBtn.href = `/api/admin/submissions/file?folder=${encodeURIComponent(folder)}&file=FICHE_ATELIER.html`;
    if (zipBtn) zipBtn.href = `/api/admin/submissions/download-zip?folder=${encodeURIComponent(folder)}`;

    const notesWrap = document.querySelector('#dossierNotesWrap');
    const notesText = document.querySelector('#dossierNotesText');
    if (notesWrap && notesText) {
      if (item.commentaires || item.client?.note) {
        notesWrap.style.display = 'block';
        notesText.textContent = item.commentaires || item.client?.note;
      } else {
        notesWrap.style.display = 'none';
      }
    }

    // SECTION MESSAGERIE DIRECTE CLIENT <-> ATELIER
    const thread = document.querySelector('#dossierMessagesThread');
    const renderMessages = () => {
      if (!thread) return;
      const msgs = Array.isArray(item.messages) ? item.messages : [];
      if (msgs.length === 0) {
        thread.innerHTML = '<span style="color:#94a3b8; font-size:12px; text-align:center; padding:10px; display:block;">Aucun message échangé pour l’instant. Écrivez une note ci-dessous pour en informer le client en direct.</span>';
      } else {
        thread.innerHTML = msgs.map(m => {
          const isAtelier = (m.sender === 'atelier' || m.sender === 'admin');
          const dStr = m.date ? new Date(m.date).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' }) : '';
          return `
            <div style="background:${isAtelier ? '#ede9fe' : '#f1f5f9'}; border:1px solid ${isAtelier ? '#c4b5fd' : '#cbd5e1'}; border-radius:8px; padding:8px 12px; align-self:${isAtelier ? 'flex-end' : 'flex-start'}; max-width:85%; box-sizing:border-box;">
              <div style="display:flex; justify-content:space-between; gap:12px; margin-bottom:3px;">
                <strong style="font-size:11.5px; color:${isAtelier ? '#5b21b6' : '#1e293b'};">${m.author || (isAtelier ? 'Atelier Graph2Print' : 'Client')}</strong>
                <small style="font-size:10.5px; color:#64748b;">${dStr}</small>
              </div>
              <div style="font-size:12.5px; color:#1e293b; line-height:1.4;">${m.text}</div>
            </div>
          `;
        }).join('');
        thread.scrollTop = thread.scrollHeight;
      }
    };
    renderMessages();

    const sendMsgBtn = document.querySelector('#btnAdminSendDossierMsg');
    const msgInp = document.querySelector('#adminDossierMsgInput');
    if (sendMsgBtn && msgInp) {
      sendMsgBtn.onclick = async () => {
        const text = msgInp.value.trim();
        if (!text) return;
        sendMsgBtn.disabled = true;
        try {
          const res = await fetch('/api/submissions/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ folder: item.folder, text, sender: 'admin' })
          });
          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data.messages)) {
              item.messages = data.messages;
              renderMessages();
            }
            msgInp.value = '';
            app.showToast?.('Note envoyée au client avec succès.');
          }
        } catch (e) {
          app.showToast?.('Erreur lors de l’envoi de la note.');
        } finally {
          sendMsgBtn.disabled = false;
        }
      };
    }

    modal.style.display = 'flex';
  };

  app.closeOrderDossierModal = function() {
    const modal = document.querySelector('#orderDossierModal');
    if (modal) modal.style.display = 'none';
    currentDossierItem = null;
  };

  app.saveOrderDossierChecks = async function() {
    if (!currentDossierItem) return;
    const folder = currentDossierItem.folder;
    const batPreview = document.querySelector('#chkDossierBatPreview')?.checked ?? true;
    const batConforme = document.querySelector('#chkDossierBatConforme')?.checked ?? false;
    const clientVisual = document.querySelector('#chkDossierClientVisual')?.checked ?? true;
    const sourceFile = document.querySelector('#chkDossierSourceFile')?.checked ?? true;
    const imprime = document.querySelector('#chkDossierImprime')?.checked ?? false;
    const presse = document.querySelector('#chkDossierPresse')?.checked ?? false;
    const expedie = document.querySelector('#chkDossierExpedie')?.checked ?? false;
    const atelierAutre = document.querySelector('#txtDossierAtelierAutre')?.value.trim() || '';

    try {
      const res = await fetch('/api/admin/submissions/checks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder, batPreview, batConforme, clientVisual, sourceFile, imprime, presse, expedie, atelierAutre })
      });
      if (res.ok) {
        if (!currentDossierItem.checks) currentDossierItem.checks = {};
        currentDossierItem.checks.batPreview = batPreview;
        currentDossierItem.checks.batConforme = batConforme;
        currentDossierItem.checks.clientVisual = clientVisual;
        currentDossierItem.checks.sourceFile = sourceFile;
        currentDossierItem.checks.imprime = imprime;
        currentDossierItem.checks.presse = presse;
        currentDossierItem.checks.expedie = expedie;
        currentDossierItem.checks.atelierAutre = atelierAutre;
        app.showToast?.('Vérifications et étapes atelier enregistrées.');
        app.closeOrderDossierModal();
      }
    } catch (err) {
      app.showToast?.('Erreur lors de l\'enregistrement du dossier');
    }
  };

  // Logique du Fichier Clients
  app.renderAdminClientsTable = function() {
    const tbody = document.querySelector('#clientsTableBody');
    if (!tbody) return;

    const clientsMap = new Map();
    const offlineList = JSON.parse(localStorage.getItem('mockup3d_stand_orders') || '[]');
    const allSubs = [...(app.adminSubmissionsList || []), ...offlineList];

    allSubs.forEach(sub => {
      const c = sub.client || {};
      const key = (c.email || `${c.nom}_${c.prenom}` || 'anonyme').toLowerCase().trim();
      if (!clientsMap.has(key)) {
        clientsMap.set(key, {
          key,
          nom: c.nom || 'Client',
          prenom: c.prenom || '',
          email: c.email || '',
          telephone: c.telephone || '',
          adresse: c.adresse || '',
          codePostal: c.codePostal || '',
          ville: c.ville || '',
          orders: [],
          totalSpent: 0,
          firstDate: sub.date,
          lastDate: sub.date,
          notes: ''
        });
      }
      const client = clientsMap.get(key);
      client.orders.push(sub);
      const val = Number.parseFloat(String(sub.totalPrice || sub.price || '0').replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
      client.totalSpent += val;
      if (new Date(sub.date) > new Date(client.lastDate)) client.lastDate = sub.date;
      if (new Date(sub.date) < new Date(client.firstDate)) client.firstDate = sub.date;
    });

    // Fichier clients initial atelier (si aucune commande en base)
    if (clientsMap.size === 0) {
      const initialClients = [
        {
          key: 'bernard_camille',
          nom: 'Bernard',
          prenom: 'Camille',
          email: 'camille.bernard@graph2print.fr',
          telephone: '06 12 34 56 78',
          adresse: '12 rue des Artisans',
          codePostal: '37000',
          ville: 'Tours',
          orders: [{ id: 'CMD-20261107-1600-BERNARD', product: 'Puzzle personnalisé 120 pièces', totalPrice: '15,00 €', date: '2026-11-07T16:00:00Z', status: 'termine' }],
          totalSpent: 15.00,
          firstDate: '2026-11-07T16:00:00Z',
          lastDate: '2026-11-07T16:00:00Z',
          notes: 'Graphiste indépendant. Impression pleine page haute définition.'
        },
        {
          key: 'moreau_marie',
          nom: 'Moreau',
          prenom: 'Marie',
          email: 'marie.moreau@deco-tours.fr',
          telephone: '06 98 76 54 32',
          adresse: '5 avenue de Grammont',
          codePostal: '37000',
          ville: 'Tours',
          orders: [{ id: 'CMD-20261106-1130-MOREAU', product: 'Mug couleur 11oz', totalPrice: '13,00 €', date: '2026-11-06T11:30:00Z', status: 'termine' }],
          totalSpent: 13.00,
          firstDate: '2026-11-06T11:30:00Z',
          lastDate: '2026-11-06T11:30:00Z',
          notes: 'Collection décoration céramique.'
        },
        {
          key: 'dupont_alexandre',
          nom: 'Dupont',
          prenom: 'Alexandre',
          email: 'alex.dupont@artisanat.fr',
          telephone: '02 47 00 11 22',
          adresse: '18 rue Nationale',
          codePostal: '37540',
          ville: 'Saint-Cyr-sur-Loire',
          orders: [{ id: 'CMD-20261105-0945-DUPONT', product: 'Tapis de souris bords cousus', totalPrice: '21,00 €', date: '2026-11-05T09:45:00Z', status: 'termine' }],
          totalSpent: 21.00,
          firstDate: '2026-11-05T09:45:00Z',
          lastDate: '2026-11-05T09:45:00Z',
          notes: 'Client régulier dépôt-vente.'
        }
      ];
      initialClients.forEach(ic => clientsMap.set(ic.key, ic));
    }

    const clientsList = Array.from(clientsMap.values());
    const badge = document.querySelector('#adminClientsBadge');
    if (badge) badge.textContent = clientsList.length;

    const filter = (document.querySelector('#clientSearchInput')?.value || '').toLowerCase().trim();
    tbody.innerHTML = '';

    const filtered = clientsList.filter(c => {
      if (!filter) return true;
      const str = `${c.nom} ${c.prenom} ${c.email} ${c.telephone} ${c.ville}`.toLowerCase();
      return str.includes(filter);
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:32px; color:#94a3b8;">Aucun client correspondant.</td></tr>`;
      return;
    }

    filtered.forEach(c => {
      const tr = document.createElement('tr');
      const lastStr = c.lastDate ? new Date(c.lastDate).toLocaleDateString('fr-FR') : '—';
      tr.innerHTML = `
        <td>
          <strong style="font-size:13px; color:#0f172a;">${c.nom} ${c.prenom}</strong>
        </td>
        <td>
          <div style="font-size:12.5px; color:#334155;">${c.email || '—'}</div>
          <small style="color:#64748b;">${c.telephone || '—'}</small>
        </td>
        <td><span style="font-size:12px; color:#475569;">${c.ville || '—'}</span></td>
        <td style="text-align:center;">
          <span style="font-size:12px; font-weight:800; background:#e0e7ff; color:#4338ca; padding:3px 8px; border-radius:6px;">${c.orders.length} cde(s)</span>
        </td>
        <td style="text-align:right;">
          <strong style="font-size:13px; color:#059669;">${c.totalSpent.toFixed(2).replace('.', ',')} €</strong>
        </td>
        <td><small style="color:#64748b;">${lastStr}</small></td>
        <td style="text-align:right;">
          <button type="button" class="btn-open-client-sheet admin-btn outline" data-key="${c.key}" style="font-size:11.5px; padding:5px 12px; font-weight:700;">👤 Fiche Client</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-open-client-sheet').forEach(b => {
      b.addEventListener('click', () => {
        const key = b.dataset.key;
        const cl = clientsList.find(x => x.key === key);
        if (cl) app.openClientSheetModal(cl);
      });
    });
  };

  let currentClientSheetItem = null;

  app.openClientSheetModal = function(client) {
    if (!client) return;
    currentClientSheetItem = client;
    const modal = document.querySelector('#clientSheetModal');
    if (!modal) return;

    const name = document.querySelector('#csClientName');
    if (name) name.textContent = `${client.nom} ${client.prenom}`;

    const contact = document.querySelector('#csContactDetails');
    if (contact) {
      contact.innerHTML = `
        <strong>Nom :</strong> ${client.nom} ${client.prenom}<br>
        <strong>Courriel :</strong> <a href="mailto:${client.email}" style="color:#4f46e5;">${client.email || '—'}</a><br>
        <strong>Téléphone :</strong> ${client.telephone || '—'}<br>
        <strong>Adresse :</strong> ${client.adresse || '—'}<br>
        <strong>Ville :</strong> ${client.codePostal || ''} ${client.ville || ''}
      `;
    }

    const oCount = document.querySelector('#csOrdersCount');
    if (oCount) oCount.textContent = `${client.orders.length} commande(s)`;

    const total = document.querySelector('#csTotalSpent');
    if (total) total.textContent = `${client.totalSpent.toFixed(2).replace('.', ',')} €`;

    const avg = document.querySelector('#csAverageOrder');
    const avgVal = client.orders.length > 0 ? (client.totalSpent / client.orders.length) : 0;
    if (avg) avg.textContent = `${avgVal.toFixed(2).replace('.', ',')} €`;

    const last = document.querySelector('#csLastOrderDate');
    if (last) last.textContent = client.lastDate ? new Date(client.lastDate).toLocaleDateString('fr-FR') : '—';

    const oTbody = document.querySelector('#csOrdersTableBody');
    if (oTbody) {
      oTbody.innerHTML = '';
      client.orders.forEach(sub => {
        const tr = document.createElement('tr');
        const dStr = sub.date ? new Date(sub.date).toLocaleDateString('fr-FR') : '—';
        tr.innerHTML = `
          <td><strong>${sub.id || sub.folder}</strong><br><small style="color:#64748b;">${dStr}</small></td>
          <td>${sub.product || sub.productKey || 'Produit'}</td>
          <td style="text-align:center;">${sub.quantity || 1} ex.</td>
          <td style="text-align:right;"><strong style="color:#7c3aed;">${sub.totalPrice || sub.price || '—'}</strong></td>
          <td><span class="badge-status ${sub.status === 'termine' ? 'approved' : 'pending'}">${sub.status || 'Nouveau'}</span></td>
          <td style="text-align:right;">
            <button type="button" class="btn-dossier-from-client admin-btn outline" data-folder="${sub.folder}" style="font-size:11px; padding:4px 8px;">Dossier</button>
          </td>
        `;
        oTbody.appendChild(tr);
      });

      oTbody.querySelectorAll('.btn-dossier-from-client').forEach(b => {
        b.addEventListener('click', () => {
          const folder = b.dataset.folder;
          const targetSub = (app.adminSubmissionsList || []).find(s => s.folder === folder);
          if (targetSub) {
            app.closeClientSheetModal();
            app.openOrderDossierModal(targetSub);
          }
        });
      });
    }

    const notesInp = document.querySelector('#csInternalNotes');
    const savedNotes = localStorage.getItem(`client_notes_${client.key}`) || client.notes || '';
    if (notesInp) notesInp.value = savedNotes;

    modal.style.display = 'flex';
  };

  app.closeClientSheetModal = function() {
    const modal = document.querySelector('#clientSheetModal');
    if (modal) modal.style.display = 'none';
    currentClientSheetItem = null;
  };

  app.saveClientNotes = function() {
    if (!currentClientSheetItem) return;
    const val = document.querySelector('#csInternalNotes')?.value || '';
    localStorage.setItem(`client_notes_${currentClientSheetItem.key}`, val);
    currentClientSheetItem.notes = val;
    app.showToast?.('Note interne client enregistrée.');
  };

  // Logique du Dépôt-Vente Partenaires
  app.consignmentData = {
    stores: [
      {
        id: 'store-carrefour-givry',
        name: 'Carrefour Express (Givry-en-Argonne)',
        contact: 'Gérance Magasin',
        phone: '03 26 60 12 34',
        email: 'carrefour.givry@orange.fr',
        address: 'Route Nationale, 51330 Givry-en-Argonne',
        commissionRate: 20,
        partnershipType: 'Dépôt-Vente & Partenariat Local',
        themes: ['Givry-en-Argonne', 'Argonne', 'Marne', 'Champagne'],
        dateConvention: '2026-11-01',
        notes: 'Demande de partenariat : 10 mugs, 10 types de stickers ronds, porte-clés thématiques Givry, Marne, Champagne, Argonne. Remise partenaire accordée : 20%.',
        items: [
          { id: 'dep-cg-1', productKey: 'mug11oz', productName: 'Mug 11oz personnalisé - Givry & Argonne', category: 'Mugs', theme: 'Givry / Argonne / Marne / Champagne', qtyDeposited: 10, qtySold: 4, priceTTC: 13.0, depositDate: '2026-11-01', status: 'active' },
          { id: 'dep-cg-2', productKey: 'coasterRound', productName: 'Stickers ronds vinyle (10 modèles thématiques)', category: 'Stickers', theme: 'Givry / Argonne / Champagne / Marne', qtyDeposited: 10, qtySold: 7, priceTTC: 4.5, depositDate: '2026-11-01', status: 'active' },
          { id: 'dep-cg-3', productKey: 'keychainRound', productName: 'Porte-clés rond aluminium - Givry / Marne', category: 'Porte-clés', theme: 'Givry / Marne / Champagne', qtyDeposited: 12, qtySold: 5, priceTTC: 6.0, depositDate: '2026-11-01', status: 'active' },
          { id: 'dep-cg-4', productKey: 'keychainRect', productName: 'Porte-clés rectangle métal - Argonne Sauvage', category: 'Porte-clés', theme: 'Argonne', qtyDeposited: 8, qtySold: 3, priceTTC: 6.0, depositDate: '2026-11-01', status: 'active' }
        ]
      },
      {
        id: 'store-five-givry',
        name: 'Le Five (Givry-en-Argonne)',
        contact: 'Responsable Établissement',
        phone: '03 26 60 56 78',
        email: 'contact@lefive-givry.fr',
        address: 'Centre Sport & Loisirs, 51330 Givry-en-Argonne',
        commissionRate: 20,
        partnershipType: 'Dépôt-Vente & Vitrine Touristique',
        themes: ['Tourisme', 'Argonne', 'Marne', 'Givry-en-Argonne'],
        dateConvention: '2026-11-03',
        notes: 'Demande de partenariat : 10 mugs (Touriste, Argonne, Marne, Givry), 2 tapis de souris, porte-clés, + 1 tapis de souris supplémentaire. Remise partenaire accordée : 20%.',
        items: [
          { id: 'dep-fg-1', productKey: 'mug11oz', productName: 'Mug Touristique Argonne & Givry', category: 'Mugs', theme: 'Touriste / Argonne / Marne / Givry', qtyDeposited: 10, qtySold: 5, priceTTC: 13.0, depositDate: '2026-11-03', status: 'active' },
          { id: 'dep-fg-2', productKey: 'mousePad', productName: 'Tapis de souris bords cousus (Argonne Tourisme)', category: 'Tapis de souris', theme: 'Tourisme / Argonne', qtyDeposited: 2, qtySold: 1, priceTTC: 21.0, depositDate: '2026-11-03', status: 'active' },
          { id: 'dep-fg-3', productKey: 'mousePad', productName: 'Tapis de souris standard Givry-en-Argonne', category: 'Tapis de souris', theme: 'Givry-en-Argonne', qtyDeposited: 1, qtySold: 0, priceTTC: 10.0, depositDate: '2026-11-04', status: 'active' },
          { id: 'dep-fg-4', productKey: 'keychainRound', productName: 'Porte-clés métal souvenir - Le Five / Givry', category: 'Porte-clés', theme: 'Givry / Le Five', qtyDeposited: 10, qtySold: 6, priceTTC: 6.0, depositDate: '2026-11-03', status: 'active' }
        ]
      }
    ]
  };
  app.selectedStoreId = 'store-carrefour-givry';

  app.loadAdminConsignment = async function() {
    try {
      const res = await fetch('/api/admin/consignment');
      if (res.ok) {
        app.consignmentData = await res.json();
      }
    } catch (err) {
      console.warn('Erreur chargement dépôt-vente:', err);
    }
    app.renderAdminConsignment();
  };

  app.renderAdminConsignment = function() {
    if (!app.consignmentData || !Array.isArray(app.consignmentData.stores)) return;
    const tbody = document.querySelector('#resellersTableBody');
    if (!tbody) return;

    if (app.consignmentData.stores.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding:32px; color:#64748b;">Aucun revendeur partenaire enregistré. Cliquez sur "+ Nouveau revendeur partenaire" pour ajouter un dépôt.</td></tr>';
      return;
    }

    tbody.innerHTML = app.consignmentData.stores.map((s) => {
      const isClosed = s.status === 'closed';
      const totalDep = (s.items || []).reduce((acc, it) => acc + (Number(it.qtyDeposited) || 0), 0);
      const totalSold = (s.items || []).reduce((acc, it) => acc + (Number(it.qtySold) || 0), 0);
      const inStock = Math.max(0, totalDep - totalSold);
      const totalSalesTTC = (s.items || []).reduce((acc, it) => acc + ((Number(it.qtySold) || 0) * (Number(it.priceTTC) || 0)), 0);
      const netG2P = totalSalesTTC * (1 - (Number(s.commissionRate) || 20) / 100);

      return `
        <tr style="${isClosed ? 'opacity:0.65; background:#f8fafc;' : ''}">
          <td>
            <strong style="font-size:13.5px; color:#1e1b4b; display:block;">${s.name}</strong>
            <small style="color:#64748b; font-size:11px;">${(s.themes || []).join(' • ') || 'Dépôt-Vente standard'}</small>
          </td>
          <td>
            <span style="font-size:12.5px; color:#334155; display:block;">${s.contact || '—'}</span>
            <small style="color:#64748b; font-size:11px;">${s.address || '—'} ${s.phone ? '• ' + s.phone : ''}</small>
          </td>
          <td style="text-align:center;">
            <span class="badge-status" style="background:#ede9fe; color:#4338ca; font-weight:700; border:1px solid #c4b5fd;">${s.commissionRate || 20}%</span>
          </td>
          <td style="text-align:center; font-weight:700; font-size:13px; color:#0f172a;">${totalDep} pcs</td>
          <td style="text-align:center; font-weight:700; font-size:13px; color:#16a34a;">${totalSold} pcs</td>
          <td style="text-align:center; font-weight:700; font-size:13px; color:${inStock <= 2 ? '#dc2626' : '#1e1b4b'};">${inStock} pcs</td>
          <td style="text-align:right; font-weight:800; font-size:13px; color:#4f46e5;">${netG2P.toFixed(2).replace('.', ',')} €</td>
          <td style="text-align:center;">
            ${isClosed
              ? '<span class="badge-status" style="background:#fef2f2; color:#b91c1c; border:1px solid #fecaca; font-size:11px;">Convention Clôturée</span>'
              : '<span class="badge-status approved" style="font-size:11px;">Convention Active</span>'
            }
          </td>
          <td style="text-align:center;">
            <button type="button" class="admin-btn outline btn-open-reseller-sheet" data-store-id="${s.id}" style="font-size:11.5px; padding:4px 10px; font-weight:700; background:#ffffff;">Ouvrir la fiche</button>
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.btn-open-reseller-sheet').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = (app.consignmentData?.stores || []).find(s => s.id === btn.dataset.storeId);
        if (target) app.openResellerSheetModal(target);
      });
    });
  };

  app.persistConsignment = async function() {
    if (!app.consignmentData) return;
    try {
      await fetch('/api/admin/consignment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(app.consignmentData)
      });
    } catch (err) {
      console.warn('Erreur sauvegarde dépôt-vente:', err);
    }
  };

  // Gestion de la modale "+ Nouveau Revendeur Partenaire"
  app.openAddResellerModal = function() {
    const modal = document.querySelector('#addResellerModal');
    if (!modal) return;
    const form = document.querySelector('#addResellerForm');
    if (form) form.reset();
    modal.style.display = 'flex';
  };

  app.closeAddResellerModal = function() {
    const modal = document.querySelector('#addResellerModal');
    if (modal) modal.style.display = 'none';
  };

  app.confirmAddReseller = async function() {
    const nameInp = document.querySelector('#newRsName');
    const contactInp = document.querySelector('#newRsContact');
    const phoneInp = document.querySelector('#newRsPhone');
    const addressInp = document.querySelector('#newRsAddress');
    const commInp = document.querySelector('#newRsCommission');
    const themesInp = document.querySelector('#newRsThemes');
    const notesInp = document.querySelector('#newRsNotes');

    const name = (nameInp?.value || '').trim();
    if (!name) {
      app.showToast?.('Veuillez renseigner le nom de l’établissement.');
      return;
    }

    const newStore = {
      id: `store-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name,
      contact: (contactInp?.value || '').trim(),
      phone: (phoneInp?.value || '').trim(),
      email: '',
      address: (addressInp?.value || '').trim(),
      commissionRate: Number(commInp?.value) || 20,
      partnershipType: 'Dépôt-Vente Partenaire',
      status: 'active',
      dateConvention: new Date().toISOString().split('T')[0],
      themes: (themesInp?.value || '').split(',').map(t => t.trim()).filter(Boolean),
      notes: (notesInp?.value || '').trim(),
      items: []
    };

    if (!app.consignmentData) app.consignmentData = { stores: [] };
    if (!Array.isArray(app.consignmentData.stores)) app.consignmentData.stores = [];
    app.consignmentData.stores.push(newStore);

    await app.persistConsignment();
    app.closeAddResellerModal();
    app.renderAdminConsignment();
    app.showToast?.(`Revendeur "${name}" créé avec succès.`);
  };

  let currentResellerStore = null;

  app.openResellerSheetModal = function(store) {
    if (!store) return;
    currentResellerStore = store;
    const modal = document.querySelector('#resellerSheetModal');
    if (!modal) return;

    const nameEl = document.querySelector('#rsStoreName');
    const rateEl = document.querySelector('#rsCommissionRate');
    const contactEl = document.querySelector('#rsContact');
    const phoneEl = document.querySelector('#rsPhone');
    const emailEl = document.querySelector('#rsEmail');
    const addressEl = document.querySelector('#rsAddress');
    const typeEl = document.querySelector('#rsPartnershipType');
    const dateEl = document.querySelector('#rsDateConvention');
    const themesEl = document.querySelector('#rsThemes');
    const notesEl = document.querySelector('#rsNotes');
    const statusBadge = document.querySelector('#rsStatusBadge');
    const toggleContractBtn = document.querySelector('#btnToggleContractStatus');

    if (nameEl) nameEl.textContent = store.name;
    if (rateEl) rateEl.textContent = `${store.commissionRate || 20}%`;
    if (contactEl) contactEl.textContent = store.contact || '—';
    if (phoneEl) phoneEl.textContent = store.phone || '—';
    if (emailEl) emailEl.textContent = store.email || '—';
    if (addressEl) addressEl.textContent = store.address || '—';
    if (typeEl) typeEl.textContent = store.partnershipType || 'Dépôt-Vente Partenaire';
    if (dateEl) dateEl.textContent = store.dateConvention || '—';
    if (notesEl) notesEl.value = store.notes || '';

    if (themesEl) {
      themesEl.innerHTML = (store.themes || []).map(th => `
        <span style="font-size:11px; font-weight:700; background:#e0e7ff; color:#3730a3; padding:2px 8px; border-radius:12px;">${th}</span>
      `).join('');
    }

    const updateStatusUI = () => {
      const isClosed = store.status === 'closed';
      if (statusBadge) {
        statusBadge.textContent = isClosed ? 'Convention Clôturée' : 'Convention Active';
        statusBadge.className = isClosed ? 'badge-status' : 'badge-status approved';
        statusBadge.style.background = isClosed ? '#fef2f2' : '';
        statusBadge.style.color = isClosed ? '#b91c1c' : '';
        statusBadge.style.borderColor = isClosed ? '#fecaca' : '';
      }
      if (toggleContractBtn) {
        toggleContractBtn.textContent = isClosed ? '🔄 Réactiver le partenariat' : '❌ Clôturer la convention';
        toggleContractBtn.style.color = isClosed ? '#059669' : '#dc2626';
        toggleContractBtn.style.borderColor = isClosed ? '#a7f3d0' : '#fecaca';
      }
    };
    updateStatusUI();

    if (toggleContractBtn) {
      toggleContractBtn.onclick = async () => {
        store.status = store.status === 'closed' ? 'active' : 'closed';
        updateStatusUI();
        await app.persistConsignment();
        app.renderAdminConsignment();
        app.showToast?.(store.status === 'closed' ? 'Convention clôturée avec ce magasin.' : 'Partenariat réactivé.');
      };
    }

    const updateTotals = () => {
      let totDep = 0;
      let totSold = 0;
      let totSales = 0;

      (store.items || []).forEach(item => {
        totDep += (Number(item.qtyDeposited) || 0);
        totSold += (Number(item.qtySold) || 0);
        totSales += ((Number(item.qtySold) || 0) * (Number(item.priceTTC) || 0));
      });

      const netG2P = totSales * (1 - (Number(store.commissionRate) || 20) / 100);
      const depEl = document.querySelector('#rsTotalDeposited');
      const soldEl = document.querySelector('#rsTotalSold');
      const netEl = document.querySelector('#rsNetG2P');
      if (depEl) depEl.textContent = `${totDep} ex.`;
      if (soldEl) soldEl.textContent = `${totSold} ex.`;
      if (netEl) netEl.textContent = `${netG2P.toFixed(2).replace('.', ',')} €`;
    };

    const tbody = document.querySelector('#rsItemsTableBody');
    const renderItemsTable = () => {
      if (!tbody) return;
      if (!store.items || store.items.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:22px; color:#94a3b8;">Aucun article déposé. Cliquez sur "+ Déposer un article" ci-dessus pour ajouter des pièces.</td></tr>';
        updateTotals();
        return;
      }

      tbody.innerHTML = store.items.map((item, idx) => {
        const dep = Number(item.qtyDeposited) || 0;
        const sold = Number(item.qtySold) || 0;
        const left = Math.max(0, dep - sold);
        const pTTC = Number(item.priceTTC) || 0;
        const netItemG2P = (sold * pTTC) * (1 - (Number(store.commissionRate) || 20) / 100);

        return `
          <tr data-index="${idx}">
            <td><strong style="color:#0f172a; font-size:12.5px;">${item.productName}</strong></td>
            <td><span style="font-size:11px; color:#64748b;">${item.theme || '—'}</span></td>
            <td style="text-align:center;">
              <input type="number" min="0" class="input-rs-qty-dep" data-index="${idx}" value="${dep}" style="width:65px; text-align:center; padding:4px 6px; font-weight:700; border-radius:6px; border:1px solid #cbd5e1;" title="Quantité déposée modifiable" />
            </td>
            <td style="text-align:center;">
              <input type="number" min="0" class="input-rs-qty-sold" data-index="${idx}" value="${sold}" style="width:65px; text-align:center; padding:4px 6px; font-weight:700; border-radius:6px; border:1px solid #cbd5e1; color:#059669;" title="Quantité vendue modifiable" />
            </td>
            <td style="text-align:center; font-weight:700; color:${left <= 2 ? '#dc2626' : '#1e1b4b'};">
              <span class="rs-item-left">${left}</span>
            </td>
            <td style="text-align:right; font-weight:700;">${pTTC.toFixed(2).replace('.', ',')} €</td>
            <td style="text-align:right; font-weight:800; color:#4f46e5;">
              <span class="rs-item-net">${netItemG2P.toFixed(2).replace('.', ',')} €</span>
            </td>
            <td style="text-align:center;">
              <button type="button" class="btn-remove-rs-item" data-index="${idx}" style="background:transparent; border:none; color:#dc2626; cursor:pointer; font-weight:700; font-size:14px;" title="Retirer cet article du dépôt">🗑️</button>
            </td>
          </tr>
        `;
      }).join('');

      // Modification directe des quantités déposées et vendues
      tbody.querySelectorAll('.input-rs-qty-dep').forEach(inp => {
        inp.addEventListener('input', () => {
          const idx = parseInt(inp.dataset.index, 10);
          if (store.items[idx]) {
            store.items[idx].qtyDeposited = Math.max(0, parseInt(inp.value || '0', 10));
            const tr = inp.closest('tr');
            const soldInp = tr?.querySelector('.input-rs-qty-sold');
            const soldVal = Math.max(0, parseInt(soldInp?.value || '0', 10));
            const leftSpan = tr?.querySelector('.rs-item-left');
            if (leftSpan) {
              const leftVal = Math.max(0, store.items[idx].qtyDeposited - soldVal);
              leftSpan.textContent = String(leftVal);
              leftSpan.style.color = leftVal <= 2 ? '#dc2626' : '#1e1b4b';
            }
            updateTotals();
          }
        });
      });

      tbody.querySelectorAll('.input-rs-qty-sold').forEach(inp => {
        inp.addEventListener('input', () => {
          const idx = parseInt(inp.dataset.index, 10);
          if (store.items[idx]) {
            store.items[idx].qtySold = Math.max(0, parseInt(inp.value || '0', 10));
            const tr = inp.closest('tr');
            const depInp = tr?.querySelector('.input-rs-qty-dep');
            const depVal = Math.max(0, parseInt(depInp?.value || '0', 10));
            const leftSpan = tr?.querySelector('.rs-item-left');
            if (leftSpan) {
              const leftVal = Math.max(0, depVal - store.items[idx].qtySold);
              leftSpan.textContent = String(leftVal);
              leftSpan.style.color = leftVal <= 2 ? '#dc2626' : '#1e1b4b';
            }
            const netSpan = tr?.querySelector('.rs-item-net');
            if (netSpan) {
              const pTTC = Number(store.items[idx].priceTTC) || 0;
              const netVal = (store.items[idx].qtySold * pTTC) * (1 - (Number(store.commissionRate) || 20) / 100);
              netSpan.textContent = `${netVal.toFixed(2).replace('.', ',')} €`;
            }
            updateTotals();
          }
        });
      });

      tbody.querySelectorAll('.btn-remove-rs-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index, 10);
          if (confirm(`Retirer l'article "${store.items[idx]?.productName}" du dépôt ?`)) {
            store.items.splice(idx, 1);
            renderItemsTable();
          }
        });
      });

      updateTotals();
    };

    renderItemsTable();

    // Gestion de l'ajout d'article au dépôt
    const quickBox = document.querySelector('#quickAddDepositBox');
    const toggleBtn = document.querySelector('#btnToggleAddDepositRow');
    if (toggleBtn && quickBox) {
      toggleBtn.onclick = () => {
        quickBox.style.display = (quickBox.style.display === 'none' || !quickBox.style.display) ? 'flex' : 'none';
      };
    }

    const confirmAddDepBtn = document.querySelector('#btnConfirmAddDepositItem');
    if (confirmAddDepBtn) {
      confirmAddDepBtn.onclick = () => {
        const nameInp = document.querySelector('#newDepProductName');
        const themeInp = document.querySelector('#newDepTheme');
        const qtyInp = document.querySelector('#newDepQty');
        const priceInp = document.querySelector('#newDepPriceTTC');

        const pName = (nameInp?.value || '').trim();
        if (!pName) {
          app.showToast?.('Veuillez renseigner le nom de l’article déposé.');
          return;
        }

        const qty = Math.max(1, parseInt(qtyInp?.value || '10', 10));
        const priceTTC = Math.max(0.5, parseFloat((priceInp?.value || '10').replace(',', '.')) || 10);
        const theme = (themeInp?.value || '').trim();

        if (!Array.isArray(store.items)) store.items = [];
        store.items.push({
          id: `dep-${Date.now()}`,
          productName: pName,
          theme: theme || 'Thème Général',
          qtyDeposited: qty,
          qtySold: 0,
          priceTTC,
          status: 'active'
        });

        if (nameInp) nameInp.value = '';
        if (themeInp) themeInp.value = '';
        if (quickBox) quickBox.style.display = 'none';

        renderItemsTable();
        app.showToast?.(`Article "${pName}" ajouté au dépôt.`);
      };
    }

    modal.style.display = 'flex';
  };

  app.closeResellerSheetModal = function() {
    const modal = document.querySelector('#resellerSheetModal');
    if (modal) modal.style.display = 'none';
    currentResellerStore = null;
  };

  app.saveResellerSheet = async function() {
    if (!currentResellerStore) return;
    const notesEl = document.querySelector('#rsNotes');
    if (notesEl) currentResellerStore.notes = notesEl.value.trim();

    await app.persistConsignment();
    app.closeResellerSheetModal();
    app.renderAdminConsignment();
    app.showToast?.(`Fiche et stocks de "${currentResellerStore.name}" enregistrés avec succès.`);
  };

  app.saveAllProductsConfig = async function() {
    const btn = document.querySelector('#btnSaveProductsConfig');
    const origText = btn ? btn.textContent : 'Enregistrer les tarifs';
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Enregistrement en cours...';
      btn.style.opacity = '0.85';
    }

    const priceInputs = document.querySelectorAll('.product-price-input');
    const resellerInputs = document.querySelectorAll('.product-reseller-input');
    const stockInputs = document.querySelectorAll('.product-stock-input');
    const timeInputs = document.querySelectorAll('.product-time-input');
    const totalCostInputs = document.querySelectorAll('.product-totalcost-input');

    priceInputs.forEach(inp => {
      const prod = app.productsConfig.find(p => p.key === inp.dataset.key);
      if (prod) prod.price = inp.value.trim();
    });
    resellerInputs.forEach(inp => {
      const prod = app.productsConfig.find(p => p.key === inp.dataset.key);
      if (prod) prod.resellerPrice = inp.value.trim();
    });
    timeInputs.forEach(inp => {
      const prod = app.productsConfig.find(p => p.key === inp.dataset.key);
      if (prod) prod.timeMinutes = Number.parseFloat(inp.value) || 0;
    });
    totalCostInputs.forEach(inp => {
      const prod = app.productsConfig.find(p => p.key === inp.dataset.key);
      if (prod) prod.totalCost = inp.value.trim();
    });
    stockInputs.forEach(inp => {
      const prod = app.productsConfig.find(p => p.key === inp.dataset.key);
      if (prod) prod.stockQuantity = Number.parseInt(inp.value) || 0;
    });

    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(app.productsConfig)
      });
      if (res.ok) {
        if (btn) {
          btn.style.background = '#059669';
          btn.style.borderColor = '#059669';
          btn.style.color = '#ffffff';
          btn.textContent = '✓ Tarifs enregistrés avec succès !';
          btn.style.transform = 'scale(1.02)';
          btn.style.transition = 'all 0.2s ease';
        }
        app.showToast?.('Tous les tarifs ont été enregistrés avec succès.');
        app.renderShop2D?.();
        setTimeout(() => {
          if (btn) {
            btn.disabled = false;
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
            btn.style.transform = '';
            btn.style.opacity = '1';
            btn.textContent = origText;
          }
        }, 2200);
      } else {
        if (btn) {
          btn.disabled = false;
          btn.style.opacity = '1';
          btn.textContent = origText;
        }
        app.showToast?.('Erreur lors de la sauvegarde des tarifs.');
      }
    } catch (err) {
      if (btn) {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.textContent = origText;
      }
      app.showToast?.('Erreur réseau lors de la sauvegarde.');
    }
  };

  // Gestion du Catalogue
  // Gestion du Catalogue et Sélection par Lot
  app.selectedCatalogVisualIds = new Set();

  app.updateBatchBarUI = function() {
    const bar = document.querySelector('#adminBatchActionsBar');
    const label = document.querySelector('#batchSelectedCountLabel');
    const chkAll = document.querySelector('#chkBatchSelectAll');
    const count = app.selectedCatalogVisualIds.size;

    if (bar) bar.style.display = 'flex';
    if (label) label.textContent = `Tout cocher (${count} sélectionné${count > 1 ? 's' : ''})`;

    const deselectBtn = document.querySelector('#btnBatchDeselectAll');
    if (deselectBtn) {
      deselectBtn.style.display = count > 0 ? 'inline-block' : 'none';
    }

    const visibleChecks = document.querySelectorAll('.admin-visual-select-chk');
    if (chkAll && visibleChecks.length > 0) {
      const allChecked = Array.from(visibleChecks).every(c => c.checked);
      chkAll.checked = allChecked;
    }

    const statSelect = document.querySelector('#catalogStatusFilter');
    const trashBtn = document.querySelector('#btnAdminEmptyTrash');
    const trashCount = (app.catalogImages || []).filter(v => v.status === 'trash').length;
    if (trashBtn) {
      trashBtn.style.display = (statSelect?.value === 'trash' && trashCount > 0) ? 'inline-block' : 'none';
      trashBtn.textContent = `🔥 Vider la corbeille (${trashCount})`;
    }
  };

  app.loadAdminCatalog = async function() {
    const grid = document.querySelector('#adminVisualsGrid');
    if (!grid) return;

    if (!app.catalogImages || !app.catalogImages.length) {
      try {
        const res = await fetch('/api/catalog-images');
        if (res.ok) {
          const list = await res.json();
          if (Array.isArray(list)) app.catalogImages = list;
        }
      } catch (err) {}
    }

    const searchEl = document.querySelector('#adminCatalogSearchInput') || document.querySelector('#catalogSearchInput');
    const filterText = (searchEl?.value || '').toLowerCase().trim();
    const filterCat = document.querySelector('#catalogCategoryFilter')?.value || 'all';
    const statSelect = document.querySelector('#catalogStatusFilter');
    const filterStat = statSelect?.value || 'all';

    // Synchronisation dynamique des compteurs dans le menu déroulant de statut
    if (statSelect) {
      const allCount = (app.catalogImages || []).length;
      const approvedCount = (app.catalogImages || []).filter(v => (v.status || 'approved') === 'approved').length;
      const pendingCount = (app.catalogImages || []).filter(v => v.status === 'pending').length;
      const privateCount = (app.catalogImages || []).filter(v => v.status === 'private').length;
      const trashCount = (app.catalogImages || []).filter(v => v.status === 'trash').length;

      const opts = [
        { val: 'all', label: `Tous les statuts (${allCount})` },
        { val: 'approved', label: `Publiés (${approvedCount})` },
        { val: 'pending', label: `En attente (${pendingCount})` },
        { val: 'private', label: `Privés atelier (${privateCount})` },
        { val: 'trash', label: `Corbeille (${trashCount})` }
      ];

      // Mise à jour douce du texte des options sans casser la sélection ni les événements
      if (statSelect.options.length === opts.length) {
        opts.forEach((o, i) => {
          if (statSelect.options[i]) {
            statSelect.options[i].value = o.val;
            statSelect.options[i].textContent = o.label;
          }
        });
      } else {
        statSelect.innerHTML = opts.map(o => `<option value="${o.val}" ${o.val === filterStat ? 'selected' : ''}>${o.label}</option>`).join('');
      }
      statSelect.value = filterStat;
    }

    // Gestion du bouton de validation rapide des visuels en attente
    const pendingTotal = (app.catalogImages || []).filter(v => v.status === 'pending').length;
    const btnValPending = document.querySelector('#btnBatchValidatePending');
    if (btnValPending) {
      btnValPending.style.display = (pendingTotal > 0) ? 'inline-block' : 'none';
      btnValPending.textContent = `✓ Valider tous les visuels en attente (${pendingTotal})`;
    }

    const list = (app.catalogImages || []).filter(item => {
      if (!item) return false;
      let matchCat = true;
      if (filterCat !== 'all') {
        if (filterCat.includes('::')) {
          const [pCat, pSub] = filterCat.split('::');
          matchCat = ((item.category === pCat || item.category2 === pCat || (Array.isArray(item.categories) && item.categories.includes(pCat))) && item.subcategory === pSub);
        } else {
          matchCat = (item.category === filterCat || item.category2 === filterCat || (Array.isArray(item.categories) && item.categories.includes(filterCat)));
        }
      }
      const matchStat = filterStat === 'all' || (item.status || 'approved') === filterStat;
      const matchText = !filterText || (item.name || '').toLowerCase().includes(filterText);
      return matchCat && matchStat && matchText;
    });

    grid.innerHTML = '';
    list.forEach(item => {
      const card = document.createElement('div');
      const isSelected = app.selectedCatalogVisualIds.has(item.id);
      card.className = `admin-visual-card${isSelected ? ' is-selected' : ''}`;
      card.style.position = 'relative';
      if (isSelected) card.style.boxShadow = '0 0 0 2px #7c3aed';

      const st = item.status === 'trash' ? 'trash' : (item.status === 'pending' ? 'pending' : (item.status === 'private' ? 'pending' : 'approved'));
      const stLabel = st === 'approved' ? 'Publié' : (item.status === 'private' ? 'Privé' : (st === 'pending' ? 'En attente' : 'Corbeille'));
      const catsLabel = (item.category2 && item.category2 !== item.category)
        ? `${item.category} & ${item.category2}`
        : (item.category || 'Non classé');

      card.innerHTML = `
        <input type="checkbox" class="admin-visual-select-chk" data-id="${item.id}" ${isSelected ? 'checked' : ''} style="position:absolute; top:8px; left:8px; width:20px; height:20px; accent-color:#7c3aed; cursor:pointer; z-index:3; border-radius:4px;" title="Sélectionner pour action groupée" />
        <div class="admin-visual-thumb-wrap" style="cursor:pointer;" title="Cliquez pour éditer ce visuel">
          <img src="${item.url}" alt="${item.name}" class="admin-visual-thumb" loading="lazy" />
        </div>
        <div class="admin-visual-body">
          <h4 class="admin-visual-title" style="cursor:pointer;" title="Cliquez pour éditer ce visuel">${item.name}</h4>
          <span class="admin-visual-cat">${item.subcategory ? `${catsLabel} › ${item.subcategory}` : catsLabel}</span>
        </div>
        <div class="admin-visual-footer">
          <span class="badge-status ${st}">${stLabel}</span>
          <button type="button" class="admin-btn outline btn-edit-visual" data-id="${item.id}" style="font-size:11px; padding:3px 8px;" title="Éditer ce visuel">Éditer</button>
        </div>
      `;
      grid.appendChild(card);
    });

    // Clics sur les cases à cocher individuelles
    grid.querySelectorAll('.admin-visual-select-chk').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        const card = e.target.closest('.admin-visual-card');
        if (e.target.checked) {
          app.selectedCatalogVisualIds.add(id);
          card?.classList.add('is-selected');
          if (card) card.style.boxShadow = '0 0 0 2px #7c3aed';
        } else {
          app.selectedCatalogVisualIds.delete(id);
          card?.classList.remove('is-selected');
          if (card) card.style.boxShadow = '';
        }
        app.updateBatchBarUI();
      });
    });

    // Clic pour éditer le visuel (bouton Éditer, vignette ou titre)
    grid.querySelectorAll('.btn-edit-visual, .admin-visual-thumb-wrap, .admin-visual-title').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = el.closest('.admin-visual-card');
        const id = el.dataset.id || card?.querySelector('.admin-visual-select-chk')?.dataset.id;
        const target = (app.catalogImages || []).find(v => String(v.id) === String(id)) || list.find(v => String(v.id) === String(id));
        if (target && app.openVisualEditModal) {
          app.openVisualEditModal(target);
        } else {
          console.warn('Visuel introuvable pour ID:', id);
        }
      });
    });

    app.updateBatchBarUI();
  };

  let allDetectedFiles = [];
  let pendingUploadItems = [];
  let detectedDuplicates = [];
  let detectedValid = [];

  app.updateBatchUploadPreviews = function() {
    const chkForce = document.querySelector('#chkForceImportDuplicates');
    const isForced = chkForce ? chkForce.checked : false;

    if (isForced) {
      pendingUploadItems = allDetectedFiles.map(file => {
        const baseName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ').trim();
        const cleanName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
        return { file, cleanName };
      });
    } else {
      pendingUploadItems = detectedValid.slice();
    }

    const countLabel = document.querySelector('#batchUploadDirectCountLabel');
    if (countLabel) countLabel.textContent = `${pendingUploadItems.length} fichier(s) sélectionné(s)`;

    const validCount = document.querySelector('#batchUploadValidCount');
    if (validCount) validCount.textContent = pendingUploadItems.length;

    const strip = document.querySelector('#batchUploadPreviewsStrip');
    if (strip) {
      strip.innerHTML = '';
      pendingUploadItems.slice(0, 20).forEach(item => {
        const url = URL.createObjectURL(item.file);
        const img = document.createElement('img');
        img.src = url;
        img.title = item.cleanName;
        img.style.cssText = 'width:48px; height:48px; object-fit:cover; border-radius:6px; border:1px solid #cbd5e1; background:#fff; flex-shrink:0;';
        strip.appendChild(img);
      });
      if (pendingUploadItems.length > 20) {
        const more = document.createElement('span');
        more.textContent = `+${pendingUploadItems.length - 20} autres`;
        more.style.cssText = 'font-size:11px; font-weight:700; color:#64748b; padding:0 8px; white-space:nowrap;';
        strip.appendChild(more);
      }
    }
  };

  // Ouverture de la modale d'import direct avec filtrage des doublons et choix de catégorie
  app.openBatchUploadDirectModal = function(files) {
    if (!files || files.length === 0) return;
    const fileList = Array.from(files).filter(f => f.type.startsWith('image/'));
    if (!fileList.length) {
      app.showToast?.('Aucun fichier image valide sélectionné.');
      return;
    }

    allDetectedFiles = fileList;
    detectedDuplicates = [];
    detectedValid = [];

    fileList.forEach(file => {
      const baseName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ').trim();
      const cleanName = baseName.charAt(0).toUpperCase() + baseName.slice(1);
      const isDup = (app.catalogImages || []).some(img => {
        if (img.status === 'trash') return false;
        const nMatch = (img.name || '').trim().toLowerCase() === cleanName.toLowerCase();
        const uMatch = (img.url || '').toLowerCase().endsWith('/' + file.name.toLowerCase());
        return nMatch || uMatch;
      });
      if (isDup) {
        detectedDuplicates.push(file.name);
      } else {
        detectedValid.push({ file, cleanName });
      }
    });

    const modal = document.querySelector('#batchUploadDirectModal');
    if (!modal) return;

    const chkForce = document.querySelector('#chkForceImportDuplicates');
    if (detectedValid.length === 0 && detectedDuplicates.length > 0) {
      // Tous les fichiers sont des doublons : on active automatiquement le forçage
      if (chkForce) chkForce.checked = true;
    } else {
      if (chkForce) chkForce.checked = false;
    }

    // Avertissement des doublons détectés
    const dupAlert = document.querySelector('#batchUploadDuplicatesAlert');
    const dupList = document.querySelector('#batchUploadDuplicatesList');
    const dupCount = document.querySelector('#batchUploadDuplicatesCount');
    if (dupAlert && dupList) {
      if (detectedDuplicates.length > 0) {
        dupAlert.style.display = 'block';
        if (dupCount) dupCount.textContent = detectedDuplicates.length;
        dupList.textContent = `${detectedDuplicates.length} doublon(s) détecté(s) : ${detectedDuplicates.join(', ')}`;
      } else {
        dupAlert.style.display = 'none';
        dupList.textContent = '';
      }
    }

    app.updateBatchUploadPreviews();

    // Sélecteurs de catégories et sous-catégories
    const catSelect = document.querySelector('#batchUploadCatSelect');
    const subSelect = document.querySelector('#batchUploadSubSelect');
    const newCatWrap = document.querySelector('#batchUploadNewCatWrap');
    const newCatInput = document.querySelector('#batchUploadNewCatInput');
    const newSubWrap = document.querySelector('#batchUploadNewSubWrap');
    const newSubInput = document.querySelector('#batchUploadNewSubInput');

    if (newCatWrap) newCatWrap.style.display = 'none';
    if (newCatInput) newCatInput.value = '';
    if (newSubWrap) newSubWrap.style.display = 'none';
    if (newSubInput) newSubInput.value = '';

    const cats = (app.catalogCategories || []).slice().sort((a, b) => {
      const na = typeof a === 'string' ? a : a.name;
      const nb = typeof b === 'string' ? b : b.name;
      return na.localeCompare(nb, 'fr', { sensitivity: 'base' });
    });

    const populateUploadSubs = (selectedCatName) => {
      if (!subSelect) return;
      const catObj = cats.find(c => (typeof c === 'string' ? c : c.name).toLowerCase() === (selectedCatName || '').toLowerCase());
      const subs = (catObj && Array.isArray(catObj.subs)) ? catObj.subs.slice().sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' })) : [];
      let subHtml = `<option value="">(Aucune sous-catégorie)</option>`;
      subs.forEach(s => {
        subHtml += `<option value="${s}">${s}</option>`;
      });
      subHtml += `<option value="__NEW__">+ Créer une nouvelle sous-catégorie...</option>`;
      subSelect.innerHTML = subHtml;

      const hasLapin = (detectedValid || []).some(v => v.cleanName.toLowerCase().includes('lapin'));
      if (hasLapin) {
        const found = subs.find(s => s.toLowerCase() === 'lapin');
        if (found) subSelect.value = found;
      } else {
        subSelect.value = '';
      }
      if (newSubWrap) newSubWrap.style.display = 'none';
    };

    if (catSelect) {
      let catHtml = '';
      cats.forEach(c => {
        const cName = typeof c === 'string' ? c : c.name;
        catHtml += `<option value="${cName}">${cName}</option>`;
      });
      catHtml += `<option value="__NEW__">+ Créer une nouvelle catégorie...</option>`;
      catSelect.innerHTML = catHtml;

      const hasLapin = (detectedValid || []).some(v => v.cleanName.toLowerCase().includes('lapin'));
      const hasAnimaux = cats.some(c => (typeof c === 'string' ? c : c.name) === 'Animaux');
      if (hasLapin && hasAnimaux) {
        catSelect.value = 'Animaux';
      } else {
        catSelect.value = cats[0] ? (typeof cats[0] === 'string' ? cats[0] : cats[0].name) : '__NEW__';
      }
      populateUploadSubs(catSelect.value);

      catSelect.onchange = () => {
        if (catSelect.value === '__NEW__') {
          if (newCatWrap) newCatWrap.style.display = 'block';
          if (newCatInput) { newCatInput.value = ''; newCatInput.focus(); }
          if (subSelect) {
            subSelect.innerHTML = `<option value="">(Aucune sous-catégorie)</option><option value="__NEW__">+ Créer une nouvelle sous-catégorie...</option>`;
            subSelect.value = '';
          }
        } else {
          if (newCatWrap) newCatWrap.style.display = 'none';
          populateUploadSubs(catSelect.value);
        }
      };
    }

    if (subSelect) {
      subSelect.onchange = () => {
        if (subSelect.value === '__NEW__') {
          if (newSubWrap) newSubWrap.style.display = 'block';
          if (newSubInput) { newSubInput.value = ''; newSubInput.focus(); }
        } else {
          if (newSubWrap) newSubWrap.style.display = 'none';
        }
      };
    }

    modal.style.display = 'flex';
  };

  app.closeBatchUploadDirectModal = function() {
    const modal = document.querySelector('#batchUploadDirectModal');
    if (modal) modal.style.display = 'none';
    pendingUploadItems = [];
  };

  app.confirmBatchUploadDirect = async function() {
    if (!pendingUploadItems || pendingUploadItems.length === 0) return;
    const catSelect = document.querySelector('#batchUploadCatSelect');
    const subSelect = document.querySelector('#batchUploadSubSelect');
    const newCatInput = document.querySelector('#batchUploadNewCatInput');
    const newSubInput = document.querySelector('#batchUploadNewSubInput');
    const publishNowChk = document.querySelector('#batchUploadPublishNow');
    const btn = document.querySelector('#confirmBatchUploadDirectBtn');

    let finalCategory = '';
    if (catSelect?.value === '__NEW__') {
      finalCategory = (newCatInput?.value || '').trim();
    } else {
      finalCategory = catSelect?.value || 'Nouveau';
    }
    if (!finalCategory) finalCategory = 'Nouveau';
    finalCategory = finalCategory.charAt(0).toUpperCase() + finalCategory.slice(1);

    let finalSubcategory = '';
    if (subSelect?.value === '__NEW__') {
      finalSubcategory = (newSubInput?.value || '').trim();
    } else {
      finalSubcategory = subSelect?.value || '';
    }
    if (finalSubcategory) {
      finalSubcategory = finalSubcategory.charAt(0).toUpperCase() + finalSubcategory.slice(1);
    }

    const publishNow = publishNowChk ? publishNowChk.checked : true;
    const status = publishNow ? 'approved' : 'pending';

    let catObj = (app.catalogCategories || []).find(c => (typeof c === 'string' ? c : c.name).toLowerCase() === finalCategory.toLowerCase());
    if (!catObj) {
      catObj = { name: finalCategory, subs: finalSubcategory ? [finalSubcategory] : [] };
      if (!Array.isArray(app.catalogCategories)) app.catalogCategories = [];
      app.catalogCategories.push(catObj);
    } else if (typeof catObj === 'string') {
      const idx = app.catalogCategories.indexOf(catObj);
      catObj = { name: catObj, subs: finalSubcategory ? [finalSubcategory] : [] };
      app.catalogCategories[idx] = catObj;
    } else if (finalSubcategory && Array.isArray(catObj.subs) && !catObj.subs.includes(finalSubcategory)) {
      catObj.subs.push(finalSubcategory);
      catObj.subs.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
    }

    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Enregistrement en cours...';
    }

    const itemsToProcess = pendingUploadItems.slice();
    let importedCount = 0;

    for (const item of itemsToProcess) {
      const dataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(item.file);
      });
      if (!dataUrl) continue;

      const newItem = {
        id: `visuel-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        name: item.cleanName,
        url: dataUrl,
        category: finalCategory,
        categories: [finalCategory],
        subcategory: finalSubcategory,
        repeatPattern: false,
        status: status,
        isNew: true,
        dateAdded: new Date().toISOString(),
        compatibleProducts: ['all']
      };

      if (!Array.isArray(app.catalogImages)) app.catalogImages = [];
      app.catalogImages.unshift(newItem);
      importedCount++;
    }

    await app.persistCatalogCategories?.();
    await app.persistCatalog?.();

    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Importer et Publier';
    }

    app.closeBatchUploadDirectModal();

    const statSelect = document.querySelector('#catalogStatusFilter');
    if (statSelect) statSelect.value = 'all';
    await app.loadAdminCatalog();
    app.renderCatalog?.();
    app.loadVisualLibrary?.();
    app.renderAdminVisualStats?.();
    app.updateAdminKpis();

    const subInfo = finalSubcategory ? ` > ${finalSubcategory}` : '';
    app.showToast?.(`✓ ${importedCount} visuel(s) importé(s) dans "${finalCategory}${subInfo}" et ${publishNow ? 'publiés' : 'enregistrés'} avec succès.`);
  };

  app.handleAdminVisualsUpload = async function(files) {
    app.openBatchUploadDirectModal(files);
  };

  // Action groupée : Reclasser le lot sélectionné via une liste déroulante ergonomique
  app.batchChangeCategory = function() {
    if (app.selectedCatalogVisualIds.size === 0) return;
    const count = app.selectedCatalogVisualIds.size;
    const modal = document.querySelector('#batchCategoryModal');
    if (!modal) return;

    const countLabel = document.querySelector('#batchCategoryCountLabel');
    if (countLabel) countLabel.textContent = `${count} visuel(s) sélectionné(s)`;

    const catSelect = document.querySelector('#batchCategorySelect');
    const subSelect = document.querySelector('#batchSubcategorySelect');
    const newCatWrap = document.querySelector('#batchCategoryNewWrap');
    const newCatInput = document.querySelector('#batchCategoryNewInput');
    const newSubWrap = document.querySelector('#batchSubcategoryNewWrap');
    const newSubInput = document.querySelector('#batchSubcategoryNewInput');

    if (newCatWrap) newCatWrap.style.display = 'none';
    if (newCatInput) newCatInput.value = '';
    if (newSubWrap) newSubWrap.style.display = 'none';
    if (newSubInput) newSubInput.value = '';

    const cats = (app.catalogCategories || []).slice().sort((a, b) => {
      const na = typeof a === 'string' ? a : a.name;
      const nb = typeof b === 'string' ? b : b.name;
      return na.localeCompare(nb, 'fr', { sensitivity: 'base' });
    });

    const populateSubs = (selectedCatName) => {
      if (!subSelect) return;
      const catObj = cats.find(c => (typeof c === 'string' ? c : c.name).toLowerCase() === (selectedCatName || '').toLowerCase());
      const subs = (catObj && Array.isArray(catObj.subs)) ? catObj.subs.slice().sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' })) : [];
      let subHtml = `<option value="">(Aucune sous-catégorie)</option>`;
      subs.forEach(s => {
        subHtml += `<option value="${s}">${s}</option>`;
      });
      subHtml += `<option value="__NEW__">+ Créer une nouvelle sous-catégorie...</option>`;
      subSelect.innerHTML = subHtml;
      subSelect.value = '';
      if (newSubWrap) newSubWrap.style.display = 'none';
    };

    if (catSelect) {
      let catHtml = '';
      cats.forEach(c => {
        const cName = typeof c === 'string' ? c : c.name;
        catHtml += `<option value="${cName}">${cName}</option>`;
      });
      catHtml += `<option value="__NEW__">+ Créer une nouvelle catégorie...</option>`;
      catSelect.innerHTML = catHtml;
      catSelect.value = (cats[0] ? (typeof cats[0] === 'string' ? cats[0] : cats[0].name) : '__NEW__');
      populateSubs(catSelect.value);

      catSelect.onchange = () => {
        if (catSelect.value === '__NEW__') {
          if (newCatWrap) newCatWrap.style.display = 'block';
          if (newCatInput) { newCatInput.value = ''; newCatInput.focus(); }
          if (subSelect) {
            subSelect.innerHTML = `<option value="">(Aucune sous-catégorie)</option><option value="__NEW__">+ Créer une nouvelle sous-catégorie...</option>`;
            subSelect.value = '';
          }
        } else {
          if (newCatWrap) newCatWrap.style.display = 'none';
          populateSubs(catSelect.value);
        }
      };
    }

    if (subSelect) {
      subSelect.onchange = () => {
        if (subSelect.value === '__NEW__') {
          if (newSubWrap) newSubWrap.style.display = 'block';
          if (newSubInput) { newSubInput.value = ''; newSubInput.focus(); }
        } else {
          if (newSubWrap) newSubWrap.style.display = 'none';
        }
      };
    }

    modal.style.display = 'flex';
  };

  app.closeBatchCategoryModal = function() {
    const modal = document.querySelector('#batchCategoryModal');
    if (modal) modal.style.display = 'none';
  };

  app.applyBatchCategoryChange = async function() {
    if (app.selectedCatalogVisualIds.size === 0) return app.closeBatchCategoryModal();
    const count = app.selectedCatalogVisualIds.size;
    const catSelect = document.querySelector('#batchCategorySelect');
    const subSelect = document.querySelector('#batchSubcategorySelect');
    const newCatInput = document.querySelector('#batchCategoryNewInput');
    const newSubInput = document.querySelector('#batchSubcategoryNewInput');

    let finalCat = '';
    if (catSelect.value === '__NEW__') {
      const val = newCatInput?.value?.trim();
      if (!val) {
        alert('Veuillez entrer le nom de la nouvelle catégorie.');
        newCatInput?.focus();
        return;
      }
      finalCat = val.charAt(0).toUpperCase() + val.slice(1);
    } else {
      finalCat = catSelect.value;
    }

    if (!finalCat) return;

    if (!Array.isArray(app.catalogCategories)) app.catalogCategories = [];
    let catObj = app.catalogCategories.find(c => (typeof c === 'string' ? c : c.name).toLowerCase() === finalCat.toLowerCase());
    if (!catObj) {
      catObj = { name: finalCat, subs: [] };
      app.catalogCategories.push(catObj);
      app.catalogCategories.sort((a, b) => (a.name || a).localeCompare(b.name || b, 'fr', { sensitivity: 'base' }));
    }

    let finalSub = '';
    if (subSelect.value === '__NEW__') {
      const sVal = newSubInput?.value?.trim();
      if (sVal) {
        finalSub = sVal.charAt(0).toUpperCase() + sVal.slice(1);
        if (!Array.isArray(catObj.subs)) catObj.subs = [];
        if (!catObj.subs.some(s => s.toLowerCase() === finalSub.toLowerCase())) {
          catObj.subs.push(finalSub);
          catObj.subs.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
        }
      }
    } else if (subSelect.value) {
      finalSub = subSelect.value;
    }

    (app.catalogImages || []).forEach(v => {
      if (app.selectedCatalogVisualIds.has(v.id)) {
        v.category = finalCat;
        v.categories = [finalCat];
        v.subcategory = finalSub;
        if (finalCat.toLowerCase() === 'mug') {
          if (!Array.isArray(v.compatibleProducts)) v.compatibleProducts = ['all'];
          if (!v.compatibleProducts.includes('mug11oz') && !v.compatibleProducts.includes('all')) {
            v.compatibleProducts.push('mug11oz');
          }
        }
      }
    });

    await app.persistCatalogCategories?.();
    await app.persistCatalog?.();
    app.selectedCatalogVisualIds.clear();
    app.closeBatchCategoryModal();
    await app.loadAdminCatalog();
    app.loadAdminCategories();
    app.renderCatalog?.();
    app.loadVisualLibrary?.();
    app.renderAdminVisualStats?.();
    app.showToast?.(`${count} visuel(s) reclassé(s) dans "${finalCat}${finalSub ? ' › ' + finalSub : ''}".`);
  };

  // Action groupée : Modifier le statut du lot sélectionné
  app.batchSetStatus = async function(newStatus) {
    if (app.selectedCatalogVisualIds.size === 0) return;
    const count = app.selectedCatalogVisualIds.size;
    (app.catalogImages || []).forEach(v => {
      if (app.selectedCatalogVisualIds.has(v.id)) {
        v.status = newStatus;
      }
    });

    await app.persistCatalog?.();
    app.selectedCatalogVisualIds.clear();
    await app.loadAdminCatalog();
    app.updateAdminKpis();
    const label = newStatus === 'approved' ? 'publié(s)' : (newStatus === 'private' ? 'passé(s) en privé' : 'mis à la corbeille');
    app.showToast?.(`${count} visuel(s) ${label} avec succès.`);
  };

  // Validation rapide de l'intégralité du lot en attente
  app.batchValidateAllPending = async function() {
    const pendings = (app.catalogImages || []).filter(v => v.status === 'pending');
    if (!pendings.length) return app.showToast?.('Aucun visuel en attente.');
    if (!confirm(`Confirmez-vous la publication immédiate de tous les ${pendings.length} visuel(s) en attente ?`)) return;

    pendings.forEach(v => { v.status = 'approved'; });
    await app.persistCatalog?.();
    app.selectedCatalogVisualIds.clear();
    await app.loadAdminCatalog();
    app.updateAdminKpis();
    app.showToast?.(`${pendings.length} visuel(s) validé(s) et publié(s).`);
  };

  // Statistiques des visuels les plus utilisés
  app.renderAdminVisualStats = function() {
    const tbody = document.querySelector('#visualStatsTableBody');
    if (!tbody) return;

    const submissions = app.adminSubmissionsList || [];
    const standOrdersRaw = localStorage.getItem('mockup3d_stand_orders');
    const standOrders = JSON.parse(standOrdersRaw || '[]');
    const allOrders = [...submissions, ...standOrders];

    const statsMap = new Map();

    allOrders.forEach(ord => {
      const visName = ord.visualName || ord.visuelName || ord.motif || (ord.files && ord.files.visualPng ? 'Visuel personnalisé' : 'Visuel standard');
      const prodKey = ord.productKey || 'mug11oz';
      const priceVal = parseFloat(String(ord.totalPrice || ord.price || '0').replace('€', '').replace(',', '.').trim()) || 0;

      if (!statsMap.has(visName)) {
        statsMap.set(visName, {
          name: visName,
          category: ord.category || 'Atelier',
          ordersCount: 0,
          totalRevenue: 0,
          products: new Set(),
          sampleUrl: (ord.files && ord.files.visualPng) ? `/api/admin/submissions/file?folder=${ord.folder}&file=visuel_client.png` : null
        });
      }
      const st = statsMap.get(visName);
      st.ordersCount += (ord.quantity || 1);
      st.totalRevenue += priceVal;
      st.products.add(prodKey);
    });

    (app.catalogImages || []).forEach(img => {
      if (img.status === 'trash') return;
      if (!statsMap.has(img.name)) {
        statsMap.set(img.name, {
          name: img.name,
          category: img.category || 'Général',
          ordersCount: 0,
          totalRevenue: 0,
          products: new Set(),
          sampleUrl: img.url
        });
      } else {
        const st = statsMap.get(img.name);
        if (!st.sampleUrl) st.sampleUrl = img.url;
        st.category = img.category || st.category;
      }
    });

    const statsList = Array.from(statsMap.values());
    statsList.sort((a, b) => b.ordersCount - a.ordersCount || b.totalRevenue - a.totalRevenue);

    const totalPersonalized = allOrders.length;
    const totalRev = statsList.reduce((acc, s) => acc + s.totalRevenue, 0);
    const topVis = statsList[0];

    const prodCounts = {};
    allOrders.forEach(ord => {
      const k = ord.productKey || 'mug11oz';
      prodCounts[k] = (prodCounts[k] || 0) + (ord.quantity || 1);
    });
    let topProdKey = 'mug11oz';
    let maxPCount = 0;
    Object.entries(prodCounts).forEach(([k, c]) => {
      if (c > maxPCount) { maxPCount = c; topProdKey = k; }
    });
    const topProdObj = (app.productsConfig || []).find(p => p.key === topProdKey);
    const topProdLabel = topProdObj ? topProdObj.name : 'Mug blanc 11oz';

    const elTotalOrders = document.querySelector('#statTotalPersonalizedOrders');
    const elTopVisName = document.querySelector('#statTopVisualName');
    const elTopVisCat = document.querySelector('#statTopVisualCategory');
    const elTopProd = document.querySelector('#statTopProductKey');
    const elTotalRev = document.querySelector('#statTotalVisualRevenue');
    const elCountLabel = document.querySelector('#statsVisualsCountLabel');

    if (elTotalOrders) elTotalOrders.textContent = totalPersonalized;
    if (elTopVisName) elTopVisName.textContent = topVis ? topVis.name : '-';
    if (elTopVisCat) elTopVisCat.textContent = topVis ? `Catégorie : ${topVis.category}` : '-';
    if (elTopProd) elTopProd.textContent = topProdLabel;
    if (elTotalRev) elTotalRev.textContent = `${totalRev.toFixed(2).replace('.', ',')} €`;
    if (elCountLabel) elCountLabel.textContent = `${statsList.length} visuels analysés`;

    tbody.innerHTML = '';
    statsList.forEach((st, idx) => {
      const tr = document.createElement('tr');
      const rank = idx + 1;
      const rankBadge = rank === 1 ? '<span style="color:#eab308; font-weight:800; font-size:15px;">🥇 1</span>'
        : rank === 2 ? '<span style="color:#94a3b8; font-weight:800; font-size:14px;">🥈 2</span>'
        : rank === 3 ? '<span style="color:#b45309; font-weight:800; font-size:14px;">🥉 3</span>'
        : `<span style="color:#64748b; font-weight:600;">${rank}</span>`;

      const prodLabels = Array.from(st.products).map(pk => {
        const p = (app.productsConfig || []).find(x => x.key === pk);
        return p ? p.name : pk;
      }).join(', ') || 'Tous supports';

      const pct = totalPersonalized > 0 ? Math.round((st.ordersCount / totalPersonalized) * 100) : 0;
      const thumbSrc = st.sampleUrl || '/logo-graph2print.png';

      tr.innerHTML = `
        <td style="text-align:center;">${rankBadge}</td>
        <td>
          <img src="${thumbSrc}" alt="${st.name}" style="width:44px; height:44px; object-fit:cover; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff;" onerror="this.src='/logo-graph2print.png'" />
        </td>
        <td>
          <strong style="color:#0f172a; font-size:13px; display:block;">${st.name}</strong>
        </td>
        <td>
          <span style="font-size:12px; background:#f1f5f9; color:#475569; padding:2px 8px; border-radius:4px; font-weight:600;">${st.category}</span>
        </td>
        <td style="text-align:center; font-weight:700; color:#0f172a; font-size:13.5px;">${st.ordersCount}</td>
        <td style="text-align:right; font-weight:700; color:#059669; font-size:13.5px;">${st.totalRevenue.toFixed(2).replace('.', ',')} €</td>
        <td style="font-size:12px; color:#64748b; max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${prodLabels}">${prodLabels}</td>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <div style="flex:1; height:7px; background:#e2e8f0; border-radius:4px; overflow:hidden;">
              <div style="width:${Math.max(4, pct)}%; height:100%; background:${pct > 0 ? '#4f46e5' : '#cbd5e1'}; border-radius:4px;"></div>
            </div>
            <span style="font-size:11.5px; font-weight:700; color:#64748b; min-width:32px; text-align:right;">${pct}%</span>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  };

  // Création d'une nouvelle catégorie
  app.adminCreateNewCategory = async function() {
    const val = prompt('Nom de la nouvelle catégorie :');
    if (!val || !val.trim()) return;
    const clean = val.trim().charAt(0).toUpperCase() + val.trim().slice(1);
    if (!Array.isArray(app.catalogCategories)) app.catalogCategories = [];
    const exists = app.catalogCategories.some(c => (typeof c === 'string' ? c : c.name).toLowerCase() === clean.toLowerCase());
    if (exists) {
      app.showToast?.(`La catégorie "${clean}" existe déjà.`);
      return;
    }
    app.catalogCategories.push({ name: clean, subs: [] });
    app.catalogCategories.sort((a, b) => (a.name || a).localeCompare(b.name || b, 'fr', { sensitivity: 'base' }));
    await app.persistCatalogCategories?.();
    app.loadAdminCategories();
    app.showToast?.(`Catégorie "${clean}" créée.`);
  };

  // Tri alphabétique des catégories
  app.adminSortCategories = async function() {
    if (!Array.isArray(app.catalogCategories)) return;
    app.catalogCategories.sort((a, b) => {
      const na = typeof a === 'string' ? a : a.name;
      const nb = typeof b === 'string' ? b : b.name;
      return na.localeCompare(nb, 'fr', { sensitivity: 'base' });
    });
    app.catalogCategories.forEach(c => {
      if (c && Array.isArray(c.subs)) c.subs.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
    });
    await app.persistCatalogCategories?.();
    app.loadAdminCategories();
    app.showToast?.('Catégories triées par ordre alphabétique.');
  };

  // Gestion des Catégories et Sous-Catégories
  app.loadAdminCategories = async function() {
    const container = document.querySelector('#adminCategoriesList');
    if (!container) return;
    const cats = app.catalogCategories || [];
    const catSelect = document.querySelector('#catalogCategoryFilter');

    if (catSelect) {
      const cur = catSelect.value;
      catSelect.innerHTML = '<option value="all">Toutes les catégories</option>';
      cats.forEach(c => {
        const catName = typeof c === 'string' ? c : c.name;
        const subs = (typeof c === 'object' && Array.isArray(c.subs)) ? c.subs : [];
        const opt = document.createElement('option');
        opt.value = catName;
        opt.textContent = `${catName} (Tous)`;
        opt.style.fontWeight = '700';
        catSelect.appendChild(opt);

        subs.forEach(s => {
          const subOpt = document.createElement('option');
          subOpt.value = `${catName}::${s}`;
          subOpt.textContent = `\u00A0\u00A0\u00A0\u00A0- ${s}`;
          catSelect.appendChild(subOpt);
        });
      });
      catSelect.value = cur || 'all';
    }

    container.innerHTML = '';
    cats.forEach((catObj, catIdx) => {
      const catName = typeof catObj === 'string' ? catObj : catObj.name;
      const subs = (typeof catObj === 'object' && Array.isArray(catObj.subs)) ? catObj.subs : [];
      const count = (app.catalogImages || []).filter(v => v.category === catName && v.status !== 'trash').length;

      const card = document.createElement('div');
      card.style.cssText = 'background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:14px 18px; margin-bottom:12px; box-shadow:0 1px 3px rgba(0,0,0,0.05);';

      // Ligne principale de la catégorie parente
      const mainRow = document.createElement('div');
      mainRow.style.cssText = 'display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom:10px;';
      mainRow.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:16px;">📁</span>
          <strong style="color:#0f172a; font-size:15px;">${catName}</strong>
          <span class="badge-status approved" style="font-size:11px;">${count} visuels</span>
        </div>
        <div style="display:flex; align-items:center; gap:6px;">
          <button type="button" class="admin-btn outline btn-rename-cat" data-idx="${catIdx}" style="font-size:11px; padding:3px 8px;">Renommer</button>
          <button type="button" class="admin-btn secondary btn-add-subcat" data-idx="${catIdx}" style="font-size:11px; padding:3px 8px;">+ Sous-catégorie</button>
          <button type="button" class="admin-btn outline btn-delete-cat" data-idx="${catIdx}" style="font-size:11px; padding:3px 8px; color:#ef4444;" title="Supprimer la catégorie">✕</button>
        </div>
      `;
      card.appendChild(mainRow);

      // Zone arborescente des sous-catégories indentées (- Cerf en dessous)
      const subsBlock = document.createElement('div');
      subsBlock.style.cssText = 'margin-left:24px; padding-left:14px; border-left:2px solid #e2e8f0; display:flex; flex-direction:column; gap:6px; padding-top:4px;';

      if (subs.length === 0) {
        subsBlock.innerHTML = `<small style="color:#94a3b8; font-style:italic;">Aucune sous-catégorie (cliquez sur "+ Sous-catégorie" pour en créer une)</small>`;
      } else {
        subs.forEach((subName, subIdx) => {
          const subCount = (app.catalogImages || []).filter(v => v.category === catName && v.subcategory === subName && v.status !== 'trash').length;
          const subRow = document.createElement('div');
          subRow.style.cssText = 'display:flex; align-items:center; justify-content:space-between; padding:4px 8px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; font-size:12.5px;';
          subRow.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="color:#64748b; font-weight:700;">-</span>
              <strong style="color:#334155;">${subName}</strong>
              <small style="color:#94a3b8;">(${subCount} visuels)</small>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <button type="button" class="admin-btn outline btn-rename-sub" data-catidx="${catIdx}" data-subidx="${subIdx}" style="font-size:10px; padding:2px 7px;">Renommer</button>
              <button type="button" class="btn-del-sub" data-catidx="${catIdx}" data-subidx="${subIdx}" style="border:none; background:transparent; color:#ef4444; cursor:pointer; font-weight:700; padding:2px 6px; font-size:12px;" title="Supprimer la sous-catégorie ${subName}">✕</button>
            </div>
          `;
          subsBlock.appendChild(subRow);
        });
      }
      card.appendChild(subsBlock);
      container.appendChild(card);
    });

    // Événements Renommer Sous-catégorie
    container.querySelectorAll('.btn-rename-sub').forEach(b => {
      b.addEventListener('click', async () => {
        const catIdx = Number(b.dataset.catidx);
        const subIdx = Number(b.dataset.subidx);
        const catObj = cats[catIdx];
        if (catObj && Array.isArray(catObj.subs)) {
          const oldSub = catObj.subs[subIdx];
          const catName = typeof catObj === 'string' ? catObj : catObj.name;
          const newSub = prompt(`Nouveau nom pour la sous-catégorie "${oldSub}" :`, oldSub);
          if (newSub && newSub.trim() && newSub.trim() !== oldSub) {
            const cleanSub = newSub.trim().charAt(0).toUpperCase() + newSub.trim().slice(1);
            catObj.subs[subIdx] = cleanSub;
            catObj.subs.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
            (app.catalogImages || []).forEach(it => {
              if (it.category === catName && it.subcategory === oldSub) it.subcategory = cleanSub;
            });
            await app.persistCatalogCategories?.();
            await app.persistCatalog?.();
            app.loadAdminCategories();
            app.showToast?.(`Sous-catégorie renommée en "${cleanSub}".`);
          }
        }
      });
    });

    // Événements Renommer Catégorie
    container.querySelectorAll('.btn-rename-cat').forEach(b => {
      b.addEventListener('click', async () => {
        const idx = Number(b.dataset.idx);
        const catObj = cats[idx];
        const oldName = typeof catObj === 'string' ? catObj : catObj.name;
        const newName = prompt(`Nouveau nom pour la catégorie "${oldName}" :`, oldName);
        if (newName && newName.trim() && newName.trim() !== oldName) {
          const clean = newName.trim().charAt(0).toUpperCase() + newName.trim().slice(1);
          if (typeof catObj === 'string') cats[idx] = { name: clean, subs: [] };
          else catObj.name = clean;
          (app.catalogImages || []).forEach(it => {
            if (it.category === oldName) it.category = clean;
          });
          await app.persistCatalogCategories?.();
          await app.persistCatalog?.();
          app.loadAdminCategories();
          app.showToast?.(`Catégorie renommée en "${clean}".`);
        }
      });
    });

    // Événements Ajouter Sous-catégorie
    container.querySelectorAll('.btn-add-subcat').forEach(b => {
      b.addEventListener('click', async () => {
        const idx = Number(b.dataset.idx);
        const catObj = cats[idx];
        const catName = typeof catObj === 'string' ? catObj : catObj.name;
        const subName = prompt(`Nom de la sous-catégorie à ajouter dans "${catName}" :`);
        if (subName && subName.trim()) {
          const clean = subName.trim().charAt(0).toUpperCase() + subName.trim().slice(1);
          if (typeof catObj === 'string') cats[idx] = { name: catName, subs: [clean] };
          else {
            if (!Array.isArray(catObj.subs)) catObj.subs = [];
            if (!catObj.subs.includes(clean)) {
              catObj.subs.push(clean);
              catObj.subs.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
            }
          }
          await app.persistCatalogCategories?.();
          app.loadAdminCategories();
          app.showToast?.(`Sous-catégorie "${clean}" ajoutée.`);
        }
      });
    });

    // Événements Supprimer Sous-catégorie
    container.querySelectorAll('.btn-del-sub').forEach(b => {
      b.addEventListener('click', async () => {
        const catIdx = Number(b.dataset.catidx);
        const subIdx = Number(b.dataset.subidx);
        const catObj = cats[catIdx];
        if (catObj && Array.isArray(catObj.subs)) {
          const subName = catObj.subs[subIdx];
          if (confirm(`Supprimer la sous-catégorie "${subName}" ?`)) {
            catObj.subs.splice(subIdx, 1);
            (app.catalogImages || []).forEach(it => {
              if (it.subcategory === subName) it.subcategory = '';
            });
            await app.persistCatalogCategories?.();
            await app.persistCatalog?.();
            app.loadAdminCategories();
            app.showToast?.(`Sous-catégorie "${subName}" supprimée.`);
          }
        }
      });
    });

    // Événements Supprimer Catégorie
    container.querySelectorAll('.btn-delete-cat').forEach(b => {
      b.addEventListener('click', async () => {
        const idx = Number(b.dataset.idx);
        const catObj = cats[idx];
        const catName = typeof catObj === 'string' ? catObj : catObj.name;
        if (confirm(`Confirmez-vous la suppression de la catégorie "${catName}" ? Les visuels associés basculeront automatiquement dans "Illustrations".`)) {
          cats.splice(idx, 1);
          (app.catalogImages || []).forEach(it => {
            if (it.category === catName) {
              it.category = 'Illustrations';
              it.subcategory = '';
            }
          });
          await app.persistCatalogCategories?.();
          await app.persistCatalog?.();
          app.loadAdminCategories();
          app.showToast?.(`Catégorie "${catName}" supprimée.`);
        }
      });
    });
  };
}

export function initialize(app) {
  // Navigation latérale
  document.querySelectorAll('.admin-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      app.switchAdminTab(btn.dataset.tab);
    });
  });

  // Boutons de raccourcis vue d'ensemble
  document.querySelector('#btnQuickGoOrders')?.addEventListener('click', () => app.switchAdminTab('tab-orders'));
  document.querySelector('#btnQuickGoProducts')?.addEventListener('click', () => app.switchAdminTab('tab-products'));
  document.querySelector('#btnQuickGoCatalog')?.addEventListener('click', () => app.switchAdminTab('tab-catalog'));

  // Fermeture du Dashboard
  document.querySelector('#btnAdminCloseDashboard')?.addEventListener('click', () => app.closeAdminDashboard());

  // Enregistrement des tarifs
  document.querySelector('#btnSaveProductsConfig')?.addEventListener('click', () => app.saveAllProductsConfig());

  // Export CSV
  document.querySelector('#btnExportOrdersCsv')?.addEventListener('click', () => {
    window.location.href = '/api/admin/submissions/export-csv';
  });
  document.querySelector('#btnAdminExportCsvQuick')?.addEventListener('click', () => {
    window.location.href = '/api/admin/submissions/export-csv';
  });

  // Filtres commandes
  document.querySelector('#orderSearchInput')?.addEventListener('input', () => app.renderAdminOrdersTable());
  document.querySelector('#orderStatusFilter')?.addEventListener('change', () => app.renderAdminOrdersTable());
  document.querySelector('#btnRefreshOrders')?.addEventListener('click', () => app.loadAdminSubmissions());

  // Filtres catalogue
  document.querySelector('#adminCatalogSearchInput')?.addEventListener('input', () => app.loadAdminCatalog());
  document.querySelector('#catalogSearchInput')?.addEventListener('input', () => app.loadAdminCatalog());
  document.querySelector('#catalogCategoryFilter')?.addEventListener('change', () => app.loadAdminCatalog());
  document.querySelector('#catalogStatusFilter')?.addEventListener('change', () => {
    app.loadAdminCatalog();
    app.updateBatchBarUI();
  });

  // Synchronisation des commandes hors-ligne du Stand
  document.querySelector('#btnSyncOfflineOrders')?.addEventListener('click', async () => {
    const raw = localStorage.getItem('mockup3d_stand_orders');
    const offlineList = JSON.parse(raw || '[]');
    if (!offlineList.length) return app.showToast?.('Aucune commande hors-ligne en attente.');

    let successCount = 0;
    const remaining = [];
    app.showToast?.(`Synchronisation de ${offlineList.length} commande(s) du stand...`);

    for (const order of offlineList) {
      try {
        const res = await fetch('/api/submissions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(order)
        });
        if (res.ok) successCount++;
        else remaining.push(order);
      } catch (err) {
        remaining.push(order);
      }
    }

    localStorage.setItem('mockup3d_stand_orders', JSON.stringify(remaining));
    await app.loadAdminSubmissions();
    app.updateAdminKpis();
    if (successCount > 0) {
      app.showToast?.(`OK : ${successCount} commande(s) du stand synchronisée(s) avec succès !`);
    } else {
      app.showToast?.('Erreur : impossible de joindre le serveur. Les commandes restent stockées.');
    }
  });

  // Ajout de visuels (unitaire et par lot)
  const singleInput = document.querySelector('#adminSingleFileInput');
  const batchInput = document.querySelector('#adminBatchFileInput');

  document.querySelector('#btnAdminAddSingleVisual')?.addEventListener('click', () => {
    singleInput?.click();
  });
  document.querySelector('#btnOpenBatchUploadModal')?.addEventListener('click', () => {
    batchInput?.click();
  });

  singleInput?.addEventListener('change', async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      await app.handleAdminVisualsUpload(e.target.files);
      singleInput.value = '';
    }
  });

  batchInput?.addEventListener('change', async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      await app.handleAdminVisualsUpload(e.target.files);
      batchInput.value = '';
    }
  });

  // Gestion des catégories
  document.querySelector('#btnAdminAddCategory')?.addEventListener('click', () => {
    app.adminCreateNewCategory();
  });
  document.querySelector('#btnAdminSortCategoriesAlphabetically')?.addEventListener('click', () => {
    app.adminSortCategories();
  });

  // Actions par lot sur les visuels sélectionnés
  document.querySelector('#chkBatchSelectAll')?.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const checks = document.querySelectorAll('.admin-visual-select-chk');
    checks.forEach(c => {
      c.checked = isChecked;
      const card = c.closest('.admin-visual-card');
      if (isChecked) {
        app.selectedCatalogVisualIds.add(c.dataset.id);
        card?.classList.add('is-selected');
        if (card) card.style.boxShadow = '0 0 0 2px #7c3aed';
      } else {
        app.selectedCatalogVisualIds.delete(c.dataset.id);
        card?.classList.remove('is-selected');
        if (card) card.style.boxShadow = '';
      }
    });
    app.updateBatchBarUI();
  });

  document.querySelector('#btnBatchDeselectAll')?.addEventListener('click', () => {
    app.selectedCatalogVisualIds.clear();
    const chkAll = document.querySelector('#chkBatchSelectAll');
    if (chkAll) chkAll.checked = false;
    document.querySelectorAll('.admin-visual-select-chk').forEach(c => {
      c.checked = false;
      const card = c.closest('.admin-visual-card');
      card?.classList.remove('is-selected');
      if (card) card.style.boxShadow = '';
    });
    app.updateBatchBarUI();
    app.showToast?.('Tous les visuels ont été désélectionnés');
  });

  document.querySelector('#closeBatchUploadDirectBtn')?.addEventListener('click', () => {
    app.closeBatchUploadDirectModal();
  });
  document.querySelector('#cancelBatchUploadDirectBtn')?.addEventListener('click', () => {
    app.closeBatchUploadDirectModal();
  });
  document.querySelector('#confirmBatchUploadDirectBtn')?.addEventListener('click', () => {
    app.confirmBatchUploadDirect();
  });

  document.querySelector('#btnBatchChangeCategory')?.addEventListener('click', () => {
    app.batchChangeCategory();
  });
  document.querySelector('#closeBatchCategoryBtn')?.addEventListener('click', () => {
    app.closeBatchCategoryModal();
  });
  document.querySelector('#cancelBatchCategoryBtn')?.addEventListener('click', () => {
    app.closeBatchCategoryModal();
  });
  document.querySelector('#applyBatchCategoryBtn')?.addEventListener('click', () => {
    app.applyBatchCategoryChange();
  });
  document.querySelector('#btnBatchApplyStatus')?.addEventListener('click', () => {
    const sel = document.querySelector('#batchStatusSelect');
    if (sel && sel.value) {
      app.batchSetStatus(sel.value);
    }
  });
  document.querySelector('#btnBatchApprove')?.addEventListener('click', () => {
    app.batchSetStatus('approved');
  });
  document.querySelector('#btnBatchPrivate')?.addEventListener('click', () => {
    app.batchSetStatus('private');
  });
  document.querySelector('#btnBatchPublishApproved')?.addEventListener('click', async () => {
    if (app.selectedCatalogVisualIds.size === 0) {
      return app.showToast?.('Veuillez cocher au moins un visuel à valider.');
    }
    const count = app.selectedCatalogVisualIds.size;
    (app.catalogImages || []).forEach(v => {
      if (app.selectedCatalogVisualIds.has(v.id)) {
        v.status = 'approved';
      }
    });

    await app.persistCatalog?.();
    app.selectedCatalogVisualIds.clear();
    await app.loadAdminCatalog();
    app.updateAdminKpis();
    app.showToast?.(`OK : ${count} visuel(s) validé(s) et publié(s) avec succès.`);
  });

  document.querySelector('#btnAdminEmptyTrash')?.addEventListener('click', async () => {
    const trashItems = (app.catalogImages || []).filter(v => v.status === 'trash');
    if (!trashItems.length) return app.showToast?.('La corbeille est déjà vide.');
    if (!confirm(`Supprimer définitivement ${trashItems.length} visuel(s) de la corbeille et du disque ? Cette action est irréversible.`)) return;

    try {
      const res = await fetch('/api/catalog-images/empty-trash', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        app.catalogImages = (app.catalogImages || []).filter(v => v.status !== 'trash');
        await app.persistCatalog?.();
        app.selectedCatalogVisualIds.clear();
        await app.loadAdminCatalog();
        app.updateAdminKpis();
        app.showToast?.(`OK : ${data.purgedFilesCount || trashItems.length} visuel(s) supprimé(s) définitivement.`);
      } else {
        app.showToast?.('Erreur lors du vidage de la corbeille.');
      }
    } catch (err) {
      app.showToast?.('Erreur réseau lors du vidage de la corbeille.');
    }
  });

  document.querySelector('#btnBatchTrash')?.addEventListener('click', () => {
    app.batchSetStatus('trash');
  });
  document.querySelector('#btnBatchValidatePending')?.addEventListener('click', () => {
    app.batchValidateAllPending();
  });

  // Synchronisation des thèmes d'ambiance du showroom
  const themeRadios = document.querySelectorAll('input[name="adminThemeRadio"]');
  const activeTheme = localStorage.getItem('mockup3d_theme') || (localStorage.getItem('mockup3d_decor_noel') === '1' ? 'noel' : 'standard');
  themeRadios.forEach(r => {
    r.checked = (r.value === activeTheme);
    r.addEventListener('change', () => {
      if (r.checked) {
        app.setAmbienceTheme?.(r.value);
        const labels = { standard: 'Standard épuré', noel: 'Noël festif', halloween: 'Halloween mystérieux' };
        app.showToast?.(`Ambiance Showroom activée : ${labels[r.value] || r.value}`);
      }
    });
  });

  // Bouton topbar pour ouvrir le Dashboard
  const btnTopDashboard = document.querySelector('#btnAdminDashboard');
  if (btnTopDashboard) {
    btnTopDashboard.addEventListener('click', () => app.openAdminDashboard());
  }

  // Modale Dossier Commande
  document.querySelector('#closeOrderDossierBtn')?.addEventListener('click', () => app.closeOrderDossierModal());
  document.querySelector('#closeOrderDossierBottomBtn')?.addEventListener('click', () => app.closeOrderDossierModal());
  document.querySelector('#saveOrderDossierChecksBtn')?.addEventListener('click', () => app.saveOrderDossierChecks());

  // Modale Fiche Produit
  document.querySelector('#closeProductSheetBtn')?.addEventListener('click', () => app.closeProductSheetModal());
  document.querySelector('#closeProductSheetBottomBtn')?.addEventListener('click', () => app.closeProductSheetModal());
  document.querySelector('#saveProductSheetBtn')?.addEventListener('click', () => app.saveProductSheet());

  // Modale Fiche Client & Recherche
  document.querySelector('#closeClientSheetBtn')?.addEventListener('click', () => app.closeClientSheetModal());
  document.querySelector('#closeClientSheetBottomBtn')?.addEventListener('click', () => app.closeClientSheetModal());
  document.querySelector('#saveClientNotesBtn')?.addEventListener('click', () => app.saveClientNotes());
  document.querySelector('#clientSearchInput')?.addEventListener('input', () => app.renderAdminClientsTable());

  // Dépôt-Vente Partenaires & Fiche Revendeur
  document.querySelector('#btnAddNewResellerModal')?.addEventListener('click', () => app.openAddResellerModal());
  document.querySelector('#closeAddResellerBtn')?.addEventListener('click', () => app.closeAddResellerModal());
  document.querySelector('#cancelAddResellerBtn')?.addEventListener('click', () => app.closeAddResellerModal());
  document.querySelector('#confirmAddResellerBtn')?.addEventListener('click', () => app.confirmAddReseller());
  document.querySelector('#btnAddNewConsignmentDeposit')?.addEventListener('click', () => app.openAddResellerModal());
  document.querySelector('#closeAddConsignmentBtn')?.addEventListener('click', () => app.closeAddResellerModal());
  document.querySelector('#cancelAddConsignmentBtn')?.addEventListener('click', () => app.closeAddResellerModal());
  document.querySelector('#btnPrintConsignmentSlip')?.addEventListener('click', () => window.print());
  document.querySelector('#closeResellerSheetBtn')?.addEventListener('click', () => app.closeResellerSheetModal());
  document.querySelector('#closeResellerSheetBottomBtn')?.addEventListener('click', () => app.closeResellerSheetModal());
  document.querySelector('#saveResellerSheetBtn')?.addEventListener('click', () => app.saveResellerSheet());

  // Forcer l'import des doublons
  document.querySelector('#btnForceImportAllDuplicates')?.addEventListener('click', () => {
    const chk = document.querySelector('#chkForceImportDuplicates');
    if (chk) {
      chk.checked = true;
      app.updateBatchUploadPreviews?.();
      app.showToast?.('Tous les fichiers (y compris doublons de nom) sont prêts à être importés.');
    }
  });
  document.querySelector('#chkForceImportDuplicates')?.addEventListener('change', () => {
    app.updateBatchUploadPreviews?.();
  });

  // Boutons rapides de catégorie lors de l'import
  document.querySelectorAll('.admin-quick-upload-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      const sel = document.querySelector('#batchUploadCatSelect');
      if (sel) {
        let opt = Array.from(sel.options).find(o => o.value.toLowerCase() === cat.toLowerCase());
        if (opt) {
          sel.value = opt.value;
          sel.dispatchEvent(new Event('change'));
        } else {
          sel.value = '__NEW__';
          sel.dispatchEvent(new Event('change'));
          const inp = document.querySelector('#batchUploadNewCatInput');
          if (inp) inp.value = cat;
        }
        app.showToast?.(`Catégorie "${cat}" sélectionnée.`);
      }
    });
  });

  // Boutons rapides de catégorie lors du reclassement par lot
  document.querySelectorAll('.admin-quick-reclass-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      const sel = document.querySelector('#batchCategorySelect');
      if (sel) {
        let opt = Array.from(sel.options).find(o => o.value.toLowerCase() === cat.toLowerCase());
        if (opt) {
          sel.value = opt.value;
          sel.dispatchEvent(new Event('change'));
        } else {
          sel.value = '__NEW__';
          sel.dispatchEvent(new Event('change'));
          const inp = document.querySelector('#batchCategoryNewInput');
          if (inp) inp.value = cat;
        }
        app.showToast?.(`Catégorie "${cat}" choisie.`);
      }
    });
  });

  // Réinitialisation de tous les filtres catalogue (affiche tous les 125 visuels)
  document.querySelector('#btnAdminResetCatalogFilters')?.addEventListener('click', () => {
    const searchEl = document.querySelector('#adminCatalogSearchInput');
    const catEl = document.querySelector('#catalogCategoryFilter');
    const statEl = document.querySelector('#catalogStatusFilter');
    if (searchEl) searchEl.value = '';
    if (catEl) catEl.value = 'all';
    if (statEl) statEl.value = 'all';
    app.loadAdminCatalog();
    app.showToast?.('Tous les filtres sont réinitialisés. Affichage complet des visuels.');
  });

  // Filtre de période des statistiques
  document.querySelector('#statsPeriodFilter')?.addEventListener('change', () => {
    app.renderAdminVisualStats?.();
  });

  // Préchargement proactif immédiat de toutes les données du dashboard
  setTimeout(() => {
    app.refreshAdminDashboardData?.();
  }, 250);
}
