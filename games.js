// ============================================================
//  🎮 PLAYSPHERE — GAMES DATA FILE
//  ============================================================
//  HOW TO ADD A NEW GAME:
//  1. Copy one of the existing game objects below
//  2. Fill in your game's details
//  3. Save the file — it automatically appears on ALL pages
//     (browse.html, index.html, trending.html)
//  That's it! No other files need to be edited.
// ============================================================

const GAMES = [
  {
    id: 'snake',
    title: 'Snake Classic',
    desc: 'The timeless arcade classic, rebuilt for the web. Grow your snake, beat your high score, challenge the leaderboard.',
    emoji: '🐍',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #4c1d95 40%, #7c3aed 70%, #a855f7 100%)',
    category: 'arcade',
    badge: 'hot',
    rating: 4.9,
    players: 3200,
    url: 'games/snake/snake.html',
    trending: true,
    trendChange: '+24%',
    featured: true,
  },
  {
    id: 'tictactoe',
    title: 'Tic-Tac-Toe',
    desc: 'Challenge our unbeatable AI or play with a friend. Classic strategy, neon style.',
    emoji: '⭕',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #7c2d12 40%, #ea580c 70%, #fb923c 100%)',
    category: 'strategy',
    badge: 'new',
    rating: 4.7,
    players: 1100,
    url: 'games/tic-tac-toe/tictactoe.html',
    trending: true,
    trendChange: '+9%',
    featured: true,
  },
  {
    id: 'memory',
    title: 'Memory Match',
    desc: 'Flip cards and test your memory. Can you clear the board in record time?',
    emoji: '🃏',
    gradient: 'linear-gradient(135deg, #00111a 0%, #065f46 40%, #059669 70%, #34d399 100%)',
    category: 'puzzle',
    badge: 'top',
    rating: 4.8,
    players: 876,
    url: 'games/memory/memory.html',
    trending: true,
    trendChange: '+7%',
    featured: false,
  },
  {
    id: 'snakeladder',
    title: 'Snakes & Ladders',
    desc: 'Roll the dice and race to the top! Classic board game with smooth animations and multiplayer fun.',
    emoji: '🎲',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #3b82f6 70%, #60a5fa 100%)',
    category: 'board',
    badge: 'top',
    rating: 4.8,
    players: 654,
    url: 'games/snake-and-ladder/snakeandladder.html',
    trending: false,
    trendChange: '+3%',
    featured: false,
  },
  {
    id: 'typing',
    title: 'Typing Speed',
    desc: 'Test your typing speed and accuracy! Neon edition with 30s, 60s, and 120s time modes.',
    emoji: '⌨️',
    gradient: 'linear-gradient(135deg, #030508 0%, #1a0a3e 40%, #00cfff 70%, #00ff88 100%)',
    category: 'skill',
    badge: 'new',
    rating: 4.9,
    players: 1900,
    url: 'games/typing-speed/typing-speed.html',
    trending: true,
    trendChange: '+10%',
    featured: false,
  },
  {
    id: 'whack',
    title: 'Whack-a-Mole',
    desc: 'Click the moles before they hide! Three difficulty levels and a custom cursor challenge.',
    emoji: '🦔',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #3a1a0a 40%, #ffd700 70%, #ff9f43 100%)',
    category: 'action',
    badge: 'hot',
    rating: 4.8,
    players: 2300,
    url: 'games/whack-a-mole/whack-a-mole.html',
    trending: true,
    trendChange: '+15%',
    featured: false,
  },
  {
    id: '2048',
    title: '2048',
    desc: 'Merge tiles to reach 2048! Strategic puzzle game with neon aesthetics and smooth swipe controls.',
    emoji: '🔢',
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 40%, #ffd700 70%, #ff9f43 100%)',
    category: 'puzzle',
    badge: 'new',
    rating: 4.9,
    players: 2100,
    url: 'games/2048/2048.html',
    trending: true,
    trendChange: '+6%',
    featured: false,
  },
  {
    id: 'aim',
    title: 'Aim Trainer',
    desc: 'Test your reflexes! Click targets fast and track your reaction time across multiple difficulty modes.',
    emoji: '🎯',
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #7c2d12 40%, #ff4466 70%, #ff9f43 100%)',
    category: 'action',
    badge: 'hot',
    rating: 4.8,
    players: 1800,
    url: 'games/aim-trainer/aim-trainer.html',
    trending: true,
    trendChange: '+5%',
    featured: false,
  },
  {
    id: 'asteroids',
    title: 'Asteroids',
    desc: 'Destroy asteroids and survive! Progressive difficulty with shield mechanics and boss waves.',
    emoji: '☄️',
    gradient: 'linear-gradient(135deg, #0f0a2e 0%, #1e0a3e 40%, #00cfff 70%, #a855f7 100%)',
    category: 'action',
    badge: 'top',
    rating: 4.9,
    players: 2400,
    url: 'games/asteroids/asteroids.html',
    trending: true,
    trendChange: '+12%',
    featured: false,
  },
  {
    id: 'runner',
    title: 'Endless Runner',
    desc: 'Jump and dodge obstacles! Collect coins and power-ups to beat your high score.',
    emoji: '🏃',
    gradient: 'linear-gradient(135deg, #0a1a2e 0%, #1a0a3e 40%, #00cfff 70%, #ff6b9d 100%)',
    category: 'action',
    badge: 'new',
    rating: 4.7,
    players: 1500,
    url: 'games/endless-runner/endless-runner.html',
    trending: false,
    trendChange: '+4%',
    featured: false,
  },
  {
    id: 'flappy',
    title: 'Flappy Bird',
    desc: 'Tap to flap through the pipes! Classic arcade challenge reimagined with a neon glow.',
    emoji: '🐦',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #3a1a0a 40%, #ffd700 70%, #ff9f43 100%)',
    category: 'arcade',
    badge: 'hot',
    rating: 4.9,
    players: 3800,
    url: 'games/flappy-bird/flappy-bird.html',
    trending: true,
    trendChange: '+18%',
    featured: true,
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    desc: 'Uncover tiles and avoid the mines! Three difficulty levels to test your logic skills.',
    emoji: '💣',
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #3a0a2e 40%, #ff4466 70%, #a855f7 100%)',
    category: 'puzzle',
    badge: 'top',
    rating: 4.8,
    players: 2200,
    url: 'games/minesweeper/minesweeper.html',
    trending: true,
    trendChange: '+4%',
    featured: false,
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    desc: 'Fill the 9×9 grid with numbers 1–9. Three difficulty levels with hints and error-checking.',
    emoji: '🔢',
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #3a0a2e 40%, #4f46e5 70%, #818cf8 100%)',
    category: 'puzzle',
    badge: 'top',
    rating: 4.8,
    players: 3200,
    url: 'games/sudoku/sudoku.html',
    trending: false,
    trendChange: '+3%',
    featured: false,
  },
  {
    id: 'apex',
    title: 'Apex Velocity',
    desc: 'High-speed neon racing. Dodge obstacles, hit boost pads, and reach maximum velocity.',
    emoji: '🏎️',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a3e 40%, #ff4466 70%, #ff9f43 100%)',
    category: 'action',
    badge: 'new',
    rating: 4.8,
    players: 2300,
    url: 'games/apex-velocity/apex-velocity-v2.html',
    trending: false,
    trendChange: '+8%',
    featured: true,
  },
  {
    id: 'deadshot',
    title: 'Deadshot',
    desc: 'Precision aim-training shooter. Track accuracy stats, hit headshots, and climb the kill leaderboard.',
    emoji: '🔫',
    gradient: 'linear-gradient(135deg, #030508 0%, #1a0a3e 40%, #00cfff 70%, #00ff88 100%)',
    category: 'action',
    badge: 'new',
    rating: 4.8,
    players: 1900,
    url: 'games/deadshot-multiplayer/deadshot-multiplayer.html',
    trending: false,
    trendChange: '+11%',
    featured: false,
  },
  {
    id: 'neon-void',
    title: 'neon-void',
    desc: 'Precision aim-training shooter. Track accuracy stats, hit headshots, and climb the kill leaderboard.',
    emoji: '🚀',
    gradient: 'linear-gradient(135deg, #306eca 0%, #150d29 40%, #40555a 70%, #3bae79 100%)',
    category: 'action',
    badge: 'new',
    rating: 4.8,
    players: 1900,
    url: 'games/neon-void/neon-void.html',
    trending: false,
    trendChange: '+11%',
    featured: false,
  },
];

