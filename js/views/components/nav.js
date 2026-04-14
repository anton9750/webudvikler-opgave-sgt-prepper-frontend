import { fetchCategories } from "../models/categoryModel.js";

export async function Nav() {
  const categories = await fetchCategories();

  return `
    <nav class="bg-gray-100 p-3 flex gap-4 flex-wrap">

      <a href="#/" class="font-semibold">Alle</a>

      ${categories.map(cat => `
        <a href="#/category/${cat.id}" class="hover:underline">
          ${cat.name}
        </a>
      `).join("")}

      <a href="#/cart" class="ml-auto font-semibold">
        Kurv
      </a>

    </nav>
  `;
}