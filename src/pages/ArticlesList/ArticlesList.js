import React from "react";
import "./ArticlesList.css";
import { Link } from "react-router-dom";

const findUserById = (users, id) => {
  let x = users.find(user => user.id === id);
  return x.name
}

export const ArticlesList = ({ articles, users }) => {
  return (
    <div className="blog">
      <h1 className="title">Articles List</h1>
      <ul className="list">
        <div className="wrapper">
          {(articles != null) && articles.map((article) => (
            <div key={article.id}>
              <Link to={`/article/${article.id}`} className="text-link">
                <li className="listItem">
                  <h2>{article.title}</h2>
                  <h6>{findUserById(users, article.userId)}</h6>
                  <div className="bodyArticle">{article.body}</div>
                </li>
              </Link>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default ArticlesList;
   