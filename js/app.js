import { initRouter } from './router/router.js'; // Tjek din sti, den skal matche din struktur
import { renderCookieBanner } from './views/components/cookieBanner.js';

document.addEventListener('DOMContentLoaded', () => {
 
    initRouter();

    if (!localStorage.getItem('cookieConsent')) {
        const bannerHTML = renderCookieBanner();
        const appEl = document.getElementById('app');
        if(appEl) appEl.insertAdjacentHTML('beforeend', bannerHTML);
    }
});