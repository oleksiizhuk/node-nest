import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { UserDto } from "../user/dto/user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(user: UserDto) {
    const { email } = user;
    const userFromDb = await this.userService.getUserByEmail(email);
    if (!userFromDb) {
      throw new BadRequestException("invalid credential lol");
    }
    if (userFromDb.password !== user.password) {
      throw new BadRequestException("invalid credential lol");
    }
    return userFromDb;
  }

  async singIn(user: UserDto): Promise<any> {
    const payload = { username: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(user: UserDto): Promise<any> {
    return user;
  }
}
