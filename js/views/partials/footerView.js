export default function renderFooter() {
  const footer = document.querySelector("#footer");
  footer.innerHTML = `
    <div class="bg-[#0f172a] text-white relative">
      <!-- Silhouette landscape -->
      <div class="h-28 bg-[#0f172a] flex items-end">
        <svg width="100%" height="100" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 100 L300 40 L600 80 L900 30 L1200 70 L1440 50 L1440 100 Z" fill="#1e2937"/>
          <circle cx="720" cy="45" r="22" fill="#f59e0b"/>
        </svg>
      </div>
      
      <div class="max-w-7xl mx-auto px-6 py-6 text-center text-xs">
        <p class="font-bold">#TECHCOLLEGE 2025</p>
        <p class="mt-3">Øster Uttrup Vej 1, 9000 Aalborg · Tlf.: 72 50 10 00 · E-mail: mail@techcollege.dk</p>
      </div>
    </div>
  `;
}