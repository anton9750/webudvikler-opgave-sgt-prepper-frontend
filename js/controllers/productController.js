import { fetchProductById } from '../models/productModel.js';
import { fetchCategories } from '../models/categoryModel.js';
import { renderProductPage } from '../views/pages/productView.js';
import { addToCart } from '../utils/cart.js';

/**
 * Initialiserer produktdetalje-siden baseret på ID fra URL
 */
export async function initProductDetail(params) {
    const productId = params.id;

    try {
        // Hent produkt og kategorier (til navigationen) samtidigt
        const [product, categories] = await Promise.all([
            fetchProductById(productId),
            fetchCategories()
        ]);

        // Log dataen i konsollen så du kan se præcis hvad API'et sender
        console.log("Produkt data modtaget:", product);

        if (!product) {
            throw new Error("Produktet blev ikke fundet.");
        }

        // Definer funktionen til købsknappen
        window.handleAddToCart = () => {
            addToCart(product);
            alert(`${product.name || product.title} er tilføjet til din udrustning!`);
        };

        // Send data til Viewet
        renderProductPage(product, categories);

    } catch (error) {
        console.error("Fejl i ProductController:", error);
        document.getElementById('app').innerHTML = `
            <div class="text-center py-20">
                <h2 class="text-2xl font-bold text-red-600">Fejl ved indlæsning</h2>
                <p class="text-gray-500">${error.message}</p>
                <a href="#/" class="mt-4 inline-block underline">Tilbage til shoppen</a>
            </div>
        `;
    }
}