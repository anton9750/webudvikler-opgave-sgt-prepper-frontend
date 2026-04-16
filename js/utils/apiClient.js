const BASE_URL = 'http://localhost:4000/api';

export async function getProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    return await res.json();
}

export async function getCategories() {
    const res = await fetch(`${BASE_URL}/categories`);
    return await res.json();
}

export async function getProductsByCategory(id) {
    const res = await fetch(`${BASE_URL}/products?categoryId=${id}`);
    return await res.json();
}

export async function getProductById(id) {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    return await res.json();
}