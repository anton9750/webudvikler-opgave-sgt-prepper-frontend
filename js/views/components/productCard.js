/**
 * Genererer HTML for et enkelt produkt-kort
 */
export function productCard(product) {
    const API_URL = 'http://localhost:4000';

    // 1. Skudsikker identifikation (Fikser undefined i links og navne)
    const id = product.id || product.productId;
    const name = product.name || product.title || "Gear";
    const price = product.price ? product.price.toFixed(2) : "0.00";
    const teaser = product.teaser || "Klar til feltbrug...";

    // 2. Fiks billedsti (Sikrer at /images/ er med, hvis den mangler)
    let imgPath = product.imageUrl || product.image;
    if (imgPath && !imgPath.startsWith('http') && !imgPath.startsWith('/images/')) {
        imgPath = `/images/${imgPath}`;
    }

    return `
    <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full">
        
        <a href="#/product/${id}" class="block bg-gray-50 overflow-hidden relative pt-[75%]">
            <img src="${API_URL}${imgPath}" 
                 alt="${name}" 
                 class="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500">
        </a>

        <div class="p-6 flex flex-col flex-grow space-y-3">
            <h3 class="font-black text-[#0a2a4a] text-lg uppercase tracking-tighter italic">
                <a href="#/product/${id}" class="hover:text-yellow-500 transition-colors">
                    ${name}
                </a>
            </h3>
            
            <p class="text-gray-500 text-sm line-clamp-2 italic flex-grow">
                "${teaser}"
            </p>

            <div class="pt-4 border-t border-gray-50 flex justify-between items-center">
                <span class="text-2xl font-black text-[#0a2a4a]">${price} DKK</span>
                
                <button 
                    onclick="window.quickAdd(${id})"
                    class="bg-[#0a2a4a] text-white p-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all shadow-md active:scale-90"
                >
                    <span class="text-xl">🛒</span>
                </button>
            </div>
        </div>
    </article>
    `;
}