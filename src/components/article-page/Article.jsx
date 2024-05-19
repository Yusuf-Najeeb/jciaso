import React, { useEffect } from "react";
import ArticleHero from "./ArticleHero";
import LatestArticle from "../homepage/media/LatestArticle";

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ArticleHero />
      <LatestArticle />
    </div>
  );
};

export default Article;
