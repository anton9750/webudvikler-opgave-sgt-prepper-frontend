import { fetchCategories, fetchProductsByCategory } from '../models/categoryModel.js'; // we'll create the fetch below
import { renderCategory } from '../views/pages/categoryView.js';

export async function initCategory(id) {
    const products = await fetchProductsByCategory(id);
    renderCategory(products);
}