import { getCart, getCartTotal } from '../utils/cart.js';
import { renderCart } from '../views/pages/cartView.js';

export async function initCart() {
    const cart = getCart();
    renderCart(cart, getCartTotal());
}