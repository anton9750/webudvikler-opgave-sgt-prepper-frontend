import { fetchCategories } from "../../models/categoryModel.js";

export async function Nav() {
    const categories = await fetchCategories();

    return `
    <nav class="bg-[#0a2a4a] text-white py-4 shadow-inner">
        <div class="max-w-7xl mx-auto px-6 flex items-center gap-10 whitespace-nowrap text-[12px] uppercase tracking-widest font-black">
            <a href="#/" class="hover:text-yellow-400 flex items-center gap-2 group transition-colors">
                <span class="text-lg group-hover:scale-110 transition-transform">⚡</span> ALLE PRODUKTER
            </a>
            ${categories.map(cat => `
                <a href="#/category/${cat.slug}" class="hover:text-yellow-400 flex items-center gap-2 group transition-colors">
                    <span class="text-lg group-hover:scale-110 transition-transform">⚡</span> ${cat.title}
                </a>
            `).join("")}
        </div>
    </nav>`;
}