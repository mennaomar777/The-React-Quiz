import React from "react";

export default function Progress({
  numQuestions,
  index,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="w-[350px] md:w-[600px] max-w-[90%] mx-auto p-4 bg-dark rounded-xl shadow mb-6">
      <progress
        className="w-full h-3 rounded-lg overflow-hidden"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <div className="flex justify-between mt-3 text-sm text-white">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </header>
  );
}
