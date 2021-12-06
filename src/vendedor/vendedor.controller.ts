import { Controller, Body, Post, Get, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Vendedor } from '@prisma/client';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { VendedorService } from './vendedor.service';

@ApiTags('vendedor')
@Controller('vendedor')
export class VendedorController {
  constructor(private service: VendedorService) {}

  @Post('register')
  createVendedor(@Body() data: CreateVendedorDto): Promise<Vendedor> {
    delete data.passwordConfirmation;
    return this.service.create(data);
  }

  @Get('find/:id')
  findOne(@Param('id') id: string): Promise<Vendedor> {
    return this.service.findOne(id);
  }

  @Get('find-all')
  findMany() {
    return this.service.findMany();
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
