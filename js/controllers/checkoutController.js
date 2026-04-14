import { getCart, getCartTotal } from '../utils/cart.js';
import { renderCheckout } from '../views/pages/checkoutView.js';

export function initCheckout() {
    const cart = getCart();
    renderCheckout(cart, getCartTotal());
}