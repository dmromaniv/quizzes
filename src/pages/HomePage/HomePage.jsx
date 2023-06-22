import { useSelector } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { selectLoadingCategoryStatus } from "@/redux/selectors";
import { getRandomNumber } from "@/helpers/getRandomCategories";

import QuizzesList from "@/components/QuizzesList/QuizzesList";
import Loader from "@/components/Loader/Loader";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  const loadingStatus = useSelector(selectLoadingCategoryStatus);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const randomQuizNumber = getRandomNumber(0, 10);

  const handleButtonClick = () => {
    const list = listRef.current.children[randomQuizNumber];
    const { id, amount } = list.dataset;

    sessionStorage.setItem("activeSession", "true");

    navigate(`/quiz/${id}/${amount}`, { replace: true });
  };

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
          <button onClick={handleButtonClick}>I`am luck</button>
        </>
      )}
    </div>
  );
}
