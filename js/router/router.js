import { initHome } from '../controllers/homeController.js';
import { initProductDetail } from '../controllers/productController.js';
import { initCategory } from '../controllers/categoryController.js';
// 1. TILFØJ DENNE IMPORT:
import { initLogin } from '../controllers/loginController.js'; 

import { renderPrivacyPage } from '../views/pages/privacyView.js';
import { renderTermsPage } from '../views/pages/termsView.js';
import { renderAboutPage } from '../views/pages/aboutView.js';

import { fetchCategories } from '../models/categoryModel.js';

const routes = {
    '/': initHome,
    '/category/:id': initCategory,
    '/product/:id': initProductDetail,
    // 2. TILFØJ DENNE RUTEN:
    '/login': initLogin, 
    
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

        // Her tjekker routeren om 'route' er en funktion (som f.eks. initLogin)
        if (typeof match.route === 'function') {
            await match.route(match.params);
        } 
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