import { getProducts, getProductById } from '../utils/apiClient.js';

export async function fetchProducts() { return await getProducts(); }
export async function fetchProductById(id) { return await getProductById(id); }