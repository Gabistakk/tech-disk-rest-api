import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [EnderecoController],
  providers: [EnderecoService],
})
export class EnderecoModule {}
