import React from "react";
import "./ArticlesList.css";
import { Link } from "react-router-dom";

const findUserById = (users, id) => {
  let userTemp = users.find(user => user.id === id);
  if (!userTemp) return null
  return userTemp.name
}

export const ArticlesList = ({ articles, users }) => {
  return (
    <div className="blog">
      <h1 className="title">Articles List</h1>
        <div className="wrapper">
          {(articles != null) && articles.map((article) => (
            <div key={article.id}>
              <Link to={`/article/${article.id}`} className="text-link">
                <div className="listItem">
                  <h2 className="bodyTitle">{article.title}</h2>
                  <h6>{findUserById(users, article.userId)}</h6>
                  <div className="bodyArticle">{article.body}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
    </div>
  );
}

export default ArticlesList;
   