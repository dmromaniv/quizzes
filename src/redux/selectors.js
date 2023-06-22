export const selectQuizCategories = (state) => state.quizCategories.categories;
export const selectLoadingCategoryStatus = (state) =>
  state.quizCategories.isLoading;
export const selectErrorCategoryStatus = (state) => state.quizCategories.error;

export const selectQuestions = (state) => state.quizQuestions.questions;
export const selectLoadingQuestionStatus = (state) =>
  state.quizQuestions.isLoading;
export const selectErrorQuestionStatus = (state) => state.quizQuestions.error;

export const selectStatsInfo = (state) => state.quizStats;
