import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetAllStats } from "../../redux/stats/statsSlice";
import QuizResult from "@/components/QuizResult/QuizResult";
import styles from "./FinishPage.module.scss";

export default function FinishPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleButtonClick() {
    dispatch(resetAllStats());
    navigate("/", { replace: true });
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
