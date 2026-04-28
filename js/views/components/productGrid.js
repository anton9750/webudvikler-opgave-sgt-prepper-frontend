import { productCard } from './productCard.js';

/**
 * Genererer et grid af produkt-kort
 * @param {Array} products - Listen af produkter fra API'et
 */
export function renderProductGrid(products) {
    // Hvis listen er tom eller undefined
    if (!products || products.length === 0) {
        return `
            <div class="col-span-full py-20 text-center">
                <p class="text-gray-400 italic">Ingen produkter fundet i bunkeren...</p>
            </div>
        `;
    }

    return `
    <section class="max-w-7xl mx-auto px-6 py-12">
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-black text-[#0a2a4a] uppercase tracking-tighter">
                Udvalgt gear <span class="text-yellow-500">/</span> Overlevelse
            </h2>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            ${products.map(product => productCard(product)).join('')}
        </div>
    </section>
    `;
}