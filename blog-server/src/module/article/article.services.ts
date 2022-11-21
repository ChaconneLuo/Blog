import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticleServices {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}
}
