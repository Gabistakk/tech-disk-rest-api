import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'; 
import { ClienteService } from './cliente.service';
import { Prisma } from '@prisma/client';


@Controller('cliente')
export class ClienteController {
  
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() createClienteDto: Prisma.ClienteCreateInput) {
    return this.clienteService.create(createClienteDto);
  }

  @Post('login')
  login(@Body('email') email: string, @Body('senha') senha: string){
    return this.clienteService.login(email, senha);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: Prisma.ClienteUpdateInput) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }


}
