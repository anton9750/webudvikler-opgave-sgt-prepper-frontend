import { renderProductCard } from './productCard.js';

export function renderProductGrid(products) {
    return `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${products.map(renderProductCard).join('')}</div>`;
}