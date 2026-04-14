const BASE_URL = 'http://localhost:4000/api';   // ← change if your API uses another port

export async function getProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

export async function getProductById(id) {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
}

export async function getCategories() {
    const res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
}

export async function getProductsByCategory(categoryId) {
    const res = await fetch(`${BASE_URL}/products?categoryId=${categoryId}`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
}