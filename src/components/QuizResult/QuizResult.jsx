import { useSelector } from "react-redux";

import { selectStatsInfo } from "@/redux/selectors";

import styles from "./QuizResult.module.scss";

export default function QuizResult() {
  const { questionsAmount, correctAnswersCounter, totalTime, totalPoints } =
    useSelector(selectStatsInfo);
  return (
    <div className="card">
      <h1>Your result</h1>
      <ol className={styles.list}>
        <li>
          <div className={styles.text}>
            <p>
              Total score: <span className={styles.number}>{totalPoints},</span>
            </p>
            <p>
              correct:&#32;
              <span className={`${styles.correct} ${styles.number}`}>
                {correctAnswersCounter}
              </span>
              , incorrect:&#32;
              <span className={`${styles.number} ${styles.incorrect}`}>
                {questionsAmount - correctAnswersCounter}
              </span>
            </p>
          </div>
        </li>
        <li>
          <div className={styles.text}>
            <p>Correct answers:&#32;</p>
            <p>
              <span className={styles.number}>
                {Math.floor((correctAnswersCounter * 100) / questionsAmount)}
              </span>
              %
            </p>
          </div>
        </li>
        <li>
          <div className={styles.text}>
            <p>Time spent on the quiz:&#32;</p>
            <p>
              <span className={styles.number}>{totalTime}</span>
            </p>
          </div>
        </li>
        <li>
          <div className={styles.text}>
            <p>All questions:</p>

            <p>
              <span className={styles.number}>{questionsAmount} </span>
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}
