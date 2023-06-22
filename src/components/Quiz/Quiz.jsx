import { Link } from "react-router-dom";

import styles from "./Quiz.module.scss";

export default function Quiz({ id, category, amount }) {
  function handleClick() {
    sessionStorage.setItem("activeSession", "true");
  }

  return (
    <div className={styles.contentWrapper}>
      <p className={styles.amount}> {amount} questions </p>
      <div className={styles.textContent}>
        <p className={styles.category}>{category}</p>
      </div>
      <div>
        <Link to={`/quiz/${id}/${amount}`} onClick={handleClick} replace={true}>
          <button className={styles.button}>Play</button>
        </Link>
      </div>
    </div>
  );
}
