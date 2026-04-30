import { getProducts } from '../utils/apiClient.js';


export async function fetchProducts() {
    try {
        return await getProducts();
    } catch (error) {
        console.error("Fejl i fetchProducts:", error);
        return [];
    }
}

export async function fetchProductById(slug) {
    try {
        const allProducts = await getProducts();
        

        const product = allProducts.find(p => p.slug === slug);
        
        if (!product) {
            console.error(`Produktet med slug "${slug}" blev ikke fundet.`);
            return null;
        }
        
        return product;
    } catch (error) {
        console.error("Fejl i fetchProductById:", error);
        throw error;
    }
}