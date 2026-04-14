import { renderCartItem } from './cartItem.js';

export function renderCartList(cart) {
    return cart.length ? cart.map(renderCartItem).join('') : '<p class="py-8 text-center text-gray-500">Kurven er tom</p>';
}