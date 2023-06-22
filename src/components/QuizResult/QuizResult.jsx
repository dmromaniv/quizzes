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
          <p className={styles.text}>
            Total score: <span className={styles.number}>{totalPoints}</span>,
            correct:&#32;
            <span className={`${styles.correct} ${styles.number}`}>
              {correctAnswersCounter}
            </span>
            , incorrect:&#32;
            <span className={`${styles.number} ${styles.incorrect}`}>
              {questionsAmount - correctAnswersCounter}
            </span>
          </p>
        </li>
        <li>
          <p className={styles.text}>
            <span className={styles.number}>
              {(correctAnswersCounter * 100) / questionsAmount}
            </span>
            % correct answers
          </p>
        </li>
        <li>
          <p className={styles.text}>
            Time spent on the quiz:&#32;
            <span className={styles.number}>{totalTime}</span>
          </p>
        </li>
        <li>
          <p className={styles.text}>
            All questions:{" "}
            <span className={styles.number}>{questionsAmount} </span>
          </p>
        </li>
      </ol>
    </div>
  );
}
