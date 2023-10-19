import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { Prisma } from '@prisma/client';


@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post()
  create(@Body() createServicoDto: Prisma.ServicoCreateInput) {
    return this.servicoService.create(createServicoDto);
  }

  @Get()
  findAll() {
    return this.servicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicoDto: Prisma.ServicoCreateInput) {
    return this.servicoService.update(+id, updateServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicoService.remove(+id);
  }
}
