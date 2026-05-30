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

  function init() {
    applyBackUrl();      // 반드시 addBottomBackBtn 전에 실행
    addBottomBackBtn();
    addScrollTopBtn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
