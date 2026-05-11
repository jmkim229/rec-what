const GAMES = [
  { name: '폭탄 돌리기', emoji: '💣', url: 'games/bomb-pass.html', tag: '실내·전체활동' },
  { name: '눈치 게임', emoji: '👀', url: 'games/nunchigame.html', tag: '실내·소그룹' },
  { name: '업다운 퀴즈', emoji: '⬆️', url: 'games/updown.html', tag: '실내·전체활동' },
  { name: '몸으로 말해요', emoji: '🙌', url: 'games/bodyspeak.html', tag: '실내·소그룹' },
  { name: '스피드 퀴즈', emoji: '⚡', url: 'games/speedquiz.html', tag: '실내·전체활동' },
  { name: '이어달리기', emoji: '🏃', url: 'games/relay-race.html', tag: '야외·전체활동' },
  { name: '보물찾기', emoji: '🗺️', url: 'games/treasure-hunt.html', tag: '야외·전체활동' },
  { name: '단체 줄넘기', emoji: '🪢', url: 'games/group-jumprope.html', tag: '야외·전체활동' },
  { name: '수건 돌리기', emoji: '🧣', url: 'games/towel-pass.html', tag: '야외·전체활동' },
  { name: '풍선 터트리기', emoji: '🎈', url: 'games/balloon-pop.html', tag: '야외·전체활동' },
  { name: '마피아 게임', emoji: '🕵️', url: 'games/mafia.html', tag: '소그룹' },
  { name: '텔레스트레이션', emoji: '✏️', url: 'games/telestrations.html', tag: '소그룹' },
  { name: '마음 맞추기', emoji: '💞', url: 'games/mind-match.html', tag: '소그룹' },
  { name: '진실 혹은 거짓', emoji: '✅', url: 'games/truth-or-lie.html', tag: '소그룹' },
  { name: '끝말잇기', emoji: '💬', url: 'games/wordchain.html', tag: '소그룹' },
  { name: 'OX 퀴즈', emoji: '⭕', url: 'games/ox-quiz.html', tag: '전체활동' },
  { name: '빙고', emoji: '🎱', url: 'games/bingo.html', tag: '전체활동' },
  { name: '장기자랑', emoji: '🎤', url: 'games/talent-show.html', tag: '전체활동' },
  { name: '팀 릴레이', emoji: '🏅', url: 'games/team-relay.html', tag: '야외·전체활동' },
  { name: '파도타기', emoji: '🌊', url: 'games/wave.html', tag: '전체활동' },
  { name: '동물 흉내 게임', emoji: '🐘', url: 'games/animal-imitate.html', tag: '유아' },
  { name: '색깔 찾기', emoji: '🎨', url: 'games/color-hunt.html', tag: '유아' },
  { name: '풍선 놀이', emoji: '🎈', url: 'games/balloon-play.html', tag: '유아' },
  { name: '따라 하기 게임', emoji: '🪞', url: 'games/follow-me.html', tag: '유아' },
  { name: '노래 율동', emoji: '🎵', url: 'games/song-dance.html', tag: '유아' },
  { name: '방탈출 미션', emoji: '🔐', url: 'games/escape-mission.html', tag: '초등고학년' },
  { name: '토론 게임', emoji: '🗣️', url: 'games/debate-game.html', tag: '초등고학년' },
  { name: '전략 보드게임 변형', emoji: '♟️', url: 'games/strategy-board.html', tag: '초등고학년' },
  { name: '팀 미션 레이스', emoji: '🚀', url: 'games/team-mission-race.html', tag: '초등고학년' },
  { name: '창작 이야기 게임', emoji: '📖', url: 'games/story-creation.html', tag: '초등고학년' },
  { name: '빙고 게임', emoji: '🎰', url: 'games/bingo.html', tag: '성인·워크숍' },
  { name: '팀 포토 미션', emoji: '📸', url: 'games/photo-mission.html', tag: '성인·워크숍' },
  { name: '나는 누구일까요?', emoji: '🤔', url: 'games/guess-who.html', tag: '성인·워크숍' },
  { name: '몸으로 말해요 팀전', emoji: '🙌', url: 'games/body-talk.html', tag: '성인·워크숍' },
  { name: '스피드 릴레이 퀴즈', emoji: '⚡', url: 'games/relay-quiz.html', tag: '성인·워크숍' },
];

const input = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const results = document.getElementById('searchResults');

if (input) {
  input.addEventListener('input', () => {
    const q = input.value.trim();
    clearBtn.style.display = q ? 'block' : 'none';
    renderResults(q);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    results.innerHTML = '';
    results.classList.remove('active');
    input.focus();
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap') && !e.target.closest('.search-results')) {
      results.classList.remove('active');
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) renderResults(input.value.trim());
  });
}

function renderResults(q) {
  if (!q) {
    results.innerHTML = '';
    results.classList.remove('active');
    return;
  }

  const matched = GAMES.filter(g =>
    g.name.includes(q) || g.tag.includes(q)
  );

  results.classList.add('active');

  if (matched.length === 0) {
    results.innerHTML = '<div class="search-no-result">검색 결과가 없어요 😅</div>';
    return;
  }

  results.innerHTML = matched.slice(0, 8).map(g => `
    <a href="${g.url}" class="search-result-item">
      <span class="r-emoji">${g.emoji}</span>
      <span class="r-name">${highlight(g.name, q)}</span>
      <span class="r-tag">${g.tag}</span>
    </a>
  `).join('');
}

function highlight(text, q) {
  const idx = text.indexOf(q);
  if (idx === -1) return text;
  return text.slice(0, idx) +
    `<mark style="background:#fff3e0;color:#FF6B35;border-radius:3px;padding:0 1px;">${text.slice(idx, idx + q.length)}</mark>` +
    text.slice(idx + q.length);
}
