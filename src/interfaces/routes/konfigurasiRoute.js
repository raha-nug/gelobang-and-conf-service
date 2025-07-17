import express from "express";
import * as controller from "../http/konfigurasiController.js";
import { authenticateToken } from "../middleware/authenticate.js";
import { requireAdmin } from "../middleware/authrorize.js";

const router = express.Router();

// === Rute Publik (A1, A2, A3) ===
// Endpoint ini bisa diakses siapa saja tanpa login
router.get("/public", controller.getPublicInfo);

// === Rute Khusus Admin ===
// Rute di bawah ini memerlukan token JWT yang valid dan role 'ADMIN'

// A10. Kelola Gelombang
router.post(
  "/gelombang",
  authenticateToken,
  requireAdmin,
  controller.createGelombang
);

router.put(
  "/gelombang/:id",
  authenticateToken,
  requireAdmin,
  controller.updateGelombang
);

router.delete(
  "/gelombang/:id",
  authenticateToken,
  requireAdmin,
  controller.deleteGelombang
);

router.get(
  "/gelombang",
  authenticateToken,
  requireAdmin,
  controller.getAllGelombang
);

router.get(
  "/gelombang/:id",
  authenticateToken,
  requireAdmin,
  controller.getGelombangById
);
router.get(
  "/isValidGelombang/:id",
  authenticateToken,
  controller.getValidGelombang
);
// A9. Kelola Program Studi
router.post(
  "/program-studi",
  authenticateToken,
  requireAdmin,
  controller.createProgramStudi
);
router.put(
  "/program-studi/:id",
  authenticateToken,
  requireAdmin,
  controller.updateProgramStudi
);

router.delete(
  "/program-studi/:id",
  authenticateToken,
  requireAdmin,
  controller.deleteProgramStudi
);

router.get(
  "/program-studi/:id",
  authenticateToken,
  requireAdmin,
  controller.getProgramStudiById
);

router.get(
  "/program-studi",
  authenticateToken,
  requireAdmin,
  controller.getAllProgramStudi
);

// Fungsionalitas Admin untuk membuat pengumuman
router.get(
  "/pengumuman",
  authenticateToken,
  requireAdmin,
  controller.getAllPengumuman
);
router.post(
  "/pengumuman",
  authenticateToken,
  requireAdmin,
  controller.createPengumuman
);
router.put(
  "/pengumuman/:id",
  authenticateToken,
  requireAdmin,
  controller.updatePengumuman
);
router.delete(
  "/pengumuman/:id",
  authenticateToken,
  requireAdmin,
  controller.deletePengumuman
);
router.get(
  "/pengumuman/:id",
  authenticateToken,
  requireAdmin,
  controller.getPengumumanById
);

export default router;
