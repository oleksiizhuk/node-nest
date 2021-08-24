import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import {IUser} from "./interfaces/user.interfaces";

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/')
  getUser(): any {
    return this.userService.getUser();
  }

  @Post('/')
  @ApiBody({ type: UserDto })
  createUser(@Body() data: UserDto): any {
    return this.userService.createUser(data);
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<IUser> {
    return this.userService.getUserById(id);
  }

  @Get('/:email')
  getUserByEmail(@Param('email') email: string):  Promise<IUser> {
    return this.userService.getUserByEmail(email);
  }
  
}
