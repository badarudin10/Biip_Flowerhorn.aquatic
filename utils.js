/**
 * File ini berisi kumpulan fungsi bantuan yang bisa dipakai berulang kali
 * di seluruh halaman website Biip Flowerhorn Aquatic.
 */

// 1. Fungsi untuk mengubah angka biasa menjadi format mata uang Rupiah
export const formatRupiah = (angka) => {
  if (!angka) return "Rp 0";
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
};

// 2. Fungsi untuk memotong teks deskripsi jika terlalu panjang (agar rapi di kartu produk)
export const potongTeks = (teks, panjangMaksimal) => {
  if (!teks) return '';
  if (teks.length <= panjangMaksimal) return teks;
  return teks.substring(0, panjangMaksimal) + '...';
};

// 3. Fungsi untuk menghitung persentase diskon (jika nanti Anda mengadakan promo)
export const hitungDiskon = (hargaAsli, hargaDiskon) => {
  if (hargaAsli <= 0) return 0;
  const selisih = hargaAsli - hargaDiskon;
  const persentase = (selisih / hargaAsli) * 100;
  return Math.round(persentase);
};
