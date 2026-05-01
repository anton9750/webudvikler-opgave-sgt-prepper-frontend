export function renderFooter() {
    return `
        <footer class="bg-[#0a2a4a] text-white py-12 mt-20">
            <div class="max-w-7xl mx-auto px-6">
                
                <div class="grid md:grid-cols-3 gap-10 text-center md:text-left">
                    
                    <!-- Brand -->
                    <div>
                        <h3 class="text-lg font-bold mb-3 tracking-widest uppercase">Prepping Shop</h3>
                        <p class="text-gray-400 text-sm">
                            Udstyr og viden til at være klar på det uforudsigelige.
                        </p>
                    </div>

                    <!-- Kontakt -->
                    <div>
                        <h3 class="text-lg font-bold mb-3 tracking-widest uppercase">Kontakt</h3>
                        <p class="text-gray-400 text-sm">Email: kontakt@preppingshop.dk</p>
                        <p class="text-gray-400 text-sm mt-1">Danmark</p>
                    </div>

                    <!-- Links -->
                    <div>
                        <h3 class="text-lg font-bold mb-3 tracking-widest uppercase">Info</h3>
                        <div class="flex flex-col gap-2 text-sm uppercase font-bold tracking-widest">
                            <a href="#/privacy" class="text-gray-400 hover:text-yellow-500 transition-colors">Persondatapolitik</a>
                            <a href="#/terms" class="text-gray-400 hover:text-yellow-500 transition-colors">Handelsbetingelser</a>
                        </div>
                    </div>

                </div>

                <div class="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p class="text-gray-500 text-sm">
                        &copy; 2026 Prepping Shop. Alle rettigheder forbeholdes.
                    </p>
                </div>

            </div>
        </footer>
    `;
}