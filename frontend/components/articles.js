import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div className="columns is-multiline">
      {leftArticles.map((article, i) => {
        return (
          <div className="column is-6">
            <Card article={article} key={`article__left__${article.slug}`} />
          </div>
        );
      })}
      {rightArticles.map((article, i) => {
        return (
          <div className="column is-3">
            <Card article={article} key={`article__left__${article.slug}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
