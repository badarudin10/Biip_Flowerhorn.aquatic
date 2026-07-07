const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfBiMc0E1TTgailOt3cW5f_Ve3-PviB18vvvnjWatSwiviU2pHVXrI9gjyVEpH8Rcjdg/exec";

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
