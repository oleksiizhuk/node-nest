import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { UserDto } from "../user/dto/user.dto";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("/signIn")
  signIn(@Body() user: UserDto) {
    return this.authService.singIn(user);
  }

  @Post("/signUp")
  signUp(@Body() user: UserDto) {
    return this.authService.signUp(user);
  }
}
