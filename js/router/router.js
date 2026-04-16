import { initHome } from '../controllers/homeController.js';
import { initProductDetail } from '../controllers/productController.js';
import { initCategory } from '../controllers/categoryController.js';

const routes = {
    '/': initHome,
    '/category/:id': initCategory,
    '/product/:id': initProductDetail
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
        if (isMatch) return { controller: routes[path], params };
    }
    return null;
}

export async function initRouter() {
    const loadPage = async () => {
        const match = parseLocation();
        if (match) await match.controller(match.params);
    };
    window.addEventListener('hashchange', loadPage);
    loadPage();
}