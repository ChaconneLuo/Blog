import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
