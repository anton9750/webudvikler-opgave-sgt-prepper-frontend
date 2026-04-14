import { initRouter } from './js/router/router.js';
import { renderCookieBanner } from './js/views/components/cookieBanner.js';

function initTailwind() {
    tailwind.config = { content: [], theme: { extend: {} } };
}

document.addEventListener('DOMContentLoaded', () => {
    initTailwind();
    initRouter();

    // Cookie banner on first visit
    if (!localStorage.getItem('cookieConsent')) {
        const bannerHTML = renderCookieBanner();
        document.getElementById('app').insertAdjacentHTML('beforeend', bannerHTML);
    }
});