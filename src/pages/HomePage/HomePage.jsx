import { useSelector } from "react-redux";

import { selectLoadingCategoryStatus } from "@/redux/selectors";

import QuizzesList from "@/components/QuizzesList/QuizzesList";
import Loader from "@/components/Loader/Loader";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  const loadingStatus = useSelector(selectLoadingCategoryStatus);

  return (
    <div className="container">
      {loadingStatus ? (
        <Loader />
      ) : (
        <>
          <h1>Quiz Quest</h1>
          <div className={styles.listWrapper}>
            <QuizzesList />
          </div>
          <button>I`am luck</button>
        </>
      )}
    </div>
  );
}
