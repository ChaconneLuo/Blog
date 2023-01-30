import React from 'react';
import styles from './ArticleInfo.module.css';

interface ArticleInfoProps {
  author: string;
}

function ArticleInfoComponent(props: ArticleInfoProps) {
  return (
    <div className={styles.headerInfo}>
      <div className={styles.headerComponent}>作者Email: {props.author}</div>
    </div>
  );
}

export default ArticleInfoComponent;
