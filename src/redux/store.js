import { configureStore } from "@reduxjs/toolkit";

import { quizCategoriesReducer } from "./quizzes/quizzesSlice";
import { quizQuestionsReducer } from "./questions/questionsSlice";

const store = configureStore({
  reducer: {
    quizCategories: quizCategoriesReducer,
    quizQuestions: quizQuestionsReducer,
  },
});

export default store;
