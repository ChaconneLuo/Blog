import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString } from 'class-validator';

@Entity()
export class ArticleUpdateDto {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

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
