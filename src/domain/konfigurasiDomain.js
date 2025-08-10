// Aturan bisnis untuk Gelombang
export const createGelombang = ({
  nama,
  tahunAkademik,
  tanggalMulai,
  tanggalSelesai,
  status,
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
    status: status? status : "SEGERA_DIBUKA",
    adminPembuatId: adminId,
  };
};

export const updateGelombang = ({})=>{

}

// Aturan bisnis untuk Program Studi
export const createProgramStudi = ({
  namaProdi,
  fakultas,
  deskripsi,
}) => {
  if (!namaProdi) {
    throw new Error("Nama Prodi tidak boleh kosong.");
  }
  return { namaProdi, fakultas, deskripsi };
};

// Aturan bisnis untuk Pengumuman
export const createPengumuman = ({ judul, isiKonten, adminId }) => {
  if (!judul || !isiKonten) {
    throw new Error("Judul dan Isi Konten tidak boleh kosong.");
  }
  return { judul, isiKonten, adminPembuatId: adminId, isPublished: false };
};
