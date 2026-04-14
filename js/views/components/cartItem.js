export function renderCartItem(item) {
    return `
    <div class="flex gap-4 border-b py-4">
        <img src="${item.imageUrl || 'https://picsum.photos/80'}" alt="${item.name}" class="w-20 h-20 object-cover rounded">
        <div class="flex-1">
            <h4 class="font-semibold">${item.name}</h4>
            <p class="text-sm text-gray-500">${item.price} DKK</p>
            <div class="flex items-center gap-3 mt-2">
                <button onclick="updateQty(${item.id}, -1)" class="w-8 h-8 border rounded">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQty(${item.id}, 1)" class="w-8 h-8 border rounded">+</button>
                <button onclick="removeItem(${item.id})" class="ml-auto text-red-600 text-sm">Fjern</button>
            </div>
        </div>
        <div class="text-right font-bold">${(item.price * item.quantity).toFixed(2)} DKK</div>
    </div>`;
}