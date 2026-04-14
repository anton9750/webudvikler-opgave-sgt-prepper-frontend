import { fetchProductById } from '../models/productModel.js';
import { renderProduct } from '../views/pages/productView.js';

export async function initProduct(id) {
    const product = await fetchProductById(id);
    renderProduct(product);
}