const BASE_URL = 'http://localhost:4000/api';

/**
 * Henter alle produkter
 */
export async function getProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error('Kunne ikke hente produkter');
    return await res.json();
}

/**
 * Henter ét produkt via slug
 */
export async function getProductBySlug(slug) {
    const res = await fetch(`${BASE_URL}/products/${slug}`);
    if (!res.ok) throw new Error('Produkt ikke fundet');
    return await res.json();
}

/**
 * Henter alle kategorier (til menuen)
 */
export async function getCategories() {
    const res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) throw new Error('Kunne ikke hente kategorier');
    return await res.json();
}

/**
 * Henter produkter baseret på en kategori
 */
export async function getProductsByCategory(categoryId) {
    const res = await fetch(`${BASE_URL}/products/category/${categoryId}`);
    if (!res.ok) throw new Error('Kunne ikke hente kategoriens produkter');
    return await res.json();
}