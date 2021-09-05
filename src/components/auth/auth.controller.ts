import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { UserDto } from "../user/dto/user.dto";
import { AuthGuard } from "@nestjs/passport";
import SignInDto from "./dto/signIn.dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signIn")
  signIn(@Body() user: SignInDto) {
    return this.authService.singIn(user);
  }

  @UseGuards(AuthGuard("local"))
  @Post("/signUp")
  signUp(@Body() user: UserDto) {
    return this.authService.signUp(user);
  }
}
