import React from "react";
import { useQuiz } from "../../customHooks/useQuiz";

export default function Options({ question }) {
  const { answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="flex flex-col gap-3 w-full">
      {question?.options?.map((option, index) => (
        <button
          key={option}
          className={`w-full text-white cursor-pointer text-left px-4 py-2 rounded-full transition-all duration-300 ease-in-out
            ${
              hasAnswered
                ? index === question.correctOption
                  ? "bg-theme border-theme text-light"
                  : "bg-accent border-accent text-darkest"
                : "bg-gray-500 border-dark hover:bg-darkest hover:translate-x-2"
            }
            ${index === answer ? "translate-x-2 bg-opacity-90" : ""}
          `}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
