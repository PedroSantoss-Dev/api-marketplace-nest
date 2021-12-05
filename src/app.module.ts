import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { AuthModule } from './auth/auth.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [UserModule, VendedorModule, AuthModule, CategoriasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
