// ============================================================
//  PlaySphere — Shared Utilities
// ============================================================

// ── Custom Cursor (all pages) ────────────────────────────────
// Inject cursor elements if they don't already exist in the HTML
(function initCursor() {
  if (!document.getElementById('cursor')) {
    const dot  = document.createElement('div');
    const ring = document.createElement('div');
    dot.id  = 'cursor';
    ring.id = 'cursorRing';
    document.body.prepend(ring);
    document.body.prepend(dot);
  }

  // Add cursor CSS dynamically so it applies on every page
  const style = document.createElement('style');
  style.textContent = `
    body { cursor: none !important; }
    a, button, .game-card, .trending-item, .tab, .filter-btn,
    .play-now, .feature-card, .stat-card, [role="button"] {
      cursor: none !important;
    }
    #cursor {
      width: 10px; height: 10px;
      background: var(--accent, #7C5CFC);
      border-radius: 50%;
      position: fixed; top: 0; left: 0;
      pointer-events: none; z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width .2s, height .2s;
      mix-blend-mode: screen;
    }
    #cursorRing {
      width: 36px; height: 36px;
      border: 1.5px solid rgba(124,92,252,0.5);
      border-radius: 50%;
      position: fixed; top: 0; left: 0;
      pointer-events: none; z-index: 9998;
      transform: translate(-50%, -50%);
      transition: width .25s, height .25s;
    }
  `;
  document.head.appendChild(style);

  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Expand cursor on interactive elements — re-runs after DOM updates
  function attachHoverListeners() {
    document.querySelectorAll(
      'a, button, .game-card, .trending-item, .tab, .filter-btn, ' +
      '.play-now, .feature-card, .stat-card, [role="button"]'
    ).forEach(el => {
      if (el._cursorBound) return;
      el._cursorBound = true;
      el.addEventListener('mouseenter', () => {
        cursor.style.width  = '16px';
        cursor.style.height = '16px';
        ring.style.width    = '52px';
        ring.style.height   = '52px';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width  = '10px';
        cursor.style.height = '10px';
        ring.style.width    = '36px';
        ring.style.height   = '36px';
      });
    });
  }

  // Run once immediately, then again after games.js renders cards
  document.addEventListener('DOMContentLoaded', attachHoverListeners);
  // Also run after a short delay to catch dynamically rendered cards
  setTimeout(attachHoverListeners, 600);
})();

// ── Scroll Reveal ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// ── Mobile Nav Toggle ────────────────────────────────────────
if (window.innerWidth < 768) {
  document.addEventListener('DOMContentLoaded', () => {
    const nav      = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    if (!nav || !navLinks) return;

    const hamburger = document.createElement('button');
    hamburger.innerHTML   = '☰';
    hamburger.style.cssText =
      'background:none;border:none;color:var(--text);font-size:24px;cursor:none;' +
      'padding:4px 8px;border-radius:6px;';
    hamburger.setAttribute('aria-label', 'Toggle navigation');

    navLinks.style.cssText =
      'position:absolute;top:64px;left:0;right:0;background:var(--surface,#0E1422);' +
      'flex-direction:column;padding:20px;display:none;' +
      'border-bottom:1px solid var(--border);z-index:99;';

    nav.appendChild(hamburger);

    hamburger.addEventListener('click', () => {
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      hamburger.innerHTML    = open ? '☰' : '✕';
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.style.display = 'none';
        hamburger.innerHTML    = '☰';
      });
    });
  });
}

// ── Dynamic Year in Footer ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.footer-copy').forEach(el => {
    el.textContent = el.textContent.replace(/\d{4}/, new Date().getFullYear());
  });
});