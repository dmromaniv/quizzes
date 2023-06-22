import { Link } from "react-router-dom";

import { getRandomNumber } from "@/helpers/getRandomCategories";
import styles from "./Quiz.module.scss";

export default function Quiz({ id, category }) {
  const questionsNumber = getRandomNumber(4, 6);

  return (
    <div className={styles.contentWrapper}>
      <p className={styles.amount}> {questionsNumber} questions </p>
      <div className={styles.textContent}>
        <p className={styles.category}>{category}</p>
      </div>
      <div>
        <Link to={`/quiz/${id}/${questionsNumber}`} replace={true}>
          <button className={styles.button}>Play</button>
        </Link>
      </div>
    </div>
  );
}