// ============================================================
//  LEADERBOARD DATA
// ============================================================
const LEADERBOARD = [
  { rank: '🥇', name: 'ProSnake99', game: 'Snake Classic', pts: '48,200' },
  { rank: '🥈', name: 'FlappyKing', game: 'Flappy Bird', pts: '41,750' },
  { rank: '🥉', name: 'MindMaster', game: 'Memory Match', pts: '38,400' },
  { rank: '4', name: 'PongWizard', game: 'Snakes & Ladders', pts: '32,100' },
  { rank: '5', name: 'NeonPlayer', game: 'All Games', pts: '28,500' },
];

// ============================================================
//  BADGE CONFIG
// ============================================================
const BADGES = {
  hot: '<span class="card-badge badge-hot">🔥 Hot</span>',
  new: '<span class="card-badge badge-new">✨ New</span>',
  top: '<span class="card-badge badge-top">⭐ Top</span>',
  '': '',
};

// ============================================================
//  RENDERER — builds card HTML
// ============================================================
function buildGameCard(game) {
  return `
    <a href="game-player.html?id=${game.id}" style="text-decoration:none;color:inherit;display:block;">
      <div class="game-card" data-category="${game.category}" data-id="${game.id}">
        <div class="card-thumb">
          <div class="thumb-gradient" style="background:${game.gradient};"></div>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:52px;">${game.emoji}</div>
          <div class="card-thumb-overlay">
            <div class="play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
          </div>
          ${BADGES[game.badge] || ''}
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-category">${game.category.charAt(0).toUpperCase() + game.category.slice(1)}</span>
            <span class="card-rating">★ ${game.rating.toFixed(1)}</span>
          </div>
          <div class="card-title">${game.title}</div>
          <div class="card-desc">${game.desc}</div>
          <div class="card-footer">
            <span style="font-size:12px;color:var(--muted)" title="Live count updates every 5 seconds">
              <span class="player-count" data-game="${game.id}">${game.players.toLocaleString()}</span> playing
            </span>
            <span class="play-now">Play Now →</span>
          </div>
        </div>
      </div>
    </a>`;
}

