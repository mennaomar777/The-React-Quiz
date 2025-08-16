import React from "react";
import { useQuiz } from "../../customHooks/useQuiz";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className="bg-dark p-6 sm:p-8 rounded-xl shadow-lg max-w-lg w-full text-center animate-fadeIn">
      <p className="result bg-theme text-light p-4 rounded-full mb-4">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore text-medium mb-6">
        (Highscore: {highscore} points)
      </p>
      <button
        className="btn btn-ui px-6 py-3 bg-theme text-light font-medium rounded-full border-2 border-theme hover:bg-darkest hover:border-dark transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50 cursor-pointer"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </div>
  );
}
