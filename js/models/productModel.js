import { getProducts, getProductById } from '../utils/apiClient.js';

/**
 * Henter alle produkter (bruges til forsiden)
 */
export async function fetchProducts() {
    try {
        const products = await getProducts();
        return products;
    } catch (error) {
        console.error("Fejl i fetchProducts:", error);
        return [];
    }
}

/**
 * Henter ét specifikt produkt baseret på ID
 */
export async function fetchProductById(id) {
    try {
        const product = await getProductById(id);
        return product;
    } catch (error) {
        console.error(`Fejl i fetchProductById for ID ${id}:`, error);
        throw error;
    }
}