import { initHome } from '../controllers/homeController.js';
import { initProductDetail } from '../controllers/productController.js';
import { initCategory } from '../controllers/categoryController.js';
import { initLogin } from '../controllers/loginController.js'; 
import { initProfile } from '../controllers/profileController.js'; 

// Import af simple tekst-sider (Views)
import { renderPrivacyPage } from '../views/pages/privacyView.js';
import { renderAboutPage } from '../views/pages/aboutView.js';
import { renderTermsPage } from '../views/pages/termsView.js'; // Sørg for at denne fil findes

import { fetchCategories } from '../models/categoryModel.js';

/**
 * Konfiguration af ruter
 * Nøglen er URL-stien, værdien er enten en controller-funktion eller en streng-id
 */
const routes = {
    '/': initHome,
    '/category/:id': initCategory,
    '/product/:id': initProductDetail,
    '/login': initLogin, 
    '/profile': initProfile, 
    '/privacy': 'privacy',
    '/about': 'about',
    '/terms': 'terms' // Tilføjet rute til handelsbetingelser
};

/**
 * Analyserer den nuværende URL hash og finder det matchende route-objekt
 */
function parseLocation() {
    // Hent hash (f.eks. #/profile), fjern # og lav til lowercase. Standard er /
    let hash = location.hash.slice(1).toLowerCase() || '/';
    
    // Sikr os at den starter med / så den matcher routes-nøglerne
    if (!hash.startsWith('/')) {
        hash = '/' + hash;
    }

    for (const path in routes) {
        const routeParts = path.split('/');
        const hashParts = hash.split('/');
        
        // Hvis antallet af skråstreger ikke matcher, er det ikke denne rute
        if (routeParts.length !== hashParts.length) continue;
        
        const params = {};
        const isMatch = routeParts.every((part, i) => {
            // Hvis ruten indeholder et parameter (f.eks. :id)
            if (part.startsWith(':')) {
                params[part.slice(1)] = hashParts[i];
                return true;
            }
            // Ellers tjek om strengene er identiske
            return part === hashParts[i];
        });
        
        if (isMatch) return { route: routes[path], params };
    }
    return null;
}

/**
 * Hovedfunktionen der styrer hvad der skal vises på skærmen
 */
export async function initRouter() {
    const loadPage = async () => {
        const match = parseLocation();
        
        if (!match) {
            console.error("Rute ikke fundet for:", location.hash);
            // Man kunne her loade en 404 side
            return;
        }

        // Ryd op i eventuelle gamle event listeners eller indhold hvis nødvendigt
        // (Valgfrit: scroll til toppen ved skift)
        window.scrollTo(0, 0);

        if (typeof match.route === 'function') {
            // Hvis ruten peger på en controller (f.eks. initLogin)
            await match.route(match.params);
        } 
        else {
            // Hvis ruten er en simpel tekst-side (statisk indhold)
            // Vi henter kategorier her, så headeren altid har sin menu
            const categories = await fetchCategories();
            
            if (match.route === 'privacy') renderPrivacyPage(categories);
            if (match.route === 'about') renderAboutPage(categories);
            if (match.route === 'terms') renderTermsPage(categories);
        }
    };
    
    // Lyt på ændringer i URL'en
    window.addEventListener('hashchange', loadPage);
    
    // Kør ved load (hvis man f.eks. refresher siden på en underside)
    window.addEventListener('load', loadPage);
    
    // Første kørsel
    loadPage();
}