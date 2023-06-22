import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getQuestions } from "@/redux/questions/questionsOperations";
import { addQuestionsAmount } from "@/redux/stats/statsSlice";
import { selectLoadingQuestionStatus } from "@/redux/selectors";

import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Loader from "@/components/Loader/Loader";
import styles from "./PlayPage.module.scss";

export default function PlayPage() {
  const dispatch = useDispatch();

  const { id, amount } = useParams();
  const isActiveSession = JSON.parse(sessionStorage.getItem("activeSession"));

  const loadingStatus = useSelector(selectLoadingQuestionStatus);

  useEffect(() => {
    dispatch(getQuestions({ questionsNumber: amount, categoryId: id }));
    dispatch(addQuestionsAmount(amount));
  }, [amount, dispatch, id]);

  if (!isActiveSession) {
    return (
      <>
        <div className="container">
          <h1 className={styles.text}>
            To get started, you need to choose a quiz
          </h1>
          <Link to="/">
            <button>Choose a quiz</button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="container">
      {loadingStatus ? <Loader /> : <QuestionCard />}
    </div>
  );
}
