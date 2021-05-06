import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/userDto';
import { UserService } from './user.service';

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
}
