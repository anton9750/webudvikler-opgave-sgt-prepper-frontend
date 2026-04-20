import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';

export function renderProfilePage(categories) {
    const app = document.getElementById('app');
    const userName = localStorage.getItem('userName') || 'Agent';

    app.innerHTML = `
        ${renderHeader(categories)}
        <main class="max-w-4xl mx-auto py-20 px-6">
            <div class="bg-white p-12 rounded-3xl shadow-xl text-center">
                <h1 class="text-4xl font-black uppercase text-[#0a2a4a]">Velkommen, ${userName}</h1>
                <p class="text-gray-500 mt-2">Du er logget ind i bunkeren.</p>
                <div class="mt-10 p-10 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400">
                    Ordrehistorik kommer snart...
                </div>
            </div>
        </main>
        ${renderFooter()}
    `;
}