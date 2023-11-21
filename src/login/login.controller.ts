import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { Prisma } from '@prisma/client';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

    @Post('/cliente')
    loginCliente(@Body('email') email: string, @Body('senha') senha: string){
      return this.loginService.loginCliente(email, senha);
    }
    @Post('/empregado')
    login(@Body('email') email: string, @Body('senha') senha: string){
      return this.loginService.loginEmpregado(email, senha);
    }

}
