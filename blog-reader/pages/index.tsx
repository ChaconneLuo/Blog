import styles from './Home.module.css';
import Link from 'next/link';
import { SERVERHOST } from '../common/Constants';
import { Card } from 'antd';
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
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.grid}>
        {content?.list?.map((item: ElementOfArray<MainProps['articles']['list']>, index: any) => {
          return (
            <Link href={`${SERVERHOST}/article/` + item.articleId} key={index}>
              <div>
                <Card hoverable title={item.title} bordered={false} className={styles.card}>
                  <p>{item.description}</p>
                </Card>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const total: number = (await Article.getArticleTotal()).data;
  const articleList: MainProps['articles']['list'] = (await Article.getArticlePage(1, 10)).data?.map((item: any, index: any) => {
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
