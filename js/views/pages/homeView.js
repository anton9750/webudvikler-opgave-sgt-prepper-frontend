import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderProductGrid } from '../components/productGrid.js';

export function renderHome(products) {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${renderHeader()}
        
        <!-- Hero (exact sunset background) -->
        <div class="relative h-[480px] bg-cover bg-center flex items-center justify-center" 
             style="background-image: url('https://picsum.photos/id/1015/1920/1080')">
            <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
            <div class="relative text-center">
                <h1 class="text-7xl font-black text-white tracking-[4px] drop-shadow-2xl">Sgt. <span class="text-yellow-400">PREPPER</span></h1>
            </div>
        </div>

        <!-- Velkommen -->
        <div class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 gap-16">
            <div>
                <h2 class="text-4xl font-bold">Velkommen til Stg. Prepper</h2>
                <p class="mt-6 text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros. Sed ullamcorper fermentum urna id leo sit amet, varius nunc lectus, bibendum id leo sit amet, varius ornare.</p>
            </div>
            <div class="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros. Sed ullamcorper fermentum urna id leo sit amet, varius nunc lectus, bibendum id leo sit amet, varius ornare.
            </div>
        </div>

        <!-- Seneste nyt -->
        <div class="max-w-7xl mx-auto px-6 pb-20">
            <h2 class="text-4xl font-bold mb-10">Seneste nyt</h2>
            ${renderProductGrid(products)}
        </div>

        ${renderFooter()}
    `;
}