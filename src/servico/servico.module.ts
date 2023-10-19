import { Module } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { ServicoController } from './servico.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [ServicoController],
  providers: [ServicoService],
})
export class ServicoModule {}
