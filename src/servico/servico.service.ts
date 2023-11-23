import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class ServicoService {

  constructor(private readonly prisma: PrismaService){}

  create(createServicoDto: Prisma.ServicoCreateInput) {
    return this.prisma.servico.create({
      data: createServicoDto
    });
  }

  findAll() {
    return this.prisma.servico.findMany({
      include: {
        empregado: {}
      }
    });
  }

  findOne(id: number) {
    return this.prisma.servico.findUnique({
      where : { id: id },
      include: {
        empregado: {}
      }
    })
  }

  update(id: number, updateServicoDto: Prisma.ServicoUpdateInput) {
    return this.prisma.servico.update({
      data: updateServicoDto,
      where : { id: id },
    })
  }

  remove(id: number) {
    return this.prisma.servico.delete({
      where : { id: id },
    })
  }
}