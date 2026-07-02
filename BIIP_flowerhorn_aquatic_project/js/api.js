const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw9dJEZXinPaGrAXv4PZpX0s5-RM1EGFn8eAHpD_nEDS4JmXnxFCwrlEIyAj35bdmo8rw/exec";

async function loadProducts() {
    const data = await fetchFromSheet('Products');
    const container = document.getElementById('product-container');
    container.innerHTML = data.map(item => `
        <div class="card">
            <img src="${item.image_urls}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>Harga: Rp ${item.price}</p>
            <button onclick="addToCart(${JSON.stringify(item)})">Beli</button>
        </div>
    `).join('');
}
