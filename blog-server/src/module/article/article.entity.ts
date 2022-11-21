import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { BaseEntity } from '../../common/baseObject';

@Entity()
export class Article extends BaseEntity {
  @Column()
  title: string;

  @Column()
  subTitle: string;

  @Column()
  author: string;

  @Column()
  articleContent: string;

  @Column()
  articleIntroduce: string;

  @Column()
  tags: string;
}
