import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';

export function renderLoginPage(categories) {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        ${renderHeader(categories)}
        
        <main class="max-w-md mx-auto py-20 px-6 min-h-[70vh] flex items-center justify-center">
            <div class="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 w-full">
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-black uppercase tracking-tighter text-[#0a2a4a]">Log ind</h1>
                    <p class="text-gray-400 text-sm mt-2 italic italic">Adgang for Sgt. Prepper agenter</p>
                </div>
                
                <form id="login-form" class="space-y-5">
                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-widest mb-1 ml-1">Brugernavn</label>
                        <input type="text" name="username" required 
                               class="w-full p-4 border-2 border-gray-50 rounded-2xl bg-gray-50 focus:border-yellow-400 focus:bg-white outline-none transition-all">
                    </div>
                    
                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-widest mb-1 ml-1">Adgangskode</label>
                        <input type="password" name="password" required 
                               class="w-full p-4 border-2 border-gray-50 rounded-2xl bg-gray-50 focus:border-yellow-400 focus:bg-white outline-none transition-all">
                    </div>

                  <button type="submit" 
        class="w-full bg-[#0a2a4a] text-white font-black py-4 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all shadow-lg active:scale-95 uppercase tracking-widest mt-4">
    Login </button>
                    
                    <p id="login-error" class="text-red-500 text-xs text-center font-bold hidden bg-red-50 p-3 rounded-xl border border-red-100"></p>
                </form>
            </div>
        </main>

        ${renderFooter()}
    `;
}