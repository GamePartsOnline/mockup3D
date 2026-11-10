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
      app.loadAdminClients?.();
      app.updateClientsTrashCount?.();
    } else if (tabName === 'tab-discounts') {
      app.loadAdminDiscounts?.();
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
      app.loadAdminConsignment(),
      app.updateClientsTrashCount?.()
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
        <td style="min-width:190px; position:relative;">
          <select class="admin-select order-status-select" data-folder="${item.folder}" style="font-size:12px; padding:4px 8px; font-weight:700; width:100%; ${item.status === 'bat_a_valider' ? 'border-color:#f59e0b; background:#fffbeb; color:#b45309;' : (item.status === 'non_conforme' ? 'border-color:#ef4444; background:#fef2f2; color:#991b1b;' : '')}">
            <option value="nouveau" ${item.status === 'nouveau' ? 'selected' : ''}>Nouveau</option>
            <option value="bat_a_valider" ${item.status === 'bat_a_valider' ? 'selected' : ''}>⏳ Attente validation client</option>
            <option value="bat_valide_client" ${item.status === 'bat_valide_client' ? 'selected' : ''}>✓ BAT validé client</option>
            <option value="en_production" ${item.status === 'en_production' ? 'selected' : ''}>En production</option>
            <option value="termine" ${item.status === 'termine' ? 'selected' : ''}>Terminé</option>
            <option value="non_conforme" ${item.status === 'non_conforme' ? 'selected' : ''}>✕ Non conforme</option>
          </select>
        </td>
        <td style="text-align:right; white-space:nowrap; min-width:260px;">
          <button type="button" class="btn-open-order-dossier" data-folder="${item.folder}" style="font-size:11.5px; padding:5px 12px; font-weight:700; background:#4f46e5; color:#ffffff; border:none; border-radius:6px; cursor:pointer; margin-right:6px; white-space:nowrap; display:inline-flex; align-items:center; justify-content:center; gap:4px; flex-shrink:0;" title="Ouvrir le dossier complet avec validation des visuels">📁 Dossier</button>
          <a href="/api/admin/submissions/file?folder=${encodeURIComponent(item.folder)}&file=FICHE_ATELIER.html" target="_blank" class="admin-btn outline" style="font-size:11.5px; padding:5px 9px; font-weight:700; margin-right:6px; white-space:nowrap; flex-shrink:0;" title="Ouvrir la fiche atelier imprimable">📄 Fiche</a>
          <a href="/api/admin/submissions/download-zip?folder=${encodeURIComponent(item.folder)}" class="admin-btn outline" style="font-size:11.5px; padding:5px 9px; font-weight:700; text-decoration:none; margin-right:12px; white-space:nowrap; flex-shrink:0;" title="Télécharger l'archive ZIP complète de fabrication">📦 ZIP</a>
          <button type="button" class="btn-delete-order" data-folder="${item.folder}" data-id="${item.id}" data-client="${clientName}" style="font-size:11px; padding:4px 8px; color:#dc2626; border:1px solid #fecaca; background:#fef2f2; border-radius:6px; cursor:pointer; font-weight:600; white-space:nowrap; flex-shrink:0;" title="Supprimer définitivement la commande">Suppr.</button>
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
        const ok = app.customConfirm
          ? await app.customConfirm(`Confirmez-vous la suppression définitive du dossier de commande "${folder}" ?`, { danger: true, confirmText: 'Supprimer' })
          : confirm(`Confirmez-vous la suppression définitive du dossier de commande "${folder}" ?`);
        if (!ok) return;
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
      const isMulti = Array.isArray(item.cart) && item.cart.length > 0;
      orderBox.innerHTML = `
        Article : <strong style="color:#1e1b4b;">${isMulti ? `Lot Panier Multi-Produits (${item.cart.length} articles)` : (item.product || item.productKey || 'Produit standard')}</strong><br>
        Quantité : <strong style="color:#4f46e5; font-size:14px;">${item.quantity || 1} ex.</strong><br>
        Total TTC : <strong style="color:#059669; font-size:14px;">${item.totalPrice || item.price || '—'}</strong><br>
        Date : <small style="color:#64748b;">${dateStr}</small>
      `;
    }

    // Bandeau En attente de validation / réponse client
    const pendingBanner = document.querySelector('#dossierPendingValidationBanner');
    if (pendingBanner) {
      const isWaitingClient = (item.status === 'bat_a_valider' || item.status === 'en_attente_validation_client' || (item.isWorkshopProposition && !item.checks?.batConforme));
      pendingBanner.style.display = isWaitingClient ? 'block' : 'none';
    }

    // Bandeau commande non conforme / refusée
    const rejectBanner = document.querySelector('#dossierRejectBanner');
    const rejectReasonText = document.querySelector('#dossierRejectReasonText');
    if (rejectBanner) {
      if (item.status === 'non_conforme' || item.status === 'refuse' || item.rejectionReason) {
        rejectBanner.style.display = 'block';
        if (rejectReasonText) {
          rejectReasonText.innerHTML = `<strong>Motif atelier :</strong> ${item.rejectionReason || 'Visuel non conforme aux contraintes d’impression.'}`;
        }
      } else {
        rejectBanner.style.display = 'none';
      }
    }

    // Affichage des articles du panier multi-produits
    const cartContainer = document.querySelector('#dossierCartContainer');
    const cartWrap = document.querySelector('#dossierCartTableWrap');
    if (cartContainer && cartWrap) {
      if (Array.isArray(item.cart) && item.cart.length > 0) {
        cartContainer.style.display = 'block';
        const rows = item.cart.map((ci, idx) => `
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 10px; font-weight:700; color:#1e1b4b;">${ci.productName || ci.productKey || 'Produit'}</td>
            <td style="padding:8px 10px; color:#475569;">${ci.visualName || 'Visuel client'}</td>
            <td style="padding:8px 10px; text-align:center; font-weight:800; color:#4f46e5;">${ci.quantity || 1} ex.</td>
            <td style="padding:8px 10px; text-align:right;">${ci.unitPrice || '—'}</td>
            <td style="padding:8px 10px; text-align:right; font-weight:700; color:#059669;">${ci.totalItemPrice || '—'}</td>
          </tr>
        `).join('');
        cartWrap.innerHTML = `
          <table style="width:100%; border-collapse:collapse; font-size:13px;">
            <thead>
              <tr style="background:#f8fafc; border-bottom:2px solid #cbd5e1; text-align:left;">
                <th style="padding:8px 10px;">Article</th>
                <th style="padding:8px 10px;">Visuel</th>
                <th style="padding:8px 10px; text-align:center;">Quantité</th>
                <th style="padding:8px 10px; text-align:right;">P.U.</th>
                <th style="padding:8px 10px; text-align:right;">Sous-total</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        `;
      } else {
        cartContainer.style.display = 'none';
      }
    }

    // Affichage de la remise code cadeau
    const discountContainer = document.querySelector('#dossierDiscountContainer');
    const discountText = document.querySelector('#dossierDiscountText');
    if (discountContainer) {
      if (item.discount) {
        discountContainer.style.display = 'block';
        if (discountText) {
          discountText.innerHTML = `Remise code cadeau appliquée : <strong>${item.discount.code}</strong> (${item.discount.label || ''}) : déduction immédiate de <strong>-${item.discount.amount || 0} €</strong>.`;
        }
      } else {
        discountContainer.style.display = 'none';
      }
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

    const allVisStrip = document.querySelector('#dossierAllVisualsStrip');
    if (allVisStrip) {
      allVisStrip.innerHTML = '';
      const filesList = Array.isArray(item.files) ? item.files : [];
      const visualFiles = filesList.filter(f => {
        const name = (typeof f === 'string' ? f : f.name || '').toLowerCase();
        return name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg') || name.endsWith('.webp');
      });

      if (visualFiles.length === 0) {
        allVisStrip.innerHTML = '<span style="font-size:12px; color:#64748b;">Le fichier d\'impression sera automatiquement préparé depuis le BAT.</span>';
      } else {
        visualFiles.forEach(f => {
          const fileName = typeof f === 'string' ? f : f.name;
          const fileUrl = `/api/admin/submissions/file?folder=${encodeURIComponent(folder)}&file=${encodeURIComponent(fileName)}`;
          const card = document.createElement('div');
          card.style.cssText = 'background:#ffffff; border:1px solid #cbd5e1; border-radius:8px; padding:6px; display:flex; flex-direction:column; align-items:center; gap:4px; width:130px; box-shadow:0 2px 6px rgba(0,0,0,0.03);';
          card.innerHTML = `
            <div style="width:100%; height:80px; background:#f1f5f9; border-radius:6px; display:flex; align-items:center; justify-content:center; overflow:hidden;">
              <img src="${fileUrl}" alt="${fileName}" style="max-width:100%; max-height:100%; object-fit:contain;" />
            </div>
            <span style="font-size:11px; font-weight:700; color:#1e293b; max-width:115px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${fileName}">${fileName}</span>
            <a href="${fileUrl}" download="${fileName}" target="_blank" class="admin-btn outline" style="width:100%; font-size:10.5px; padding:2px 4px; text-align:center; background:#f0fdf4; color:#166534; border-color:#bbf7d0; font-weight:700;">Télécharger</a>
          `;
          allVisStrip.appendChild(card);
        });
      }
    }

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

  // Refus de commande / Déclaration de non-conformité
  app.openOrderRejectModal = function() {
    if (!currentDossierItem) return;
    const modal = document.querySelector('#orderRejectModal');
    if (modal) {
      const customTxt = document.querySelector('#rejectCustomReasonText');
      if (customTxt) customTxt.value = '';
      modal.style.display = 'flex';
    }
  };

  app.closeOrderRejectModal = function() {
    const modal = document.querySelector('#orderRejectModal');
    if (modal) modal.style.display = 'none';
  };

  app.confirmOrderReject = async function() {
    if (!currentDossierItem) return;
    const select = document.querySelector('#rejectReasonPreset');
    const customTxt = document.querySelector('#rejectCustomReasonText')?.value.trim() || '';
    let reason = select ? select.value : '';
    if (reason === 'custom' || customTxt) {
      reason = customTxt || (select ? select.value : 'Visuel non conforme aux contraintes d’impression.');
    }
    const folder = currentDossierItem.folder;
    try {
      const res = await fetch('/api/admin/submissions/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder, reason })
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        currentDossierItem.status = 'non_conforme';
        currentDossierItem.rejectionReason = reason;
        if (!currentDossierItem.checks) currentDossierItem.checks = {};
        currentDossierItem.checks.batConforme = false;
        app.showToast?.('Commande refusée / déclarée non conforme. Message transmis au client.');
        app.closeOrderRejectModal();
        app.openOrderDossierModal(currentDossierItem);
        await app.loadAdminSubmissions();
      } else {
        app.showToast?.(data.error || 'Erreur lors du refus de la commande.');
      }
    } catch (e) {
      app.showToast?.('Erreur réseau lors du refus.');
    }
  };

  // Édition de la commande initiale dans l'Admin
  app.openOrderEditDetailsModal = function() {
    if (!currentDossierItem) return;
    const modal = document.querySelector('#orderEditDetailsModal');
    if (!modal) return;

    const item = currentDossierItem;
    const c = item.client || {};

    const prodInp = document.querySelector('#edOrderProduct');
    const qtyInp = document.querySelector('#edOrderQuantity');
    const totalInp = document.querySelector('#edOrderTotalPrice');
    const customTxtInp = document.querySelector('#edOrderCustomText');

    const nomInp = document.querySelector('#edClientNom');
    const prenomInp = document.querySelector('#edClientPrenom');
    const emailInp = document.querySelector('#edClientEmail');
    const telInp = document.querySelector('#edClientTelephone');
    const adrInp = document.querySelector('#edClientAdresse');
    const cpInp = document.querySelector('#edClientCp');
    const villeInp = document.querySelector('#edClientVille');
    const noteInp = document.querySelector('#edClientNote');

    if (prodInp) prodInp.value = item.product || item.productKey || '';
    if (qtyInp) qtyInp.value = item.quantity || 1;
    if (totalInp) totalInp.value = item.totalPrice || item.price || '';
    if (customTxtInp) customTxtInp.value = item.customText || '';

    if (nomInp) nomInp.value = c.nom || '';
    if (prenomInp) prenomInp.value = c.prenom || '';
    if (emailInp) emailInp.value = c.email || '';
    if (telInp) telInp.value = c.telephone || '';
    if (adrInp) adrInp.value = c.adresse || '';
    if (cpInp) cpInp.value = c.codePostal || '';
    if (villeInp) villeInp.value = c.ville || '';
    if (noteInp) noteInp.value = item.commentaires || c.note || '';

    modal.style.display = 'flex';
  };

  app.closeOrderEditDetailsModal = function() {
    const modal = document.querySelector('#orderEditDetailsModal');
    if (modal) modal.style.display = 'none';
  };

  app.saveOrderEditDetails = async function() {
    if (!currentDossierItem) return;
    const folder = currentDossierItem.folder;

    const payload = {
      folder,
      product: document.querySelector('#edOrderProduct')?.value.trim() || '',
      quantity: parseInt(document.querySelector('#edOrderQuantity')?.value, 10) || 1,
      totalPrice: document.querySelector('#edOrderTotalPrice')?.value.trim() || '',
      customText: document.querySelector('#edOrderCustomText')?.value.trim() || '',
      client: {
        nom: document.querySelector('#edClientNom')?.value.trim() || '',
        prenom: document.querySelector('#edClientPrenom')?.value.trim() || '',
        email: document.querySelector('#edClientEmail')?.value.trim() || '',
        telephone: document.querySelector('#edClientTelephone')?.value.trim() || '',
        adresse: document.querySelector('#edClientAdresse')?.value.trim() || '',
        codePostal: document.querySelector('#edClientCp')?.value.trim() || '',
        ville: document.querySelector('#edClientVille')?.value.trim() || '',
        note: document.querySelector('#edClientNote')?.value.trim() || ''
      }
    };

    try {
      const res = await fetch('/api/admin/submissions/update-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        currentDossierItem = data.submission || currentDossierItem;
        app.showToast?.('Commande modifiée et mise à jour avec succès.');
        app.closeOrderEditDetailsModal();
        app.openOrderDossierModal(currentDossierItem);
        await app.loadAdminSubmissions();
      } else {
        app.showToast?.(data.error || 'Erreur lors de la modification.');
      }
    } catch (e) {
      app.showToast?.('Erreur de transmission réseau.');
    }
  };

  // Gestion du Thème Nuit / Jour de l'Administration
  app.toggleAdminTheme = function() {
    const overlay = document.querySelector('#adminDashboardOverlay');
    const btn = document.querySelector('#btnAdminThemeToggle');
    if (!overlay) return;
    const isDark = overlay.classList.toggle('dark-mode');
    localStorage.setItem('mockup3d_admin_theme', isDark ? 'dark' : 'light');
    if (btn) btn.innerHTML = isDark ? '☀️ Mode Jour' : '🌙 Mode Nuit';
    app.showToast?.(`Thème administration : ${isDark ? 'Mode Nuit activé' : 'Mode Jour activé'}`);
  };

  app.initAdminTheme = function() {
    const saved = localStorage.getItem('mockup3d_admin_theme') || 'light';
    const overlay = document.querySelector('#adminDashboardOverlay');
    const btn = document.querySelector('#btnAdminThemeToggle');
    if (overlay && saved === 'dark') {
      overlay.classList.add('dark-mode');
      if (btn) btn.innerHTML = '☀️ Mode Jour';
    }
  };

  // Restauration des fiches clients depuis l'historique des commandes et la corbeille
  app.restoreClientsFromOrders = async function() {
    const ok = app.customConfirm
      ? await app.customConfirm('Voulez-vous synchroniser et restaurer toutes les fiches clients manquantes depuis la corbeille et l’historique des commandes ?', { title: 'Restauration des fiches clients', confirmText: 'Restaurer' })
      : confirm('Voulez-vous synchroniser et restaurer toutes les fiches clients manquantes depuis la corbeille et l’historique des commandes ?');
    if (!ok) return;
    try {
      const res = await fetch('/api/admin/clients/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        app.showToast?.(data.message || 'Restauration effectuée.');
        await app.loadAdminClients();
      } else {
        app.showToast?.(data.error || 'Erreur lors de la restauration.');
      }
    } catch (e) {
      app.showToast?.('Erreur de communication avec le serveur.');
    }
  };

  // Logique du Fichier Clients Persistant
  app.adminClientsList = [];

  app.loadAdminClients = async function() {
    try {
      const res = await fetch('/api/admin/clients');
      if (res.ok) {
        const data = await res.json();
        if (data.ok && Array.isArray(data.clients)) {
          app.adminClientsList = data.clients;
        }
      }
    } catch (err) {
      console.warn('Erreur chargement clients:', err);
    }
    app.renderAdminClientsTable();
  };

  app.renderAdminClientsTable = function() {
    const tbody = document.querySelector('#clientsTableBody');
    if (!tbody) return;

    const clientsList = app.adminClientsList || [];
    const badge = document.querySelector('#adminClientsBadge');
    if (badge) badge.textContent = clientsList.length;

    const filter = (document.querySelector('#clientSearchInput')?.value || '').toLowerCase().trim();
    tbody.innerHTML = '';

    const filtered = clientsList.filter(c => {
      if (!filter) return true;
      const str = `${c.nom || ''} ${c.prenom || ''} ${c.email || ''} ${c.telephone || ''} ${c.ville || ''}`.toLowerCase();
      return str.includes(filter);
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:32px; color:#94a3b8;">Aucun client correspondant. Cliquez sur "+ Nouveau Client" pour en créer un.</td></tr>`;
      return;
    }

    filtered.forEach(c => {
      const tr = document.createElement('tr');
      if (c.isTest) {
        tr.style.background = '#fff8f8';
      }
      const lastStr = c.lastDate ? new Date(c.lastDate).toLocaleDateString('fr-FR') : '—';
      const cOrders = Array.isArray(c.orders) ? c.orders : [];
      const spent = typeof c.totalSpent === 'number' ? c.totalSpent : 0;

      tr.innerHTML = `
        <td>
          <strong style="font-size:13px; color:#0f172a;">${c.nom || 'Client'} ${c.prenom || ''}</strong>
          ${c.isTest ? `<span style="background:#dc2626; color:#ffffff; font-size:10px; font-weight:900; padding:2px 7px; border-radius:4px; margin-left:8px; letter-spacing:0.05em; display:inline-block; vertical-align:middle; box-shadow:0 1px 2px rgba(220,38,38,0.25);">CLIENT TEST</span>` : ''}
          ${c.id ? `<br><small style="color:#94a3b8; font-size:11px;">Réf: ${c.id}</small>` : ''}
        </td>
        <td>
          <div style="font-size:12.5px; color:#334155;">${c.email || '—'}</div>
          <small style="color:#64748b;">${c.telephone || '—'}</small>
        </td>
        <td><span style="font-size:12px; color:#475569;">${c.ville || '—'}</span></td>
        <td style="text-align:center;">
          <span style="font-size:12px; font-weight:800; background:#e0e7ff; color:#4338ca; padding:3px 8px; border-radius:6px;">${cOrders.length} cde(s)</span>
        </td>
        <td style="text-align:right;">
          <strong style="font-size:13px; color:#059669;">${spent.toFixed(2).replace('.', ',')} €</strong>
        </td>
        <td><small style="color:#64748b;">${lastStr}</small></td>
        <td style="text-align:right;">
          <div style="display:flex; justify-content:flex-end; gap:6px;">
            <button type="button" class="btn-open-client-sheet admin-btn outline" data-id="${c.id}" data-email="${c.email}" style="font-size:11.5px; padding:5px 10px; font-weight:700;">Fiche</button>
            <button type="button" class="btn-delete-client admin-btn danger" data-id="${c.id}" data-email="${c.email}" data-name="${c.nom || ''} ${c.prenom || ''}" style="font-size:11.5px; padding:5px 10px; background:#fee2e2; color:#dc2626; border-color:#fca5a5; font-weight:700;" title="Supprimer définitivement cette fiche client">Supprimer</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-open-client-sheet').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.dataset.id;
        const email = b.dataset.email;
        const cl = clientsList.find(x => (id && x.id === id) || (email && x.email === email));
        if (cl) app.openClientSheetModal(cl);
      });
    });

    tbody.querySelectorAll('.btn-delete-client').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.dataset.id;
        const email = b.dataset.email;
        const name = b.dataset.name || email;
        app.deleteAdminClient(id, email, name);
      });
    });
  };

  app.deleteAdminClient = async function(clientId, clientEmail, clientName) {
    const confirmMsg = `Confirmez-vous la suppression définitive du client "${clientName}" (${clientEmail}) ?\n\nCette action retirera sa fiche du répertoire de l'atelier.`;
    const ok = app.customConfirm
      ? await app.customConfirm(confirmMsg, { title: 'Suppression fiche client', danger: true, confirmText: 'Supprimer' })
      : window.confirm(confirmMsg);
    if (!ok) return;

    const deleteOrders = app.customConfirm
      ? await app.customConfirm(`Souhaitez-vous également supprimer définitivement tous les dossiers de commandes et fichiers associés à ce client sur le disque ?`, { title: 'Dossiers associés', danger: true, confirmText: 'Tout supprimer', cancelText: 'Conserver les dossiers' })
      : window.confirm(`Souhaitez-vous également supprimer définitivement tous les dossiers de commandes et fichiers associés à ce client sur le disque ?\n\n- Cliquez sur OK pour TOUT supprimer (client + dossiers).\n- Cliquez sur Annuler pour supprimer la fiche client tout en conservant les dossiers.`);

    try {
      const res = await fetch('/api/admin/clients/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: clientId, email: clientEmail, deleteOrders })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur lors de la suppression');

      app.showToast?.(`Client "${clientName}" supprimé avec succès.`);
      app.closeClientSheetModal();
      await app.loadAdminClients();
      await app.updateClientsTrashCount();
      if (deleteOrders && app.loadAdminSubmissions) await app.loadAdminSubmissions();
    } catch (err) {
      if (app.customAlert) await app.customAlert(`Erreur : ${err.message}`, { title: 'Erreur' });
      else alert(`Erreur : ${err.message}`);
    }
  };

  app.purgeTestClients = async function() {
    const testClients = (app.adminClientsList || []).filter(c => c.isTest);
    if (testClients.length === 0) return app.showToast?.('Aucun client test à purger.');
    const ok = app.customConfirm
      ? await app.customConfirm(`Supprimer définitivement les ${testClients.length} client(s) test du répertoire ?\n(Ils seront archivés dans la corbeille)`, { title: 'Purger les clients tests', danger: true, confirmText: 'Purger les tests' })
      : confirm(`Supprimer définitivement les ${testClients.length} client(s) test du répertoire ?`);
    if (!ok) return;

    try {
      const res = await fetch('/api/admin/clients/purge-tests', { method: 'POST' });
      const data = await res.json();
      if (res.ok && data.ok) {
        app.showToast?.(data.message || 'Clients tests purgés avec succès.');
        await app.loadAdminClients();
        await app.updateClientsTrashCount();
      } else {
        app.showToast?.(data.error || 'Erreur lors de la purge.');
      }
    } catch (err) {
      app.showToast?.('Erreur réseau lors de la purge.');
    }
  };

  app.restoreLastClient = async function() {
    const ok = app.customConfirm
      ? await app.customConfirm("Restaurer uniquement le dernier client mis en corbeille ?", { title: 'Restauration client', confirmText: 'Restaurer' })
      : window.confirm("Restaurer uniquement le dernier client mis en corbeille ?");
    if (!ok) return;
    try {
      const res = await fetch('/api/admin/clients/restore-last', { method: 'POST' });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur lors de la restauration');
      app.showToast?.(data.message || 'Dernier client restauré.');
      await app.loadAdminClients();
      await app.updateClientsTrashCount();
    } catch (err) {
      if (app.customAlert) await app.customAlert(`Erreur : ${err.message}`, { title: 'Erreur' });
      else alert(`Erreur : ${err.message}`);
    }
  };

  app.openClientsTrashModal = async function() {
    const modal = document.querySelector('#clientsTrashModal');
    const tbody = document.querySelector('#clientsTrashTableBody');
    if (!modal || !tbody) return;
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:18px;">Chargement de la corbeille…</td></tr>';
    modal.style.display = 'flex';
    try {
      const res = await fetch('/api/admin/clients/trash');
      const data = await res.json();
      const trash = Array.isArray(data.trash) ? data.trash : [];
      if (trash.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:24px; color:#94a3b8;">La corbeille des clients est vide.</td></tr>';
        return;
      }
      tbody.innerHTML = trash.map(c => `
        <tr>
          <td><strong>${c.nom || 'Client'} ${c.prenom || ''}</strong></td>
          <td><span style="color:#4f46e5;">${c.email}</span></td>
          <td><small style="color:#64748b;">${c.deletedAt ? new Date(c.deletedAt).toLocaleString('fr-FR') : '—'}</small></td>
          <td style="text-align:right;">
            <button type="button" class="btn-restore-single-client admin-btn primary" data-id="${c.id}" data-email="${c.email}" style="padding:4px 10px; font-size:11.5px; background:#059669; border-color:#059669;">
              ↺ Restaurer
            </button>
          </td>
        </tr>
      `).join('');
      tbody.querySelectorAll('.btn-restore-single-client').forEach(b => {
        b.addEventListener('click', async () => {
          const id = b.dataset.id;
          const email = b.dataset.email;
          b.disabled = true;
          b.textContent = 'En cours…';
          try {
            const r = await fetch('/api/admin/clients/restore-one', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id, email })
            });
            const d = await r.json();
            if (!r.ok || !d.ok) throw new Error(d.error || 'Erreur restauration.');
            app.showToast?.(d.message || 'Client restauré !');
            await app.loadAdminClients();
            await app.openClientsTrashModal();
            await app.updateClientsTrashCount();
          } catch (e) {
            if (app.customAlert) await app.customAlert(e.message, { title: 'Erreur de restauration' });
            else alert(e.message);
            b.disabled = false;
            b.textContent = '↺ Restaurer';
          }
        });
      });
    } catch (e) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#ef4444;">Erreur : ${e.message}</td></tr>`;
    }
  };

  app.updateClientsTrashCount = async function() {
    try {
      const res = await fetch('/api/admin/clients/trash');
      if (res.ok) {
        const data = await res.json();
        const badge = document.querySelector('#clientsTrashCount');
        if (badge) badge.textContent = String(Array.isArray(data.trash) ? data.trash.length : 0);
      }
    } catch {}
  };

  app.openEditClientModal = function(client = null) {
    const modal = document.querySelector('#editClientModal');
    if (!modal) return;
    const title = document.querySelector('#editClientModalTitle');
    const idInp = document.querySelector('#editClientId');
    const nomInp = document.querySelector('#editClientNom');
    const prenomInp = document.querySelector('#editClientPrenom');
    const emailInp = document.querySelector('#editClientEmail');
    const telInp = document.querySelector('#editClientTel');
    const pwdInp = document.querySelector('#editClientPassword');
    const adrInp = document.querySelector('#editClientAdresse');
    const cpInp = document.querySelector('#editClientCp');
    const villeInp = document.querySelector('#editClientVille');
    const notesInp = document.querySelector('#editClientNotes');
    const chkTest = document.querySelector('#chkEditClientIsTest');

    if (client) {
      if (title) title.textContent = `Modifier Client : ${client.nom} ${client.prenom}`;
      if (idInp) idInp.value = client.id || '';
      if (nomInp) nomInp.value = client.nom || '';
      if (prenomInp) prenomInp.value = client.prenom || '';
      if (emailInp) { emailInp.value = client.email || ''; emailInp.readOnly = true; }
      if (telInp) telInp.value = client.telephone || '';
      if (pwdInp) { pwdInp.value = ''; pwdInp.placeholder = 'Laisser vide pour ne pas modifier'; }
      if (adrInp) adrInp.value = client.adresse || '';
      if (cpInp) cpInp.value = client.codePostal || '';
      if (villeInp) villeInp.value = client.ville || '';
      if (notesInp) notesInp.value = client.notes || '';
      if (chkTest) chkTest.checked = !!client.isTest;
    } else {
      if (title) title.textContent = 'Nouveau Client Répertoire';
      if (idInp) idInp.value = '';
      if (nomInp) nomInp.value = '';
      if (prenomInp) prenomInp.value = '';
      if (emailInp) { emailInp.value = ''; emailInp.readOnly = false; }
      if (telInp) telInp.value = '';
      if (pwdInp) { pwdInp.value = 'Client123!'; pwdInp.placeholder = 'Mot de passe initial'; }
      if (adrInp) adrInp.value = '';
      if (cpInp) cpInp.value = '';
      if (villeInp) villeInp.value = '';
      if (notesInp) notesInp.value = '';
      if (chkTest) chkTest.checked = false;
    }
    modal.style.display = 'flex';
  };

  app.closeEditClientModal = function() {
    const modal = document.querySelector('#editClientModal');
    if (modal) modal.style.display = 'none';
  };

  app.saveEditClient = async function() {
    const id = document.querySelector('#editClientId')?.value || '';
    const nom = document.querySelector('#editClientNom')?.value?.trim();
    const prenom = document.querySelector('#editClientPrenom')?.value?.trim();
    const email = document.querySelector('#editClientEmail')?.value?.trim();
    const telephone = document.querySelector('#editClientTel')?.value?.trim();
    const password = document.querySelector('#editClientPassword')?.value?.trim();
    const adresse = document.querySelector('#editClientAdresse')?.value?.trim();
    const codePostal = document.querySelector('#editClientCp')?.value?.trim();
    const ville = document.querySelector('#editClientVille')?.value?.trim();
    const notes = document.querySelector('#editClientNotes')?.value?.trim();
    const isTest = !!document.querySelector('#chkEditClientIsTest')?.checked;

    if (!nom || !email) {
      if (app.customAlert) await app.customAlert('Le nom et l\'adresse courriel sont obligatoires.', { title: 'Champ obligatoire' });
      else alert('Le nom et l\'adresse courriel sont obligatoires.');
      return;
    }

    try {
      const payload = { id, nom, prenom, email, telephone, adresse, codePostal, ville, notes, isTest };
      if (password) {
        if (id) payload.newPassword = password;
        else payload.password = password;
      }
      const res = await fetch('/api/admin/clients/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur lors de l\'enregistrement');

      app.showToast?.('Fiche client enregistrée avec succès.');
      app.closeEditClientModal();
      await app.loadAdminClients();
    } catch (err) {
      if (app.customAlert) await app.customAlert(`Erreur : ${err.message}`, { title: 'Erreur d’enregistrement' });
      else alert(`Erreur : ${err.message}`);
    }
  };

  let currentClientSheetItem = null;

  app.openClientSheetModal = function(client) {
    if (!client) return;
    currentClientSheetItem = client;
    const modal = document.querySelector('#clientSheetModal');
    if (!modal) return;

    const name = document.querySelector('#csClientName');
    if (name) {
      name.innerHTML = `${client.nom} ${client.prenom} ${client.isTest ? '<span style="background:#dc2626; color:#ffffff; font-size:11px; font-weight:800; padding:2px 8px; border-radius:4px; margin-left:8px; vertical-align:middle;">FICHE TEST</span>' : ''}`;
    }

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

  // Gestion des Codes Cadeaux & de la Remise Globale
  app.loadAdminDiscounts = async function() {
    try {
      const res = await fetch('/api/admin/discounts');
      if (!res.ok) return;
      const json = await res.json();
      const d = json.data || {};
      const glob = d.globalDiscount || { enabled: false, percent: 10, label: '' };
      const chkGlob = document.querySelector('#chkGlobalDiscountEnabled');
      const inpPerc = document.querySelector('#globalDiscountPercent');
      const inpLbl = document.querySelector('#globalDiscountLabel');
      const badgeGlob = document.querySelector('#globalDiscountBadge');

      if (chkGlob) chkGlob.checked = !!glob.enabled;
      if (inpPerc) inpPerc.value = glob.percent || 10;
      if (inpLbl) inpLbl.value = glob.label || '';
      if (badgeGlob) {
        if (glob.enabled) {
          badgeGlob.textContent = `Active (-${glob.percent}%)`;
          badgeGlob.style.background = '#dcfce7';
          badgeGlob.style.color = '#15803d';
        } else {
          badgeGlob.textContent = 'Désactivée';
          badgeGlob.style.background = '#fee2e2';
          badgeGlob.style.color = '#dc2626';
        }
      }

      const tbody = document.querySelector('#couponsTableBody');
      if (!tbody) return;
      const coupons = Array.isArray(d.coupons) ? d.coupons : [];
      if (coupons.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:18px; color:#94a3b8;">Aucun code cadeau configuré. Utilisez le formulaire ci-dessus pour en créer un.</td></tr>';
        return;
      }
      tbody.innerHTML = coupons.map(c => `
        <tr>
          <td><strong style="font-size:13px; color:#7c3aed; font-family:monospace; letter-spacing:0.04em;">${c.code}</strong></td>
          <td><span style="font-weight:700; color:#0f172a;">${c.type === 'percent' ? `-${c.value}%` : `-${c.value.toFixed(2)} €`}</span></td>
          <td><span style="color:#475569;">${c.label || '—'}</span></td>
          <td style="text-align:center;">
            <button type="button" class="btn-toggle-coupon admin-btn" data-code="${c.code}" data-active="${c.active ? '1' : '0'}" style="font-size:11px; padding:3px 8px; border-radius:6px; border:none; cursor:pointer; font-weight:700; background:${c.active ? '#dcfce7; color:#15803d;' : '#f1f5f9; color:#64748b;'}">
              ${c.active ? '✓ Actif' : 'Inactif'}
            </button>
          </td>
          <td style="text-align:right;">
            <button type="button" class="btn-delete-coupon admin-btn outline" data-code="${c.code}" style="font-size:11px; padding:3px 8px; color:#dc2626; border-color:#fca5a5; font-weight:700;">
              Supprimer
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.btn-toggle-coupon').forEach(b => {
        b.addEventListener('click', async () => {
          const code = b.dataset.code;
          const currentActive = b.dataset.active === '1';
          const targetC = coupons.find(x => x.code === code);
          if (!targetC) return;
          try {
            await fetch('/api/admin/discounts/coupon', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...targetC, active: !currentActive })
            });
            app.showToast?.(`Code "${code}" ${!currentActive ? 'activé' : 'désactivé'}.`);
            await app.loadAdminDiscounts();
          } catch (e) { app.showToast?.(e.message || 'Erreur'); }
        });
      });

      tbody.querySelectorAll('.btn-delete-coupon').forEach(b => {
        b.addEventListener('click', async () => {
          const code = b.dataset.code;
          const ok = app.customConfirm
            ? await app.customConfirm(`Supprimer le code cadeau "${code}" ?`, { danger: true, confirmText: 'Supprimer' })
            : confirm(`Supprimer le code cadeau "${code}" ?`);
          if (!ok) return;
          try {
            await fetch('/api/admin/discounts/coupon/delete', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ code })
            });
            app.showToast?.(`Code "${code}" supprimé.`);
            await app.loadAdminDiscounts();
          } catch (e) { app.showToast?.(e.message || 'Erreur'); }
        });
      });
    } catch (err) {
      console.warn('Erreur chargement discounts:', err);
    }
  };

  app.saveGlobalDiscount = async function() {
    const chkGlob = document.querySelector('#chkGlobalDiscountEnabled');
    const inpPerc = document.querySelector('#globalDiscountPercent');
    const inpLbl = document.querySelector('#globalDiscountLabel');
    try {
      const res = await fetch('/api/admin/discounts/global', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enabled: !!chkGlob?.checked,
          percent: parseFloat(inpPerc?.value || 0),
          label: inpLbl?.value?.trim() || ''
        })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur sauvegarde.');
      app.showToast?.('Remise globale enregistrée avec succès !');
      await app.loadAdminDiscounts();
    } catch (e) { app.showToast?.(e.message || 'Erreur de sauvegarde'); }
  };

  app.saveNewCoupon = async function() {
    const code = document.querySelector('#newCouponCode')?.value?.trim();
    const type = document.querySelector('#newCouponType')?.value || 'percent';
    const value = parseFloat(document.querySelector('#newCouponValue')?.value || 0);
    const label = document.querySelector('#newCouponLabel')?.value?.trim() || '';

    if (!code || value <= 0) {
      if (app.customAlert) await app.customAlert('Veuillez renseigner un code et une valeur supérieure à 0.', { title: 'Code cadeau invalide' });
      else alert('Veuillez renseigner un code et une valeur supérieure à 0.');
      return;
    }

    try {
      const res = await fetch('/api/admin/discounts/coupon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, type, value, label, active: true })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur enregistrement code.');
      app.showToast?.(`Code "${code}" créé avec succès !`);
      const cInp = document.querySelector('#newCouponCode'); if (cInp) cInp.value = '';
      const lInp = document.querySelector('#newCouponLabel'); if (lInp) lInp.value = '';
      await app.loadAdminDiscounts();
    } catch (e) { app.showToast?.(e.message || 'Erreur d’enregistrement'); }
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
        btn.addEventListener('click', async () => {
          const idx = parseInt(btn.dataset.index, 10);
          const it = store.items[idx];
          const ok = app.customConfirm
            ? await app.customConfirm(`Retirer l'article "${it?.productName}" du dépôt ?`, { danger: true, confirmText: 'Retirer' })
            : confirm(`Retirer l'article "${it?.productName}" du dépôt ?`);
          if (ok) {
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
        if (app.customAlert) await app.customAlert('Veuillez entrer le nom de la nouvelle catégorie.', { title: 'Catégorie requise' });
        else alert('Veuillez entrer le nom de la nouvelle catégorie.');
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
    const ok = app.customConfirm
      ? await app.customConfirm(`Confirmez-vous la publication immédiate de tous les ${pendings.length} visuel(s) en attente ?`, { title: 'Publication par lot', confirmText: 'Publier tout' })
      : confirm(`Confirmez-vous la publication immédiate de tous les ${pendings.length} visuel(s) en attente ?`);
    if (!ok) return;

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
    const val = app.customPrompt
      ? await app.customPrompt('Nom de la nouvelle catégorie :', '', { title: 'Nouvelle catégorie' })
      : prompt('Nom de la nouvelle catégorie :');
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
          const newSub = app.customPrompt
            ? await app.customPrompt(`Nouveau nom pour la sous-catégorie "${oldSub}" :`, oldSub, { title: 'Renommer la sous-catégorie' })
            : prompt(`Nouveau nom pour la sous-catégorie "${oldSub}" :`, oldSub);
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
        const newName = app.customPrompt
          ? await app.customPrompt(`Nouveau nom pour la catégorie "${oldName}" :`, oldName, { title: 'Renommer la catégorie' })
          : prompt(`Nouveau nom pour la catégorie "${oldName}" :`, oldName);
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
        const subName = app.customPrompt
          ? await app.customPrompt(`Nom de la sous-catégorie à ajouter dans "${catName}" :`, '', { title: 'Ajouter une sous-catégorie' })
          : prompt(`Nom de la sous-catégorie à ajouter dans "${catName}" :`);
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
          const ok = app.customConfirm
            ? await app.customConfirm(`Supprimer la sous-catégorie "${subName}" ?`, { danger: true, confirmText: 'Supprimer' })
            : confirm(`Supprimer la sous-catégorie "${subName}" ?`);
          if (ok) {
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
        const ok = app.customConfirm
          ? await app.customConfirm(`Confirmez-vous la suppression de la catégorie "${catName}" ? Les visuels associés basculeront automatiquement dans "Illustrations".`, { danger: true, confirmText: 'Supprimer' })
          : confirm(`Confirmez-vous la suppression de la catégorie "${catName}" ? Les visuels associés basculeront automatiquement dans "Illustrations".`);
        if (ok) {
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
    const ok = app.customConfirm
      ? await app.customConfirm(`Supprimer définitivement ${trashItems.length} visuel(s) de la corbeille et du disque ? Cette action est irréversible.`, { title: 'Vider la corbeille', danger: true, confirmText: 'Supprimer définitivement' })
      : confirm(`Supprimer définitivement ${trashItems.length} visuel(s) de la corbeille et du disque ? Cette action est irréversible.`);
    if (!ok) return;

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

  // Bouton Thème Nuit / Jour de l'Administration
  document.querySelector('#btnAdminThemeToggle')?.addEventListener('click', () => app.toggleAdminTheme());
  app.initAdminTheme();

  // Modale Dossier Commande
  document.querySelector('#closeOrderDossierBtn')?.addEventListener('click', () => app.closeOrderDossierModal());
  document.querySelector('#closeOrderDossierBottomBtn')?.addEventListener('click', () => app.closeOrderDossierModal());
  document.querySelector('#saveOrderDossierChecksBtn')?.addEventListener('click', () => app.saveOrderDossierChecks());
  document.querySelector('#btnDossierRejectOrder')?.addEventListener('click', () => app.openOrderRejectModal());
  document.querySelector('#btnOpenEditOrderDetails')?.addEventListener('click', () => app.openOrderEditDetailsModal());

  // Modale Motif de Refus / Non-conformité
  document.querySelector('#closeOrderRejectBtn')?.addEventListener('click', () => app.closeOrderRejectModal());
  document.querySelector('#cancelOrderRejectBtn')?.addEventListener('click', () => app.closeOrderRejectModal());
  document.querySelector('#confirmOrderRejectBtn')?.addEventListener('click', () => app.confirmOrderReject());

  // Modale Modification de Commande
  document.querySelector('#closeOrderEditDetailsBtn')?.addEventListener('click', () => app.closeOrderEditDetailsModal());
  document.querySelector('#cancelOrderEditDetailsBtn')?.addEventListener('click', () => app.closeOrderEditDetailsModal());
  document.querySelector('#saveOrderEditDetailsBtn')?.addEventListener('click', () => app.saveOrderEditDetails());

  // Restauration et purge des clients
  document.querySelector('#btnRestoreClients')?.addEventListener('click', () => app.restoreClientsFromOrders());
  document.querySelector('#btnRestoreLastClient')?.addEventListener('click', () => app.restoreLastClient());
  document.querySelector('#btnPurgeTestClients')?.addEventListener('click', () => app.purgeTestClients());
  document.querySelector('#btnOpenClientsTrash')?.addEventListener('click', () => app.openClientsTrashModal());
  document.querySelector('#closeClientsTrashBtn')?.addEventListener('click', () => {
    const m = document.querySelector('#clientsTrashModal'); if (m) m.style.display = 'none';
  });
  document.querySelector('#closeClientsTrashBottomBtn')?.addEventListener('click', () => {
    const m = document.querySelector('#clientsTrashModal'); if (m) m.style.display = 'none';
  });
  document.querySelector('#btnTrashRestoreLastQuick')?.addEventListener('click', async () => {
    await app.restoreLastClient();
    await app.openClientsTrashModal();
  });

  // Codes Cadeaux et Remise Globale
  document.querySelector('#btnSaveGlobalDiscount')?.addEventListener('click', () => app.saveGlobalDiscount());
  document.querySelector('#btnAddCouponBtn')?.addEventListener('click', () => app.saveNewCoupon());
  document.querySelector('#btnRefreshDiscounts')?.addEventListener('click', () => app.loadAdminDiscounts());

  // Modale Fiche Produit
  document.querySelector('#closeProductSheetBtn')?.addEventListener('click', () => app.closeProductSheetModal());
  document.querySelector('#closeProductSheetBottomBtn')?.addEventListener('click', () => app.closeProductSheetModal());
  document.querySelector('#saveProductSheetBtn')?.addEventListener('click', () => app.saveProductSheet());

  // Modale Fiche Client & Recherche & Suppression
  document.querySelector('#closeClientSheetBtn')?.addEventListener('click', () => app.closeClientSheetModal());
  document.querySelector('#closeClientSheetBottomBtn')?.addEventListener('click', () => app.closeClientSheetModal());
  document.querySelector('#saveClientNotesBtn')?.addEventListener('click', () => app.saveClientNotes());
  document.querySelector('#clientSearchInput')?.addEventListener('input', () => app.renderAdminClientsTable());
  document.querySelector('#btnAddNewClient')?.addEventListener('click', () => app.openEditClientModal());
  document.querySelector('#closeEditClientBtn')?.addEventListener('click', () => app.closeEditClientModal());
  document.querySelector('#closeEditClientBottomBtn')?.addEventListener('click', () => app.closeEditClientModal());
  document.querySelector('#saveEditClientBtn')?.addEventListener('click', () => app.saveEditClient());
  document.querySelector('#btnDeleteClientFromSheet')?.addEventListener('click', () => {
    if (!currentClientSheetItem) return;
    app.deleteAdminClient(currentClientSheetItem.id, currentClientSheetItem.email, `${currentClientSheetItem.nom || ''} ${currentClientSheetItem.prenom || ''}`);
  });

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

  // GESTION DU MODULE DE PROPOSITION DE BAT / COMMANDE ATELIER
  const propoModal = document.querySelector('#adminPropositionModal');
  const openPropoBtn = document.querySelector('#btnAdminNewProposition');
  const closePropoBtn = document.querySelector('#closeAdminPropositionBtn');
  const cancelPropoBtn = document.querySelector('#cancelAdminPropositionBtn');
  const confirmPropoBtn = document.querySelector('#confirmAdminPropositionBtn');
  const capture3DBtn = document.querySelector('#btnPropoCaptureCurrent3D');
  const propoClientSelect = document.querySelector('#propoClientSelect');
  const propoProductSelect = document.querySelector('#propoProductSelect');
  const propoBatPreview = document.querySelector('#propoBatPreview');

  const propoVisualSelect = document.querySelector('#propoVisualSelect');
  const propoDirectFileInput = document.querySelector('#propoDirectFileInput');
  const btnPropoUploadCustomFile = document.querySelector('#btnPropoUploadCustomFile');
  const btnPropoAdjust3D = document.querySelector('#btnPropoAdjust3D');
  const propoPreviewImg = document.querySelector('#propoPreviewImg');
  const propoPreviewTitle = document.querySelector('#propoPreviewTitle');
  const propoPreviewSub = document.querySelector('#propoPreviewSub');

  let currentCapturedBatData = '';
  let currentCustomVisualData = '';

  const closePropo = () => {
    if (propoModal) propoModal.style.display = 'none';
  };

  openPropoBtn?.addEventListener('click', async () => {
    if (!propoModal) return;
    propoModal.style.display = 'flex';

    // Remplir clients
    if (!app.adminClientsList || app.adminClientsList.length === 0) {
      await app.loadAdminClients?.();
    }
    const clients = app.adminClientsList || [];
    if (propoClientSelect) {
      propoClientSelect.innerHTML = '<option value="">-- Choisir un client enregistré --</option>' +
        clients.map(c => `<option value="${c.email}">${c.nom} ${c.prenom || ''} (${c.email})</option>`).join('');
    }

    // Remplir la liste des visuels catalogue
    if (propoVisualSelect) {
      const visuals = (app.catalogImages || []).filter(v => v.status === 'approved' || !v.status);
      propoVisualSelect.innerHTML = '<option value="">-- Choisir un visuel de la bibliothèque --</option>' +
        visuals.map(v => `<option value="${v.url || v.thumbnail || v.file}" data-name="${v.title || v.name}">${v.title || v.name}</option>`).join('');
    }

    // Capturer la vue 3D actuelle si disponible
    if (app.renderer?.domElement) {
      try {
        currentCapturedBatData = app.renderer.domElement.toDataURL('image/png');
        if (propoPreviewImg && currentCapturedBatData) {
          propoPreviewImg.src = currentCapturedBatData;
        }
      } catch (e) {}
    }
  });

  closePropoBtn?.addEventListener('click', closePropo);
  cancelPropoBtn?.addEventListener('click', closePropo);

  // Upload direct d'une image pour le BAT
  btnPropoUploadCustomFile?.addEventListener('click', () => propoDirectFileInput?.click());
  propoDirectFileInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        currentCustomVisualData = evt.target.result;
        currentCapturedBatData = currentCustomVisualData;
        if (propoPreviewImg) propoPreviewImg.src = currentCustomVisualData;
        if (propoPreviewSub) propoPreviewSub.textContent = `Image importée : ${file.name}`;
        app.showToast?.(`Image ${file.name} chargée pour le BAT.`);
      };
      reader.readAsDataURL(file);
    }
  });

  // Changement de visuel catalogue
  propoVisualSelect?.addEventListener('change', () => {
    const opt = propoVisualSelect.selectedOptions[0];
    const url = opt ? opt.value : '';
    const name = opt ? opt.dataset.name : '';
    if (url) {
      currentCustomVisualData = url;
      currentCapturedBatData = url;
      if (propoPreviewImg) propoPreviewImg.src = url;
      if (propoPreviewSub) propoPreviewSub.textContent = `Visuel : ${name}`;
    }
  });

  // Calibrage direct dans le Studio 3D sans friction
  btnPropoAdjust3D?.addEventListener('click', () => {
    const prodKey = propoProductSelect?.value || 'mug11oz';
    const visUrl = currentCustomVisualData || propoVisualSelect?.value;
    const clientEmail = propoClientSelect?.value || '';

    // Fermer l'admin et ouvrir le configurateur
    app.closeAdminDashboard?.();

    if (prodKey && typeof app.switchProduct === 'function') {
      app.switchProduct(prodKey);
    }
    if (visUrl && typeof app.applyTextureFromUrl === 'function') {
      app.applyTextureFromUrl(visUrl);
    }

    // Afficher une bannière flottante de finalisation directe sur le Studio
    let banner = document.querySelector('#floatingStudioBatBanner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'floatingStudioBatBanner';
      banner.style.cssText = 'position:fixed; top:70px; left:50%; transform:translateX(-50%); z-index:10000; background:rgba(15,23,42,0.92); backdrop-filter:blur(8px); border:1px solid #7c3aed; padding:10px 20px; border-radius:12px; display:flex; align-items:center; gap:16px; box-shadow:0 10px 25px rgba(0,0,0,0.35); color:#fff;';
      document.body.appendChild(banner);
    }
    banner.innerHTML = `
      <div style="font-size:13px;">
        <strong style="color:#a7f3d0; display:block;">🎨 Mode Préparation de BAT Atelier</strong>
        <span style="color:#cbd5e1; font-size:12px;">Positionnez le visuel en 3D puis validez l'envoi au client.</span>
      </div>
      <button type="button" id="btnConfirmStudioFloatingBat" style="background:#059669; color:#fff; border:none; padding:8px 16px; border-radius:8px; font-weight:700; font-size:12.5px; cursor:pointer;">
        📷 Capturer & Envoyer au Client
      </button>
      <button type="button" id="btnCancelStudioFloatingBat" style="background:transparent; color:#94a3b8; border:1px solid #475569; padding:6px 12px; border-radius:8px; font-size:12px; cursor:pointer;">
        Annuler
      </button>
    `;

    document.querySelector('#btnCancelStudioFloatingBat')?.addEventListener('click', () => {
      banner.remove();
      app.openAdminDashboard?.();
    });

    document.querySelector('#btnConfirmStudioFloatingBat')?.addEventListener('click', async () => {
      let capture = '';
      if (app.renderer?.domElement) {
        capture = app.renderer.domElement.toDataURL('image/png');
      }
      banner.remove();
      app.openAdminDashboard?.();
      // Rouvrir la modale avec la capture mise à jour
      if (propoModal) propoModal.style.display = 'flex';
      currentCapturedBatData = capture;
      if (propoPreviewImg) propoPreviewImg.src = capture;
      if (propoPreviewSub) propoPreviewSub.textContent = 'Rendu 3D personnalisé calibré avec succès';
      app.showToast?.('Rendu 3D calibré ! Cliquez sur "Transmettre" pour finaliser.');
    });
  });

  capture3DBtn?.addEventListener('click', () => {
    if (app.renderer?.domElement) {
      currentCapturedBatData = app.renderer.domElement.toDataURL('image/png');
      if (propoPreviewImg) propoPreviewImg.src = currentCapturedBatData;
      app.showToast?.('Aperçu 3D capturé avec succès.');
    }
  });

  confirmPropoBtn?.addEventListener('click', async () => {
    const selectedClientEmail = propoClientSelect?.value || '';
    const cl = (app.adminClientsList || []).find(c => c.email.toLowerCase() === selectedClientEmail.toLowerCase());
    const email = cl ? cl.email : selectedClientEmail;
    const nom = cl ? cl.nom : 'Client';
    const prenom = cl ? cl.prenom : '';
    const telephone = cl ? cl.telephone : '';
    const productKey = propoProductSelect?.value || 'mug11oz';
    const productName = propoProductSelect?.selectedOptions[0]?.text || 'Objet personnalisé';
    const quantity = parseInt(document.querySelector('#propoQuantity')?.value || '1', 10);
    const message = document.querySelector('#propoMessageText')?.value?.trim();

    if (!email || !email.includes('@')) {
      if (app.customAlert) await app.customAlert('Veuillez sélectionner un client enregistré dans la liste.', { title: 'Sélection client requise' });
      else alert('Veuillez sélectionner un client enregistré dans la liste.');
      return;
    }

    confirmPropoBtn.disabled = true;
    confirmPropoBtn.textContent = 'Transmission en cours…';

    try {
      const batImage = currentCapturedBatData || (app.renderer?.domElement ? app.renderer.domElement.toDataURL('image/png') : '');
      const visualImage = currentCustomVisualData || batImage;

      const res = await fetch('/api/admin/submissions/proposition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientEmail: email,
          clientNom: nom,
          clientPrenom: prenom,
          clientTelephone: telephone,
          productKey,
          productName,
          quantity,
          batImage,
          visualImage,
          message
        })
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Erreur lors de la création de la proposition.');

      app.showToast?.(`Proposition de BAT transmise à ${nom} (${email}) ! Statut : En attente validation client.`);
      closePropo();
      await app.loadAdminSubmissions?.();
    } catch (err) {
      if (app.customAlert) await app.customAlert(err.message || 'Erreur de transmission.', { title: 'Erreur' });
      else alert(err.message || 'Erreur de transmission.');
    } finally {
      confirmPropoBtn.disabled = false;
      confirmPropoBtn.textContent = '✓ Transmettre la proposition au client';
    }
  });

  // Préchargement proactif immédiat de toutes les données du dashboard
  setTimeout(() => {
    app.refreshAdminDashboardData?.();
  }, 250);
}
