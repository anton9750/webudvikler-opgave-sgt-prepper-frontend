import { fetchCategories } from '../models/categoryModel.js';
import { renderLoginPage } from '../views/pages/loginView.js';
import { login } from '../models/authModel.js';

/**
 * Initialiserer login-siden.
 * Denne funktion eksporteres, så routeren kan kalde den.
 */
export async function initLogin() {
    try {
        // 1. Hent kategorier til navigationsmenuen
        const categories = await fetchCategories();
        
        // 2. Render selve login-siden via viewet
        renderLoginPage(categories);

        // 3. Find formularen og fejl-elementet i DOM'en
        const form = document.getElementById('login-form');
        const errorEl = document.getElementById('login-error');

        // Stop hvis formen ikke findes (sikkerhedstjek)
        if (!form) return;

        // 4. Lyt efter submit-eventet på formularen
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Forhindrer siden i at genindlæse
            
            // Hent værdier fra input-felterne (name="username" og name="password")
            const username = form.username.value;
            const password = form.password.value;

            try {
                // Forsøg at logge ind via din authModel
                // Vi bruger 'await' for at sikre, at vi har en token før vi går videre
                const success = await login(username, password);
                
                if (success) {
                    // Giv besked til Headeren om at opdatere (vis brugernavn i stedet for login-knap)
                    window.dispatchEvent(new Event('authChange'));
                    
                    window.location.hash = '#/profile';
                }
                
            } catch (err) {
             
                if (errorEl) {
                    errorEl.innerText = err.message;
                    errorEl.classList.remove('hidden');
                }
                console.error("Login fejl:", err.message);
            }
        });
    } catch (error) {
        console.error("Fejl under initialisering af login-siden:", error);
    }
}