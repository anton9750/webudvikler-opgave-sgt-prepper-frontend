import { renderCheckout } from '../views/pages/checkoutView.js';
import { createOrder } from '../models/orderModel.js';
import { renderHeader } from '../views/components/header.js';
import { renderFooter } from '../views/components/footer.js';


export async function initCheckout() {
    const app = document.getElementById('app');
    
  
    app.innerHTML = `
        ${renderHeader()}
        <main id="checkout-container">
            ${renderCheckout()}
        </main>
        ${renderFooter()}
    `;

   
    const form = document.getElementById('checkoutForm');
    if (!form) return;

   
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        
   
        const orderData = {
            address: formData.get('deliveryAddress'),
            zipcode: formData.get('deliveryZipcode'),
            city: formData.get('deliveryCity'),
            userId: '1' 
        };

       
        if (!orderData.address || !orderData.zipcode || !orderData.city) {
            alert("Venligst udfyld alle leveringsoplysninger.");
            return;
        }

        try {
          
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = "BEHANDLER ORDRE...";

            
            console.log("Sender ordre til API:", orderData);
            const response = await createOrder(orderData);

            
            alert("Tillykke! Din ordre er modtaget.");
            
           
            localStorage.removeItem('cart');
            
        
            window.location.hash = '/';

        } catch (error) {
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