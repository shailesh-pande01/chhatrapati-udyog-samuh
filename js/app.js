/**
 * ═══════════════════════════════════════════════════════════════
 *  app.js  –  छत्रपती उद्योग समूह
 * ═══════════════════════════════════════════════════════════════
 *  हे फाईल बदलण्याची गरज नाही.
 *  You should NOT need to edit this file.
 *  All content is controlled from js/data.js
 * ═══════════════════════════════════════════════════════════════
 */

/* ── Helpers ────────────────────────────────────────────────── */
const ICONS  = ['🏡', '🌾', '🏘️', '🌳'];
const COLORS = ['var(--saffron)', 'var(--green)', 'var(--saffron)', 'var(--green)'];

// Active projects only (active: true in data.js)
function activeProjects() {
  return SITE.projects.filter(function (p) { return p.active; });
}

// WhatsApp link builder
function wpLink(phone, projectName) {
  var msg = projectName
    ? 'नमस्कार, मला ' + projectName + ' योजनेबद्दल माहिती हवी आहे.'
    : 'नमस्कार, मला प्लॉटबद्दल माहिती हवी आहे.';
  return 'https://wa.me/91' + phone + '?text=' + encodeURIComponent(msg);
}

/* ══════════════════════════════════════════════════════════════
   PAGE NAVIGATION
   ══════════════════════════════════════════════════════════════ */
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(function (p) {
    p.classList.remove('active');
  });
  // Remove active from all nav buttons
  document.querySelectorAll('.nav-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  // Show the target page
  var target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  // Mark the correct nav button
  var btn = document.querySelector('.nav-btn[data-page="' + pageId + '"]');
  if (btn) btn.classList.add('active');
  // Scroll back to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════════════════════════════════
   RENDER: TOP STRIP phone number
   ══════════════════════════════════════════════════════════════ */
function fillTopStrip() {
  var el = document.getElementById('top-phone');
  if (el) el.textContent = SITE.contacts.primary.phone;
}

/* ══════════════════════════════════════════════════════════════
   RENDER: HOME – project cards
   ══════════════════════════════════════════════════════════════ */
function fillHomeProjects() {
  var container = document.getElementById('home-projects');
  if (!container) return;
  var projects = activeProjects();
  var html = '';

  projects.forEach(function (p, i) {
    html += '<div class="proj-card" onclick="showPage(\'plot-info\')">';
    html += '  <div class="icon">' + ICONS[i % ICONS.length] + '</div>';
    html += '  <h3>' + p.name + '</h3>';
    html += '  <p>' + p.location + '</p>';
    html += '  <div class="arrow">पाहा →</div>';
    html += '</div>';
  });

  container.innerHTML = html;
}

/* ══════════════════════════════════════════════════════════════
   RENDER: YOJANA – plan overview cards
   ══════════════════════════════════════════════════════════════ */
function fillYojanaCards() {
  var container = document.getElementById('yojana-cards');
  if (!container) return;
  var projects = activeProjects();
  var html = '';

  projects.forEach(function (p, i) {
    var color = COLORS[i % COLORS.length];
    html += '<div class="plan-card">';

    // Card header
    html += '<div class="plan-card-header" style="background:' + color + '">';
    html += '  <div class="icon">' + ICONS[i % ICONS.length] + '</div>';
    html += '  <div><h3>' + p.name + '</h3><small>📍 ' + p.location + '</small></div>';
    html += '</div>';

    // Card body
    html += '<div class="plan-card-body">';
    html += infoRow('📍 ठिकाण',     p.location);
    html += infoRow('📐 प्लॉट आकार', p.plotSizes);
    html += infoRow('🟢 उपलब्ध प्लॉट',
      '<span class="badge-available">' + p.availablePlots + ' उपलब्ध</span>');
    html += infoRow('💰 किंमत',      p.price);
    html += infoRow('📄 कागदपत्रे',  p.documents);

    // Buttons
    html += '<div class="btn-row">';
    html += '  <button class="btn btn-saffron" onclick="openModal(' + i + ')">📞 चौकशी करा</button>';
    html += '  <a href="tel:' + SITE.contacts.primary.phone + '" class="btn btn-green">📲 फोन करा</a>';
    html += '</div>';

    html += '</div></div>'; // close body + card
  });

  container.innerHTML = html;
}

/* ══════════════════════════════════════════════════════════════
   RENDER: PLOT INFO – detailed cards with photo gallery
   ══════════════════════════════════════════════════════════════ */
function fillPlotCards() {
  var container = document.getElementById('plot-cards');
  if (!container) return;
  var projects = activeProjects();
  var html = '';

  projects.forEach(function (p, i) {
    var color = COLORS[i % COLORS.length];
    html += '<div class="plan-card" style="margin-bottom:24px;">';

    // Header
    html += '<div class="plan-card-header" style="background:' + color + '">';
    html += '  <div class="icon">' + ICONS[i % ICONS.length] + '</div>';
    html += '  <div><h3>' + p.name + '</h3><small>📍 ' + p.location + ', महाराष्ट्र</small></div>';
    html += '</div>';

    // Body
    html += '<div class="plan-card-body">';
    html += infoRow('🏷️ योजनेचे नाव', p.name);
    html += infoRow('📍 ठिकाण',       p.location);
    html += infoRow('📐 प्लॉट आकार',  p.plotSizes);
    html += infoRow('🟢 उपलब्ध प्लॉट',
      '<span class="badge-available">' + p.availablePlots + ' उपलब्ध</span>');
    html += infoRow('🔴 विकलेले प्लॉट',
      '<span style="color:#b00;font-weight:700;">' + p.soldPlots + ' विकले</span>');
    html += infoRow('🛣️ रस्ता',       p.road);
    html += infoRow('💧 पाणी',        p.water);
    html += infoRow('⚡ वीज',         p.electricity);
    html += infoRow('📄 कागदपत्रे',   p.documents);
    html += infoRow('💰 किंमत',
      '<span style="color:var(--saffron-dk);font-weight:700;">' + p.price + '</span>');

    // Photo gallery
    if (p.photos && p.photos.length > 0) {
      html += '<div style="margin-top:16px;">';
      html += '<p style="font-weight:700;color:var(--green-dk);margin-bottom:10px;">📷 जागेचे फोटो:</p>';
      html += '<div class="photo-grid">';
      p.photos.forEach(function (src) {
        html += '<img class="photo-thumb" src="' + src + '" alt="' + p.name + ' फोटो"'
              + ' onclick="openLightbox(\'' + src + '\')"'
              + ' onerror="this.style.display=\'none\'" />';
      });
      html += '</div></div>';
    }

    // Buttons
    html += '<div class="btn-row">';
    html += '  <button class="btn btn-saffron" onclick="openModal(' + i + ')">📞 किंमत विचारा</button>';
    html += '  <a href="' + wpLink(SITE.contacts.primary.phone, p.name) + '"'
          + '     target="_blank" class="btn btn-green">💬 WhatsApp</a>';
    html += '</div>';

    html += '</div></div>';
  });

  container.innerHTML = html;
}

/* ══════════════════════════════════════════════════════════════
   RENDER: CONTACT PAGE
   ══════════════════════════════════════════════════════════════ */
function fillContactPage() {
  var container = document.getElementById('contact-cards');
  if (!container) return;
  var c = SITE.contacts;
  var html = '';

  // Primary contact
  html += contactCard(c.primary, true);
  // Secondary contact
  html += contactCard(c.secondary, false);

  container.innerHTML = html;
}

function contactCard(c, isPrimary) {
  var html = '<div class="contact-card"' + (isPrimary ? '' : ' style="margin-top:20px;"') + '>';
  html += '<div class="avatar">👨‍💼</div>';
  html += '<h3>' + c.name + '</h3>';
  html += '<p class="role">' + c.role + ' – छत्रपती उद्योग समूह</p>';
  html += '<div class="phone-display">📞 ' + c.phone + '</div>';
  html += '<div class="contact-btns">';
  html += '  <a href="tel:' + c.phone + '" class="btn-call">📞 फोन करा</a>';
  html += '  <a href="' + wpLink(c.phone, null) + '" target="_blank" class="btn-wp">💬 WhatsApp करा</a>';
  html += '</div>';
  if (isPrimary) {
    html += '<div class="contact-note">';
    html += '  <strong>⏰ वेळ:</strong> सकाळी ९:०० ते सायंकाळी ७:०० पर्यंत<br/>';
    html += '  <strong>📍 कार्यालय:</strong> ' + SITE.location + '<br/>';
    html += '  <strong>🗓️ जागा पाहायची असल्यास</strong> आधी फोन करून वेळ ठरवा.';
    html += '</div>';
  }
  html += '</div>';
  return html;
}

/* ══════════════════════════════════════════════════════════════
   RENDER: FOOTER
   ══════════════════════════════════════════════════════════════ */
function fillFooter() {
  var el = document.getElementById('site-footer');
  if (!el) return;
  var p = SITE.contacts.primary;
  var s = SITE.contacts.secondary;

  el.innerHTML =
    '<strong>' + SITE.name + '</strong><br/>' +
    SITE.location + '<br/>' +
    '📞 <a href="tel:' + p.phone + '">' + p.phone + '</a>' +
    ' &nbsp;|&nbsp; संपर्क: ' + p.name + '<br/>' +
    '📞 <a href="tel:' + s.phone + '">' + s.phone + '</a>' +
    ' &nbsp;|&nbsp; संपर्क: ' + s.name + '<br/>' +
    '<span style="font-size:12px;opacity:0.6;">जय शिवाजी | जय भवानी</span>';
}

/* ══════════════════════════════════════════════════════════════
   INQUIRY MODAL
   ══════════════════════════════════════════════════════════════ */
function openModal(projectIndex) {
  var projects = activeProjects();
  var p   = projects[projectIndex];
  var con = SITE.contacts.primary;

  document.getElementById('modal-project-name').textContent = '📋 योजना: ' + p.name;
  document.getElementById('modal-phone').textContent        = con.phone;
  document.getElementById('modal-contact-name').textContent = 'संपर्क: ' + con.name;
  document.getElementById('modal-call-btn').href            = 'tel:' + con.phone;
  document.getElementById('modal-wp-btn').href              = wpLink(con.phone, p.name);

  document.getElementById('inquiry-modal').classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeModal() {
  document.getElementById('inquiry-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleModalClick(e) {
  // Close only when clicking the dark overlay, not the modal box itself
  if (e.target === document.getElementById('inquiry-modal')) closeModal();
}

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
    closeLightbox();
  }
});

/* ══════════════════════════════════════════════════════════════
   PHOTO LIGHTBOX
   ══════════════════════════════════════════════════════════════ */
function openLightbox(src) {
  var lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════════════════
   UTILITY: info row HTML builder
   ══════════════════════════════════════════════════════════════ */
function infoRow(label, value) {
  return '<div class="info-row">'
       + '<span class="label">' + label + '</span>'
       + '<span class="value">' + value + '</span>'
       + '</div>';
}

/* ══════════════════════════════════════════════════════════════
   INIT – run everything when the page loads
   ══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  fillTopStrip();
  fillHomeProjects();
  fillYojanaCards();
  fillPlotCards();
  fillContactPage();
  fillFooter();
});
