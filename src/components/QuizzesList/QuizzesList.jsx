import { useSelector } from "react-redux";

import { selectQuizCategories } from "@/redux/selectors";
import { getRandomCategories } from "@/helpers/getRandomCategories";

import Quiz from "../Quiz/Quiz";
import styles from "./QuizzesList.module.scss";


export default function QuizzesList() {
  const allQuizCategories = useSelector(selectQuizCategories);

  const randomCategories = allQuizCategories
    ? getRandomCategories(allQuizCategories, 10)
    : null;

  return (
    <ul className={styles.list}>
      {randomCategories &&
        randomCategories.map(({ id, name }) => (
          <li key={id} className={styles.listItem}>
            <Quiz id={id} category={name} />
          </li>
        ))}
    </ul>
  );
}
