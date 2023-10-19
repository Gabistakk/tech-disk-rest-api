import { Module } from '@nestjs/common';
import { EmpregadoService } from './empregado.service';
import { EmpregadoController } from './empregado.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [EmpregadoController],
  providers: [EmpregadoService],
})
export class EmpregadoModule {}
