import React, { ReactElement, useEffect, useState } from 'react'
import './ArticleEdit.scss'
import { marked } from 'marked'
import { Article } from '../../api/Article'

function ArticleEdit(): ReactElement {
  const [sourceContent, setSourceContent] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [tags, setTags] = useState<string>('')
  const [introduce, setIntroduce] = useState<string>('')
  const updateMarkDown = () => {
    document.getElementById('content')!.innerHTML = marked.parse(sourceContent)
  }
  const handleSubmit = () => {
    if (title === '' || sourceContent === '') {
      alert('标题和内容为必填项')
      return
    }
    Article.add({
      title: title,
      articleContent: sourceContent,
      articleIntroduce: introduce,
      tags: tags
    })
      .then(() => {
        setSourceContent('')
        setTags('')
        setTitle('')
        setIntroduce('')
      })
      .catch(() => {})
  }
  useEffect(() => {
    updateMarkDown()
  }, [sourceContent])
  return (
    <div className="ArticleEdit">
      <div className="info">
        <div className="union-info">
          <div className="title">
            <input
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              placeholder="标题"
            ></input>
          </div>
          <div className="tags">
            <input
              onChange={(e) => {
                setTags(e.target.value)
              }}
              placeholder="标签"
            ></input>
          </div>
        </div>
        <div className="introduce">
          <textarea
            placeholder="文章简介"
            onChange={(e) => {
              setIntroduce(e.target.value)
            }}
          ></textarea>
        </div>
      </div>
      <div className="markdown">
        <textarea id="source" placeholder="文章内容" onChange={(e) => setSourceContent(e.target.value)}></textarea>
        <div id="content"></div>
      </div>
      <div className="button-group">
        <button type="button" onClick={handleSubmit}>
          提交
        </button>
      </div>
    </div>
  )
}

export default ArticleEdit
