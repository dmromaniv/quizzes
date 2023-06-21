import { useDispatch } from "react-redux";
import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
import { getQuizCategories } from "./redux/quizzes/quizzesOperations";

function App() {
  const dispatch = useDispatch();

  dispatch(getQuizCategories());
  return (
    <>
      <div className="container">
        <HomePage />
      </div>
    </>
  );
}

export default App;
