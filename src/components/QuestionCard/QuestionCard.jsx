import { decode } from "html-entities";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formatTimestamp } from "@/helpers/formatTime";
import {
  addIncorrectAnswers,
  updateStats,
  addTotalTime,
  resetAllStats,
} from "@/redux/stats/statsSlice";
import { selectQuestions } from "@/redux/selectors";
import styles from "./QuestionCard.module.scss";

export default function QuestionCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [isChecked, setCheckedStatus] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setAnswerStatus] = useState(null);
  const [time] = useState(new Date());

  const allQuestions = useSelector(selectQuestions);

  let question, difficulty, incorrect_answers, correct_answer, allAnswers;

  if (allQuestions) {
    ({ question, incorrect_answers, correct_answer, difficulty } =
      allQuestions[questionIndex]);
    allAnswers = [...incorrect_answers, correct_answer].sort((a, b) =>
      a.localeCompare(b)
    );
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!isChecked) {
      toast.info("Select an answer to move forward");
      return;
    }

    if (correct_answer === selectedOption) {
      setAnswerStatus(true);

      const questionPoints = getQuestionPoints(difficulty);
      dispatch(updateStats(questionPoints));
    } else {
      setAnswerStatus(false);

      dispatch(
        addIncorrectAnswers({
          question,
          userAnswer: selectedOption,
          correctAnswer: correct_answer,
        })
      );
    }

    if (checkLastQuestion(questionIndex)) {
      const currentTime = new Date();
      const totalTime = formatTimestamp(currentTime - time);
      dispatch(addTotalTime(totalTime));

      navigate("/quiz/result", { replace: true });
    }

    setTimeout(() => {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setAnswerStatus(null);
    }, 700);

    setCheckedStatus(false);
    setSelectedOption("");
  }

  const handleInputChange = (event) => {
    setCheckedStatus(true);
    setSelectedOption(event.target.value);
  };

  function handleButtonClick() {
    dispatch(resetAllStats());
    navigate("/", { replace: true });
  }

  function checkAnswer(answerStatus) {
    if (answerStatus !== null) {
      if (answerStatus) return "correct";
      return "incorrect";
    }
    return "";
  }

  function getQuestionPoints(difficulty) {
    switch (difficulty) {
      case "easy":
        return 1;

      case "medium":
        return 2;

      case "hard":
        return 3;

      default:
        return 0;
    }
  }

  function checkLastQuestion(currentQuestion) {
    if (allQuestions) {
      return allQuestions.length - 1 === currentQuestion;
    }
  }

  return (
    <>
      <div className={`card ${checkAnswer(isCorrect)}`}>
        <p className={styles.subTitle}>
          {allQuestions &&
            `Question ${questionIndex + 1}/${allQuestions.length}`}
        </p>
        <p className={styles.title}>{decode(question)}</p>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          {allAnswers &&
            allAnswers.map((answer, index) => (
              <label className={styles.label} key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  onChange={handleInputChange}
                  checked={selectedOption === answer}
                />
                {decode(answer)}
              </label>
            ))}
          <button className={styles.button} type="submit">
            {checkLastQuestion(questionIndex) ? "Check all results" : "Submit"}
          </button>
        </form>
        <ToastContainer />
      </div>
      <button className={styles.button} onClick={handleButtonClick}>
        Cancel and return home
      </button>
    </>
  );
}
