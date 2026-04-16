export function Nav(categories = []) {
    return `
    <nav class="bg-[#1a2b3c] text-white py-2">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between whitespace-nowrap text-[10px] uppercase font-bold tracking-tight overflow-x-auto no-scrollbar gap-6">
            <a href="#/" class="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                <span class="text-yellow-500">⚡</span> ALLE PRODUKTER
            </a>
            
            ${categories.map(cat => {
                // VIKTIGT: Vi tjekker her hvad vi har til rådighed (id eller slug)
                const path = cat.id; 
                
                return `
                <a href="#/category/${path}" class="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                    <span class="text-yellow-500">⚡</span> ${cat.title}
                </a>
                `;
            }).join("")}
        </div>
    </nav>`;
}