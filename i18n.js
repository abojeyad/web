/**
 * Yourdis — i18n Engine
 * ─────────────────────────────────────────
 * Reads from the global `translations` object (translations.js).
 * Used by all pages.
 */

let currentLang = localStorage.getItem('yd_lang') || 'en';

function t(key) {
  const entry = translations[key];
  if (!entry) { console.warn('[i18n] missing key:', key); return key; }
  return entry[currentLang] ?? entry['en'] ?? key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.querySelectorAll('a[data-subject-en]').forEach(el => {
    const subject = currentLang === 'ar' ? el.dataset.subjectAr : el.dataset.subjectEn;
    const url = new URL(el.href);
    url.searchParams.set('subject', subject);
    el.href = url.toString();
  });
}

function applyLang() {
  const isAr = currentLang === 'ar';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.body.classList.toggle('ar', isAr);
  document.body.classList.toggle('en', !isAr);
  applyTranslations();
  // Update any visible lang toggles
  document.querySelectorAll('.js-lang-toggle').forEach(el => {
    el.textContent = isAr ? 'English' : 'العربية';
  });
  if (typeof refreshBorderPulse === 'function') requestAnimationFrame(refreshBorderPulse);
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('yd_lang', currentLang);
  applyLang();
  // If page has a marquee, rebuild it
  if (typeof buildMarquee === 'function') buildMarquee();
}
