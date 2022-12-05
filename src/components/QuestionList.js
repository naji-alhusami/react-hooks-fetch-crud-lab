import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, handleUpdateQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map((question) => {
          // console.log(question);
          return (
            <QuestionItem
              question={question}
              key={question.id}
              onDeleteQuestion={onDeleteQuestion}
              handleUpdateQuestion={handleUpdateQuestion}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
