export function productCard(product) {
    const API_URL = 'http://localhost:4000';
    
    // BACKEND BRUGER SLUG, IKKE ID
    const identifier = product.slug; 
    const name = product.name || "Gear";
    const price = product.price ? Number(product.price).toFixed(2) : "0.00";

    return `
    <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
        <a href="#/product/${identifier}" class="block bg-gray-50 relative pt-[75%]">
            <img src="${API_URL}${product.imageUrl}" alt="${name}" class="absolute top-0 w-full h-full object-contain p-4">
        </a>
        <div class="p-6 flex flex-col flex-grow">
            <h3 class="font-black text-[#0a2a4a] text-lg uppercase italic">
                <a href="#/product/${identifier}">${name}</a>
            </h3>
            <p class="text-gray-500 text-sm flex-grow">"${product.teaser}"</p>
            <div class="pt-4 flex justify-between items-center">
                <span class="text-2xl font-black">${price} DKK</span>
                <button onclick="window.quickAdd('${identifier}')" class="bg-[#0a2a4a] text-white p-3 rounded-xl">🛒</button>
            </div>
        </div>
    </article>
    `;
}