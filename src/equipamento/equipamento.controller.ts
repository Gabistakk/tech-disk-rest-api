import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipamentoService } from './equipamento.service';
import { Prisma } from '@prisma/client';


@Controller('equipamento')
export class EquipamentoController {
  constructor(private readonly equipamentoService: EquipamentoService) {}

  @Post()
  create(@Body() createEquipamentoDto: Prisma.EquipamentoCreateInput) {
    return this.equipamentoService.create(createEquipamentoDto);
  }

  @Get()
  findAll() {
    return this.equipamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipamentoDto: Prisma.EquipamentoUpdateInput) {
    return this.equipamentoService.update(+id, updateEquipamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipamentoService.remove(+id);
  }
}
