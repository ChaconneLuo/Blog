import React, { ReactElement, useEffect } from 'react';
import './ArticleList.scss';
import TableRow from './TableRow/TableRow';
import { updateArticleInfo } from '../../store/articleSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function ArticleList(): ReactElement {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.article);
  useEffect(() => {
    dispatch(updateArticleInfo());
  });
  return (
    <div className="ArticleList">
      <div className="info">
        <table className="table" cellSpacing={0}>
          <tr>
            <th>id</th>
            <th>标题</th>
          </tr>
          {selector.list.map((item) => {
            return <TableRow id={item.id} title={item.title}></TableRow>;
          })}
        </table>
      </div>
    </div>
  );
}

export default ArticleList;
