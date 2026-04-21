import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';

export function renderProductPage(product, categories) {
    const app = document.getElementById('app');
    
    // Her tjekker vi om produktet findes, ellers viser vi en fejl
    if (!product) {
        app.innerHTML = `<p class="text-center py-20">Produktet blev ikke fundet.</p>`;
        return;
    }

    app.innerHTML = `
        ${renderHeader(categories)}
        
        <main class="max-w-7xl mx-auto px-6 py-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div class="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                    <img src="${product.imageUrl || 'https://via.placeholder.com/600'}" 
                         alt="${product.name}" 
                         class="w-full h-full object-cover">
                </div>

                <div class="flex flex-col justify-center">
                    <h1 class="text-5xl font-black uppercase tracking-tighter text-[#0a2a4a] mb-4">
                        ${product.name}
                    </h1>
                    <p class="text-2xl font-bold text-yellow-500 mb-8">${product.price},- DKK</p>
                    
                    <div class="prose prose-slate mb-10">
                        <p class="text-gray-600 leading-relaxed">${product.description || 'Ingen beskrivelse tilgængelig.'}</p>
                    </div>

                    <button class="bg-[#0a2a4a] text-white font-black py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-black transition-all uppercase tracking-widest">
                        Læg i kurv
                    </button>
                </div>
            </div>
        </main>

        ${renderFooter()}
    `;
}

