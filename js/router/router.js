import { initHome } from '../controllers/homeController.js';
import { initProduct } from '../controllers/productController.js';
import { initCategory } from '../controllers/categoryController.js';
import { initCart } from '../controllers/cartController.js';
import { initCheckout } from '../controllers/checkoutController.js';

const routes = {
    '/': initHome,
    '/product/:id': (id) => initProduct(id),
    '/category/:id': (id) => initCategory(id),
    '/cart': initCart,
    '/checkout': initCheckout,
};

function parseRoute(hash) {
    // Fjern '#' fra starten (f.eks. "#/product/1" bliver til "/product/1")
    const path = hash.replace(/^#/, '') || '/';
    
    if (path.startsWith('/product/')) return { route: '/product/:id', param: path.split('/')[2] };
    if (path.startsWith('/category/')) return { route: '/category/:id', param: path.split('/')[2] };
    
    return { route: path, param: null };
}

export function initRouter() {
    function load() {
        const hash = window.location.hash || '#/';
        const { route, param } = parseRoute(hash);
        const handler = routes[route] || routes['/'];
        handler(param);
    }

    // Lyt på hash-ændringer i stedet for popstate
    window.addEventListener('hashchange', load);
    load();
}

// Navigering er nu simplere - vi ændrer bare hashen direkte
export function navigateTo(path) {
    window.location.hash = path;
}

window.navigateTo = navigateTo; // Gør den global så onclick virker