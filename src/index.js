import React from "react";
import ReactDOM from "react-dom";
// Questions
import { questions } from "./descriptions";
// CSS
import "./style.css";
// Question
import { Question } from "./Question";

const MainApp = () => {
  return (
    <>
      <section>
        <h1>Questions And Answears About Login</h1>
        {questions.map((desc) => {
          const { id, description, title } = desc;
          return (
            <Question
              descriptionP={description}
              question_title={title}
              key={id}
            ></Question>
          );
        })}
      </section>
    </>
  );
};

ReactDOM.render(<MainApp></MainApp>, document.getElementById("root"));
