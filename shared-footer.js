(function () {
  const style = document.createElement('style');
  style.textContent = `
    .site-footer { background: var(--parchment); padding: 32px 24px 28px; }
    .footer-top { display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; margin-bottom: 22px; }
    .footer-logo img { height: 36px; width: auto; display: block; }
    .footer-socials { display: flex; align-items: center; gap: 10px; }
    .footer-social-link { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: var(--white); border: 1.5px solid var(--border); border-radius: 50%; color: var(--muted); transition: background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out); }
    .footer-social-link:hover { background: var(--crimson); border-color: var(--crimson); color: #fff; transform: translateY(-2px); }
    .footer-social-link svg { width: 16px; height: 16px; display: block; }
    .footer-bottom { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
    .footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
    .footer-links a, .footer-links button { font-size: 13px; color: var(--muted); transition: color var(--dur-base) var(--ease-out); background: none; border: none; font-family: inherit; cursor: pointer; padding: 0; }
    .footer-links a:hover, .footer-links button:hover { color: var(--crimson); }
    .footer-copy { font-size: 12px; color: var(--muted); opacity: 0.7; }
    .footer-quick-links { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; }
    .footer-quick-links a, .footer-quick-links button {
      font-size: 12px; font-weight: 600; color: var(--crimson);
      background: none; border: none; font-family: inherit;
      cursor: pointer; padding: 0; transition: opacity var(--dur-base) var(--ease-out);
      letter-spacing: 0.01em; white-space: nowrap;
    }
    .footer-quick-links a:hover, .footer-quick-links button:hover { opacity: 0.65; }
    .footer-quick-sep { color: rgba(121,0,47,0.25); font-size: 12px; user-select: none; line-height: 1; }
    @media (max-width: 700px) {
      .site-footer { padding: 32px 20px 24px; }
      .footer-top { flex-direction: column; align-items: center; text-align: center; }
      .footer-bottom { flex-direction: column; align-items: center; gap: 10px; text-align: center; }
      .footer-quick-links { justify-content: center; }
      .footer-links { justify-content: center; }
    }
  `;
  document.head.appendChild(style);

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome = currentPage === 'index.html' || currentPage === '';

  const socialLinks = `
    <a href="https://instagram.com/yourdiscom" class="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg></a>
    <a href="https://x.com/yourdiscom" class="footer-social-link" aria-label="X (Twitter)" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
    <a href="https://tiktok.com/@yourdiscom" class="footer-social-link" aria-label="TikTok" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg></a>
    <a href="https://snapchat.com/add/yourdis_com" class="footer-social-link" aria-label="Snapchat" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.003 2c-2.868 0-5.5 1.878-5.5 5.188v.37c-.35.077-.744.17-1.04.17-.22 0-.43-.04-.61-.14-.08-.04-.16-.06-.24-.06-.32 0-.61.23-.66.55-.08.49.29.88.76 1.06.17.06.44.13.75.18-.13.32-.43.81-1.04 1.04-.37.14-.56.55-.4.92.13.3.44.47.77.47.09 0 .18-.01.27-.04.29-.09.62-.14.96-.14.15 0 .3.01.44.03-.25.5-.64 1.12-1.27 1.58-.29.21-.38.6-.2.91.12.21.34.34.57.34.09 0 .18-.02.26-.06 1.06-.48 1.89-.55 2.47-.55.11 0 .2 0 .28.01-.01.1-.02.2-.02.3 0 1.1.9 2 2 2 .36 0 .69-.1.98-.26.43.59 1.09.97 1.84.97s1.41-.38 1.84-.97c.29.16.62.26.98.26 1.1 0 2-.9 2-2 0-.1-.01-.2-.02-.3.08-.01.17-.01.28-.01.58 0 1.41.07 2.47.55.08.04.17.06.26.06.23 0 .45-.13.57-.34.18-.31.09-.7-.2-.91-.63-.46-1.02-1.08-1.27-1.58.14-.02.29-.03.44-.03.34 0 .67.05.96.14.09.03.18.04.27.04.33 0 .64-.17.77-.47.16-.37-.03-.78-.4-.92-.61-.23-.91-.72-1.04-1.04.31-.05.58-.12.75-.18.47-.18.84-.57.76-1.06-.05-.32-.34-.55-.66-.55-.08 0-.16.02-.24.06-.18.1-.39.14-.61.14-.296 0-.69-.093-1.04-.17v-.37C17.503 3.878 14.871 2 12.003 2z"/></svg></a>
    <a href="https://youtube.com/@yourdiscom" class="footer-social-link" aria-label="YouTube" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
  `;

  let footerMarkup;

  if (isHome) {
    footerMarkup = `
      <footer class="site-footer">
        <div class="footer-top">
          <div class="footer-logo"><img src="assets/logo_Light.png" alt="Yourdis" /></div>
          <div class="footer-socials">${socialLinks}</div>
        </div>
        <div class="footer-bottom">
          <div class="footer-quick-links">
            <a href="https://blog.yourdis.com" target="_blank" rel="noopener" data-i18n="footer_blog"></a>
            <span class="footer-quick-sep">·</span>
            <a href="privacy-policy.html" data-i18n="footer_privacy"></a>
            <span class="footer-quick-sep">·</span>
            <a href="terms-of-service.html" data-i18n="footer_terms"></a>
            <span class="footer-quick-sep">·</span>
            <a href="contact-us.html" data-i18n="footer_contact"></a>
          </div>
          <div class="footer-copy" data-i18n="footer_copy"></div>
        </div>
      </footer>
    `;
  } else {
    const otherPages = [
      { href: 'privacy-policy.html', key: 'privacy-policy.html', i18n: 'footer_privacy' },
      { href: 'terms-of-service.html', key: 'terms-of-service.html', i18n: 'footer_terms' },
      { href: 'contact-us.html', key: 'contact-us.html', i18n: 'footer_contact' },
    ].filter(p => p.key !== currentPage);

    const quickLinks = otherPages
      .map(p => `<a href="${p.href}" data-i18n="${p.i18n}"></a>`)
      .join('<span class="footer-quick-sep">·</span>');

    footerMarkup = `
      <footer class="site-footer">
        <div class="footer-bottom" style="flex-direction:column;align-items:center;gap:10px;padding:0">
          <div class="footer-quick-links" style="justify-content:center">
            <a href="index.html" data-i18n="nav_back_home"></a>
            <span class="footer-quick-sep">·</span>
            <a href="https://blog.yourdis.com" target="_blank" rel="noopener" data-i18n="footer_blog"></a>
            <span class="footer-quick-sep">·</span>
            ${quickLinks}
          </div>
          <div class="footer-copy" data-i18n="footer_copy"></div>
        </div>
      </footer>
    `;
  }

  const mountPoint = document.querySelector('[data-shared-footer]');
  if (!mountPoint) return;

  mountPoint.innerHTML = footerMarkup;

  if (typeof applyTranslations === 'function') {
    applyTranslations();
  }
})();
