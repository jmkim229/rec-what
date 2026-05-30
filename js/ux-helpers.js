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

  /* ── OG 태그 자동 주입 (게임 페이지 / JS-capable 크롤러용) ── */
  function addOGTags() {
    if (document.querySelector('meta[property="og:title"]')) return;
    var titleEl = document.querySelector('title');
    var descEl  = document.querySelector('meta[name="description"]');
    var ogTitle = titleEl ? titleEl.textContent.trim() : document.title;
    var ogDesc  = descEl  ? descEl.getAttribute('content') : '';
    var ogUrl   = window.location.href.replace(/\?.*$/, '').replace(/#.*$/, '');
    var ogImg   = 'https://rec-what.vercel.app/og-image.png';

    var tags = [
      { p: 'og:type',        c: 'website' },
      { p: 'og:site_name',   c: '레크 뭐하지?' },
      { p: 'og:title',       c: ogTitle },
      { p: 'og:description', c: ogDesc },
      { p: 'og:url',         c: ogUrl },
      { p: 'og:image',       c: ogImg },
      { p: 'og:locale',      c: 'ko_KR' },
      { n: 'twitter:card',        c: 'summary_large_image' },
      { n: 'twitter:title',       c: ogTitle },
      { n: 'twitter:description', c: ogDesc.slice(0, 120) },
      { n: 'twitter:image',       c: ogImg }
    ];
    tags.forEach(function(t) {
      var m = document.createElement('meta');
      if (t.p) m.setAttribute('property', t.p);
      if (t.n) m.setAttribute('name', t.n);
      m.setAttribute('content', t.c);
      document.head.appendChild(m);
    });
  }

  /* ── FAQ 섹션 + JSON-LD ── */
  var LOC_LABEL = { indoor: '실내', outdoor: '야외', both: '실내·야외 모두' };

  function locationText(g) {
    var locs = [].concat(g.tags.location || []);
    if (locs.indexOf('both') !== -1) return '실내·야외 어디서나 진행할 수 있습니다.';
    if (locs.indexOf('indoor') !== -1) return '실내에서 진행하는 게임입니다.';
    if (locs.indexOf('outdoor') !== -1) return '야외에서 진행하는 게임입니다.';
    return '실내·야외 모두 가능합니다.';
  }

  function buildFaqItems(g) {
    return [
      {
        q: g.title + ' 게임은 몇 명이 필요한가요?',
        a: g.title + ' 게임은 ' + g.people + ' 인원으로 진행합니다.'
      },
      {
        q: g.title + ' 게임은 얼마나 걸리나요?',
        a: '소요 시간은 약 ' + g.time + ' 정도입니다. 인원과 진행 방식에 따라 달라질 수 있습니다.'
      },
      {
        q: g.title + ' 게임에 준비물이 필요한가요?',
        a: g.prep === '없음' || g.prep === '준비물 없음'
           ? '별도 준비물 없이 바로 시작할 수 있습니다.'
           : '필요한 준비물: ' + g.prep
      },
      {
        q: g.title + ' 게임은 실내에서도 할 수 있나요?',
        a: locationText(g)
      }
    ];
  }

  function addFAQSection() {
    if (!isGamePage()) return;
    if (!window.gamesData) return;

    var match = window.location.pathname.match(/\/games\/([^\/]+)\.html$/);
    if (!match) return;
    var gameId = match[1];

    var g = null;
    for (var i = 0; i < window.gamesData.length; i++) {
      if (window.gamesData[i].id === gameId) { g = window.gamesData[i]; break; }
    }
    if (!g) return;

    var items = buildFaqItems(g);

    var html = '<section class="faq-section">' +
      '<h2>❓ 자주 묻는 질문</h2>' +
      '<div class="faq-list">' +
      items.map(function(item) {
        return '<div class="faq-item">' +
          '<div class="faq-q">Q. ' + item.q + '</div>' +
          '<div class="faq-a">A. ' + item.a + '</div>' +
          '</div>';
      }).join('') +
      '</div></section>';

    var section = document.createElement('div');
    section.innerHTML = html;
    var faqEl = section.firstChild;

    var anchor = document.querySelector('.bottom-back-nav') || document.querySelector('footer');
    if (anchor) anchor.parentNode.insertBefore(faqEl, anchor);

    /* JSON-LD */
    var ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(function(item) {
        return {
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        };
      })
    };
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(ld);
    document.head.appendChild(script);
  }

  function onGamesDataLoaded() {
    addFAQSection();       // FAQ 먼저 삽입
    addRecommendedGames(); // FAQ 아래에 추천 섹션
  }

  function loadGamesDataThenRecommend() {
    if (!isGamePage()) return;
    if (window.gamesData) {
      onGamesDataLoaded();
      return;
    }
    var script = document.createElement('script');
    script.src = '/js/games-data.js';
    script.onload = onGamesDataLoaded;
    document.head.appendChild(script);
  }

  function init() {
    applyBackUrl();      // 반드시 addBottomBackBtn 전에 실행
    addBottomBackBtn();
    addScrollTopBtn();
    addOGTags();          // 게임 페이지 OG 태그 자동 주입
    loadGamesDataThenRecommend();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
