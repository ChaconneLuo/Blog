import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsArray, IsNumber, IsString } from 'class-validator';

@Entity()
export class ArticleUpdateDto {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  title: string;

  @Column()
  @IsString()
  subTitle: string;

  @Column()
  @IsString()
  articleContent: string;

  @Column()
  @IsString()
  articleIntroduce: string;

  @Column({
    default: '{}',
  })
  @IsString()
  tags: string;
}
