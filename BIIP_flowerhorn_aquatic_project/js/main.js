// Navigasi SPA: Menampilkan konten tanpa reload halaman
function showPage(pageId) {
    const main = document.getElementById('app');
    
    // Logika pemilihan konten
    switch(pageId) {
        case 'home':
            main.innerHTML = `
                <div class="banner">
                    <img src="https://i.ibb.co.com/dsm7JfZH/1777975785797.png" class="slide-img">
                    <p>BELANJA ONLINE TIDAK PERLU CEMAS</p>
                </div>
                <div id="reviews-section">
                    <h3>Ulasan Pelanggan</h3>
                    </div>
            `;
            break;
        case 'produk':
            main.innerHTML = `
                <h2>Produk Ikan Hias</h2>
                <div class="product-grid" id="product-container">
                    </div>
            `;
            loadProducts(); // Panggil fungsi dari api.js
            break;
        // Tambahkan case 'kontak', 'tentang', dll
    }
}

// Logika Keranjang (Shopping Cart)
let cart = JSON.parse(localStorage.getItem('biipCart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('biipCart', JSON.stringify(cart));
    alert(product.name + " berhasil ditambahkan ke keranjang!");
}
// Fungsi untuk memfilter dan menampilkan produk
async function renderProduk(kategoriDipilih = 'semua') {
    const container = document.getElementById('product-container');
    container.innerHTML = "Memuat data..."; // Loading state

    const products = await getProducts(); // Memanggil fungsi dari api.js

    const filtered = kategoriDipilih === 'semua' 
        ? products 
        : products.filter(p => p.category === kategoriDipilih);

    container.innerHTML = filtered.map(item => `
        <div class="product-card">
            <img src="${item.image_urls}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Size: ${item.size}</p>
            <p>Harga: Rp ${item.price.toLocaleString()}</p>
            <button onclick='addToCart(${JSON.stringify(item)})'>Tambah ke Keranjang</button>
        </div>
    `).join('');
}
async function kirimUlasan() {
    const ulasan = {
        name: document.getElementById('userName').value,
        rating: document.getElementById('userRating').value,
        comment: document.getElementById('userComment').value,
        targetSheet: "Reviews"
    };
    
    await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(ulasan)
    });
    alert("Terima kasih atas ulasan Anda!");
}

// Inisialisasi saat web pertama dibuka
window.onload = () => showPage('home');
