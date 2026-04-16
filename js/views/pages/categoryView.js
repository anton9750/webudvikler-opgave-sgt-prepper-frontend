import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderProductGrid } from '../components/productGrid.js';

export function renderCategoryPage(products, categories, title) {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${renderHeader(categories)}
        <main class="max-w-7xl mx-auto px-6 py-12">
            <h1 class="text-4xl font-black uppercase mb-8">${title}</h1>
            ${products.length > 0 ? renderProductGrid(products) : '<p>Ingen produkter fundet.</p>'}
        </main>
        ${renderFooter()}
    `;
}