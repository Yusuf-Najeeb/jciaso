import React from "react";
import Header from "../header/Header";
import ArticleHero from "./ArticleHero";
import LatestArticle from "../homepage/media/LatestArticle";
import Footer from "../footer/Footer";

const Article = () => {
  return (
    <div>
      <Header />
      <ArticleHero />
      <LatestArticle />
      <Footer />
    </div>
  );
};

export default Article;
