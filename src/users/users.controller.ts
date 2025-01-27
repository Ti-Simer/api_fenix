import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create')
  async createUser(@Body() userData: User): Promise<User> {
    return this.usersService.createUser(userData);
  }

  @Get('getById/:id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.usersService.findOne(id);
  }

  @Get('all')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() userData: User): Promise<any> {
    return this.usersService.update(id, userData);
  }

  //////////////////////////////////////////////////////////////////////////////////


  @Post('login')
  async loginUser(@Body() loginData: { credentials: string; password: string }): Promise<any> {
    console.log('===================USUARIO LOGIN=====================');
    console.log(loginData);
    console.log('=====================================================');

    const { credentials, password } = loginData;
    return this.usersService.loginUser(credentials, password);
  }
}
