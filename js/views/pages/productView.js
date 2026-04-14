import { addToCart } from "../../utils/cart.js";

export function productView(product) {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <section class="p-4">
      <img src="${product.image}" alt="${product.name}" class="w-full mb-4" />
      <h1 class="text-xl font-bold">${product.name}</h1>
      <p class="text-gray-600">${product.description}</p>
      <p class="font-bold mt-2">${product.price} DKK</p>
      <p>${product.stock > 0 ? "På lager" : "Ikke på lager"}</p>
      <button id="addToCart" class="bg-green-500 text-white px-4 py-2 mt-4">
        Læg i kurv
      </button>
    </section>
  `;

  document.querySelector("#addToCart").addEventListener("click", () => {
    addToCart(product);
    alert("Tilføjet til kurv");
  });
}