import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { BaseEntity } from '../../common/baseObject';

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;
}
