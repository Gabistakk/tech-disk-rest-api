import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class EquipamentoService {

  constructor(private readonly prisma: PrismaService){}

  create(createEquipamentoDto: Prisma.EquipamentoCreateInput) {
    return this.prisma.equipamento.create({
      data: createEquipamentoDto
    });
  }

  findAll() {
    return this.prisma.equipamento.findMany();
  }

  findOne(id: number) {
    return this.prisma.equipamento.findUnique({
      where : { id: id },
    })
  }

  update(id: number, updateEquipamentoDto: Prisma.EquipamentoUpdateInput) {
    return this.prisma.equipamento.update({
      data: updateEquipamentoDto,
      where : { id: id },
    })
  }

  remove(id: number) {
    this.prisma.equipamento.delete({
      where : { id: id },
    })
  }
}