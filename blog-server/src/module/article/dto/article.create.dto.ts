import { Column, Entity } from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class ArticleCreateDto {
  @Column()
  @IsString()
  title: string;

  @Column()
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
