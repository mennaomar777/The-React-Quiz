import React from "react";
import { useQuiz } from "../../customHooks/useQuiz";

export default function NextButton() {
  const { index, answer, numQuestions, dispatch } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="px-7 py-2 bg-theme text-light font-medium text-lg rounded-full border-2 border-theme hover:bg-darkest hover:border-dark transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50 cursor-pointer"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="px-7 py-2 bg-theme text-light font-medium text-lg rounded-full border-2 border-theme hover:bg-darkest hover:border-dark transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50 cursor-pointer"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
}
