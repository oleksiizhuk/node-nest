import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { UserDto } from "../user/dto/user.dto";

@Injectable()
export class AuthService {
  constructor(
      private readonly userService: UserService
  ) {}

  async signIn(user: UserDto) {
    const { email } = user;
    const res = await this.userService.getUserByEmail(email);
    if (!res) {
      throw new BadRequestException("invalid credential lol");
    }
    if (res.password !== user.password) {
      throw new BadRequestException("invalid credential lol");
    }
    return user;
  }
}

