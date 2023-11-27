import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class OrdemServicoService {

  constructor(private readonly prisma: PrismaService){}

  create(createOrdemServicoDto: Prisma.OrdemServicoCreateInput) {
    return this.prisma.ordemServico.create({
      data: createOrdemServicoDto
    });
  }

  findAll() {
    return this.prisma.ordemServico.findMany({
      include :{
        cliente: {
          include : {
            endereco: {}
          }
        },
        servico: {},
        empregado: {}
      }
    });
  }

  findOne(id: number) {
    return this.prisma.ordemServico.findUnique({
      where : { id: id },
    })
  }

  update(id: number, updateOrdemServicoDto: Prisma.OrdemServicoUpdateInput) {
    return this.prisma.ordemServico.update({
      data: updateOrdemServicoDto,
      where : { id: id },
    })
  }

  remove(id: number) {
    return this.prisma.ordemServico.delete({
      where : { id: id },
    })
  }
}