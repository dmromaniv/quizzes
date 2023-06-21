import Quiz from "../Quiz/Quiz";
import styles from "./QuizzesList.module.scss";

export default function QuizzesList() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Quiz />
      </li>
      <li className={styles.listItem}>
        <Quiz />
      </li>
      <li className={styles.listItem}>
        <Quiz />
      </li>
      <li className={styles.listItem}>
        <Quiz />
      </li>
      <li className={styles.listItem}>
        <Quiz />
      </li>
      <li className={styles.listItem}>
        <Quiz />
      </li>
      <li className={styles.listItem}>
        <Quiz />
      </li>
    </ul>
  );
}
