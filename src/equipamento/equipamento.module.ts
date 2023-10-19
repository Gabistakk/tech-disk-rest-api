import { Module } from '@nestjs/common';
import { EquipamentoService } from './equipamento.service';
import { EquipamentoController } from './equipamento.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [EquipamentoController],
  providers: [EquipamentoService],
})
export class EquipamentoModule {}
