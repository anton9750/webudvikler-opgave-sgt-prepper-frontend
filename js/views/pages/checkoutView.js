/**
 * Genererer HTML for checkout-siden.
 * Bemærk: EventListeners håndteres i checkoutController.js for at overholde MVC.
 */
export function renderCheckout() {
    // Vi henter kurven for at kunne vise en lille oversigt (valgfrit, men god stil)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return `
    <div class="max-w-5xl mx-auto p-6 lg:p-12">
        <h1 class="text-4xl font-black text-[#0a2a4a] mb-10">Gennemfør din bestilling</h1>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div class="lg:col-span-2">
                <form id="checkoutForm" class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                    <h2 class="text-xl font-bold mb-4 border-b pb-4">Leveringsoplysninger</h2>
                    
                    <div>
                        <label class="block text-sm font-bold text-gray-700 mb-2 tracking-wide uppercase text-[10px]">Leveringsadresse</label>
                        <input type="text" name="deliveryAddress" 
                            class="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0a2a4a] focus:outline-none transition-all" 
                            placeholder="Vejnavn og nummer (f.eks. Fermin Terrace 7671)" required>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-2 tracking-wide uppercase text-[10px]">Postnummer</label>
                            <input type="text" name="deliveryZipcode" 
                                class="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0a2a4a] focus:outline-none transition-all" 
                                placeholder="825" required>
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-gray-700 mb-2 tracking-wide uppercase text-[10px]">By</label>
                            <input type="text" name="deliveryCity" 
                                class="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0a2a4a] focus:outline-none transition-all" 
                                placeholder="Port Candaceton" required>
                        </div>
                    </div>

                    <div class="pt-6">
                        <button type="submit" 
                            class="w-full bg-[#0a2a4a] text-white py-5 rounded-2xl font-black text-lg hover:bg-yellow-400 hover:text-black transition-all shadow-lg transform hover:-translate-y-1">
                            BESTIL NU — ${total.toFixed(2)} DKK
                        </button>
                    </div>
                </form>
            </div>

            <div class="lg:col-span-1">
                <div class="bg-gray-50 p-8 rounded-3xl border border-dashed border-gray-300">
                    <h2 class="text-lg font-bold mb-6 italic">Din kurv</h2>
                    <ul class="space-y-4 mb-6">
                        ${cart.map(item => `
                            <li class="flex justify-between text-sm">
                                <span class="text-gray-600">${item.quantity}x ${item.name}</span>
                                <span class="font-bold">${(item.price * item.quantity).toFixed(2)} DKK</span>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="border-t border-gray-300 pt-4 flex justify-between items-center">
                        <span class="font-black text-xl uppercase">Total</span>
                        <span class="font-black text-2xl text-[#0a2a4a]">${total.toFixed(2)} DKK</span>
                    </div>
                    <p class="text-[10px] text-gray-400 mt-6 leading-tight">
                        Ved at klikke "Bestil nu" accepterer du Sgt. Preppers handelsbetingelser for overlevelsesudstyr.
                    </p>
                </div>
            </div>

        </div>
    </div>
    `;
}