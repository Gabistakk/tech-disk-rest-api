import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class EmpregadoService {

  constructor(private readonly prisma: PrismaService){}

  create(createEmpregadoDto: Prisma.EmpregadoCreateInput) {
    return this.prisma.empregado.create({
      data: createEmpregadoDto
    });
  }

  findAll() {
    return this.prisma.empregado.findMany({
      include: {
        endereco : {}
      }
    });
  }

  findOne(id: number) {
    return this.prisma.empregado.findUnique({
      where : { id: id },
      include: {
        endereco : {}
      }
    })
  }

  update(id: number, updateEmpregadoDto: Prisma.EmpregadoUpdateInput) {
    return this.prisma.empregado.update({
      data: updateEmpregadoDto,
      where : { id: id },
    })
  }

  remove(id: number) {
    return this.prisma.empregado.delete({
      where : { id: id },
    })
  }
}