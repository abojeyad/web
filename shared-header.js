(function () {
  const style = document.createElement('style');
  style.textContent = `
    .site-nav .nav-link.is-current {
      background: rgba(121,0,47,0.08);
      color: var(--crimson);
      pointer-events: none;
      cursor: default;
    }
    .site-nav .nav-link.nav-home {
      margin-inline-end: 4px;
      font-weight: 700;
    }
    .site-nav .nav-mobile-toggle {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      border: 1.5px solid var(--border);
      border-radius: 50%;
      background: var(--white);
    }
    .site-nav .nav-mobile-toggle-bar {
      display: block;
      width: 16px;
      height: 2px;
      background: var(--crimson);
      border-radius: 2px;
      transition: transform 0.25s ease, opacity 0.25s ease;
    }
    .site-nav.nav-mobile-open .nav-mobile-toggle-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .site-nav.nav-mobile-open .nav-mobile-toggle-bar:nth-child(2) { opacity: 0; }
    .site-nav.nav-mobile-open .nav-mobile-toggle-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    @media (max-width: 700px) {
      .site-nav { justify-content: flex-end; }
      .site-nav .nav-logo { display: none; }
      .site-nav .nav-right { width: 100%; justify-content: space-between; }
      .site-nav .nav-mobile-toggle { display: flex; }
      .site-nav .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
        width: 100%;
        margin: 0;
        padding: 10px 20px 16px;
        background: var(--white);
        border-bottom: 1.5px solid var(--border);
        box-shadow: 0 14px 28px rgba(18,18,18,0.08);
      }
      .site-nav.nav-mobile-open .nav-links { display: flex; }
      .site-nav .nav-links .nav-link { width: 100%; text-align: start; }
    }
  `;
  document.head.appendChild(style);

  const headerMarkup = `
    <header class="site-nav">
      <div class="nav-logo">
        <a href="index.html" aria-label="Yourdis Home"><img src="logo_Light.png" alt="Yourdis" /></a>
      </div>
      <div class="nav-right">
        <button type="button" class="nav-mobile-toggle js-mobile-toggle" aria-label="Menu" aria-expanded="false">
          <span class="nav-mobile-toggle-bar"></span>
          <span class="nav-mobile-toggle-bar"></span>
          <span class="nav-mobile-toggle-bar"></span>
        </button>
        <div class="nav-links">
          <a class="nav-link nav-home" href="index.html" data-i18n="nav_home"></a>
          <a class="nav-link" href="privacy-policy.html" data-nav-key="privacy" data-i18n="footer_privacy"></a>
          <a class="nav-link" href="terms-of-service.html" data-nav-key="terms" data-i18n="footer_terms"></a>
          <a class="nav-link" href="contact-us.html" data-nav-key="contact" data-i18n="footer_contact"></a>
          <a class="nav-link external" href="https://blog.yourdis.com/" target="_blank" rel="noopener" data-nav-key="blog" data-i18n="footer_blog"></a>
        </div>
        <button class="nav-lang-toggle js-lang-toggle" onclick="toggleLang()">العربية</button>
      </div>
    </header>
  `;

  const mountPoint = document.querySelector('[data-shared-header]');
  if (!mountPoint) return;

  mountPoint.innerHTML = headerMarkup;

  if (typeof applyTranslations === 'function') {
    applyTranslations();
  }

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const activeKey = currentPage === 'index.html' || currentPage === '' ? 'home' :
    currentPage === 'privacy-policy.html' ? 'privacy' :
    currentPage === 'terms-of-service.html' ? 'terms' :
    currentPage === 'contact-us.html' ? 'contact' :
    'home';

  document.querySelectorAll('.nav-link[data-nav-key]').forEach(link => {
    const key = link.getAttribute('data-nav-key');
    if (key === activeKey) {
      link.classList.add('is-current');
      link.setAttribute('aria-current', 'page');
      link.setAttribute('aria-disabled', 'true');
      link.removeAttribute('href');
      link.setAttribute('tabindex', '-1');
    }
  });

  const homeLink = document.querySelector('.nav-link.nav-home');
  if (homeLink && activeKey === 'home') {
    homeLink.classList.add('is-current');
    homeLink.setAttribute('aria-current', 'page');
    homeLink.setAttribute('aria-disabled', 'true');
    homeLink.removeAttribute('href');
    homeLink.setAttribute('tabindex', '-1');
  }

  const navEl = document.querySelector('.site-nav');
  const mobileToggle = document.querySelector('.js-mobile-toggle');
  if (navEl && mobileToggle) {
    const closeMobileMenu = () => {
      navEl.classList.remove('nav-mobile-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    };

    mobileToggle.addEventListener('click', () => {
      const isOpen = navEl.classList.toggle('nav-mobile-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navEl.querySelectorAll('.nav-links .nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', (event) => {
      if (navEl.classList.contains('nav-mobile-open') && !navEl.contains(event.target)) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMobileMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) closeMobileMenu();
    });
  }
})();
