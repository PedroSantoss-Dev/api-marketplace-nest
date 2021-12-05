import { PrismaService } from 'src/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorias, Prisma } from '@prisma/client';

@Injectable()
export class CategoriasService {
  constructor(private database: PrismaService) {}

  async create(data: Prisma.CategoriasCreateInput): Promise<Categorias> {
    const categoria = await this.database.categorias.create({ data });
    return categoria;
  }

  async findyMany(): Promise<Categorias[]> {
    const categorias = await this.database.categorias.findMany();
    return categorias;
  }

  async findUnique(id: string): Promise<Categorias> {
    const categoria = await this.database.categorias.findUnique({
      where: { id },
    });

    if (!categoria) {
      throw new NotFoundException('Id não encontrado na base de dados');
    }
    return categoria;
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.database.categorias.delete({
      where: { id },
    });

    return {
      message: 'Item apagado',
    };
  }
}
