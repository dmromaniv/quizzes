import { useDispatch } from "react-redux";

import { getRandomNumber } from "@/helpers/getRandomCategories";
import { getQuestions } from "@/redux/questions/questionsOperations";

import styles from "./Quiz.module.scss";

export default function Quiz({ id, category }) {
  const dispatch = useDispatch();

  const questionsNumber = getRandomNumber(10, 30);

  function handleButtonClick() {
    dispatch(getQuestions({ questionsNumber, categoryId: id }));
  }

  return (
    <div className={styles.contentWrapper}>
      <p className={styles.amount}> {questionsNumber} questions </p>
      <div className={styles.textContent}>
        <p>{category}</p>
      </div>
      <div>
        <button onClick={handleButtonClick}>Play</button>
      </div>
    </div>
  );
}
