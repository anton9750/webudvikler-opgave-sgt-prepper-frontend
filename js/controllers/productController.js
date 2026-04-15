// 1. Importér modellen (Husk vi omdøbte den til fetchProductBySlug)
import { fetchProductBySlug } from '../models/productModel.js';

// 2. Importér views fra de korrekte mapper baseret på dine billeder
import { renderProductDetail } from '../views/pages/productView.js'; // På dit billede hedder den productView.js
import { renderHeader } from '../views/partials/headerView.js';    // Ligger i partials
import { renderFooter } from '../views/partials/footerView.js';    // Ligger i partials

/**
 * Initialiserer visningen af et enkelt produkt
 * @param {string} slug - Den tekst-ID der kommer fra URL'en (f.eks. 'lifestraw-personal-filter')
 */
export async function initProduct(slug) {
    const app = document.getElementById('app');

    // Vis en hurtig loading-tekst mens vi henter data
    app.innerHTML = `<p class="p-10 text-center uppercase tracking-widest animate-pulse">Henter gear...</p>`;

    try {
        // Hent produktet fra modellen via API'et
        const product = await fetchProductBySlug(slug);
        
        // Saml hele siden
        // Vi indsætter Header, selve Produkt-viewet og Footer
        app.innerHTML = `
            ${renderHeader()}
            <main class="flex-grow bg-gray-50">
                ${renderProductDetail(product)}
            </main>
            ${renderFooter()}
        `;

        // Scroll til toppen så brugeren ser starten af produktet
        window.scrollTo(0, 0);

    } catch (error) {
        console.error("Fejl i productController:", error);
        
        // Vis en pæn fejlbesked hvis produktet ikke findes
        app.innerHTML = `
            ${renderHeader()}
            <div class="flex-grow flex flex-col items-center justify-center p-20 text-[#0a2a4a]">
                <h1 class="text-4xl font-black mb-4">404 - GEAR IKKE FUNDET</h1>
                <p class="mb-8 italic text-gray-500">Måske er det blevet snuppet af en anden prepper?</p>
                <a href="#/" class="bg-[#0a2a4a] text-white px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all">
                    TILBAGE TIL FORSYNINGERNE
                </a>
            </div>
            ${renderFooter()}
        `;
    }
}