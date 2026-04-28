export function Nav(categories = []) {
    return `
    <nav class="bg-[#1a2b3c] text-white py-2">
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6 overflow-x-auto no-scrollbar text-[10px] uppercase font-bold tracking-tight">
            <a href="#/" class="hover:text-yellow-400 transition-colors">⚡ ALLE PRODUKTER</a>
            
            ${categories.map(cat => {
                // Vi bruger 'slug' fordi dit API ikke sender et ID
                const identifier = cat.slug; 
                const title = cat.title || "Kategori";

                return `
                <a href="#/category/${identifier}" class="hover:text-yellow-400 transition-colors">
                    <span class="text-yellow-500">⚡</span> ${title}
                </a>
                `;
            }).join("")}
        </div>
    </nav>`;
}