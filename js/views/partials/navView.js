import { fetchCategories } from "../../models/categoryModel.js";

export default async function renderNav() {
  const nav = document.querySelector("#nav");

  const categories = await fetchCategories();

  nav.innerHTML = `
    <nav class="flex gap-4 p-4 bg-gray-100">
      <a href="#/">Home</a>

      ${categories.map(cat => `
        <a href="#/category/${cat.categoryId}">
          ${cat.name}
        </a>
      `).join("")}

      <a href="#/cart">Kurv</a>
    </nav>
  `;
}