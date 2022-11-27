import React, { ReactElement } from 'react'
import { ArticleListElement } from '../../../api/Article'

function TableRow(props: ArticleListElement): ReactElement {
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
