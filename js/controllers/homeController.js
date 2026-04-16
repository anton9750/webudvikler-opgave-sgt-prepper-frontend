import { fetchProducts } from '../models/productModel.js';
import { fetchCategories } from '../models/categoryModel.js'; // Husk at importere denne!
import { renderHome } from '../views/pages/homeView.js';

export async function initHome() {
    try {
        // Vi henter BÅDE produkter og kategorier samtidig
        const [products, categories] = await Promise.all([
            fetchProducts(),
            fetchCategories()
        ]);

        // Send begge dele videre til dit homeView
        // Vi tager kun de første 4 produkter til "Seneste nyt"
        renderHome(products.slice(0, 4), categories);
        
    } catch (error) {
        console.error("Fejl ved indlæsning af forsiden:", error);
        // Selvom det fejler, renderer vi med tomme arrays for at undgå hvid skærm
        renderHome([], []);
    }
}