import { Nav } from './nav.js';

export function renderHeader(categories = []) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (!window.headerListenerActive) {
        window.addEventListener('cartUpdated', () => {
            const el = document.getElementById('cart-count-header');
            if (el) {
                const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
                el.innerText = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
            }
        });
        window.headerListenerActive = true;
    }

    window.handleClearCart = () => {
        if(confirm("Vil du tømme din indkøbskurv?")) {
            localStorage.removeItem('cart');
            window.dispatchEvent(new Event('cartUpdated'));
        }
    };

    return `
    <header class="bg-[#0a2a4a] text-white sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between py-4 border-b border-white/20">
                
                <a href="#/" class="flex items-center gap-3 text-3xl font-black tracking-widest cursor-pointer hover:text-yellow-400 transition-colors">
                    Sgt. <span class="text-yellow-400">PREPPER</span>
                </a>

                <div class="flex items-center gap-8 font-bold uppercase text-[11px] tracking-wider">
                    
                    <a href="#/about" class="hover:text-yellow-400 flex items-center gap-2 transition-colors">
                        <i class="fas fa-info-circle"></i> Om os
                    </a>

                    <div class="flex items-center gap-3">
                        <a href="#/cart" class="flex items-center gap-2 relative hover:text-yellow-400 transition-colors">
                            <i class="fas fa-shopping-cart"></i> Kurv
                            <span id="cart-count-header" class="bg-red-500 text-[10px] rounded-full px-1.5 min-w-[18px] text-center font-black">
                                ${count}
                            </span>
                        </a>
                        <button onclick="handleClearCart()" class="text-[9px] bg-white/10 hover:bg-red-600/60 px-2 py-0.5 rounded border border-white/20 transition-all">
                            RYD
                        </button>
                    </div>

                    <a href="#/login" class="hover:text-yellow-400 flex items-center gap-2 transition-colors">
                        <i class="fas fa-user"></i> Log ind
                    </a>
                </div>
            </div>
            
            <div class="py-2">
                ${Nav(categories)}
            </div>
        </div>
    </header>`;
}