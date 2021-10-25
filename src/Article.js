import { useState, useEffect } from "react";
import { fetchArticleById } from "./articleService";

export default function Article({ articleId }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    setArticle(fetchArticleById(articleId));
  }, [articleId]);

  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p>{`Posted: ${article.date}`}</p>
          <p style={{ whiteSpace: "break-spaces" }}>{article.body}</p>
        </section>
      )}
    </article>
  );
}
