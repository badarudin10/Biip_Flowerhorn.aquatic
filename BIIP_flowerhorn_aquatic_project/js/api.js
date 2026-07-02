const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxo4Z1hR0BlGnieujK7VEFg5I2PWF1pJA8fqFgemVRUyKXeRY6vJwZQ6rkY5TEDRMOkfA/exec";

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
