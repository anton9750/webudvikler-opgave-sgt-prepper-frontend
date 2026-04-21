import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderProductGrid } from '../components/productGrid.js';

export function renderHome(products, categories) {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <style>
            /* Vi definerer de to sky-animationer her */
            @keyframes revealLeft {
                0% { transform: translateX(0); opacity: 1; }
                100% { transform: translateX(-100%); opacity: 0; }
            }
            @keyframes revealRight {
                0% { transform: translateX(0); opacity: 1; }
                100% { transform: translateX(100%); opacity: 0; }
            }
            @keyframes fadeInText {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .animate-reveal-left { animation: revealLeft 2.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
            .animate-reveal-right { animation: revealRight 2.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
            .animate-fade-in { animation: fadeInText 1.5s ease-out 1.5s forwards; opacity: 0; }
        </style>

        ${renderHeader(categories)}
        
        <div class="relative h-[600px] overflow-hidden bg-cover bg-center flex items-center justify-center" 
             style="background-image: url('./assets/images/heroimg.jpg');">
            
            <div class="absolute inset-y-0 left-0 w-1/2 bg-white/60 blur-[80px] z-20 animate-reveal-left"></div>
            
            <div class="absolute inset-y-0 right-0 w-1/2 bg-white/60 blur-[80px] z-20 animate-reveal-right"></div>

            <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 z-10"></div>

            <div class="relative z-30 text-center px-4">
                <h1 class="text-7xl md:text-8xl font-black text-white tracking-[-4px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] animate-fade-in uppercase">
                    
                </h1>
                <p class="text-white text-xl md:text-2xl mt-4 font-bold italic drop-shadow-md animate-fade-in" style="animation-delay: 2s;">
                    
                </p>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <h2 class="text-4xl font-black uppercase tracking-tight text-[#0a2a4a]">Velkommen til <span class="text-yellow-500">Sgt. Prepper</span></h2>
                <div class="h-1 w-20 bg-yellow-400 mt-4 mb-6 rounded-full"></div>
                <p class="text-gray-600 leading-relaxed text-lg italic">
                    
                </p>
                <p class="mt-4 text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros. Sed ullamcorper fermentum urna id leo sit amet, varius nunc lectus, bibendum id leo sit amet, varius ornare.
                </p>
            </div>
            <div class="text-gray-600 leading-relaxed flex items-end">
                <p>
                    Sed ullamcorper fermentum urna id leo sit amet, varius nunc lectus, bibendum id leo sit amet, varius ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris ex, fringilla a ligula id, rutrum blandit eros.
                </p>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 pb-24">
            <div class="flex items-center gap-4 mb-10">
                <h2 class="text-4xl font-black uppercase tracking-tight text-[#0a2a4a]">Seneste nyt</h2>
                <div class="flex-1 h-[2px] bg-gray-100"></div>
            </div>
            ${renderProductGrid(products)}
        </div>

        ${renderFooter()}
    `;
}