// NASARI FOUR PLA — main.js (서브페이지 공통)
(function () {
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');

  // 모바일 메뉴
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
      if (nav) nav.classList.toggle('menu-open', open);
    });
  }

  // 현재 페이지 표시
  var path = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-menu a').forEach(function (a) {
    var href = a.getAttribute('href').replace(/\.html$/, '').replace(/\/$/, '') || '/';
    if (href === path) a.setAttribute('aria-current', 'page');
  });

  // 히어로를 벗어나면 네비 solid
  if (nav) {
    var hero = document.querySelector('.store-hero');
    var onScroll = function () {
      var limit = hero ? hero.offsetHeight * 0.6 : 120;
      nav.classList.toggle('solid', window.scrollY > limit);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 스크롤 리빌
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  // 문의 폼 — 백엔드 연동 전까지 정직한 안내
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var notice = form.querySelector('.form-notice');
      if (notice) { notice.classList.add('show'); notice.focus(); }
    });
  }
})();
