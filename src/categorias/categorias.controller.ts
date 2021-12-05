import { CreateCategoriasDto } from './dto/create-categorias.dto';
import { CategoriasService } from './categorias.service';
import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { Categorias } from '@prisma/client';

@Controller('categorias')
export class CategoriasController {
  constructor(private service: CategoriasService) {}

  @Post('cat')
  CreateCategoria(@Body() data: CreateCategoriasDto): Promise<Categorias> {
    return this.service.create(data);
  }

  @Get('FIND')
  findMany(): Promise<Categorias[]> {
    return this.service.findyMany();
  }

  @Get('find/:id')
  findUnique(@Param('id') id: string): Promise<Categorias> {
    return this.service.findUnique(id);
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: string): Promise<{ message: string }> {
    return this.service.deleteOne(id);
  }
}
