// Fungsi utama untuk menampilkan halaman (Routing)
async function showPage(pageId) {
    const app = document.getElementById('app');
    app.innerHTML = "Memuat data..."; // Indikator loading

    try {
        if (pageId === 'home') {
            app.innerHTML = `
                <h1>Selamat Datang di Biip Flowerhorn Aquatic</h1>
                <p>Belanja aman, ikan berkualitas.</p>
                <div id="reviews-section"></div>
            `;
            // Mengambil ulasan untuk halaman home
            const reviews = await fetchData('Reviews');
            document.getElementById('reviews-section').innerHTML = `<h3>Ulasan Pelanggan</h3>` + 
                reviews.map(r => `<p><b>${r.user_name}</b>: ${r.rating}* - ${r.comment}</p>`).join('');
        } 

        else if (pageId === 'produk') {
            const products = await fetchData('Products');
            app.innerHTML = `<h2>Produk Kami</h2><div class="product-grid" id="product-container"></div>`;
            document.getElementById('product-container').innerHTML = products.map(p => `
                <div class="card">
                    <img src="${p.image_urls}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p>Harga: Rp ${p.price}</p>
                    <p>Size: ${p.size}</p>
                </div>
            `).join('');
        }

        else if (pageId === 'artikel') {
            const articles = await fetchData('Articles');
            app.innerHTML = `<h2>Artikel Edukasi</h2>` + articles.map(a => `
                <div class="article-box">
                    <img src="${a.Gambar_urls}" width="100">
                    <h3>${a.Judul}</h3>
                    <p>${a.Konten}</p>
                    <small>Tanggal: ${a.Tanggal}</small>
                </div>
            `).join('');
        }

        else if (pageId === 'bantuan') {
            const help = await fetchData('Help');
            app.innerHTML = `<h2>Pusat Bantuan</h2>` + help.map(h => `
                <div class="help-box">
                    <h3>${h.Kategory}</h3>
                    <p>${h.Konten}</p>
                </div>
            `).join('');
        }
        
        else if (pageId === 'login') {
            app.innerHTML = `
                <h2>Login / Daftar</h2>
                <input type="email" id="email" placeholder="Email">
                <input type="password" id="pass" placeholder="Password">
                <button onclick="prosesLogin()">Masuk</button>
            `;
        }

    } catch (error) {
        app.innerHTML = "Gagal memuat data. Periksa koneksi atau deployment Apps Script Anda.";
    }
}

// Inisialisasi saat web pertama dibuka
window.onload = () => showPage('home');
