import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersCreateDto } from './dto/users.create.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersServices {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly authService: AuthService,
  ) {}

  async insert(user: UsersCreateDto): Promise<User> {
    let userExist = await this.checkUserExist(user.email);
    if (userExist) {
      return null;
    }
    let res = await this.usersRepository.insert(user);
    return this.usersRepository.findOneBy({ id: res.identifiers.at(0).id });
  }

  async checkUserExist(email: string): Promise<boolean> {
    let res = await this.usersRepository.findOne({
      select: ['email'],
      where: { email: email },
    });
    return !!res;
  }

  async login(email: string, password: string): Promise<string> {
    let user: User = await this.usersRepository.findOne({
      where: { email: email, password: password },
    });
    if (!!user) {
      return this.authService.getToken({ email: user.email });
    } else {
      return null;
    }
  }
}
