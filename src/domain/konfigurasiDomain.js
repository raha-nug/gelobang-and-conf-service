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

  function parseTanggalIndonesia(tanggalStr) {
    const [dd, mm, yyyy] = tanggalStr.split("/");
    return new Date(`${yyyy}-${mm}-${dd}`).toISOString();
  }

  const formattedTanggalMulai = parseTanggalIndonesia(tanggalMulai);
  const formattedTanggalSelesai = parseTanggalIndonesia(tanggalSelesai);

  return {
    nama,
    tahunAkademik,
    tanggalMulai: formattedTanggalMulai,
    tanggalSelesai: formattedTanggalSelesai,
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
