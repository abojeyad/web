(function () {
  // Official Saudi Riyal symbol (SAMA / Unicode U+20C1), defined once and reused
  // everywhere via <svg class="riyal-icon"><use href="#riyal-symbol"></use></svg>
  const spriteMarkup = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <symbol id="riyal-symbol" viewBox="0 0 1124.14 1256.39">
        <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z"/>
        <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z"/>
      </symbol>
    </defs>
  </svg>`;
  document.body.insertAdjacentHTML('afterbegin', spriteMarkup);

  const style = document.createElement('style');
  style.textContent = `
    .price { direction: ltr; unicode-bidi: isolate; }
    .riyal-icon { display: inline-block; height: 0.72em; width: auto; vertical-align: -0.05em; fill: currentColor; margin-inline-end: 0.16em; }
    .site-nav {
      background: var(--white); border-bottom: 1.5px solid var(--border);
      padding: 16px 24px;
      display: flex; justify-content: space-between; align-items: center;
      position: sticky; top: 0; z-index: 100;
    }
    .site-nav.nav-transparent {
      position: fixed; top: 0; left: 0; right: 0;
      background: transparent; border-bottom-color: transparent; box-shadow: none;
      transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;
    }
    .site-nav.nav-transparent.nav-scrolled {
      background: rgba(253,246,238,0.72);
      -webkit-backdrop-filter: blur(18px); backdrop-filter: blur(18px);
      border-bottom-color: transparent;
      box-shadow: 0 8px 28px rgba(121,0,47,0.07);
    }
    .site-nav .nav-logo img { height: 34px; width: auto; display: block; }
    .site-nav .nav-right { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
    .site-nav .nav-mobile-logo { display: none; }
    .site-nav .nav-links { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
    .site-nav .nav-link {
      font-size: 13px; font-weight: 600; color: var(--muted);
      padding: 13px 12px; border-radius: 999px; transition: background 0.2s, color 0.2s, transform 0.2s;
    }
    .site-nav .nav-link:hover,
    .site-nav .nav-link:focus-visible {
      background: rgba(121,0,47,0.08);
      color: var(--crimson);
      transform: translateY(-1px);
    }
    .site-nav .nav-link.external::after {
      content: '\\2197';
      font-size: 0.8em;
      margin-inline-start: 4px;
    }
    .site-nav .nav-logo a { display: inline-flex; align-items: center; gap: 8px; }
    .nav-lang-toggle {
      background: var(--white); border: 1.5px solid var(--border);
      border-radius: 50px; padding: 7px 16px;
      font-size: 13px; font-weight: 600; color: var(--crimson);
      transition: background 0.2s, color 0.2s;
    }
    .nav-lang-toggle:hover { background: var(--crimson); color: #fff; }
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
      .site-nav .nav-right { width: 100%; justify-content: space-between; position: relative; }
      .site-nav .nav-mobile-toggle { display: flex; }
      .site-nav .nav-mobile-logo {
        display: flex;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .site-nav .nav-mobile-logo img { height: 26px; width: auto; display: block; }
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
        <a href="index.html" data-i18n-aria="nav_home_aria"><img src="assets/logo_Light.png" alt="Yourdis" /></a>
      </div>
      <div class="nav-right">
        <button type="button" class="nav-mobile-toggle js-mobile-toggle" data-i18n-aria="nav_menu_aria" aria-expanded="false">
          <span class="nav-mobile-toggle-bar"></span>
          <span class="nav-mobile-toggle-bar"></span>
          <span class="nav-mobile-toggle-bar"></span>
        </button>
        <a class="nav-mobile-logo" href="index.html" data-i18n-aria="nav_home_aria"><img src="assets/logo_Light.png" alt="Yourdis" /></a>
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

  // Transparent-over-hero nav on every page — gains a glass background past the fold.
  if (navEl) {
    navEl.classList.add('nav-transparent');
    const updateNavScroll = () => {
      navEl.classList.toggle('nav-scrolled', window.scrollY > 40);
    };
    updateNavScroll();
    window.addEventListener('scroll', updateNavScroll, { passive: true });
  }

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
