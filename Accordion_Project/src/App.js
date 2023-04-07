import React, { useState } from "react";
import data from "./data";
import Question from "./components/Question";

export default function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);

  function handleClick(id) {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        return question.id === id
          ? { ...question, show: !question.show }
          : question;
      });
    });
  }

  const question_field = questions.map((question) => {
    return (
      <Question
        key={question.id}
        id={question.id}
        title={question.title}
        info={question.info}
        show={question.show}
        // toggle={handleClick}
      />
    );
  });

  return (
    <main>
      <div className="container">
        <h3> Questions and answers about login</h3>
        <section className="info">{question_field}</section>
      </div>
    </main>
  );
}
