import { addToCart } from '../../utils/cart.js';
import { trackAddToCart } from '../../utils/analytics.js';

export function renderProductCard(product) {
    return `
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all">
        <img src="${product.imageUrl || 'https://picsum.photos/id/1015/400/250'}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="p-5">
            <h3 class="font-semibold text-lg">${product.name}</h3>
            <p class="text-sm text-gray-500 line-clamp-2 mt-1">${product.description.substring(0, 90)}...</p>
            <div class="flex justify-between items-end mt-6">
                <div>
                    <span class="text-2xl font-bold">${product.price.toFixed(2)} DKK</span>
                </div>
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">På lager</span>
            </div>
            <button onclick="handleAddToCart(${product.id}, '${product.name}', ${product.price})" 
                    class="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-sm font-semibold">
                Læg i kurv
            </button>
        </div>
    </div>`;
}

window.handleAddToCart = (id, name, price) => {
    addToCart({ id, name, price, imageUrl: '' }, 1);
    trackAddToCart({ name });
    alert('Tilføjet til kurv!'); // or update a toast
};