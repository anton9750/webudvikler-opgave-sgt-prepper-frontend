export default function renderHeader() {
  const header = document.querySelector("#header");
  header.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-[#0f172a] text-white">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-3xl">🏔️</div>
        <span class="text-3xl font-bold tracking-tighter">Sgt PREPPER</span>
      </div>

      <!-- Main navigation tabs (exactly as in Figma) -->
      <nav class="hidden md:flex gap-8 text-sm font-medium">
        <a href="#/" class="hover:text-amber-300">Hjem og overnatning</a>
        <a href="#/" class="hover:text-amber-300">Mad og brugsforbrug</a>
        <a href="#/" class="hover:text-amber-300">F. sengel og belysning</a>
        <a href="#/" class="hover:text-amber-300">Køretøjer og vildmark</a>
        <a href="#/" class="hover:text-amber-300">Kommunikation og navigation</a>
      </nav>

      <!-- Right side -->
      <div class="flex items-center gap-6">
        <a href="#/profile" class="text-sm font-medium hover:text-amber-300">Log ind</a>
        <a href="#/cart" class="flex items-center gap-2 hover:text-amber-300">
          <span class="text-3xl">🛒</span>
          <span id="cart-count" class="bg-amber-400 text-black text-xs font-bold px-2.5 py-px rounded-full">0</span>
        </a>
      </div>
    </div>
  `;
}


  const countEl = document.getElementById("cart-count");
  if (countEl) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    countEl.textContent = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  }