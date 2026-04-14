export function renderCookieBanner() {
    return `
    <div id="cookie-banner" class="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white border shadow-xl rounded-2xl p-6 max-w-md z-50 flex gap-4">
        <p class="text-sm">Vi bruger cookies til at forbedre din oplevelse. <a href="#" class="underline">Læs mere</a></p>
        <button onclick="acceptCookies()" class="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium">Accepter</button>
    </div>`;
}

window.acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cookie-banner').remove();
};