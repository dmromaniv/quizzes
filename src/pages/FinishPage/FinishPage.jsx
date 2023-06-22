import { useNavigate } from "react-router-dom";

import QuizResult from "@/components/QuizResult/QuizResult";
import styles from "./FinishPage.module.scss";

export default function FinishPage() {
  const navigate = useNavigate();

  function handleButtonClick() {
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
