import { getCategories, getProductsByCategory } from '../utils/apiClient.js';

export async function fetchCategories() { return await getCategories(); }
export async function fetchProductsByCategory(id) { return await getProductsByCategory(id); }