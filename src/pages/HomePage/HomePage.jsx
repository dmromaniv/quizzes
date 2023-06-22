import { useSelector } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  selectLoadingCategoryStatus,
  selectErrorCategoryStatus,
} from "@/redux/selectors";
import { getRandomNumber } from "@/helpers/getRandomCategories";

import QuizzesList from "@/components/QuizzesList/QuizzesList";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  const navigate = useNavigate();
  const listRef = useRef(null);

  const loadingStatus = useSelector(selectLoadingCategoryStatus);
  const errorStatus = useSelector(selectErrorCategoryStatus);

  const handleButtonClick = () => {
    const randomQuizNumber = getRandomNumber(0, 10);
    const list = listRef.current.children[randomQuizNumber];
    const { id, amount } = list.dataset;

    sessionStorage.setItem("activeSession", "true");

    navigate(`/quiz/${id}/${amount}`, { replace: true });
  };

  if (errorStatus) {
    return (
      <div className="container">
        <div className={styles.contentWrapper}>
          <ErrorMessage />
        </div>

        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Go back
        </button>
      </div>
    );
  }
  return (
    <div className="container">
      {loadingStatus ? (
        <Loader />
      ) : (
        <>
          <h1>Quiz Quest</h1>
          <div className={styles.listWrapper}>
            <QuizzesList ref={listRef} />
          </div>
          <div className={styles.buttonWrapper}>
            <button onClick={handleButtonClick}>I`am luck</button>
          </div>
        </>
      )}
    </div>
  );
}
