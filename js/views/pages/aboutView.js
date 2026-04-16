import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';

export function renderAboutPage(categories) {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        ${renderHeader(categories)}
        
        <main class="max-w-4xl mx-auto px-6 py-20 min-h-screen">
            <div class="mb-12 border-l-4 border-yellow-400 pl-6">
                <h1 class="text-5xl font-black uppercase tracking-tighter text-[#0a2a4a]">
                    Om Sgt. Prepper
                </h1>
                <p class="text-gray-400 mt-2 italic">Din sikkerhed er vores mission</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>Sgt. Prepper startede ikke som en forretning, men som en nødvendighed. I en verden der bliver mere uforudsigelig, er vores mål at gøre danskerne klar til hvad som helst.</p>
                    
                    <p>Vi specialiserer os i high-end prepping udstyr, fra vandfiltrering til langtidsholdbare nødrationer. Vi tester alt vores udstyr selv under ekstreme forhold, så vi ved, at det virker, når det virkelig gælder.</p>
                    
                    <p>Uanset om du er en erfaren overlevelsesekspert eller bare gerne vil have styr på familiens sikkerhed i tilfælde af strømsvigt, så står vi klar med rådgivning og det rette grej.</p>
                </div>
                
                </div>
            </div>
        </main>

        ${renderFooter()}
    `;
}