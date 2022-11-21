import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersServices } from '../users/users.services';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  public async getToken(payload) {
    return this.jwtService.sign(payload);
  }
}
