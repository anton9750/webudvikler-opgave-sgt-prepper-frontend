export function renderButton(text, onClick, className = '') {
    return `<button onclick="${onClick}" class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium ${className}">${text}</button>`;
}