export function productCard(product) {
    const API_URL = 'http://localhost:4000';

    return `
    <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full">
        <div class="block bg-gray-50 overflow-hidden relative pt-[75%]">
            <img src="${API_URL}${product.imageUrl}" 
                 alt="${product.name}" 
                 class="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500">
        </div>

        <div class="p-6 flex flex-col flex-grow space-y-3">
            <h3 class="font-black text-[#0a2a4a] text-lg uppercase tracking-tighter italic">
                ${product.name}
            </h3>
            
            <p class="text-gray-500 text-sm line-clamp-2 italic flex-grow">
                "${product.teaser}"
            </p>

            <div class="pt-4 border-t border-gray-50 flex justify-between items-center">
                <span class="text-2xl font-black text-[#0a2a4a]">${product.price.toFixed(2)} DKK</span>
                <button 
                    onclick="window.quickAdd(${product.id})"
                    class="bg-[#0a2a4a] text-white p-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all shadow-md active:scale-90"
                >
                    <span class="text-xl">🛒</span>
                </button>
            </div>
        </div>
    </article>
    `;
}