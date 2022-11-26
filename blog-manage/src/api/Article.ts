import request from '../util/request'

export interface ArticleInfo {
  title: string
  articleContent: string
  articleIntroduce: string
  tags: string
}

export interface ArticleListElement {
  id: number
  title: string
}

export class Article {
  static async add(article: ArticleInfo) {
    return await request({
      url: '/article/add',
      method: 'post',
      data: article
    })
  }
  static async getInfo() {
    return await request({
      url: '/article/getAll',
      method: 'get'
    })
  }
}
