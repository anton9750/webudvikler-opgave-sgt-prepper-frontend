import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { BASE_SERVER_URL } from '../../utils/apiClient.js';

export function renderProductPage(product, categories) {
    const app = document.getElementById('app');

    // SIKRING: Vi trækker data ud og sikrer standardværdier
    const name = product.name || product.title || "Navn mangler";
    const price = product.price ? Number(product.price).toFixed(2) : "0.00";
    const description = product.description || product.teaser || "Ingen beskrivelse tilgængelig fra bunkeren.";
    

    let imgPath = product.imageUrl || product.image;
    let finalImg = "";

    if (imgPath) {
        if (imgPath.startsWith('http')) {
            finalImg = imgPath;
        } else {
         
            const separator = imgPath.startsWith('/') ? '' : '/';
            finalImg = `${BASE_SERVER_URL}${separator}${imgPath}`;
        }
    } else {
        finalImg = 'https://via.placeholder.com/600x600?text=Billede+mangler';
    }

    app.innerHTML = `
        ${renderHeader(categories)}
        
        <main class="max-w-7xl mx-auto px-6 py-12 lg:py-20 min-h-screen">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                
                <!-- Produkt Billede -->
                <div class="bg-gray-50 rounded-[2.5rem] p-8 lg:p-16 border border-gray-100 shadow-sm sticky top-32">
                    <img 
                        src="${finalImg}" 
                        alt="${name}" 
                        class="w-full h-auto object-contain max-h-[550px] drop-shadow-2xl"
                    >
                </div>

                <!-- Produkt Info -->
                <div class="flex flex-col pt-4">
                    <nav class="mb-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">
                        Sgt. Prepper <span class="mx-2 text-yellow-500">/</span> Gear <span class="mx-2 text-yellow-500">/</span> Detaljer
                    </nav>

                    <h1 class="text-5xl lg:text-7xl font-black uppercase mb-6 text-[#0a2a4a] tracking-tighter italic leading-[0.85]">
                        ${name}
                    </h1>

                    <div class="flex items-baseline gap-4 mb-10">
                        <span class="text-4xl font-black text-yellow-500">${price} DKK</span>
                        <span class="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded font-bold uppercase">Klar til feltbrug</span>
                    </div>
                    
                    <div class="border-t border-gray-100 py-10 mb-10">
                        <h3 class="font-black uppercase text-[#0a2a4a] mb-4 tracking-widest text-sm">
                            Beskrivelse:
                        </h3>
                        <p class="text-gray-600 leading-relaxed text-xl italic font-light">
                            "${description}"
                        </p>
                    </div>

                    <!-- Købsknap -->
                    <button 
                        onclick="window.handleAddToCart()" 
                        class="bg-[#0a2a4a] text-white font-black py-7 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all duration-300 uppercase tracking-[0.15em] shadow-2xl active:scale-95 flex items-center justify-center gap-4"
                    >
                        <span class="text-xl">🛒</span>
                        Tilføj til overlevelses-gear
                    </button>
                    
                    <!-- Ekstra Features -->
                    <div class="mt-10 grid grid-cols-2 gap-4">
                         <div class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <span class="text-blue-900 font-bold">✓</span>
                            <span class="text-[9px] uppercase font-black text-gray-500">Felt-testet kvalitet</span>
                         </div>
                         <div class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <span class="text-blue-900 font-bold">✓</span>
                            <span class="text-[9px] uppercase font-black text-gray-500">Hurtig levering</span>
                         </div>
                    </div>
                </div>
            </div>
        </main>

        ${renderFooter()}
    `;
}