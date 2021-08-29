import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { IUser } from "../../user/interfaces/user.interfaces";
import { UserDto } from "../../user/dto/user.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: "email", passwordField: "password" });
  }

  async validate(user: UserDto): Promise<IUser> {
    return await this.authService.validateUser(user);
  }
}
