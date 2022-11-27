import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { ArticleCreateDto } from './dto/article.create.dto';

@Injectable()
export class ArticleServices {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  async add(email: string, article: ArticleCreateDto): Promise<Article> {
    let res = await this.articleRepository.insert({
      ...article,
      author: email,
    });
    return this.articleRepository.findOneBy({ id: res.identifiers.at(0).id });
  }

  async getAll(email: string): Promise<Article[]> {
    return await this.articleRepository.find({ where: { author: email } });
  }

  async getArticle(id: number): Promise<Article> {
    return await this.articleRepository.findOne({ where: { id: id } });
  }
}
