import { productCard } from "../components/productCard.js";

export function categoryView(products, categoryName) {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <section>
      <h1 class="text-2xl font-bold">${categoryName}</h1>
      <div class="grid grid-cols-2 gap-4 mt-4">
        ${products.map(productCard).join("")}
      </div>
    </section>
  `;
}
