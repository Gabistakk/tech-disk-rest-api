import { Module } from '@nestjs/common';
import { OrdemServicoService } from './ordem-servico.service';
import { OrdemServicoController } from './ordem-servico.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [OrdemServicoController],
  providers: [OrdemServicoService],
})
export class OrdemServicoModule {}
