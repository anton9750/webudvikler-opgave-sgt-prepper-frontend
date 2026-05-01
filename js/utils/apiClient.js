// Central konfiguration af din backend-adresse
export const BASE_SERVER_URL = 'http://localhost:4000';
const BASE_URL = `${BASE_SERVER_URL}/api`;

/**
 * Henter alle aktive produkter
 */
export async function getProducts() {
    try {
        const res = await fetch(`${BASE_URL}/products`);
        if (!res.ok) throw new Error('Kunne ikke hente produkter');
        return await res.json();
    } catch (error) {
        console.error("apiClient -> getProducts:", error);
        return [];
    }
}

/**
 * Henter alle kategorier
 */
export async function getCategories() {
    try {
        const res = await fetch(`${BASE_URL}/categories`);
        if (!res.ok) throw new Error('Kunne ikke hente kategorier');
        return await res.json();
    } catch (error) {
        console.error("apiClient -> getCategories:", error);
        return [];
    }
}

/**
 * Henter produkter baseret på en kategori-slug
 */
export async function getProductsByCategory(categorySlug) {
    try {
        const res = await fetch(`${BASE_URL}/products/${categorySlug}`);
        if (!res.ok) throw new Error('Kunne ikke hente kategori-produkter');
        return await res.json();
    } catch (error) {
        console.error(`apiClient -> getProductsByCategory (${categorySlug}):`, error);
        return [];
    }
}

/**
 * Hjælpefunktion til at finde et specifikt produkt via slug
 */
export async function getProductById(slug) {
    const all = await getProducts();
    return all.find(p => p.slug === slug);
}