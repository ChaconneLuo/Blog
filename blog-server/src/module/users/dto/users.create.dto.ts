import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';
@Entity()
export class UsersCreateDto {
  @Column()
  @IsString()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password: string;
}