// ============================================================
//  AUTO-RENDER: Browse Page
// ============================================================
function renderBrowsePage() {
  const grid = document.getElementById('gamesGrid');
  if (!grid) return;
  grid.innerHTML = GAMES.map(buildGameCard).join('');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.dataset.cat;
    if (!cat) return;
    const count = cat === 'all' ? GAMES.length : GAMES.filter(g => g.category === cat).length;
    btn.textContent = `${btn.dataset.label} (${count})`;
  });
}

// ============================================================
//  AUTO-RENDER: Trending Page
// ============================================================
function renderTrendingList() {
  const list = document.getElementById('trendingList');
  if (!list) return;
  const trending = GAMES.filter(g => g.trending).sort((a, b) => b.players - a.players);

  list.innerHTML = trending.map((game, i) => {
    const rank = String(i + 1).padStart(2, '0');
    const isTop = i < 3;
    return `
      <a href="game-player.html?id=${game.id}" style="text-decoration:none;color:inherit;">
        <div class="trending-item">
          <div class="trend-rank ${isTop ? 'top' : ''}">${rank}</div>
          <div class="trend-thumb">
            <div style="width:100%;height:100%;background:${game.gradient};display:flex;align-items:center;justify-content:center;font-size:18px;">${game.emoji}</div>
          </div>
          <div class="trend-info">
            <div class="trend-name">${game.title}</div>
            <div class="trend-players">${game.players.toLocaleString()} playing</div>
          </div>
          <div class="trend-change">↑ ${game.trendChange}</div>
        </div>
      </a>`;
  }).join('');
}

// ============================================================
//  AUTO-RENDER: Leaderboard
// ============================================================
function renderLeaderboard() {
  const list = document.getElementById('leaderboardList');
  if (!list) return;
  list.innerHTML = LEADERBOARD.map(entry => `
    <div class="leaderboard-item">
      <div class="leaderboard-rank">${entry.rank}</div>
      <div class="leaderboard-info">
        <div class="leaderboard-name">${entry.name}</div>
        <div class="leaderboard-score">${entry.game} · ${entry.pts} pts</div>
      </div>
    </div>`).join('');
}

// ============================================================
//  LIVE PLAYER COUNT ANIMATION
// ============================================================
const _playerCounts = {};
GAMES.forEach(g => { _playerCounts[g.id] = g.players; });

setInterval(() => {
  document.querySelectorAll('.player-count').forEach(el => {
    const id = el.dataset.game;
    if (_playerCounts[id] !== undefined) {
      _playerCounts[id] += Math.floor(Math.random() * 20) - 10;
      _playerCounts[id] = Math.max(100, _playerCounts[id]);
      el.textContent = _playerCounts[id].toLocaleString();
    }
  });
}, 5000);

// ============================================================
//  RUN ALL RENDERERS ON PAGE LOAD
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderBrowsePage();
  renderTrendingList();
  renderLeaderboard();
});
