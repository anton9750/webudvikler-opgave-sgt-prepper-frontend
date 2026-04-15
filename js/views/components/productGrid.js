// Vi importerer funktionen med det navn, vi lige gav den i productCard.js
import { productCard } from './productCard.js';

/**
 * Genererer et grid af produkt-kort (typisk til forsiden)
 * @param {Array} products - Listen af produkter fra API'et
 */
export function renderProductGrid(products) {
    // Hvis der ikke er nogen produkter, viser vi en besked
    if (!products || products.length === 0) {
        return `<p class="text-center p-20 text-gray-400 italic">Ingen produkter fundet i denne sektion...</p>`;
    }

    return `
    <section class="max-w-7xl mx-auto px-6 py-12">
        <h2 class="text-3xl font-black text-[#0a2a4a] mb-8 uppercase tracking-tighter">
            Udvalgt gear til din overlevelse
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            ${products.map(product => productCard(product)).join('')}
        </div>
    </section>
    `;
}