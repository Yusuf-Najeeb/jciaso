import React from "react";
import Header from "../header/Header";
import ArticleHero from "./ArticleHero";
import LatestArticle from "../homepage/media/LatestArticle";

const Article = () => {
  return (
    <div>
      <Header />
      <ArticleHero />
      <LatestArticle />
    </div>
  );
};

export default Article;
