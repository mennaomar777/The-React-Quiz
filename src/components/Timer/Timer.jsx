import React, { useEffect } from "react";
import { useQuiz } from "../../customHooks/useQuiz";

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="px-7 py-2 bg-dark h-12 text-light font-medium text-lg rounded-full border-2 border-transparent transform focus:outline-none focus:ring-4 focus:ring-accent/50 sm:text-base">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
