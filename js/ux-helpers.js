(function () {

  // 사이트 내 카테고리/목록 페이지 경로 목록
  var CATEGORY_PATHS = [
    '/indoor.html', '/outdoor.html',
    '/small-group.html', '/large-group.html',
    '/ages-young.html', '/ages-older.html',
    '/adult.html', '/all-games.html',
    '/guide-by-age.html', '/guide-by-situation.html',
    '/index.html', '/'
  ];

  // referrer가 없거나 외부에서 직접 접속했을 때 이동할 기본 목록
  var FALLBACK_URL = '/all-games.html';

  function isGamePage() {
    return window.location.pathname.indexOf('/games/') !== -1;
  }

  // 같은 사이트의 카테고리 페이지에서 왔으면 그 URL 반환, 아니면 null
  function getCategoryReferrer() {
    var ref = document.referrer;
    if (!ref) return null;
    try {
      var refUrl = new URL(ref);
      if (refUrl.hostname !== window.location.hostname) return null;
      var path = refUrl.pathname;
      for (var i = 0; i < CATEGORY_PATHS.length; i++) {
        if (path === CATEGORY_PATHS[i] || path.endsWith(CATEGORY_PATHS[i])) {
          return ref;
        }
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  // 게임 페이지의 모든 .back-btn href를 동적으로 결정
  // addBottomBackBtn() 보다 반드시 먼저 실행되어야 한다.
  function applyBackUrl() {
    if (!isGamePage()) return;
    var dest = getCategoryReferrer() || FALLBACK_URL;
    var backBtns = document.querySelectorAll('a.back-btn');
    for (var i = 0; i < backBtns.length; i++) {
      backBtns[i].setAttribute('href', dest);
    }
  }

  function addBottomBackBtn() {
    var topBtn = document.querySelector('.back-btn');
    var footer = document.querySelector('footer');
    if (!topBtn || !footer) return;

    var label = isGamePage() ? '← 목록으로 돌아가기' : '← 홈으로 돌아가기';

    var wrapper = document.createElement('div');
    wrapper.className = 'bottom-back-nav';

    var btn = document.createElement('a');
    // applyBackUrl()이 먼저 실행됐으므로 이미 올바른 URL이 들어 있다.
    btn.href = topBtn.getAttribute('href');
    btn.className = 'back-btn bottom-back-btn';
    if (topBtn.style.color) btn.style.color = topBtn.style.color;
    btn.textContent = label;

    wrapper.appendChild(btn);
    footer.parentNode.insertBefore(wrapper, footer);
  }

  function addScrollTopBtn() {
    var btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.setAttribute('aria-label', '맨 위로 이동');
    btn.textContent = '↑';
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(btn);

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 200) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });
  }

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function getRecommended(currentGame, count) {
    var others = window.gamesData.filter(function(g) { return g.id !== currentGame.id; });
    var ct = currentGame.tags;

    function hasOverlap(g) {
      var t = g.tags;
      var cl = [].concat(ct.location || []);
      var gl = [].concat(t.location || []);
      if (cl.some(function(l) { return gl.indexOf(l) !== -1 || l === 'both' || gl.indexOf('both') !== -1; })) return true;
      var cs = [].concat(ct.groupSize || []);
      var gs = [].concat(t.groupSize || []);
      if (cs.some(function(s) { return gs.indexOf(s) !== -1; })) return true;
      var ca = [].concat(ct.ageGroup || []);
      var ga = [].concat(t.ageGroup || []);
      if (ca.some(function(a) { return ga.indexOf(a) !== -1; })) return true;
      return false;
    }

    var similar = shuffleArray(others.filter(hasOverlap));
    var rest = shuffleArray(others.filter(function(g) { return !hasOverlap(g); }));
    return similar.concat(rest).slice(0, count);
  }

  function renderRecommendedCard(g) {
    return '<a href="/' + g.url + '" class="game-card">' +
      '<span class="game-emoji">' + g.emoji + '</span>' +
      '<h3>' + g.title + '</h3>' +
      '<p class="desc">' + g.description + '</p>' +
      '<div class="meta">' +
      '<span class="meta-badge">' + g.people + '</span>' +
      '<span class="meta-badge">' + g.time + '</span>' +
      '</div>' +
      '</a>';
  }

  function addRecommendedGames() {
    if (!isGamePage()) return;
    if (!window.gamesData) return;

    var match = window.location.pathname.match(/\/games\/([^\/]+)\.html$/);
    if (!match) return;
    var gameId = match[1];

    var currentGame = null;
    for (var i = 0; i < window.gamesData.length; i++) {
      if (window.gamesData[i].id === gameId) { currentGame = window.gamesData[i]; break; }
    }
    if (!currentGame) return;

    var recommended = getRecommended(currentGame, 4);
    if (recommended.length === 0) return;

    var cardsHtml = recommended.map(renderRecommendedCard).join('');

    var section = document.createElement('section');
    section.className = 'recommended-section';
    section.innerHTML =
      '<div class="recommended-inner">' +
      '<h2 class="recommended-title">🎲 이런 게임은 어때요?</h2>' +
      '<div class="game-grid">' + cardsHtml + '</div>' +
      '<div class="recommended-cta">' +
      '<a href="/all-games.html" class="recommended-all-btn">전체 게임 보기 →</a>' +
      '</div>' +
      '</div>';

    // bottom-back-nav가 이미 삽입돼 있으면 그 앞에, 없으면 footer 앞에 삽입
    var anchor = document.querySelector('.bottom-back-nav') || document.querySelector('footer');
    if (anchor) {
      anchor.parentNode.insertBefore(section, anchor);
    }
  }

  function loadGamesDataThenRecommend() {
    if (!isGamePage()) return;
    if (window.gamesData) {
      addRecommendedGames();
      return;
    }
    var script = document.createElement('script');
    script.src = '/js/games-data.js';
    script.onload = addRecommendedGames;
    document.head.appendChild(script);
  }

  function init() {
    applyBackUrl();      // 반드시 addBottomBackBtn 전에 실행
    addBottomBackBtn();
    addScrollTopBtn();
    loadGamesDataThenRecommend();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
