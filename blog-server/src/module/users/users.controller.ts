import { UsersServices } from './users.services';
import { Body, Controller, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersCreateDto } from './dto/users.create.dto';
import { Return } from '../../common/Return';
import { UsersReturnDto } from './dto/users.return.dto';
import { deleteProperty } from '../../util/ObjectUtil';
import { User } from './users.entity';

@Controller('/user')
export class UsersController {
  constructor(private readonly usersService: UsersServices) {}

  @Post('/register')
  async register(
    @Body() user: UsersCreateDto,
  ): Promise<Return<UsersReturnDto>> {
    const result: UsersReturnDto = deleteProperty<User, UsersReturnDto>(
      await this.usersService.insert(user),
      ['id', 'created', 'updated', 'password'],
    );
    if (result) {
      return { code: 200, data: result as UsersReturnDto };
    } else {
      return { code: 400, data: null };
    }
  }

  @Post('/login')
  async login(
    @Res({ passthrough: true }) resp: Response,
    @Query('email') email: string,
    @Query('password') password: string,
  ): Promise<Return<boolean>> {
    const result: string = await this.usersService.login(email, password);
    if (result) {
      resp.cookie('jwt', result);
      return {
        code: 200,
        data: true,
      };
    } else {
      return { code: 400, data: false };
    }
  }
}
