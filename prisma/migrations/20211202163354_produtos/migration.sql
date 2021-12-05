-- CreateTable
CREATE TABLE "Produtos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "productVideo" TEXT NOT NULL,
    "productImage" TEXT NOT NULL,
    "invoice" TEXT NOT NULL,
    "components" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);
