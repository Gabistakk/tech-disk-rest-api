import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpregadoService } from './empregado.service';
import { Prisma } from '@prisma/client';


@Controller('empregado')
export class EmpregadoController {
  constructor(private readonly empregadoService: EmpregadoService) {}

  @Post()
  create(@Body() createEmpregadoDto: Prisma.EmpregadoCreateInput) {
    return this.empregadoService.create(createEmpregadoDto);
  }

  @Get()
  findAll() {
    return this.empregadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empregadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpregadoDto: Prisma.EmpregadoUpdateInput) {
    return this.empregadoService.update(+id, updateEmpregadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empregadoService.remove(+id);
  }
}
