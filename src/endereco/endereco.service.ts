import { Cliente } from './../../node_modules/.prisma/client/index.d';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class EnderecoService {

  constructor(private readonly prisma: PrismaService){}

  create(createEnderecoDto: Prisma.EnderecoCreateInput) {
    return this.prisma.endereco.create({
      data: createEnderecoDto
    });
  }

  findAll() {
    return this.prisma.endereco.findMany({
      include: {
        cliente: {},
        empregado: {}
      }
    });
  }

  findOne(id: number) {
    return this.prisma.endereco.findUnique({
      where : { id: id },
      include: {
        cliente: {},
        empregado: {}
      }
    })
  }

  update(id: number, updateEnderecoDto: Prisma.EnderecoUpdateInput) {
    return this.prisma.endereco.update({
      data: updateEnderecoDto,
      where : { id: id },
    })
  }

  remove(id: number) {
    this.prisma.endereco.delete({
      where : { id: id },
    })
  }
}
