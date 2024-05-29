import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">Hello World</h2>
      <div>
        <label htmlFor="inputField" className="article_label">
          Enter your input
        </label>
        <input id="inputField" type="text" />
      </div>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Hallo-Welt-Programm"
      >
        Read more about the Hello World Programm on wikipedia
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
