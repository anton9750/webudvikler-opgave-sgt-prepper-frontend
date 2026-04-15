/**
 * Genererer HTML for en enkelt produktside
 * @param {Object} product - Produktdata fra API'et
 */
export function renderProductDetail(product) {
    // Vi definerer API URL'en her, så vi kan vise billederne korrekt
    const API_URL = 'http://localhost:4000';

    return `
    <div class="max-w-6xl mx-auto p-8 md:p-12">
        <div class="flex flex-col md:flex-row gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            
            <div class="flex-1 bg-gray-50 rounded-2xl p-6 flex items-center justify-center">
                <img src="${API_URL}${product.imageUrl}" 
                     alt="${product.name}" 
                     class="max-h-[400px] object-contain drop-shadow-md">
            </div>

            <div class="flex-1 flex flex-col justify-center space-y-6">
                <div>
                    <span class="text-green-600 font-bold text-sm uppercase tracking-widest">
                        ● På lager (${product.stock} stk)
                    </span>
                    <h1 class="text-4xl font-black text-[#0a2a4a] mt-1 uppercase">${product.name}</h1>
                    <p class="text-gray-400 text-sm mt-2">Kategori: ${product.category?.name || 'Gear'}</p>
                </div>

                <p class="text-lg text-gray-600 leading-relaxed italic">
                    "${product.teaser}"
                </p>

                <div class="py-6 border-y border-gray-100">
                    <span class="text-5xl font-black text-[#0a2a4a]">${product.price.toFixed(2)} DKK</span>
                    <p class="text-xs text-gray-400 mt-1 italic">Prisen er inkl. dommedags-gebyr</p>
                </div>

                <button class="w-full bg-[#0a2a4a] text-white py-5 rounded-xl font-black text-lg 
                               hover:bg-yellow-400 hover:text-black transition-all transform active:scale-95 shadow-lg">
                    TILFØJ TIL RYGSAK
                </button>

                <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                    <div class="text-center p-3 bg-gray-50 rounded-lg">
                        <span class="block text-xl">🛡️</span>
                        <span class="text-[10px] font-bold uppercase text-gray-400">Holdbarhedstjekket</span>
                    </div>
                    <div class="text-center p-3 bg-gray-50 rounded-lg">
                        <span class="block text-xl">🚀</span>
                        <span class="text-[10px] font-bold uppercase text-gray-400">Hurtig levering</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-12 bg-white p-8 rounded-3xl border border-gray-100">
            <h2 class="text-xl font-bold mb-4 uppercase tracking-tighter text-[#0a2a4a]">Beskrivelse</h2>
            <div class="text-gray-600 leading-loose">
                ${product.description}
            </div>
        </div>
    </div>
    `;
}