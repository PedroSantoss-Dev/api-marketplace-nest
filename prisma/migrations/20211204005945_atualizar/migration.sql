-- CreateTable
CREATE TABLE "_CategoriasToVendedor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoriasToProdutos" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriasToVendedor_AB_unique" ON "_CategoriasToVendedor"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriasToVendedor_B_index" ON "_CategoriasToVendedor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriasToProdutos_AB_unique" ON "_CategoriasToProdutos"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriasToProdutos_B_index" ON "_CategoriasToProdutos"("B");

-- AddForeignKey
ALTER TABLE "_CategoriasToVendedor" ADD FOREIGN KEY ("A") REFERENCES "Categorias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriasToVendedor" ADD FOREIGN KEY ("B") REFERENCES "Vendedor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriasToProdutos" ADD FOREIGN KEY ("A") REFERENCES "Categorias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriasToProdutos" ADD FOREIGN KEY ("B") REFERENCES "Produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
