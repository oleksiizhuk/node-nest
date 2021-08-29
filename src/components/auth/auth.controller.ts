import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { UserDto } from "../user/dto/user.dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signIn")
  signIn(@Body() user: UserDto) {
    return this.authService.signIn(user);
  }
}
