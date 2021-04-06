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

const API_URL = 'https://jsonplaceholder.typicode.com';

const fetchAPI = async (endpoint) => {
    const response = await fetch(`${API_URL}/${endpoint}`);
    return response.json();
}


const App = () => {

  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);

  const fetchAndSet = async (endpoint, setData) => {
    try {
      const data = await fetchAPI(endpoint);
      setData(data)
      setHasError(false);
    } catch (err) {
      console.error(err);
      setHasError(true);
    }
  }

  useEffect(() => {
    fetchAndSet('users', setUsers);
    fetchAndSet('posts', setArticles);
  }, []);

  if (hasError) {
    return <>An error occured.</>
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ArticlesList articles={articles} users={users} />
        </Route>
        <Route path={`/article/:articleId`}>
          {(props) => {
            return <Article 
              article={findArticleById(articles, parseInt(props.match.params.articleId))} />
          }}
        </Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;