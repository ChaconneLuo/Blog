import React, { useEffect } from 'react';
import { marked } from 'marked';
import { ArticleInfo } from '../../api/Article';
import ArticleInfoComponent from '../ArticleInfoComponent';
interface ArticleInfoWithTags extends Omit<ArticleInfo, 'tags'> {
  tags: string[];
}

function ArticleComponent(props: ArticleInfoWithTags) {
  useEffect(() => {
    const content: HTMLElement = document.getElementById('content')!;
    content!.innerHTML = marked.parse(props.articleContent);
  });
  return (
    <>
      <ArticleInfoComponent author={props.author} />
      <div id="content"></div>
    </>
  );
}

export default ArticleComponent;
