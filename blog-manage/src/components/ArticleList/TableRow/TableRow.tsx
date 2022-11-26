import React from 'react'
import { ArticleListElement } from '../../../api/Article'

function TableRow(props: ArticleListElement) {
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
      </tr>
    </>
  )
}

export default TableRow
