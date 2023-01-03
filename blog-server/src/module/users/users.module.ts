import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersServices } from './users.services';
import { User } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UsersController],
  providers: [UsersServices]
})
export class UserModule {}
