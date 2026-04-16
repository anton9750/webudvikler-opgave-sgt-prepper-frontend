import { Nav } from './nav.js'; // Sørg for at stien passer til din filstruktur

export function renderHeader(categories = []) {
    return `
    <header class="bg-[#0a2a4a] text-white sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between py-4 border-b border-white/20">
                <div onclick="navigateTo('/')" class="flex items-center gap-3 text-3xl font-black tracking-widest cursor-pointer">
                    Sgt. <span class="text-yellow-400">PREPPER</span>
                </div>
                <div class="flex items-center gap-8">
                    <a onclick="navigateTo('/')" class="hover:text-yellow-400 flex items-center gap-1 cursor-pointer">
                        <i class="fas fa-home"></i> Hjem
                    </a>
                    <a onclick="navigateTo('/cart')" class="flex items-center gap-1 relative cursor-pointer">
                        <i class="fas fa-shopping-cart"></i> Kurv
                        <span id="cart-count-header" class="absolute -top-1 -right-1 bg-red-500 text-[10px] rounded-full px-1.5">0</span>
                    </a>
                    <a onclick="showLoginModal()" class="flex items-center gap-1 cursor-pointer">
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