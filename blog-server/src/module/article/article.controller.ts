import { ArticleServices } from './article.services';
import { Controller } from '@nestjs/common';

@Controller('/article')
export class ArticleController {
  constructor(private readonly articleServices: ArticleServices) {}
}
