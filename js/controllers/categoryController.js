import { fetchProductsByCategory, fetchCategories } from '../models/categoryModel.js';
import { renderCategoryPage } from '../views/pages/categoryView.js';
import { addToCart } from '../utils/cart.js';

export async function initCategory(params) {
    const slug = params.id; // I routeren hedder parameteren stadig :id, men det er nu en slug
    
    try {
        const [products, categories] = await Promise.all([
            fetchProductsByCategory(slug),
            fetchCategories()
        ]);

        // Bro til 'Læg i kurv'
        window.quickAdd = (productId) => {
            const product = products.find(p => p.id == productId);
            if (product) {
                addToCart(product);
            }
        };

        // Find den aktive kategori baseret på slug
        const activeCat = categories.find(c => c.slug === slug);
        const categoryTitle = activeCat ? activeCat.title : "Kategori";

        renderCategoryPage(products, categories, categoryTitle);
        
    } catch (e) {
        console.error("Fejl i CategoryController:", e);
    }
}