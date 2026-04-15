// Vi importerer produktkortet, som vi lige har rettet navnet på
import { productCard } from '../components/productCard.js';

/**
 * Genererer HTML for en kategori-side
 * @param {Object} category - Kategoridata (navn, beskrivelse osv.)
 * @param {Array} products - Listen over produkter i denne kategori
 */
export function renderCategory(category, products) {
    return `
    <div class="bg-gray-50 min-h-screen pb-20">
        <header class="bg-[#0a2a4a] text-white py-16 mb-12">
            <div class="max-w-7xl mx-auto px-6">
                <nav class="text-xs uppercase tracking-[0.2em] text-yellow-400 mb-4">
                    <a href="#/" class="hover:underline">Hjem</a> / Kategorier / ${category.name}
                </nav>
                <h1 class="text-5xl font-black uppercase tracking-tighter italic">
                    ${category.name}
                </h1>
                <p class="mt-4 text-gray-400 max-w-2xl leading-relaxed">
                    Udstyr nøje udvalgt til ${category.name.toLowerCase()}. Sørg for at have dit grej i orden, før situationen spidser til.
                </p>
            </div>
        </header>

        <div class="max-w-7xl mx-auto px-6">
            <div class="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
                <p class="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    Viser ${products.length} resultater
                </p>
            </div>

            ${products.length > 0 ? `
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    ${products.map(product => productCard(product)).join('')}
                </div>
            ` : `
                <div class="bg-white p-20 rounded-3xl text-center border-2 border-dashed border-gray-200">
                    <p class="text-gray-400 italic">Der er i øjeblikket ingen varer på lager i denne kategori.</p>
                </div>
            `}
        </div>
    </div>
    `;
}