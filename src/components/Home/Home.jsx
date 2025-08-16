// import React from "react";
// import Header from "../Header/Header";
// import Main from "../Main/Main";
// import Loader from "../Loader/Loader";
// import Error from "../Error/Error";
// import StartScreen from "../StartScreen/StartScreen";
// import Question from "../Question/Question";
// import NextButton from "../NextButton/NextButton";
// import Progress from "../Progress/Progress";
// import FinishScreen from "../FinishScreen/FinishScreen";
// import Timer from "../Timer/Timer";
// import Footer from "../Footer/footer";
// import { useQuiz } from "../../customHooks/useQuiz";

// export default function Home() {
//   const {
//     questions,
//     status,
//     index,
//     answer,
//     points,
//     highscore,
//     secondsRemaining,
//     numQuestions,
//     maxPossiblePoints,
//     dispatch,
//   } = useQuiz();
//   return (
//     <>
//       <div className="app">
//         <Header />
//         <Main>
//           {status === "loading" && <Loader />}
//           {status === "error" && <Error />}
//           {status === "ready" && (
//             <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
//           )}
//           {status === "active" && (
//             <>
//               <Progress
//                 numQuestions={numQuestions}
//                 index={index}
//                 points={points}
//                 maxPossiblePoints={maxPossiblePoints}
//                 answer={answer}
//               />
//               <Question
//                 question={questions[index]}
//                 dispatch={dispatch}
//                 answer={answer}
//               />
//               <Footer>
//                 <Timer
//                   dispatch={dispatch}
//                   secondsRemaining={secondsRemaining}
//                 />
//                 <NextButton
//                   dispatch={dispatch}
//                   answer={answer}
//                   numQuestions={numQuestions}
//                   index={index}
//                 />
//               </Footer>
//             </>
//           )}
//           {status === "finished" && (
//             <FinishScreen
//               points={points}
//               maxPossiblePoints={maxPossiblePoints}
//               highscore={highscore}
//               dispatch={dispatch}
//             />
//           )}
//         </Main>
//       </div>
//     </>
//   );
// }
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import StartScreen from "../StartScreen/StartScreen";
import Question from "../Question/Question";
import NextButton from "../NextButton/NextButton";
import Progress from "../Progress/Progress";
import FinishScreen from "../FinishScreen/FinishScreen";
import Timer from "../Timer/Timer";
import Footer from "../Footer/Footer";
import { useQuiz } from "../../customHooks/useQuiz";

export default function Home() {
  const {
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
    numQuestions,
    maxPossiblePoints,
    dispatch,
  } = useQuiz();
  return (
    <div className="app flex flex-col items-center min-h-screen bg-darkest p-4 sm:p-6">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestions={numQuestions}
              index={index}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
