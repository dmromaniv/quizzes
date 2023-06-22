import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getQuestions } from "@/redux/questions/questionsOperations";
import { addQuestionsAmount } from "@/redux/stats/statsSlice";
import { selectLoadingQuestionStatus } from "@/redux/selectors";

import QuestionCard from "@/components/QuestionCard/QuestionCard";
import Loader from "@/components/Loader/Loader";

export default function PlayPage() {
  const dispatch = useDispatch();

  const loadingStatus = useSelector(selectLoadingQuestionStatus);

  const { id, amount } = useParams();

  useEffect(() => {
    dispatch(getQuestions({ questionsNumber: amount, categoryId: id }));
    dispatch(addQuestionsAmount(amount));
  }, [amount, dispatch, id]);

  return (
    <div className="container">
      {loadingStatus ? <Loader /> : <QuestionCard />}
    </div>
  );
}
