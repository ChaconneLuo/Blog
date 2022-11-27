import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../common/baseObject';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({
    type: 'longtext',
  })
  articleContent: string;

  @Column()
  articleIntroduce: string;

  @Column()
  tags: string;
}
