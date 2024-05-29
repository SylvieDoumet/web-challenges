import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>It is raining, today !</p>
      <p>And I forgot where I put my umbrella ...hmmm.... </p>
      <p>Thinking over wearing a scarf instead. </p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
