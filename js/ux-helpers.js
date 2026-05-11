(function () {
  function init() {
    addBottomBackBtn();
    addScrollTopBtn();
  }

  function addBottomBackBtn() {
    var topBtn = document.querySelector('.back-btn');
    var footer = document.querySelector('footer');
    if (!topBtn || !footer) return;

    var isGamePage = window.location.pathname.indexOf('/games/') !== -1;
    var label = isGamePage ? '← 목록으로 돌아가기' : '← 홈으로 돌아가기';

    var wrapper = document.createElement('div');
    wrapper.className = 'bottom-back-nav';

    var btn = document.createElement('a');
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
