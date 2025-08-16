import React from "react";
import { useQuiz } from "../../customHooks/useQuiz";

export default function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="flex flex-col items-center text-center bg-dark p-6 sm:p-8 rounded-xl shadow-lg max-w-md w-full animate-fadeIn">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-light mb-4">
        Welcome to The React Quiz!
      </h2>
      <h3 className="text-lg sm:text-xl text-medium mb-6">
        {numQuestions} questions to test your React mastery
      </h3>
      <button
        className="btn btn-ui px-6 py-3 bg-theme text-light font-medium rounded-full border-2 border-theme hover:bg-darkest hover:border-dark transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50 cursor-pointer"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
