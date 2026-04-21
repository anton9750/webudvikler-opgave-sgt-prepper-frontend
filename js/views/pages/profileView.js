import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';

/**
 * Tegner profil-siden for den indloggede bruger
 */
export function renderProfilePage(categories) {
    const app = document.getElementById('app');
    
    // Hent navnet på brugeren fra localStorage
    const userName = localStorage.getItem('userName') || 'Admin';

    app.innerHTML = `
        ${renderHeader(categories)}
        
        <main class="min-h-screen bg-gray-50 py-12 px-6">
            <div class="max-w-4xl mx-auto">
                
                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    
                    <div class="bg-[#0a2a4a] p-8 text-white flex items-center gap-6">
                        <div class="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-[#0a2a4a] text-4xl font-black shadow-inner">
                            ${userName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h1 class="text-2xl font-black uppercase tracking-tight italic">Admin</h1>
                            <p class="text-yellow-400 text-xs font-bold uppercase tracking-widest mt-1">Sgt. Prepper System Adgang</p>
                        </div>
                    </div>
                    
                    <div class="p-10">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                            
                            <div class="space-y-1 border-l-4 border-yellow-400 pl-4">
                                <p class="text-[10px] text-gray-400 uppercase font-black tracking-tighter">Brugernavn / Email</p>
                                <p class="font-bold text-[#0a2a4a] text-lg">${userName}</p>
                            </div>

                            <div class="space-y-1 border-l-4 border-green-500 pl-4">
                                <p class="text-[10px] text-gray-400 uppercase font-black tracking-tighter">System Status</p>
                                <p class="text-green-600 font-bold flex items-center gap-2">
                                    <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Logget ind
                                </p>
                            </div>

                        </div>

                        <div class="mt-16">
                            <h2 class="text-xs font-black uppercase tracking-widest text-[#0a2a4a] mb-4 flex items-center gap-2">
                                <i class="fas fa-history"></i> Ordrehistorik
                            </h2>
                            <div class="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center">
                                <i class="fas fa-box-open text-4xl text-gray-200 mb-4"></i>
                                <p class="text-gray-400 text-sm font-medium">Ingen tidligere ordrer registreret.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="mt-10 text-center">
                    <button onclick="handleLogout()" class="text-[10px] font-black text-gray-400 hover:text-red-600 uppercase tracking-[0.2em] transition-all">
                        Log ud
                    </button>
                </div>

            </div>
        </main>

        ${renderFooter()}
    `;
}