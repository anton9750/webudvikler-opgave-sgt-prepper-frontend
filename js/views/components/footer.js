export function renderFooter() {
    return `
    <footer class="bg-[#0a2a4a] text-white py-12 mt-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <div class="flex justify-center mb-8">
                <svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- simple tree silhouette -->
                    <path d="M50 50 L60 20 L70 50" stroke="#fff" stroke-width="8"/>
                    <path d="M100 50 L110 15 L120 50" stroke="#fff" stroke-width="8"/>
                    <path d="M150 50 L165 10 L180 50" stroke="#fff" stroke-width="8"/>
                    <path d="M200 50 L210 20 L220 50" stroke="#fff" stroke-width="8"/>
                    <text x="50" y="55" fill="#fff" class="text-sm">© Sgt. Prepper 2026 • CVR: 12345678 • Teknikcollege</text>
                </svg>
            </div>
            <p class="text-xs opacity-70">Handelsbetingelser • Persondatapolitik • Kontakt</p>
        </div>
    </footer>`;
}