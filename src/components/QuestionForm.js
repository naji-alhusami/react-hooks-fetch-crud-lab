import React, { useState } from "react";

function QuestionForm(props) {
  const [formQuestion, setFormQuestion] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  function handleChange(event) {
    setFormQuestion({
      ...formQuestion,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData);
    const questionData = {
      prompt: formQuestion.prompt,
      answers: [
        formQuestion.answer1,
        formQuestion.answer2,
        formQuestion.answer3,
        formQuestion.answer4,
      ],
      correctIndex: formQuestion.correctIndex,
    };
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
    })
      .then((response) => response.json())
      .then((newQuestion) => props.onAddQuestion(newQuestion));
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formQuestion.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={formQuestion.answer1}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={formQuestion.answer2}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={formQuestion.answer3}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={formQuestion.answer4}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formQuestion.correctIndex}
            onChange={handleChange}
          >
            <option value="0">{formQuestion.answer1}</option>
            <option value="1">{formQuestion.answer2}</option>
            <option value="2">{formQuestion.answer3}</option>
            <option value="3">{formQuestion.answer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
