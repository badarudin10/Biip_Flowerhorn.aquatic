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

// Inisialisasi saat web pertama dibuka
window.onload = () => showPage('home');
