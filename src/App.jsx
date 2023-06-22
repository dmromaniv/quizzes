import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { getQuizCategories } from "./redux/quizzes/quizzesOperations";

import HomePage from "./pages/HomePage/HomePage";
import PlayPage from "./pages/PlayPage/PlayPage";
import FinishPage from "./pages/FinishPage/FinishPage";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  dispatch(getQuizCategories());

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:id/:amount" element={<PlayPage />} />
        <Route path="/quiz/result" element={<FinishPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
