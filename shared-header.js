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
  `;
  document.head.appendChild(style);

  const headerMarkup = `
    <header class="site-nav">
      <div class="nav-logo">
        <a href="index.html" aria-label="Yourdis Home"><img src="logo_Light.png" alt="Yourdis" /></a>
      </div>
      <div class="nav-right">
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
})();
