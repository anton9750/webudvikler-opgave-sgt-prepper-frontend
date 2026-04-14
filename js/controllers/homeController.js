import { fetchProducts } from '../models/productModel.js';
import { renderHome } from '../views/pages/homeView.js';

export async function initHome() {
    try {
        const products = await fetchProducts();
        renderHome(products.slice(0, 4)); // "Seneste nyt" – exactly 4 cards as in screenshot
    } catch (e) {
        console.error(e);
        renderHome([]);
    }
}