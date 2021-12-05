import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Vendedor } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class VendedorService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.VendedorCreateInput): Promise<Vendedor> {
    const vendedorExists = await this.db.vendedor.findUnique({
      where: { cpf: data.cpf },
    });

    if (vendedorExists) {
      throw new ConflictException('CPF já está cadastrado');
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const vendedor = await this.db.vendedor.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    delete vendedor.password;
    return vendedor;
  }

  async findOne(id: string): Promise<Vendedor> {
    const vendedor = await this.db.vendedor.findUnique({
      where: { id },
    });

    if (!vendedor) {
      throw new NotFoundException('ID Não encontrado na base de dados');
    }

    delete vendedor.password;
    return vendedor;
  }

  async findMany() {
    const vendedor = await this.db.vendedor.findMany();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newVendedor = vendedor.map(({ password, ...resto }) => resto);
    return newVendedor;
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    await this.db.vendedor.delete({
      where: { id },
    });

    return {
      message: 'Item deletado com sucesso',
    };
  }
}
