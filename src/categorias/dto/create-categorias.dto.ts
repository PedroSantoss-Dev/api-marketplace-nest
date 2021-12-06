import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriasDto {
  @ApiProperty()
  hardwerEntrada?: string;

  @ApiProperty()
  hardwerSaida?: string;

  @ApiProperty()
  hardwerProcessamento?: string;

  @ApiProperty()
  hardwerArmazenamento?: string;
}
