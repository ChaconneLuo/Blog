import request from '../../util/request';

export interface ArticleInfo {
  id: number;
  title: string;
  author: string;
  articleContent: string;
  articleIntroduce: string;
  tags: string;
}

export default class Article {
  static async getArticle(id: string) {
    return await request({
      url: '/article/getArticle',
      method: 'get',
      params: {
        id
      }
    });
  }
}
