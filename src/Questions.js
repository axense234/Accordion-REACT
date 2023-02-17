// Data
import { questions } from "./data";
// Components
import Question from "./Question";

const Questions = () => {
  return (
    <main className='questions-container__questions'>
      {questions.map((desc) => {
        const { id, description, title } = desc;
        return (
          <Question description={description} questionTitle={title} key={id} />
        );
      })}
    </main>
  );
};

export default Questions;
