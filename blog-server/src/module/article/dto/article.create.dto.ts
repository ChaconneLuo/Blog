import { Column, Entity } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class ArticleCreateDto {
  @Column()
  @IsString()
  title: string;

  @Column({
    type: 'longtext',
  })
  @IsString()
  articleContent: string;

  @Column()
  @IsString()
  articleIntroduce: string;

  @Column({
    default: '',
  })
  @IsString()
  tags: string;
}
