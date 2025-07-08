-- CreateTable
CREATE TABLE `gelombang` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `tahunAkademik` VARCHAR(191) NOT NULL,
    `tanggalMulai` DATETIME(3) NOT NULL,
    `tanggalSelesai` DATETIME(3) NOT NULL,
    `status` ENUM('SEGERA_DIBUKA', 'AKTIF', 'DITUTUP') NOT NULL DEFAULT 'SEGERA_DIBUKA',
    `adminPembuatId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `program_studi` (
    `id` VARCHAR(191) NOT NULL,
    `kodeProdi` VARCHAR(191) NOT NULL,
    `namaProdi` VARCHAR(191) NOT NULL,
    `fakultas` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    UNIQUE INDEX `program_studi_kodeProdi_key`(`kodeProdi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pengumuman` (
    `id` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `isiKonten` TEXT NOT NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT false,
    `adminPembuatId` VARCHAR(191) NOT NULL,
    `tanggalPublikasi` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
