import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class ClienteService {

  constructor(private readonly prisma: PrismaService){}

  create(createClienteDto: Prisma.ClienteCreateInput) {
    return this.prisma.cliente.create({
      data: createClienteDto
    });
  }

  findAll() {
    return this.prisma.cliente.findMany({
      include: {
        endereco: {}
      }
    });
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({
      where : { id: id },
      include: {
        endereco: {}
      }
    })
  }

  update(id: number, updateClienteDto: Prisma.ClienteUpdateInput) {
    return this.prisma.cliente.update({
      data: updateClienteDto,
      where : { id: id },
      include: {
        endereco: {}
      }
    })
  }

  remove(id: number) {
    this.prisma.cliente.delete({
      where : { id: id },
    })
  }
}
