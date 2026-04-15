import { getProducts, getProductBySlug } from '../utils/apiClient.js';

/**
 * Bruges af HomeController til at vise alle produkter på forsiden
 */
export async function fetchProducts() { 
    return await getProducts(); 
}

/**
 * Bruges af ProductController til at vise detaljer for ét produkt
 * @param {string} slug - Produktets unikke tekst-ID
 */
export async function fetchProductBySlug(slug) { 
    return await getProductBySlug(slug); 
}