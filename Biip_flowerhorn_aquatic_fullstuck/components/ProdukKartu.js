import Link from 'next/link';
import { formatRupiah } from '../lib/utils';

export default function ProdukKartu({ produk }) {
  // Karena saat ini database belum ditarik, kita buat data sementara (dummy) jika produk kosong
  const data = produk || {
    id: '1',
    name: 'Louhan Cencu Mutiara Grade A',
    category: 'Siap Kontes',
    price: 1500000,
    imageUrl: 'https://i.ibb.co.com/1Y6W76dW/39703.jpg', // Menggunakan salah satu gambar Anda
    isNew: true,
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {data.isNew && (
          <div className="absolute top-3 left-3 bg-biip-gold text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
            Baru Datang
          </div>
        )}
        <img 
          src={data.imageUrl} 
          alt={data.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
      
      <div className="p-5">
        <span className="text-xs font-semibold text-biip-ocean uppercase tracking-wider">
          {data.category}
        </span>
        <h3 className="text-lg font-bold text-biip-dark mt-1 truncate">
          {data.name}
        </h3>
        <p className="text-xl font-extrabold text-biip-blue mt-2">
          {formatRupiah(data.price)}
        </p>
        
        <div className="mt-4 flex gap-2">
          <Link href={`/produk/${data.id}`} className="flex-1 bg-biip-light text-biip-dark text-center py-2 rounded-md font-semibold border border-gray-200 hover:bg-gray-50 transition">
            Detail
          </Link>
          <button className="flex-1 bg-biip-gold hover:bg-orange-600 text-white py-2 rounded-md font-semibold transition shadow-sm flex justify-center items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Beli
          </button>
        </div>
      </div>
    </div>
  );
}
