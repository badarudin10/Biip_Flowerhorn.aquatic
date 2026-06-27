/**
 * Konfigurasi Skema Database (Supabase)
 * Simpan sebagai referensi struktur tabel di Supabase Anda
 */

const schema = {
  tabel_produk: {
    id: "uuid",
    nama: "text",
    harga: "numeric",
    deskripsi: "text",
    stok: "integer",
    kategori: "text",
    gambar_url: "text",
    created_at: "timestamp"
  },
  tabel_pesanan: {
    id: "uuid",
    user_id: "uuid",
    produk_id: "uuid",
    total_bayar: "numeric",
    status: "text" // (pending, sukses, batal)
  }
};

export default schema;
