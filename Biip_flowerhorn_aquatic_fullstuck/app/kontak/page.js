export default function Kontak() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-biip-blue mb-6">Kontak Kami</h1>
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <p className="text-lg mb-4">Ada pertanyaan tentang progresan atau stok ikan?</p>
        <p className="font-bold text-xl text-biip-blue mb-6">WhatsApp: 0812-3456-7890</p>
        <p className="text-gray-600">Alamat: Tangerang Selatan, Indonesia</p>
        <a 
          href="https://wa.me/6285716842806" 
          className="inline-block mt-6 bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition"
        >
          Chat WhatsApp Admin
        </a>
      </div>
    </div>
  );
}
