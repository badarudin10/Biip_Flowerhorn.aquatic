return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <img src={produk.gambar} alt={produk.nama} className="rounded-2xl shadow-lg w-full" />
      <div>
        <h1 className="text-4xl font-bold text-biip-blue">{produk.nama}</h1>
        <p className="text-2xl font-extrabold text-biip-gold my-4">Rp {produk.harga.toLocaleString()}</p>
        <p className="text-gray-700 mb-6">{produk.deskripsi}</p>
        <button 
          onClick={() => {
            const pesan = `Halo Admin Biip Flowerhorn, saya ingin membeli ikan: ${produk.nama}`;
            window.open(`https://wa.me/6285716842806?text=${encodeURIComponent(pesan)}`, '_blank');
          }}
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center gap-2"
        >
          <span>Beli via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
