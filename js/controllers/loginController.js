import { fetchCategories } from '../models/categoryModel.js';
import { renderLoginPage } from '../views/pages/loginView.js';
import { login } from '../models/authModel.js'; // Vi importerer login-funktionen fra din model

export async function initLogin() {
    try {
        // 1. Hent kategorier så menuen i toppen ser rigtig ud
        const categories = await fetchCategories();
        
        // 2. Tegn siden
        renderLoginPage(categories);

        // 3. Find formularen i det DOM-træ vi lige har tegnet
        const form = document.getElementById('login-form');
        const errorEl = document.getElementById('login-error');

        // 4. Lyt efter submit-eventet
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Stop siden fra at refreshe
            
            // Hent værdier fra de to input-felter
            const username = form.username.value;
            const password = form.password.value;

            try {
                // Kald modellen og vent på svar fra API'et
                await login(username, password);
                
                // Hvis det lykkedes: Send brugeren til forsiden
                window.location.hash = '#/';
                
                // Vi sender et signal så Headeren ved den skal opdatere sig
                window.dispatchEvent(new Event('authChange'));
                
            } catch (err) {
                // Hvis det fejler (forkert password): Vis fejlen i rød tekst
                errorEl.innerText = err.message;
                errorEl.classList.remove('hidden');
            }
        });
    } catch (e) {
        console.error("Fejl i LoginController:", e);
    }
}