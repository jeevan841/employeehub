* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; line-height: 1.5; }
body { background: #fafafa; }
a { color: #0066cc; text-decoration: none; }
a:hover { text-decoration: underline; }

/* Layout */
.app-shell { display: grid; grid-template-columns: 220px 1fr; min-height: 100vh; }
.sidebar { background: #fff; border-right: 1px solid #e0e0e0; padding: 1.5rem 1rem; position: sticky; top: 0; height: 100vh; }
.brand { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem; font-weight: 700; }
.brand-mark { width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #0052cc, #2b82ff); color: white; display: inline-flex; align-items: center; justify-content: center; }
.sidebar nav { display: flex; flex-direction: column; gap: 0.25rem; }
.nav-link { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.75rem 0.8rem; border-radius: 8px; color: #475569; font-weight: 500; }
.nav-link:hover { background: #f3f7ff; text-decoration: none; }
.nav-link.active { background: #edf3ff; color: #0052cc; }
.nav-link.disabled { opacity: 0.55; cursor: not-allowed; }
.main-content { display: flex; flex-direction: column; width: 100%; }
.topbar { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; background: #fff; border-bottom: 1px solid #e4e7eb; }
.topbar h1 { margin: 0.25rem 0 0 0; font-size: 1.45rem; }
.eyebrow { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.72rem; color: #667085; }
.topbar-user { border: 1px solid #e0e0e0; background: #f8fafc; border-radius: 999px; padding: 0.5rem 0.9rem; color: #475467; }
.page-content { padding: 2rem; }
.page-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
.page-title h2 { margin: 0.3rem 0; font-size: 2rem; }
.muted { color: #667085; }

.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1.25rem; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04); }
.card-heading { margin-bottom: 1rem; }
.card-heading h3 { margin: 0; font-size: 1rem; }
.stat-label { color: #667085; font-size: 0.82rem; margin: 0; }
.stat-value { display: block; margin-top: 0.5rem; font-size: 2rem; color: #0f172a; }
.dashboard-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; }
.quick-actions { display: flex; flex-direction: column; gap: 0.75rem; }
.button { border: none; border-radius: 8px; padding: 0.75rem 1rem; font-weight: 600; cursor: pointer; }
.button.primary { background: #0052cc; color: #fff; }
.button.secondary { background: #eff3fa; color: #1f2937; }
.button:disabled { cursor: not-allowed; opacity: 0.6; }

.table-card { background: #fff; border: 1px solid #edf1f5; border-radius: 12px; overflow: hidden; }
.table-card table { width: 100%; border-collapse: collapse; }
.table-card th, .table-card td { padding: 0.9rem 1rem; border-bottom: 1px solid #edf1f5; text-align: left; }
.table-card th { background: #f8fafc; color: #475467; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; }
.table-card td { font-size: 0.9rem; color: #1f2937; }

.badge { display: inline-flex; align-items: center; gap: 0.5rem; border-radius: 999px; padding: 0.35rem 0.7rem; font-size: 0.78rem; font-weight: 600; }
.badge i { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
.badge-success { background: #ebfdf5; color: #047857; }
.badge-success i { background: #047857; }
.badge-warning { background: #fff8db; color: #b45309; }
.badge-warning i { background: #b45309; }
.badge-neutral { background: #f3f4f6; color: #475467; }
.badge-neutral i { background: #475467; }

.avatar { display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: linear-gradient(135deg, #6b7cff, #8b5cf6); color: #fff; font-weight: 700; }
.avatar-small { width: 32px; height: 32px; font-size: 0.7rem; }
.avatar-medium { width: 44px; height: 44px; font-size: 0.78rem; }
.avatar-large { width: 72px; height: 72px; font-size: 1.3rem; }

.profile-header { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; }
.profile-hero { display: flex; align-items: flex-end; gap: 1.5rem; }
.profile-info h1 { margin: 0; font-size: 2rem; }
.profile-meta { margin-top: 1rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; }
.profile-meta-item { padding-top: 0.75rem; border-top: 1px solid #edf1f5; }
.profile-meta-label { font-size: 0.8rem; color: #667085; text-transform: uppercase; letter-spacing: 0.06em; }
.profile-meta-value { margin-top: 0.35rem; font-weight: 600; color: #1f2937; }
.profile-actions { margin-top: 1rem; display: flex; gap: 0.75rem; }
.profile-tabs { display: flex; gap: 1.5rem; margin: 1.5rem 0; border-bottom: 1px solid #e5e7eb; }
.profile-tab { border: none; background: transparent; padding: 0.8rem 0; font-weight: 600; color: #475467; cursor: pointer; }
.profile-tab.active { color: #0052cc; border-bottom: 2px solid #0052cc; }
.profile-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 1rem; }
.profile-section { display: flex; flex-direction: column; gap: 0.75rem; }
.profile-section-item { display: flex; justify-content: space-between; gap: 1rem; border-bottom: 1px solid #edf1f5; padding-bottom: 0.75rem; }
.profile-section-label { color: #667085; }
.profile-section-value { font-weight: 600; color: #1f2937; }
.skills-container { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.skill-badge { display: inline-flex; align-items: center; gap: 0.5rem; border-radius: 999px; background: #edf3ff; color: #0052cc; padding: 0.5rem 0.8rem; font-weight: 600; }
.skill-level { color: #667085; font-size: 0.75rem; }
.manager-card { display: flex; align-items: center; gap: 1rem; background: #f8fafc; border: 1px solid #edf1f5; border-radius: 10px; padding: 0.85rem; color: inherit; }
.manager-card:hover { text-decoration: none; }
.manager-info h4 { margin: 0; }
.manager-info p { margin: 0.2rem 0 0 0; color: #667085; }
.coming-soon { text-align: center; padding: 3rem 1rem; }
.coming-icon { font-size: 3rem; margin-bottom: 1rem; }
.org-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 1rem; }
.org-tree { display: flex; flex-direction: column; gap: 0.75rem; }
.org-node-header { display: flex; align-items: center; gap: 0.75rem; background: #f8fafc; border: 1px solid #edf1f5; border-radius: 10px; padding: 0.8rem 1rem; }
.org-node-children { margin-top: 0.8rem; margin-left: 1.6rem; padding-left: 1rem; border-left: 2px solid #e5e7eb; display: flex; flex-direction: column; gap: 0.75rem; }
.org-node-toggle { background: none; border: none; font-size: 1rem; cursor: pointer; color: #475467; }
.org-node-toggle:disabled { visibility: hidden; }
.org-node-card { flex: 1; }
.org-node-name { font-weight: 700; }
.org-node-role { color: #667085; font-size: 0.8rem; }
.org-node-department { color: #1f2937; font-size: 0.8rem; }
.org-departments { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
.dept-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem; }
.dept-card h4 { margin: 0 0 0.75rem 0; }
.dept-stat { display: flex; justify-content: space-between; padding: 0.35rem 0; }
.dept-stat-label { color: #667085; }
.dept-stat-value { color: #0052cc; font-weight: 700; }
.empty-state { text-align: center; padding: 3rem 1rem; }
.empty-state h2 { margin-bottom: 0.5rem; }
.empty-state p { color: #667085; margin-bottom: 1rem; }
.search-input { width: 100%; padding: 0.8rem 1rem; border: 1px solid #dfe5ee; border-radius: 10px; font-size: 0.95rem; }
.toolbar { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; }
.toolbar > * { flex: 1 1 180px; }
.toolbar select { padding: 0.8rem 1rem; border: 1px solid #dfe5ee; border-radius: 10px; background: #fff; }
@media (max-width: 800px) {
  .app-shell { grid-template-columns: 1fr; }
  .sidebar { display: none; }
  .dashboard-grid { grid-template-columns: 1fr; }
  .page-content { padding: 1rem; }
  .profile-hero { flex-direction: column; align-items: flex-start; }
  .profile-tabs { overflow-x: auto; }
  .org-node-children { margin-left: 0.75rem; padding-left: 0.75rem; }
}

/* Table card, button, and form layout from earlier project remain relevant */
.row-actions { display: flex; gap: 0.75rem; }
.row-actions button { background: transparent; border: none; color: #0052cc; font-weight: 600; cursor: pointer; }
.person-cell { display: flex; align-items: center; gap: 0.75rem; }
.person-cell span { display: flex; flex-direction: column; }
.person-cell small { color: #667085; }
.modal-backdrop { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.3); display: flex; align-items: center; justify-content: center; padding: 1rem; z-index: 1000; }
.modal { background: #fff; border-radius: 12px; border: 1px solid #edf1f5; width: min(700px, 100%); max-height: 90vh; overflow-y: auto; }
.modal-heading { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid #edf1f5; }
.modal-heading h2 { margin: 0.2rem 0 0 0; }
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; padding: 1.5rem; }
.form-grid label { display: flex; flex-direction: column; font-weight: 600; color: #475467; gap: 0.35rem; }
.form-grid input, .form-grid select { border: 1px solid #dfe5ee; border-radius: 8px; padding: 0.7rem 0.8rem; font-size: 0.95rem; }
.form-grid .full-width { grid-column: 1 / -1; }
.modal-actions { display: flex; justify-content: flex-end; gap: 0.75rem; padding: 1rem 1.5rem 1.5rem; }
.form-error { color: #b42318; margin: 0.75rem 1.5rem 0; }

@media (max-width: 768px) {
  .form-grid { grid-template-columns: 1fr; }
}

/* Generic label */
label { font-weight: 600; }

/* Employee UI helpers */
.search-input, .toolbar select { border: 1px solid #dfe5ee; border-radius: 10px; padding: 0.8rem 1rem; }
.search-input { min-width: 240px; }
button { font-family: inherit; }

/* Coming soon and list spacing */
button, input, select { font: inherit; }

.profile-tab { border-bottom: 2px solid transparent; }
.profile-tab.active { border-bottom-color: #0052cc; }

.org-node-header:hover { background: #eef4ff; }

.table-card tbody tr:last-child td { border-bottom: none; }

@media (max-width: 600px) {
  .topbar { padding: 1rem 1.25rem; }
  .page-content { padding: 1rem; }
  .page-title h2 { font-size: 1.5rem; }
  .card { padding: 1rem; }
}

/* Utility */
.hidden { display: none; }

