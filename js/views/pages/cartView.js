import { renderCartList } from '../components/cartList.js';
import { getCart } from '../../utils/cart.js';

export function renderCart(cart, total) {
    document.getElementById('app').innerHTML = `
        ${renderHeader()}
        <div class="max-w-4xl mx-auto px-6 py-12">
            <h1 class="text-4xl font-bold mb-8">Indkøbskurv</h1>
            <div id="cart-items">${renderCartList(cart)}</div>
            <div class="flex justify-between text-2xl mt-10">
                <span>Total:</span>
                <span class="font-bold">${total.toFixed(2)} DKK</span>
            </div>
            <a onclick="navigateTo('/checkout')" class="block text-center mt-8 bg-green-600 text-white py-4 rounded-2xl font-semibold cursor-pointer hover:bg-green-700 transition-colors">
    Gå til bestilling
</a>
        </div>
        ${renderFooter()}
    `;
}