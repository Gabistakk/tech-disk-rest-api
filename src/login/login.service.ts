import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class LoginService {
    constructor(private readonly prisma: PrismaService){}

    loginCliente(email: string, senha: string){
      return this.prisma.cliente.findUnique({
        where: {
          email: email,
          senha: senha
        }
      })
  }
  loginEmpregado(email: string, senha: string){
    return this.prisma.empregado.findUnique({
      where: {
        email: email,
        senha: senha
      }
    })
}
}
