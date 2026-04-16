import { fetchProducts } from '../models/productModel.js';
import { fetchCategories } from '../models/categoryModel.js';
import { renderHome } from '../views/pages/homeView.js';
import { addToCart } from '../utils/cart.js';

export async function initHome() {
    try {
        const [products, categories] = await Promise.all([
            fetchProducts(),
            fetchCategories()
        ]);

        // Definer funktionen som knappen kalder
        window.quickAdd = (id) => {
            const product = products.find(p => p.id == id);
            if (product) {
                addToCart(product);
            }
        };

        renderHome(products.slice(0, 4), categories);
    } catch (e) {
        console.error("Fejl i HomeController:", e);
    }
}