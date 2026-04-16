// js/utils/cart.js

export function addToCart(product, qty = 1) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(i => i.id === product.id);
    
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({ ...product, quantity: qty });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
}

export function getCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function clearCart() {
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
}