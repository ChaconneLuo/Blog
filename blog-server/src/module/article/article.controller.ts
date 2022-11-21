import { ArticleServices } from './article.services';
import { Body, Controller, Param, Post, Response } from '@nestjs/common';

@Controller('/article')
export class ArticleController {
  constructor(private readonly articleServices: ArticleServices) {}
}
