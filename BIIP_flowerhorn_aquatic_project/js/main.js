async function renderPage(pageId) {
    const app = document.getElementById('app');
    
    // Logika untuk menampilkan konten berdasarkan tab Spreadsheet
    if (pageId === 'home') {
        app.innerHTML = `<h1>Selamat Datang di Biip Flowerhorn</h1>`;
    } 
    // Menangani Produk
    else if (pageId === 'produk') {
        app.innerHTML = `<h2>Produk Kami</h2><div id="product-container">Memuat...</div>`;
        const data = await fetchData('Products'); // Memanggil tab Products
        document.getElementById('product-container').innerHTML = data.map(p => `
            <div><h3>${p.name}</h3><p>Harga: Rp ${p.price}</p></div>
        `).join('');
    }
    // Menangani Artikel (Edukasi)
    else if (pageId === 'artikel') {
        app.innerHTML = `<h2>Artikel Edukasi</h2><div id="article-container">Memuat...</div>`;
        const data = await fetchData('Articles'); // Memanggil tab Articles
        document.getElementById('article-container').innerHTML = data.map(a => `
            <div><h3>${a.judul}</h3><p>${a.konten}</p></div>
        `).join('');
    }
    // Tambahkan else if lain untuk Help, Reviews, dll.
}
