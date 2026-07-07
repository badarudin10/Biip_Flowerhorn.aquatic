async function showPage(pageId) {
    const app = document.getElementById('app');
    
    if (pageId === 'home') {
        app.innerHTML = `<h1>Selamat Datang di Biip Flowerhorn</h1><p>Belanja aman dan terpercaya.</p>`;
    } 
    
    else if (pageId === 'produk') {
        app.innerHTML = `<h2>Koleksi Ikan Hias</h2><div class="product-grid" id="product-container">Memuat data...</div>`;
        
        // Mengambil data dari Spreadsheet (tab "Products")
        const products = await fetchData('Products');
        const container = document.getElementById('product-container');
        
        container.innerHTML = products.map(item => `
            <div class="product-card">
                <img src="${item.image_urls}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Size: ${item.size}</p>
                <p>Harga: Rp ${item.price}</p>
            </div>
        `).join('');
    }
}

// Jalankan saat halaman pertama kali dibuka
window.onload = () => showPage('home');
