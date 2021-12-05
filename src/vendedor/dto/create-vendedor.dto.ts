import { ApiProperty } from '@nestjs/swagger';

export class CreateVendedorDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  passwordConfirmation: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  region: string;

  @ApiProperty()
  reputation: string;
}
