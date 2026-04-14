export function checkoutView() {
  const root = document.querySelector("#root");

  root.innerHTML = `
    <section>
      <h1>Checkout</h1>
      <form id="checkoutForm">
        <input placeholder="Navn" />
        <input placeholder="Email" />
        <input placeholder="Adresse" />
        <button>Bestil</button>
      </form>
    </section>
  `;


  document.querySelector("#checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = e.target.querySelectorAll("input");

    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add("border-red-500");
        valid = false;
      }
    });

    if (!valid) return;

    alert("Bestilling gennemført 🎉");
    localStorage.removeItem("cart");
  });
}