import { fetchProductById } from '../models/productModel.js';
import { fetchCategories } from '../models/categoryModel.js';
import { renderProductPage } from '../views/pages/productView.js';
import { addToCart } from '../utils/cart.js';

export async function initProductDetail(params) {
    try {
        const [product, categories] = await Promise.all([
            fetchProductById(params.id),
            fetchCategories()
        ]);

        // INSTALLÉR BROEN FOR ENKELTVISNING:
        window.quickAdd = (id) => {
            // Her er det nemt, da vi allerede har 'product' objektet
            addToCart(product);
        };

        renderProductPage(product, categories);
    } catch (e) {
        console.error("Fejl i ProductController:", e);
    }
}