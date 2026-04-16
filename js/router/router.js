import { initHome } from '../controllers/homeController.js';
import { initProductDetail } from '../controllers/productController.js';
import { initCategory } from '../controllers/categoryController.js';

// TJEK DISSE NAVNE: Hedder de .js til sidst? Og er navnene 100% rigtige?
import { renderPrivacyPage } from '../views/pages/privacyView.js';
import { renderTermsPage } from '../views/pages/termsView.js'; // Retet fra termsPage til termsView
import { renderAboutPage } from '../views/pages/aboutView.js';

import { fetchCategories } from '../models/categoryModel.js';

const routes = {
    '/': initHome,
    '/category/:id': initCategory,
    '/product/:id': initProductDetail,
    '/privacy': 'privacy',
    '/terms': 'terms',
    '/about': 'about'
};

function parseLocation() {
    const hash = location.hash.slice(1).toLowerCase() || '/';
    
    for (const path in routes) {
        const routeParts = path.split('/');
        const hashParts = hash.split('/');
        if (routeParts.length !== hashParts.length) continue;
        
        const params = {};
        const isMatch = routeParts.every((part, i) => {
            if (part.startsWith(':')) {
                params[part.slice(1)] = hashParts[i];
                return true;
            }
            return part === hashParts[i];
        });
        
        if (isMatch) return { route: routes[path], params };
    }
    return null;
}

export async function initRouter() {
    const loadPage = async () => {
        const match = parseLocation();
        if (!match) return;

        // Håndter de almindelige controllere
        if (typeof match.route === 'function') {
            await match.route(match.params);
        } 
        // Håndter de statiske sider (About, Privacy, Terms)
        else {
            const categories = await fetchCategories();
            if (match.route === 'privacy') renderPrivacyPage(categories);
            if (match.route === 'terms') renderTermsPage(categories);
            if (match.route === 'about') renderAboutPage(categories);
        }
    };
    
    window.addEventListener('hashchange', loadPage);
    loadPage();
}