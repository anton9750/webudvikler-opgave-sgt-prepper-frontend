import { fetchCategories } from '../models/categoryModel.js';
import { renderProfilePage } from '../views/pages/profileView.js';
import { isAuthenticated } from '../models/authModel.js';

export async function initProfile() {
    // Sikkerheds-tjek: Hvis man prøver at gå på /profile uden at være logget ind
    if (!isAuthenticated()) {
        window.location.hash = '#/login';
        return;
    }

    const categories = await fetchCategories();
    renderProfilePage(categories);
}