import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';

export function renderPrivacyPage(categories) {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        ${renderHeader(categories)}
        
        <main class="max-w-4xl mx-auto px-6 py-20 min-h-screen">
            <div class="mb-12 border-l-4 border-yellow-400 pl-6">
                <h1 class="text-5xl font-black uppercase tracking-tighter text-[#0a2a4a]">
                    Persondatapolitik
                </h1>
                <p class="text-gray-400 mt-2 italic">Opdateret 2026 – Sikkerhed frem for alt</p>
            </div>

            <div class="space-y-8 text-gray-700 leading-relaxed text-lg">
                <section>
                    <p class="font-bold text-[#0a2a4a]">Hos Prepping Shop prioriterer vi sikkerheden af dine data lige så højt som din overlevelse i vildmarken.</p>
                    <p class="mt-4">Når du handler hos os, indsamler vi kun de mest nødvendige oplysninger for at kunne ekspedere din ordre: Navn, adresse, e-mail og telefonnummer. Vi gemmer disse data i overensstemmelse med gældende lovgivning for at sikre, at vi kan hjælpe dig med eventuelle reklamationer eller spørgsmål til dit udstyr efterfølgende.</p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold text-[#0a2a4a] mb-2 uppercase">Cookies og Optimering</h2>
                    <p>Vi bruger cookies til at optimere din oplevelse på sitet – for eksempel til at huske, hvilke overlevelsesrationer du har lagt i kurven. Dine oplysninger videregives aldrig til tredjepart med henblik på markedsføring. Vi samarbejder kun med betroede fragtfirmaer, så de ved, hvor de skal levere dine vandfiltre og gasbrændere.</p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold text-[#0a2a4a] mb-2 uppercase">Dine Rettigheder</h2>
                    <p>Du har til enhver tid ret til at få oplyst, hvilke data vi har registreret om dig, og du kan altid bede om at få dem slettet (retten til at blive glemt). Vi opbevarer dine data på sikre servere med kryptering, så udefrakommende ikke kan få adgang til dine private informationer. Ved at benytte vores webshop accepterer du vores behandling af dine personoplysninger.</p>
                </section>
            </div>
        </main>

        ${renderFooter()}
    `;
}