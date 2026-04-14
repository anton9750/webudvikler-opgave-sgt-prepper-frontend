import { initHome } from '../controllers/homeController.js';
import { initProduct } from '../controllers/productController.js';
import { initCategory } from '../controllers/categoryController.js';
import { initCart } from '../controllers/cartController.js';
import { initCheckout } from '../controllers/checkoutController.js';

const routes = {
    '/': initHome,
    '/home': initHome,
    '/product/:id': (id) => initProduct(id),
    '/category/:id': (id) => initCategory(id),
    '/cart': initCart,
    '/checkout': initCheckout,
};

function parseRoute(path) {
    if (path.startsWith('/product/')) return { route: '/product/:id', param: path.split('/')[2] };
    if (path.startsWith('/category/')) return { route: '/category/:id', param: path.split('/')[2] };
    return { route: path, param: null };
}

export function initRouter() {
    function load() {
        const { pathname } = window.location;
        const { route, param } = parseRoute(pathname);
        const handler = routes[route] || routes['/'];
        handler(param);
    }

    window.addEventListener('popstate', load);
    load();
}

export function navigateTo(path) {
    window.history.pushState({}, '', path);
    const { route, param } = parseRoute(path);
    routes[route](param);
}