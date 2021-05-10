import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/userDto';

@Injectable()
export class UserService {
  private users: any[] = [];

  getUser(): UserDto {
    return {
      name: 'lesha',
      age: 27,
    };
  }

  createUser(user: UserDto): any {
    this.users.push(user);
    return this.users[this.users.length - 1];
  }
}
