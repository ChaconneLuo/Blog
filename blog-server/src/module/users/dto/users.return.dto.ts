import { Column, Entity } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';

@Entity()
export class UsersReturnDto {
  @Column()
  @IsString()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column({
    unique: true
  })
  @IsEmail()
  email: string;
}
