import { getCategories, getProductsByCategory } from '../utils/apiClient.js';

export async function fetchCategories() {
    try { 
        return await getCategories(); 
    } catch (e) { 
        return []; 
    }
}

export async function fetchProductsByCategory(id) {
    try { 
        return await getProductsByCategory(id); 
    } catch (e) { 
        throw e; 
    }
}