import { fetchProductsByCategory, fetchCategories } from '../models/categoryModel.js';
import { renderCategoryPage } from '../views/pages/categoryView.js';
import { addToCart } from '../utils/cart.js'; // Vigtigt: Importér kurv-logikken

export async function initCategory(params) {
    const id = params.id;
    try {
        const [products, categories] = await Promise.all([
            fetchProductsByCategory(id),
            fetchCategories()
        ]);

        // INSTALLÉR BROEN HER OGSÅ:
        window.quickAdd = (productId) => {
            const product = products.find(p => p.id == productId);
            if (product) {
                addToCart(product);
                // Vi behøver ikke gøre mere, da Headeren lytter automatisk
            }
        };

        const activeCat = categories.find(c => c.id == id);
        renderCategoryPage(products, categories, activeCat ? activeCat.title : "Kategori");
    } catch (e) {
        console.error("Fejl i CategoryController:", e);
    }
}