import { configureStore } from "@reduxjs/toolkit";

import { quizCategoriesReducer } from "./quizzes/quizzesSlice";
import { quizQuestionsReducer } from "./questions/questionsSlice";
import { quizStatsReducer } from "./stats/statsSlice";

const store = configureStore({
  reducer: {
    quizCategories: quizCategoriesReducer,
    quizQuestions: quizQuestionsReducer,
    quizStats: quizStatsReducer,
  },
});

export default store;
