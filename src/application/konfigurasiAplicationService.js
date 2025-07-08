import * as domain from "../domain/konfigurasiDomain.js";
import * as repository from "../infrastructure/konfigurasiRepository.js";

/* * Gelombang
 * - Create, Update, Delete, Get All Gelombang
 * - Get Gelombang Aktif
 * - Get Gelombang by ID
 */

export const createGelombangUseCase = async (data, adminId) => {
  const newGelombangData = domain.createGelombang({ ...data, adminId });
  return repository.saveGelombang(newGelombangData);
};
export const updateGelombangUseCase = async (id, data) => {
  const existingGelombang = await repository.findGelombangById(id);
  if (!existingGelombang) {
    throw new Error("Gelombang tidak ditemukan.");
  }
  const updatedGelombangData = domain.createGelombang(data);
  return repository.updateGelombang(id, updatedGelombangData);
};
export const deleteGelombangUseCase = async (id) => {
  const existingGelombang = await repository.findGelombangById(id);
  if (!existingGelombang) {
    throw new Error("Gelombang tidak ditemukan.");
  }
  return repository.deleteGelombang(id);
};
export const getGelombangByIdUseCase = async () => {
  const gelombang = await repository.findGelombangById();
  if (!gelombang) {
    throw new Error("Gelombang tidak ditemukan.");
  }
  return gelombang;
};
export const getAllGelombangUseCase = async () => {
  const gelombangList = await repository.findAllGelombang();
  return gelombangList;
};

/* * Use Case untuk
 * - Create, Update, Delete, Get All Program Studi
 * - Get Program Studi by ID
 */

export const createProgramStudiUseCase = async (data) => {
  const newProdiData = domain.createProgramStudi(data);
  return repository.saveProgramStudi(newProdiData);
};
export const updateProgramStudiUseCase = async (id, data) => {
  const existingProdi = await repository.findProgramStudiById(id);
  if (!existingProdi) {
    throw new Error("Program Studi tidak ditemukan.");
  }
  const updatedProdiData = domain.createProgramStudi(data);
  return repository.updateProgramStudi(id, updatedProdiData);
};
export const deleteProgramStudiUseCase = async (id) => {
  const existingProdi = await repository.findProgramStudiById(id);
  if (!existingProdi) {
    throw new Error("Program Studi tidak ditemukan.");
  }
  return repository.deleteProgramStudi(id);
};
export const getProgramStudiByIdUseCase = async (id) => {
  const prodi = await repository.findProgramStudiById(id);
  if (!prodi) {
    throw new Error("Program Studi tidak ditemukan.");
  }
  return prodi;
};
export const getAllProgramStudiUseCase = async () => {
  const prodiList = await repository.findAllProgramStudi();
  if (!prodiList || prodiList.length === 0) {
    throw new Error("Tidak ada data program studi.");
  }
  return prodiList;
};

/*
 * Use Case untuk Pengumuman
 * - Create, Update, Delete, Get All Pengumuman
 * - Get Pengumuman by ID
 */

export const createPengumumanUseCase = async (data, adminId) => {
  const newPengumumanData = domain.createPengumuman({ ...data, adminId });
  return repository.savePengumuman(newPengumumanData);
};
export const updatePengumumanUseCase = async (id, data) => {
  const existingPengumuman = await repository.findPengumumanById(id);
  if (!existingPengumuman) {
    throw new Error("Pengumuman tidak ditemukan.");
  }
  const updatedPengumumanData = domain.createPengumuman(data);
  return repository.updatePengumuman(id, updatedPengumumanData);
};
export const deletePengumumanUseCase = async (id) => {
  const existingPengumuman = await repository.findPengumumanById(id);
  if (!existingPengumuman) {
    throw new Error("Pengumuman tidak ditemukan.");
  }
  return repository.deletePengumuman(id);
};
export const getPengumumanByIdUseCase = async (id) => {
  const pengumuman = await repository.findPengumumanById(id);
  if (!pengumuman) {
    throw new Error("Pengumuman tidak ditemukan.");
  }
  return pengumuman;
};
export const getAllPengumumanUseCase = async () => {
  const pengumumanList = await repository.findAllPengumuman();
  if (!pengumumanList || pengumumanList.length === 0) {
    throw new Error("Tidak ada data pengumuman.");
  }
  return pengumumanList;
};

// Use Case untuk A1, A2, A3 (melihat data publik)
export const getPublicInfoUseCase = async () => {
  const [gelombangAktif, programStudi, pengumuman] = await Promise.all([
    repository.findGelombangAktif(),
    repository.findAllProgramStudi(),
    repository.findPublishedPengumuman(),
  ]);
  return { gelombangAktif, programStudi, pengumuman };
};
