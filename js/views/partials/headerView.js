// Vi importerer Nav-komponenten (husk at tjekke stien i din egen mappe)
import { Nav } from '../components/nav.js';

/**
 * Genererer HTML for sitets header
 */
export function renderHeader() {
    return `
    <header class="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <a href="#/" class="flex items-center gap-3 group">
                <div class="bg-[#0a2a4a] text-white p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <span class="text-2xl font-bold italic uppercase leading-none">SP</span>
                </div>
                <h1 class="text-2xl font-black tracking-tighter text-[#0a2a4a]">SGT. PREPPER</h1>
            </a>

            <div class="flex items-center gap-8">
                <a href="#/cart" class="relative group">
                    <span class="text-2xl">🛒</span>
                    <span class="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white group-hover:scale-110 transition-transform">
                        0
                    </span>
                </a>
                <button class="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#0a2a4a]">Menu</button>
            </div>
        </div>

        <div class="border-t border-gray-50 bg-gray-50/50">
            ${Nav()}
        </div>
    </header>
    `;
}