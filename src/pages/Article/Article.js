import React from "react";
import "./Article.css";

export const Article = ({ article }) => {

  if (article == null) {
    return <strong>No article found</strong>;
  }

  return (
    <div className="blog">
      <h1 className="title">Article</h1>
      <div className="wrapperArticle">
        <div className="containerText">
          <h2>{article.title}</h2>
          <h5>by User n°{article.userId},</h5>
          <p>{article.body}</p>
        </div>
      </div>
    </div>
  )
}


export default Article;
