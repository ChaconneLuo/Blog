import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../common/constants';
import { AuthStrategy } from './strategy/auth.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '2h'
      }
    })
  ],
  providers: [AuthService, AuthStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
