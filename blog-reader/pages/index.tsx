import styles from './index.module.scss';
import Link from 'next/link';
import { SERVERHOST } from '../common/Constants';
import { Card, Pagination } from 'antd';
import { ElementOfArray } from '../util/Types';
import { GetServerSidePropsContext } from 'next/types';
import Article from '../api/Article';
import { useState } from 'react';

interface MainProps {
  title: string;
  description: string;
  articles: {
    list: {
      title: string;
      description: string;
      articleId: number;
    }[];
    total: number;
  };
}

export default function Home({ title, description, articles }: MainProps) {
  const [content, setContent] = useState<MainProps['articles']>(articles);
  const [paginationSize, setPaginationSize] = useState<number>(12);
  const [paginationCurrent, setPaginationCurrent] = useState<number>(1);
  const updateArticleList = async () => {
    const total: number = (await Article.getArticleTotal()).data;
    const articleList: MainProps['articles']['list'] = (await Article.getArticlePage(paginationSize, paginationCurrent)).data?.map(
      (item: any, index: any) => {
        return {
          title: item['title'],
          description: item['articleIntroduce'] || '',
          articleId: item['id']
        };
      }
    );
    setContent({
      list: articleList,
      total: total
    });
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.textShow}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.grid}>
          {content?.list?.map((item: ElementOfArray<MainProps['articles']['list']>, index: any) => {
            return (
              <Link href={`${SERVERHOST}/article/` + item.articleId} key={index} className={styles.link}>
                <div>
                  <Card hoverable title={item.title} bordered={false} headStyle={{ color: 'var(--primary-color)' }} className={styles.card}>
                    <p>{item.description}</p>
                  </Card>
                </div>
              </Link>
            );
          })}
        </div>
        <Pagination
          hideOnSinglePage
          className={styles.pagination}
          total={content.total}
          showTotal={(total) => `Total ${total} items`}
          defaultPageSize={paginationSize}
          defaultCurrent={paginationCurrent}
          onChange={(page, pageSize) => {
            setPaginationCurrent(page);
            setPaginationSize(pageSize);
            updateArticleList();
          }}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const total: number = (await Article.getArticleTotal()).data;
  const articleList: MainProps['articles']['list'] = (await Article.getArticlePage(1, 12)).data?.map((item: any, index: any) => {
    return {
      title: item['title'],
      description: item['articleIntroduce'] || '',
      articleId: item['id']
    };
  });
  return {
    props: {
      title: 'Blog',
      description: 'My Personal Blog',
      articles: {
        list: articleList,
        total: total
      }
    } as unknown as MainProps
  };
}
