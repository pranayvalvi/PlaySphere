// Category filtering
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    
    const category = this.textContent.toLowerCase();
    document.querySelectorAll('.game-card').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Signup modal
document.getElementById('signupBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:1000;backdrop-filter:blur(10px)';
  modal.innerHTML = `
    <div style="background:var(--card);border:1px solid var(--border);border-radius:24px;padding:48px;max-width:420px;width:90%;position:relative">
      <button onclick="this.closest('div').parentElement.remove()" style="position:absolute;top:20px;right:20px;background:none;border:none;color:var(--muted);font-size:24px;cursor:pointer">&times;</button>
      <h2 style="font-family:'Syne',sans-serif;font-size:32px;margin-bottom:12px">Join PlaySphere</h2>
      <p style="color:var(--muted);margin-bottom:32px">Create your free account and start playing!</p>
      <form onsubmit="alert('Account created! Welcome to PlaySphere 🎮');this.closest('div').parentElement.remove();return false">
        <input type="email" placeholder="Email" required style="width:100%;padding:14px;margin-bottom:16px;background:var(--surface);border:1px solid var(--border);border-radius:12px;color:var(--text);font-size:15px">
        <input type="password" placeholder="Password" required style="width:100%;padding:14px;margin-bottom:16px;background:var(--surface);border:1px solid var(--border);border-radius:12px;color:var(--text);font-size:15px">
        <input type="text" placeholder="Username" required style="width:100%;padding:14px;margin-bottom:24px;background:var(--surface);border:1px solid var(--border);border-radius:12px;color:var(--text);font-size:15px">
        <button type="submit" class="btn-primary" style="width:100%;cursor:pointer">Create Account</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
});

// Dynamic player counts
const playerCounts = {
  snake: 3200, tictactoe: 1100, memory: 876, snakeladder: 654,
  '2048': 2100, aim: 1800, asteroids: 2400, runner: 1500,
  flappy: 3800, minesweeper: 2200, sudoku: 3200, typing: 1900, whack: 2300
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
