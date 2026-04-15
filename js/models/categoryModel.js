import { getCategories, getProductsByCategory } from '../utils/apiClient.js';

/**
 * Bruges af Headeren til at bygge navigationsmenuen
 */
export async function fetchCategories() {
    try {
        const categories = await getCategories();
        return categories;
    } catch (error) {
        console.error("Fejl i fetchCategories:", error);
        return []; // Returnerer tomt array så menuen bare er tom i stedet for at crashe
    }
}

/**
 * Bruges når man klikker på en kategori (f.eks. 'Vand' eller 'Mad')
 */
export async function fetchProductsByCategory(categoryId) {
    try {
        const products = await getProductsByCategory(categoryId);
        return products;
    } catch (error) {
        console.error("Fejl i fetchProductsByCategory:", error);
        throw error;
    }
}