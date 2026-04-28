import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderProductGrid } from '../components/productGrid.js';

export function renderCategoryPage(products, categories, title) {
    const app = document.getElementById('app');
    
    // Vi overskriver ALT indhold i 'app', så vi fjerner det gamle "Vand"-indhold
    app.innerHTML = `
        ${renderHeader(categories)}
        <main class="max-w-7xl mx-auto px-6 py-12">
            <h1 class="text-4xl font-black uppercase mb-8">${title}</h1>
            
            <div id="category-products">
                ${products.length > 0 
                    ? renderProductGrid(products) 
                    : '<p class="text-gray-500 italic">Ingen produkter fundet i denne kategori.</p>'}
            </div>
        </main>
        ${renderFooter()}
    `;
}