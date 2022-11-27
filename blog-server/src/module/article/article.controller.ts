import { ArticleServices } from './article.services';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Return } from '../../common/Return';
import { ArticleCreateDto } from './dto/article.create.dto';
import { RequestWithUser } from '../../common/RequestWithUser';
import { Article } from './article.entity';
import { AuthGuard } from '@nestjs/passport';
import { ArticleReturnDto } from './dto/article.return.dto';

@Controller('/article')
export class ArticleController {
  constructor(private readonly articleServices: ArticleServices) {}

  @Post('/add')
  @UseGuards(AuthGuard('jwt'))
  async add(
    @Req() req: RequestWithUser,
    @Body() article: ArticleCreateDto,
  ): Promise<Return<boolean>> {
    let res: Article = await this.articleServices.add(req.user!.email, article);
    if (!!res) {
      return { code: 200, data: true };
    } else {
      return { code: 400, data: false };
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/getAll')
  async getAll(
    @Req() req: RequestWithUser,
  ): Promise<Return<ArticleReturnDto[]>> {
    const allArticle = await this.articleServices.getAll(req.user!.email);
    let res: ArticleReturnDto[] = [];
    allArticle.map((item) => {
      res.push({ id: item.id, title: item.title });
    });
    return {
      code: 200,
      data: res,
    };
  }

  @Get('/getArticle')
  async getArticleById(@Query('id') id: number): Promise<Return<Article>> {
    const article = await this.articleServices.getArticle(id);
    if (!!article) {
      return { code: 200, data: article };
    } else {
      return { code: 400, data: null };
    }
  }
}
