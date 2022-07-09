import React from "react";

export const Question = (props) => {
  const { question_title, descriptionP } = props;
  const [show, setShow] = React.useState(false);
  if (show) {
    return (
      <>
        <div className='question-container'>
          <div className='header'>
            <h2>{question_title}</h2>
            <button onClick={() => setShow(!show)}>-</button>
          </div>
          <p>{descriptionP}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='header-hidden'>
          <h2>{question_title}</h2>
          <button onClick={() => setShow(!show)}>+</button>
        </div>
      </>
    );
  }
};
