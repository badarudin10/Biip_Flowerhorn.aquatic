import HeroBanner from '../components/HeroBanner';
import ProdukKartu from '../components/ProdukKartu';

export default function Home() {
  // Data sementara (Dummy) sebelum disambungkan ke Database Supabase
  const produkUnggulan = [
    {
      id: '1',
      nama: 'Louhan Kamfa F2 Siap Kontes',
      kategori: 'Siap Kontes',
      harga: 2500000,
      stok: 2,
      deskripsi: 'Mental preman, mutiara full cross, jenong boom water. Anatomi sempurna siap turun meja juri.',
      gambar: 'https://i.ibb.co.com/1Y6W76dW/39703.jpg'
    },
    {
      id: '2',
      nama: 'Bahan Progresan SRD',
      kategori: 'Bahan Progresan',
      harga: 350000,
      stok: 12,
      deskripsi: 'Bakat merah merona, jenong mulai naik. Genetik trah juara, cocok untuk pemula.',
      gambar: 'https://i.ibb.co.com/dsm7JfZH/1777975785797.png'
    },
    {
      id: '3',
      nama: 'Pelet Louhan Biip Premium',
      kategori: 'Pakan & Vitamin',
      harga: 85000,
      stok: 4,
      deskripsi: 'Tinggi protein dan astaxanthin. Merangsang pertumbuhan jenong dan mempertegas warna merah alami.',
      gambar: 'https://i.ibb.co.com/6Sv1fKF/FB-IMG-1770226187752.jpg'
    }
  ];

  return (
    <div>
      {/* Banner Promosi */}
      <HeroBanner />
      
      {/* Etalase Produk Utama */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-biip-light">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-biip-blue mb-4">
            Koleksi Unggulan Biip Aquatic
          </h2>
          <div className="w-24 h-1 bg-biip-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Pilihan genetik terbaik dari farm kami. Telah melewati seleksi ketat untuk memastikan kualitas anatomi, warna, dan mental yang sempurna.
          </p>
        </div>

        {/* Grid Galeri Ikan (Responsif) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produkUnggulan.map((produk) => (
            <ProdukKartu key={produk.id} produk={produk} />
          ))}
        </div>
        
      </div>
    </div>
  );
}
