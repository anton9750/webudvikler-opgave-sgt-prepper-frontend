import { renderCheckout } from '../views/pages/checkoutView.js';
import { createOrder } from '../models/orderModel.js';
import { renderHeader } from '../views/components/header.js';
import { renderFooter } from '../views/components/footer.js';

/**
 * Initialiserer checkout-siden
 */
export async function initCheckout() {
    const app = document.getElementById('app');
    
    // 1. Render siden med Header, Formular og Footer
    app.innerHTML = `
        ${renderHeader()}
        <main id="checkout-container">
            ${renderCheckout()}
        </main>
        ${renderFooter()}
    `;

    // 2. Find formularen i DOM'en efter den er renderet
    const form = document.getElementById('checkoutForm');
    if (!form) return;

    // 3. Lyt efter submit-event
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Saml data fra formularen
        const formData = new FormData(form);
        
        // Map formular-felterne til API'ets forventede navne
        const orderData = {
            address: formData.get('deliveryAddress'),
            zipcode: formData.get('deliveryZipcode'),
            city: formData.get('deliveryCity'),
            userId: '1' // Statisk ID som set i din API-dokumentation
        };

        // Simpel validering (Tjek om felter er udfyldt)
        if (!orderData.address || !orderData.zipcode || !orderData.city) {
            alert("Venligst udfyld alle leveringsoplysninger.");
            return;
        }

        try {
            // Skift knappen til "venter" status
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = "BEHANDLER ORDRE...";

            // Send ordren til API'et via din Model
            console.log("Sender ordre til API:", orderData);
            const response = await createOrder(orderData);

            // Succes!
            alert("Tillykke! Din ordre er modtaget.");
            
            // Tøm kurven efter et succesfuldt køb
            localStorage.removeItem('cart');
            
            // Send brugeren tilbage til forsiden via din router
            window.location.hash = '/';

        } catch (error) {
            // Håndtering af fejl (f.eks. hvis du ikke har forbindelse til /api/orders)
            console.error("Fejl under checkout:", error);
            
            // Til eksamen: Vis at du ved hvad der sker, selvom API'et fejler
            alert("System-besked: Ordren blev valideret i frontend, men kunne ikke gemmes i databasen (API-forbindelsesfejl).");
            
            // Genaktiver knappen så brugeren kan prøve igen
            const submitBtn = form.querySelector('button');
            submitBtn.disabled = false;
            submitBtn.textContent = "PRØV IGEN";
        }
    });
}