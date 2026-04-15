/**
 * Genererer HTML for sitets footer
 */
export function renderFooter() {
    return `
    <footer class="bg-[#0a2a4a] text-white py-16 mt-auto">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            <div>
                <p class="font-black italic text-2xl tracking-tighter mb-4 underline decoration-yellow-400">SGT. PREPPER</p>
                <p class="text-gray-400 text-sm leading-relaxed">
                    Udstyr til overlevelse, bushcraft og de uforudsete hændelser. 
                    Gør dig klar før det er for sent.
                </p>
            </div>

            <div>
                <h4 class="font-bold uppercase text-xs tracking-widest text-yellow-400 mb-6">Information</h4>
                <ul class="space-y-3 text-sm text-gray-300">
                    <li><a href="#" class="hover:text-white transition-colors underline decoration-gray-700">Handelsbetingelser</a></li>
                    <li><a href="#" class="hover:text-white transition-colors underline decoration-gray-700">Fragt & Retur</a></li>
                    <li><a href="#" class="hover:text-white transition-colors underline decoration-gray-700">Om Sgt. Prepper</a></li>
                </ul>
            </div>

            <div>
                <h4 class="font-bold uppercase text-xs tracking-widest text-yellow-400 mb-6">Status</h4>
                <div class="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-xs font-bold">
                    <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    SYSTEMER OPERATIONELLE
                </div>
                <p class="text-[10px] text-gray-500 mt-6 italic">© 2026 Sgt. Prepper Supply Co. Ingen rettigheder forbeholdt efter dommedag.</p>
            </div>

        </div>
    </footer>
    `;
}