import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import { fetchTitles } from "./articleService";

export default function App() {
  useEffect(() => {
    setTitles(
      fetchTitles().map((article) => ({ id: article.id, title: article.title }))
    );
  }, []);

  const [titles, setTitles] = useState([]);
  const [articleId, setArticleId] = useState(null);
  return (
    <div className="App">
      <Nav titles={titles} setArticleId={setArticleId} />
      <Article articleId={articleId} />
    </div>
  );
}
