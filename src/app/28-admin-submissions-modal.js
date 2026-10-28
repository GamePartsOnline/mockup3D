// Gestion de la modale administrateur des créations et commandes reçues

function formatDate(iso) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  } catch { return iso; }
}

function renderItem(sub) {
  const isNew = sub.status !== 'traite';
  const c = sub.client || {};
  const files = Array.isArray(sub.files) ? sub.files : [];
  const mockupFile = files.find(f => (f.name || f).startsWith('mockup-'));
  const wrapFile = files.find(f => (f.name || f).startsWith('wrap-'));
  const mockupName = typeof mockupFile === 'object' ? mockupFile.name : mockupFile;
  const wrapName = typeof wrapFile === 'object' ? wrapFile.name : wrapFile;

  const mockupUrl = mockupName ? `/api/admin/submissions/file?folder=${encodeURIComponent(sub.folder)}&file=${encodeURIComponent(mockupName)}` : '';
  const wrapUrl = wrapName ? `/api/admin/submissions/file?folder=${encodeURIComponent(sub.folder)}&file=${encodeURIComponent(wrapName)}` : '';

  return `
    <div class="sub-card" data-folder="${sub.folder}" style="background:#ffffff; border-radius:8px; border:1px solid ${isNew ? '#c4b5fd' : '#e2e8f0'}; box-shadow:0 1px 3px rgba(0,0,0,0.05); padding:16px; display:flex; flex-direction:column; gap:12px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px; border-bottom:1px solid #f1f5f9; padding-bottom:10px;">
        <div>
          <span style="display:inline-block; padding:2px 8px; border-radius:12px; font-size:11px; font-weight:700; ${isNew ? 'background:#ede9fe; color:#6d28d9;' : 'background:#dcfce7; color:#15803d;'}">
            ${isNew ? 'Nouveau à traiter' : 'Traité'}
          </span>
          <strong style="font-size:15px; margin-left:8px; color:#0f172a;">${c.nom || ''} ${c.prenom || ''}</strong>
          <span style="font-size:12px; color:#64748b; margin-left:8px;">${formatDate(sub.date)}</span>
        </div>
        <div style="display:flex; gap:6px;">
          <button type="button" class="toggle-sub-status-btn cat-btn-sm ${isNew ? 'cat-btn-primary' : 'cat-btn-light'}" data-folder="${sub.folder}" data-next="${isNew ? 'traite' : 'nouveau'}">
            ${isNew ? 'Marquer comme traité' : 'Remettre en attente'}
          </button>
          <button type="button" class="delete-sub-btn cat-btn-sm cat-btn-danger" data-folder="${sub.folder}">Supprimer</button>
        </div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
        <div style="font-size:13px; color:#334155; display:flex; flex-direction:column; gap:4px;">
          <div><strong style="color:#0f172a;">Produit :</strong> <span style="color:#6d28d9; font-weight:600;">${sub.product || 'Objet personnalisé'}</span></div>
          <div><strong style="color:#0f172a;">Téléphone :</strong> <a href="tel:${c.telephone || ''}" style="color:#0284c7; text-decoration:none; font-weight:600;">${c.telephone || 'Non renseigné'}</a></div>
          <div><strong style="color:#0f172a;">E-mail :</strong> <a href="mailto:${c.email || ''}" style="color:#0284c7; text-decoration:none;">${c.email || 'Non renseigné'}</a></div>
          <div><strong style="color:#0f172a;">Adresse :</strong> ${c.adresse || ''}, ${c.codePostal || ''} ${c.ville || ''}</div>
          ${c.note ? `<div style="margin-top:4px; padding:6px 10px; background:#f1f5f9; border-radius:6px; font-size:12px; font-style:italic;"><strong>Note client :</strong> ${c.note}</div>` : ''}
          ${Array.isArray(sub.imagesInfo) && sub.imagesInfo.length ? `
            <div style="margin-top:4px; padding:6px 8px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; font-size:11px;">
              <strong style="color:#0f172a;">Résolution des images :</strong>
              <div style="display:flex; flex-direction:column; gap:2px; margin-top:2px;">
                ${sub.imagesInfo.map(img => `
                  <div>
                    <span>${img.name} : <strong>${img.width} × ${img.height} px</strong></span>
                    <span style="display:inline-block; margin-left:4px; padding:1px 5px; border-radius:3px; font-size:10px; font-weight:700; ${
                      img.status === 'danger' ? 'background:#fee2e2; color:#dc2626;' :
                      img.status === 'warning' ? 'background:#fef3c7; color:#d97706;' :
                      'background:#dcfce7; color:#15803d;'
                    }">${img.dpi} DPI • ${img.quality}</span>
                  </div>
                `).join('')}
              </div>
            </div>` : ''}
          <div style="font-size:11px; color:#64748b; margin-top:4px;">Courriel : ${sub.emailStatus === 'sent' ? 'Envoyé par SMTP' : 'Enregistré localement'}</div>
        </div>
        <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
          ${mockupUrl ? `
            <a href="${mockupUrl}" target="_blank" rel="noopener" title="Aperçu 3D (cliquer pour agrandir)" style="display:flex; flex-direction:column; align-items:center; gap:4px; text-decoration:none;">
              <img src="${mockupUrl}" alt="Mockup 3D" style="width:110px; height:110px; object-fit:contain; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff;" />
              <span style="font-size:11px; color:#64748b;">Aperçu 3D</span>
            </a>` : ''}
          ${wrapUrl ? `
            <a href="${wrapUrl}" target="_blank" rel="noopener" title="Fichier Wrap à plat (cliquer pour agrandir)" style="display:flex; flex-direction:column; align-items:center; gap:4px; text-decoration:none;">
              <img src="${wrapUrl}" alt="Wrap à plat" style="width:140px; height:110px; object-fit:contain; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff;" />
              <span style="font-size:11px; color:#64748b;">Wrap d'impression</span>
            </a>` : ''}
          <div style="display:flex; flex-direction:column; gap:4px;">
            <strong style="font-size:11px; color:#475569; text-transform:uppercase;">Fichiers (${files.length}) :</strong>
            ${files.map(f => {
              const name = typeof f === 'object' ? f.name : f;
              const url = `/api/admin/submissions/file?folder=${encodeURIComponent(sub.folder)}&file=${encodeURIComponent(name)}`;
              return `<a href="${url}" download="${name}" class="cat-btn-sm cat-btn-light" style="font-size:11px; text-decoration:none; text-align:left; padding:3px 8px;">${name}</a>`;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function register(app) {
  let cache = [];

  app.loadAdminSubmissions = async function loadAdminSubmissions() {
    if (app.clientMode) return;
    try {
      const res = await fetch('/api/admin/submissions');
      if (!res.ok) return;
      const data = await res.json();
      cache = Array.isArray(data.submissions) ? data.submissions : [];
      const newCount = cache.filter(s => s.status !== 'traite').length;
      const badge = document.querySelector('#adminSubmissionsBadge');
      if (badge) badge.textContent = String(newCount);
      app.renderAdminSubmissions();
    } catch (err) { console.warn('Could not load submissions:', err); }
  };

  app.renderAdminSubmissions = function renderAdminSubmissions() {
    const list = document.querySelector('#adminSubmissionsList');
    if (!list) return;
    const filter = document.querySelector('#adminSubFilter')?.value || 'all';
    let filtered = cache;
    if (filter === 'nouveau') filtered = cache.filter(s => s.status !== 'traite');
    if (filter === 'traite') filtered = cache.filter(s => s.status === 'traite');

    if (!filtered.length) {
      list.innerHTML = `<div style="text-align:center; color:#64748b; padding:48px 16px; font-size:14px;">Aucune création trouvée pour ce filtre.</div>`;
      return;
    }
    list.innerHTML = filtered.map(renderItem).join('');
    list.querySelectorAll('.toggle-sub-status-btn').forEach(btn => {
      btn.onclick = async () => {
        const folder = btn.dataset.folder;
        const status = btn.dataset.next;
        btn.disabled = true;
        try {
          await fetch('/api/admin/submissions/status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ folder, status })
          });
          await app.loadAdminSubmissions();
        } finally { btn.disabled = false; }
      };
    });
    list.querySelectorAll('.delete-sub-btn').forEach(btn => {
      btn.onclick = async () => {
        if (!confirm('Voulez-vous supprimer définitivement ce dossier de commande ?')) return;
        const folder = btn.dataset.folder;
        btn.disabled = true;
        try {
          await fetch('/api/admin/submissions/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ folder })
          });
          await app.loadAdminSubmissions();
        } finally { btn.disabled = false; }
      };
    });
  };
}

export function initialize(app) {
  const btn = document.querySelector('#btnAdminSubmissions');
  const modal = document.querySelector('#adminSubmissionsModal');
  const closeBtn = document.querySelector('#closeAdminSubmissionsBtn');
  const filter = document.querySelector('#adminSubFilter');
  const refreshBtn = document.querySelector('#refreshAdminSubBtn');

  if (!app.clientMode && btn) {
    btn.style.display = 'inline-flex';
    app.loadAdminSubmissions?.();
  }

  btn?.addEventListener('click', () => {
    if (modal) modal.hidden = false;
    app.loadAdminSubmissions?.();
  });

  const close = () => { if (modal) modal.hidden = true; };
  closeBtn?.addEventListener('click', close);
  modal?.addEventListener('click', (e) => { if (e.target === modal) close(); });
  filter?.addEventListener('change', () => app.renderAdminSubmissions?.());
  refreshBtn?.addEventListener('click', () => app.loadAdminSubmissions?.());
}
