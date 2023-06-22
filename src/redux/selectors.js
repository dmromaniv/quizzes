export const selectQuizCategories = (state) => state.quizCategories.categories;
export const selectLoadingCategoryStatus = (state) =>
  state.quizCategories.isLoading;

export const selectQuestions = (state) => state.quizQuestions.questions;
export const selectLoadingQuestionStatus = (state) =>
  state.quizQuestions.isLoading;

export const selectStatsInfo = (state) => state.quizStats;
