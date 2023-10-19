import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { EnderecoModule } from './endereco/endereco.module';
import { ServicoModule } from './servico/servico.module';
import { EquipamentoModule } from './equipamento/equipamento.module';
import { EmpregadoModule } from './empregado/empregado.module';
import { OrdemServicoModule } from './ordem-servico/ordem-servico.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [ClienteModule, EnderecoModule, ServicoModule, EquipamentoModule, EmpregadoModule, OrdemServicoModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
