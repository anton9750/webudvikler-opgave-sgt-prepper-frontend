import { initHome } from '../controllers/homeController.js';
import { initProductDetail } from '../controllers/productController.js';
import { initCategory } from '../controllers/categoryController.js';
import { initLogin } from '../controllers/loginController.js'; 
import { initProfile } from '../controllers/profileController.js'; 

import { renderPrivacyPage } from '../views/pages/privacyView.js';
import { renderAboutPage } from '../views/pages/aboutView.js';

import { fetchCategories } from '../models/categoryModel.js';

const routes = {
    '/': initHome,
    '/category/:id': initCategory,
    '/product/:id': initProductDetail,
    '/login': initLogin, 
    '/profile': initProfile, 
    '/privacy': 'privacy',
    '/about': 'about'
};

function parseLocation() {
    // Hent hash og fjern #. Hvis tom, brug /
    let hash = location.hash.slice(1).toLowerCase() || '/';
    
    // Sikr os at den starter med / så den matcher routes-nøglerne
    if (!hash.startsWith('/')) {
        hash = '/' + hash;
    }

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
        
        if (!match) {
            console.error("Rute ikke fundet for:", location.hash);
            return;
        }

        if (typeof match.route === 'function') {
            // Kører controlleren (f.eks. initLogin eller initProfile)
            await match.route(match.params);
        } 
        else {
            // Håndterer simple tekst-sider
            const categories = await fetchCategories();
            if (match.route === 'privacy') renderPrivacyPage(categories);
            if (match.route === 'about') renderAboutPage(categories);
        }
    };
    
    // VIGTIGT: Lyt på begge events for at undgå "refresh"-fejl
    window.addEventListener('hashchange', loadPage);
    window.addEventListener('load', loadPage);
    
    // Kør første gang ved opstart
    loadPage();
}