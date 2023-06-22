import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetAllStats } from "../../redux/stats/statsSlice";
import QuizResult from "@/components/QuizResult/QuizResult";
import styles from "./FinishPage.module.scss";

export default function FinishPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isActiveSession = JSON.parse(sessionStorage.getItem("activeSession"));

  function handleButtonClick() {
    dispatch(resetAllStats());
    navigate("/", { replace: true });
  }

  if (!isActiveSession) {
    return (
      <>
        <div className="container">
          <h1 className={styles.text}>
            To get started, you need to choose a quiz
          </h1>
          <Link to="/">
            <button>Choose a quiz</button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="container">
      <div className={styles.contentWrapper}>
        <QuizResult />
      </div>
      <button onClick={handleButtonClick}>Go home</button>
    </div>
  );
}
