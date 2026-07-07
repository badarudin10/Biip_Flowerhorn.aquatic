async function showPage(pageId) {
    const app = document.getElementById('app');
    app.innerHTML = "Memuat data...";

    if (pageId === 'home') {
        app.innerHTML = "<h1>Selamat Datang di Biip Flowerhorn</h1>";
    } 
    else if (pageId === 'produk') {
        const data = await fetchData('Products');
        app.innerHTML = "<h2>Produk</h2>" + data.map(p => `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Harga: Rp ${p.price}</p>
                <img src="${p.image_urls}" alt="Produk">
            </div>`).join('');
    }
    else if (pageId === 'artikel') {
        const data = await fetchData('Articles');
        app.innerHTML = "<h2>Artikel</h2>" + data.map(a => `
            <div class="card">
                <h3>${a.Judul}</h3>
                <p>${a.Konten}</p>
            </div>`).join('');
    }
    else if (pageId === 'bantuan') {
        const data = await fetchData('Help');
        app.innerHTML = "<h2>Bantuan</h2>" + data.map(h => `
            <div class="card">
                <h3>${h.Kategory}</h3>
                <p>${h.Konten}</p>
            </div>`).join('');
    }
}

window.onload = () => showPage('home');
