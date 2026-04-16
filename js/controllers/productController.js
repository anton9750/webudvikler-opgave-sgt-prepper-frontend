import { fetchProductById } from '../models/productModel.js';
import { fetchCategories } from '../models/categoryModel.js';
import { renderProductPage } from '../views/pages/productView.js';

// VIGTIGT: Navnet skal matche routerens import præcis!
export async function initProductDetail(params) {
    const id = params.id;
    try {
        const [product, categories] = await Promise.all([
            fetchProductById(id),
            fetchCategories()
        ]);

        renderProductPage(product, categories);
    } catch (error) {
        console.error("Fejl ved indlæsning af produkt:", error);
    }
}