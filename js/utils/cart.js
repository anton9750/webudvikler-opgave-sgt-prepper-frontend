let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addToCart(product, qty = 1) {
    const existing = cart.find(i => i.id === product.id);
    if (existing) existing.quantity += qty;
    else cart.push({ ...product, quantity: qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
}

export function getCart() { return cart; }
export function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
}

export function updateQuantity(id, qty) {
    const item = cart.find(i => i.id === id);
    if (item) item.quantity = qty;
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
}