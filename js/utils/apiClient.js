// utils/apiClient.js

const BASE_URL = 'http://localhost:4000/api';

/**
 * Henter alle produkter
 */
export async function getProducts() {
    try {
        const res = await fetch(`${BASE_URL}/products`);
        if (!res.ok) throw new Error('Netværksfejl ved hentning af produkter');
        return await res.json();
    } catch (error) {
        console.error("apiClient -> getProducts:", error);
        return [];
    }
}

/**
 * Henter alle kategorier
 * Baseret på din konsol indeholder disse: { title, slug }
 */
export async function getCategories() {
    try {
        const res = await fetch(`${BASE_URL}/categories`);
        if (!res.ok) throw new Error('Netværksfejl ved hentning af kategorier');
        return await res.json();
    } catch (error) {
        console.error("apiClient -> getCategories:", error);
        return [];
    }
}

/**
 * Henter produkter baseret på en kategori-slug
 * Da dit data ikke har ID, bruger vi slug til filtrering
 */
export async function getProductsByCategory(slug) {
    try {
        // Vi sender slug som parameter. 
        // Tjek evt. din backend dokumentation om det skal være ?category= eller ?slug=
        const res = await fetch(`${BASE_URL}/products?category=${slug}`);
        if (!res.ok) throw new Error('Netværksfejl ved hentning af kategori-produkter');
        return await res.json();
    } catch (error) {
        console.error(`apiClient -> getProductsByCategory (${slug}):`, error);
        return [];
    }
}

/**
 * Henter ét specifikt produkt ud fra ID
 */
export async function getProductById(id) {
    try {
        const res = await fetch(`${BASE_URL}/products/${id}`);
        if (!res.ok) throw new Error('Produktet blev ikke fundet');
        return await res.json();
    } catch (error) {
        console.error(`apiClient -> getProductById (${id}):`, error);
        throw error; // Kaster fejlen videre så controlleren kan vise en fejlmeddelelse
    }
}