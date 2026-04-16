import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';

export function renderTermsPage(categories) {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        ${renderHeader(categories)}
        
        <main class="max-w-4xl mx-auto px-6 py-20 min-h-screen">
            <div class="mb-12 border-l-4 border-yellow-400 pl-6">
                <h1 class="text-5xl font-black uppercase tracking-tighter text-[#0a2a4a]">
                    Handelsbetingelser
                </h1>
                <p class="text-gray-400 mt-2 italic">Gældende for alle handler hos Prepping Shop</p>
            </div>

            <div class="space-y-8 text-gray-700 leading-relaxed text-lg">
                <section>
                    <p class="font-bold text-[#0a2a4a]">Velkommen til Prepping Shop. Herunder finder du de juridiske retningslinjer for dit køb af nødudstyr.</p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold text-[#0a2a4a] mb-2 uppercase">1. Bestilling og Betaling</h2>
                    <p>Alle priser er angivet i danske kroner inkl. moms. Vi modtager de gængse betalingskort. Når du gennemfører en bestilling, modtager du en ordrebekræftelse via e-mail. Pengene trækkes først, når vi afsender dit udstyr fra vores lager.</p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold text-[#0a2a4a] mb-2 uppercase">2. Levering</h2>
                    <p>Vi ved, at forberedelse ikke kan vente. Derfor sender vi lagervarer inden for 1-2 hverdage. Skulle en vare være i restordre, kontakter vi dig hurtigst muligt. Vi leverer til hele landet via professionelle fragtfirmaer.</p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold text-[#0a2a4a] mb-2 uppercase">3. Fortrydelsesret</h2>
                    <p>Du har 14 dages fuld returret på alle ubrudte varer. Hvis du har købt nødrationer eller medicinsk udstyr, skal emballagen være intakt af hygiejniske årsager. Du afholder selv omkostningerne til returforsendelse.</p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold text-[#0a2a4a] mb-2 uppercase">4. Reklamation</h2>
                    <p>Der gives 2 års reklamationsret i henhold til købeloven. Det betyder, at hvis din lommelygte svigter eller dit telt er defekt ved modtagelse, ombytter vi varen eller giver pengene retur. Vi tager forbehold for tastefejl og udsolgte varer.</p>
                </section>
            </div>
        </main>

        ${renderFooter()}
    `;
}