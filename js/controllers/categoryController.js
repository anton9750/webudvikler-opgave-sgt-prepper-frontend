import { fetchProductsByCategory, fetchCategories } from '../models/categoryModel.js';
import { renderCategoryPage } from '../views/pages/categoryView.js';

export async function initCategory(params) {
    const id = params.id;
    try {
        const [products, categories] = await Promise.all([
            fetchProductsByCategory(id),
            fetchCategories()
        ]);
        const activeCat = categories.find(c => c.id == id);
        renderCategoryPage(products, categories, activeCat ? activeCat.title : "Kategori");
    } catch (e) {
        console.error("Fejl i CategoryController:", e);
    }
}