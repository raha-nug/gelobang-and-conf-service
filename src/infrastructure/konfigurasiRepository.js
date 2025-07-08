import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/*
 * Repository untuk mengelola konfigurasi dan gelombang pendaftaran
 * Menggunakan Prisma sebagai ORM untuk interaksi database
 */

/* * Gelombang
   * - Create, Update, Delete, Get All Gelombang
   * - Get Gelombang Aktif
   * - Get Gelombang by ID

*/
export const saveGelombang = async (data) => prisma.gelombang.create({ data });

export const findAllGelombang = async () => prisma.gelombang.findMany();

export const findGelombangById = async (id) =>
  prisma.gelombang.findUnique({ where: { id } });

export const updateGelombang = async (id, data) =>
  prisma.gelombang.update({ where: { id }, data });

export const deleteGelombang = async (id) =>
  prisma.gelombang.delete({ where: { id } });

export const findGelombangAktif = async () =>
  prisma.gelombang.findMany({ where: { status: "AKTIF" } });

/*
    * Program Studi
    * A9. Kelola Program Studi
    * - Create, Update, Delete, Get All Program Studi
    * - Get Program Studi by ID
*/

// --- Program Studi ---
export const saveProgramStudi = async (data) =>
  prisma.programStudi.create({ data });

export const findProgramStudiById = async (id) =>
  prisma.programStudi.findUnique({ where: { id } });

export const updateProgramStudi = async (id, data) =>
  prisma.programStudi.update({ where: { id }, data });

export const deleteProgramStudi = async (id) =>
  prisma.programStudi.delete({ where: { id } });

export const findAllProgramStudi = async () => prisma.programStudi.findMany();


/*
    * Pengumuman
    * A9. Kelola Pengumuman
    * - Create, Update, Delete, Get All Pengumuman
    * - Get Pengumuman by ID
*/

// --- Pengumuman ---
export const savePengumuman = async (data) =>
  prisma.pengumuman.create({ data });

export const findPengumumanById = async (id) =>
  prisma.pengumuman.findUnique({ where: { id } });

export const updatePengumuman = async (id, data) =>
  prisma.pengumuman.update({ where: { id }, data });

export const deletePengumuman = async (id) =>
  prisma.pengumuman.delete({ where: { id } });

export const findAllPengumuman = async () =>
  prisma.pengumuman.findMany({
    orderBy: { tanggalPublikasi: "desc" },
  });

export const findPublishedPengumuman = async () =>
  prisma.pengumuman.findMany({
    where: { isPublished: true },
    orderBy: { tanggalPublikasi: "desc" },
  });
