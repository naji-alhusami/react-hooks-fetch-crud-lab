import React from "react";

function QuestionItem({ question, onDeleteQuestion, handleUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;
  // console.log(answers);

  // answers.map((n)=>{
  //   return console.log(n);
  // })

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteQuestion(question));
  }

  function handleChange(event) {
    console.log(event.target.value);
    handleUpdateQuestion({ ...question, correctIndex: event.target.value });
  }

  const options = answers.map((answer, index) => {
    return (
      <option key={index} value={index}>
        {answer}
      </option>
    );
  });

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
