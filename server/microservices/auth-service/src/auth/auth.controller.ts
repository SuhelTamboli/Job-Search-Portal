import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/RegisterUserDto';
import { SignInUserDto } from './dto/SIgnInUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.registerUser(registerUserDto);
  }

  @Post('signin')
  async signInUser(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signInUser(signInUserDto);
  }
}
