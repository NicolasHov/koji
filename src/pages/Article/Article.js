import React from "react";
import { Link } from "react-router-dom";
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
          <p>{article.body}</p>
        </div>
      </div>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </div>
  )
}


export default Article;
