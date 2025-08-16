import React from "react";
import Options from "../Options/Options";
import { useQuiz } from "../../customHooks/useQuiz";

export default function Question() {
  const { questions, index, answer, dispatch } = useQuiz();
  const question = questions[index];

  return (
    <div className="w-[350px] md:w-[600px] max-w-[90%] mx-auto p-6 sm:p-8 bg-dark rounded-xl shadow-lg mb-6 animate-fadeIn">
      <h4 className="text-lg sm:text-xl text-light mb-4 text-center">
        {question?.question}
      </h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
