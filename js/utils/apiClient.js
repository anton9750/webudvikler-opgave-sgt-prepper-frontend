const BASE_URL = 'http://localhost:4000/api';


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


export async function getProductById(slug) {

    const all = await getProducts();
    return all.find(p => p.slug === slug);
}