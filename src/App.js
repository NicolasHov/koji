import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Article from "./pages/Article/Article";
import ArticlesList from "./pages/ArticlesList/ArticlesList";
import NotFound from "./pages/NotFound";
import "./App.css";

const findArticleById = (articles, id) => {
  return articles.find(article => article.id === id);
}

const App = () => {

  const [articles, setArticles] = useState([]);
  const [hasError, setHasError] = useState(false);

  const fetchArticles = async () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          if (!data.ok) {
            setHasError(true);
          }
          setArticles(data)
          setHasError(false);
        })
    } catch (err) {
      console.error(err);
      setHasError(true);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  if (hasError) {
    return <>An error occured.</>
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ArticlesList articles={articles} />
        </Route>
        <Route path={`/article/:articleId`}>
          {(props) => {
            return <Article article={findArticleById(articles, parseInt(props.match.params.articleId))} />
          }}
        </Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;