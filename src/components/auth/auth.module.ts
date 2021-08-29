import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repository";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [AuthController, AuthRepository],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
