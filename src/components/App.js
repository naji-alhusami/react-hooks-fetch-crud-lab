import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((question) => {
        // console.log(question);
        setQuestions(question);
      });
  }, []);

  // useEffect (()=>{
  //   const fetchQuestions = async () => {
  //     const result = await fetch("http://localhost:4000/questions");
  //     const question = await result.json();
  //     setQuestions(question);
  //   }
  //   fetchQuestions();
  // },[])

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter(
      (question) => question.id !== deletedQuestion.id
    );
    setQuestions(updatedQuestions);
  }

  function handleUpdateQuestion(updatedQuestion) {
    // const updatedQuestions = questions.map((question) => {
    //   if (question.id === updatedQuestion.id) {
    //     return updatedQuestion;
    //   } else {
    //     return question;
    //   }
    // });
    // setQuestions(updatedQuestions);
    fetch(`http://localhost:4000/questions/${updatedQuestion.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex: updatedQuestion.correctIndex }),
    });

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onDeleteQuestion={handleDeleteQuestion}
          handleUpdateQuestion={handleUpdateQuestion}
        />
      )}
    </main>
  );
}

export default App;
