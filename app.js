// Category filtering
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    
    const category = this.textContent.toLowerCase().split('(')[0].trim();
    document.querySelectorAll('.game-card').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Dynamic player counts
const playerCounts = {
  snake: 3200, tictactoe: 1100, memory: 876, snakeladder: 654,
  '2048': 2100, aim: 1800, asteroids: 2400, runner: 1500,
  flappy: 3800, minesweeper: 2200, sudoku: 3200, typing: 1900, whack: 2300, apex: 2300, deadshot: 1900
};

setInterval(() => {
  document.querySelectorAll('.player-count').forEach(el => {
    const game = el.dataset.game;
    if (playerCounts[game]) {
      playerCounts[game] += Math.floor(Math.random() * 20) - 10;
      playerCounts[game] = Math.max(100, playerCounts[game]);
      el.textContent = playerCounts[game];
    }
  });
}, 5000);

// Recently played (localStorage)
function saveRecentGame(gameName, gameUrl) {
  let recent = JSON.parse(localStorage.getItem('recentGames') || '[]');
  recent = recent.filter(g => g.url !== gameUrl);
  recent.unshift({ name: gameName, url: gameUrl, time: Date.now() });
  recent = recent.slice(0, 3);
  localStorage.setItem('recentGames', JSON.stringify(recent));
}

document.querySelectorAll('.play-now').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const card = this.closest('.game-card');
    const title = card?.querySelector('.card-title')?.textContent;
    const url = this.getAttribute('href');
    if (title && url) saveRecentGame(title, url);
  });
});

// Back to top button
if (document.querySelector('.browse-container') || document.querySelector('.hero')) {
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.style.cssText = 'position:fixed;bottom:40px;right:40px;width:48px;height:48px;border-radius:50%;background:var(--accent);color:white;border:none;font-size:20px;cursor:pointer;opacity:0;transition:opacity 0.3s,transform 0.3s;z-index:999;box-shadow:0 4px 20px rgba(124,92,252,0.4);';
  backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(backToTop);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.style.opacity = '1';
      backToTop.style.transform = 'translateY(0)';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.transform = 'translateY(10px)';
    }
  });
}

// Game count badges
if (document.querySelector('.filter-btn')) {
  const cards = document.querySelectorAll('.game-card');
  const counts = {};
  cards.forEach(card => {
    const cat = card.dataset.category;
    counts[cat] = (counts[cat] || 0) + 1;
  });
  counts.all = cards.length;
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.textContent.toLowerCase().trim();
    const count = counts[cat] || 0;
    if (!btn.textContent.includes('(')) {
      btn.textContent = `${btn.textContent} (${count})`;
    }
  });
}

// Player count tooltip
document.querySelectorAll('.card-players, [style*="playing"]').forEach(el => {
  el.title = 'Live count updates every 5 seconds';
});

// Recently played section
if (document.querySelector('.hero')) {
  const recent = JSON.parse(localStorage.getItem('recentGames') || '[]');
  if (recent.length > 0) {
    const section = document.querySelector('section');
    const wrap = document.createElement('div');
    wrap.style.cssText = 'margin-bottom:40px;padding:20px;background:rgba(124,92,252,0.08);border:1px solid rgba(124,92,252,0.2);border-radius:16px;';
    const h3 = document.createElement('h3');
    h3.style.cssText = "font-family:'Syne',sans-serif;font-size:18px;margin-bottom:16px;";
    h3.textContent = 'Continue Playing';
    wrap.appendChild(h3);
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:12px;flex-wrap:wrap;';
    recent.forEach(g => {
      const safeUrl = /^game-player\.html\?/.test(g.url) ? g.url : '#';
      const a = document.createElement('a');
      a.href = safeUrl;
      a.textContent = g.name;
      a.style.cssText = 'padding:8px 16px;background:var(--card);border:1px solid var(--border);border-radius:8px;text-decoration:none;color:var(--text);font-size:14px;transition:all 0.2s;';
      a.addEventListener('mouseover', () => { a.style.borderColor = 'rgba(124,92,252,0.4)'; });
      a.addEventListener('mouseout',  () => { a.style.borderColor = 'var(--border)'; });
      row.appendChild(a);
    });
    wrap.appendChild(row);
    section.insertAdjacentElement('afterbegin', wrap);
  }
}
