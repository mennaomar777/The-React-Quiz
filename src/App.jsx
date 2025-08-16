import "./App.css";
import Home from "./components/Home/Home";
import QuizProvider from "./context/QuizContext";

function App() {
  return (
    <>
      <QuizProvider>
        <Home />
      </QuizProvider>
    </>
  );
}

export default App;
