// Aturan bisnis untuk Gelombang
export const createGelombang = ({
  nama,
  tahunAkademik,
  tanggalMulai,
  tanggalSelesai,
  adminId,
}) => {
  if (!nama || !tahunAkademik || !tanggalMulai || !tanggalSelesai) {
    throw new Error("Semua field gelombang wajib diisi.");
  }
  if (new Date(tanggalSelesai) <= new Date(tanggalMulai)) {
    throw new Error("Tanggal selesai harus setelah tanggal mulai.");
  }
  return {
    nama,
    tahunAkademik,
    tanggalMulai,
    tanggalSelesai,
    adminPembuatId: adminId,
  };
};

// Aturan bisnis untuk Program Studi
export const createProgramStudi = ({
  kodeProdi,
  namaProdi,
  fakultas,
  deskripsi,
}) => {
  if (!kodeProdi || !namaProdi) {
    throw new Error("Kode Prodi dan Nama Prodi tidak boleh kosong.");
  }
  return { kodeProdi, namaProdi, fakultas, deskripsi };
};

// Aturan bisnis untuk Pengumuman
export const createPengumuman = ({ judul, isiKonten, adminId }) => {
  if (!judul || !isiKonten) {
    throw new Error("Judul dan Isi Konten tidak boleh kosong.");
  }
  return { judul, isiKonten, adminPembuatId: adminId, isPublished: false };
};
