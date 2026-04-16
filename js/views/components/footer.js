export function renderFooter() {
    return `
        <footer class="bg-[#0a2a4a] text-white py-12 mt-20">
            <div class="max-w-7xl mx-auto px-6 text-center">
                <p class="text-gray-400 mb-4">&copy; 2026 Prepping Shop. Alle rettigheder forbeholdes.</p>
                <div class="flex justify-center gap-6 text-sm uppercase font-bold tracking-widest">
                    <a href="#/privacy" class="text-gray-400 hover:text-yellow-500 transition-colors">Persondatapolitik</a>
                    <a href="#/terms" class="text-gray-400 hover:text-yellow-500 transition-colors">Handelsbetingelser</a>
                </div>
            </div>
        </footer>
    `;
}