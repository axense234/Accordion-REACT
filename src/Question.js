// React
import { useState } from "react";

const Question = ({ questionTitle, description }) => {
  const [show, setShow] = useState(false);

  return (
    <section className='question-container'>
      <div className='question-container__content'>
        <div className='question-container__title'>
          <h2>{questionTitle}</h2>
          <button onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>
        </div>
        {show && <p>{description}</p>}
      </div>
    </section>
  );
};

export default Question;
