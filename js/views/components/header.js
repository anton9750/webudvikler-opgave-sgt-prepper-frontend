export function renderHeader() {
    return `
    <header class="bg-[#0a2a4a] text-white sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Logo + Log ind + Cart -->
            <div class="flex items-center justify-between py-4 border-b border-white/20">
                <div class="flex items-center gap-3 text-3xl font-black tracking-widest">Sgt. <span class="text-yellow-400">PREPPER</span></div>
                <div class="flex items-center gap-8">
                    <a onclick="navigateTo('/')" class="hover:text-yellow-400 flex items-center gap-1"><i class="fas fa-home"></i> Hjem</a>
                    <a onclick="navigateTo('/cart')" class="flex items-center gap-1 relative">
                        <i class="fas fa-shopping-cart"></i> Kurv
                        <span id="cart-count-header" class="absolute -top-1 -right-1 bg-red-500 text-[10px] rounded-full px-1.5">0</span>
                    </a>
                    <a onclick="showLoginModal()" class="flex items-center gap-1"><i class="fas fa-user"></i> Log ind</a>
                </div>
            </div>
            <!-- Secondary nav (category style links from screenshot) -->
            <nav class="flex gap-6 py-3 text-sm font-medium">
                <a href="#" class="hover:text-yellow-400">Hånd og værktøj</a>
                <a href="#" class="hover:text-yellow-400">Mad og langtidsopbevaring</a>
                <a href="#" class="hover:text-yellow-400">Energi og belysning</a>
                <a href="#" class="hover:text-yellow-400">Førstehjælp og sundhed</a>
                <a href="#" class="hover:text-yellow-400">Kommunikation og navigation</a>
            </nav>
        </div>
    </header>`;
}