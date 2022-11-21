import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleServices } from './article.services';
import { Article } from './article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [ArticleServices],
})
export class ArticleModule {}
