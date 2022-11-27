import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Article from "../api/Article";
import DefaultErrorPage from "next/error";
import ArticleComponent from "../../components/ArticleComponent";
import { NextSeo } from "next-seo";
import styles from "../../styles/Article.module.css";

function Page({
  id,
  title,
  author,
  articleContent,
  articleIntroduce,
  tags,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!tags) {
    return <DefaultErrorPage statusCode={404} />;
  }
  const tagList = tags.split(",");
  return (
    <div className={styles.page}>
      <NextSeo title={title} description={articleIntroduce} />
      <div className={styles.article}>
        <ArticleComponent
          id={id}
          title={title}
          author={author}
          articleContent={articleContent}
          articleIntroduce={articleIntroduce}
          tags={tagList}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const articleId = (context.query?.id as string) || "1";
  const article = (await Article.getArticle(articleId)).data;
  return { props: { ...article } };
}

export default Page;
