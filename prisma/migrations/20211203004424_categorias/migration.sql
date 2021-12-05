-- CreateTable
CREATE TABLE "Categorias" (
    "id" TEXT NOT NULL,
    "hardwerEntrada" TEXT,
    "hardwerSaida" TEXT,
    "hardwerProcessamento" TEXT,
    "hardwerArmazenamento" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);
