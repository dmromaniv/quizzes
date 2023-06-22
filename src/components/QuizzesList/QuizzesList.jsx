import { useSelector } from "react-redux";
import { forwardRef } from "react";

import { selectQuizCategories } from "@/redux/selectors";
import {
  getRandomCategories,
  getRandomNumber,
} from "@/helpers/getRandomCategories";

import Quiz from "../Quiz/Quiz";
import styles from "./QuizzesList.module.scss";

const QuizzesList = forwardRef(function QuizzesList(_, ref) {
  const allQuizCategories = useSelector(selectQuizCategories);

  const randomCategories = allQuizCategories
    ? getRandomCategories(allQuizCategories, 10)
    : null;

  let questionAmount;

  return (
    <ul className={styles.list} ref={ref}>
      {randomCategories &&
        randomCategories.map(({ id, name }) => {
          questionAmount = getRandomNumber(7, 20);
          return (
            <li
              key={id}
              data-id={id}
              data-amount={questionAmount}
              data-name={name}
              className={styles.listItem}
            >
              <Quiz id={id} category={name} amount={questionAmount} />
            </li>
          );
        })}
    </ul>
  );
});

export default QuizzesList;
