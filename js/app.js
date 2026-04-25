import { initRouter } from './router/router.js';
import { renderCookieBanner } from './views/components/cookieBanner.js';
import { initAnalytics, trackPageView } from "./utils/analytics.js";

document.addEventListener('DOMContentLoaded', () => {

    // 1. Start GA4 først
    initAnalytics();

    // 2. Start routing (SPA navigation)
    initRouter();

    // 3. Track første side (forsinket så router er klar)
    setTimeout(() => {
        trackPageView("home");
    }, 0);

    // 4. Cookie banner (ikke relateret til analytics)
    if (!localStorage.getItem('cookieConsent')) {
        const bannerHTML = renderCookieBanner();
        const appEl = document.getElementById('app');

        if (appEl) {
            appEl.insertAdjacentHTML('beforeend', bannerHTML);
        }
    }
});