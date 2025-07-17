import * as appService from "../../application/konfigurasiAplicationService.js";

/* * Gelombang
 * A10. Kelola Gelombang
 * - Create, Update, Delete, Get All Gelombang
 * - Get Gelombang Aktif
 */
export const createGelombang = async (req, res) => {
  try {
    const gelombang = await appService.createGelombangUseCase(
      req.body,
      req.user.id
    );

    res
      .status(201)
      .json({ message: "Gelombang berhasil dibuat.", data: gelombang });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || "Gagal membuat gelombang." });
  }
};
export const updateGelombang = async (req, res) => {
  try {
    const gelombang = await appService.updateGelombangUseCase(
      req.params.id,
      req.body
    );
    res
      .status(200)
      .json({ message: "Gelombang berhasil diperbarui.", data: gelombang });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || "Gagal memperbarui gelombang." });
  }
};
export const deleteGelombang = async (req, res) => {
  try {
    await appService.deleteGelombangUseCase(req.params.id);
    res.status(200).json({ message: "Gelombang berhasil dihapus." });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || "Gagal menghapus gelombang." });
  }
};

export const getGelombangById = async (req, res) => {
  try {
    const gelombang = await appService.getGelombangByIdUseCase(req.params.id);
    if (!gelombang) {
      return res.status(404).json({ message: "Gelombang tidak ditemukan." });
    }
    res.status(200).json({
      message: `Berhasil mengambil gelombang by id ${req.params.id}`,
      data: gelombang,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Gagal mengambil data gelombang." });
  }
};
export const getValidGelombang = async (req, res) => {
  try {
    const gelombang = await appService.getGelombangByIdUseCase(req.params.id);

    if (!gelombang) {
      res.status(400).json({ isValid: false });
    }
    res.status(200).json({ isValid: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllGelombang = async (req, res) => {
  try {
    const gelombang = await appService.getAllGelombangUseCase();

    res
      .status(200)
      .json({ message: "Berhasil mengambil data gelombang", data: gelombang });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Gagal mengambil data gelombang." });
  }
};

/* * Program Studi
 * A9. Kelola Program Studi
 * - Create, Update, Delete, Get All Program Studi
 */

export const createProgramStudi = async (req, res) => {
  try {
    const prodi = await appService.createProgramStudiUseCase(req.body);
    res
      .status(201)
      .json({ message: "Program studi berhasil dibuat.", data: prodi });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || "Gagal membuat program studi." });
  }
};
export const updateProgramStudi = async (req, res) => {
  try {
    const prodi = await appService.updateProgramStudiUseCase(
      req.params.id,
      req.body
    );
    res
      .status(200)
      .json({ message: "Program studi berhasil diperbarui.", data: prodi });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || "Gagal memperbarui program studi." });
  }
};
export const deleteProgramStudi = async (req, res) => {
  try {
    await appService.deleteProgramStudiUseCase(req.params.id);
    res.status(200).json({ message: "Program studi berhasil dihapus." });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || "Gagal menghapus program studi." });
  }
};
export const getAllProgramStudi = async (req, res) => {
  try {
    const prodi = await appService.getAllProgramStudiUseCase();
    res
      .status(200)
      .json({ message: "Berhasil mengambil data program studi", data: prodi });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Gagal mengambil data program studi.",
    });
  }
};
export const getProgramStudiById = async (req, res) => {
  try {
    const prodi = await appService.getProgramStudiByIdUseCase(req.params.id);
    if (!prodi) {
      return res
        .status(404)
        .json({ message: "Program studi tidak ditemukan." });
    }
    res.status(200).json({
      message: `Berhasil mengambil data program studi by id ${req.params.id}`,
      data: prodi,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Gagal mengambil data program studi.",
    });
  }
};

/* * Get All Pengumuman
 * - Create, Update, Delete, Get All Pengumuman
 * - Get Pengumuman by ID
 */

export const createPengumuman = async (req, res) => {
  try {
    const pengumuman = await appService.createPengumumanUseCase(
      req.body,
      req.user.id
    );
    res
      .status(201)
      .json({ message: "Pengumuman berhasil dibuat.", data: pengumuman });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || "Gagal membuat pengumuman." });
  }
};
export const updatePengumuman = async (req, res) => {
  try {
    const pengumuman = await appService.updatePengumumanUseCase(
      req.params.id,
      req.body
    );
    res
      .status(200)
      .json({ message: "Pengumuman berhasil diperbarui.", data: pengumuman });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || "Gagal memperbarui pengumuman." });
  }
};
export const deletePengumuman = async (req, res) => {
  try {
    await appService.deletePengumumanUseCase(req.params.id);
    res.status(200).json({ message: "Pengumuman berhasil dihapus." });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message || "Gagal menghapus pengumuman." });
  }
};
export const getAllPengumuman = async (req, res) => {
  try {
    const pengumuman = await appService.getAllPengumumanUseCase();
    res.status(200).json({
      message: "Berhasil mengambil data pengumuman",
      data: pengumuman,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Gagal mengambil data pengumuman." });
  }
};
export const getPengumumanById = async (req, res) => {
  try {
    const pengumuman = await appService.getPengumumanByIdUseCase(req.params.id);
    if (!pengumuman) {
      return res.status(404).json({ message: "Pengumuman tidak ditemukan." });
    }
    res.status(200).json({
      message: `Berhasil mengambil data pengumuman by id ${req.params.id}`,
      data: pengumuman,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Gagal mengambil data pengumuman." });
  }
};

export const getPublicInfo = async (req, res) => {
  try {
    const data = await appService.getPublicInfoUseCase();
    res.status(200).json({ data });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Gagal mengambil data publik." });
  }
};
