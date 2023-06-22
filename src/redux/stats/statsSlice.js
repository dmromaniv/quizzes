import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  questionsAmount: 0,
  correctAnswersCounter: 0,
  incorrectAnswers: [],
  totalTime: "",
  totalPoints: 0,
};

const statsSlice = createSlice({
  name: "stats",
  initialState: defaultState,

  reducers: {
    addIncorrectAnswers(state, { payload }) {
      state.incorrectAnswers.push(payload);
    },
    updateStats(state, { payload }) {
      state.correctAnswersCounter++;
      state.totalPoints += payload;
    },
    addQuestionsAmount(state, { payload }) {
      state.questionsAmount = payload;
    },
    addTotalTime(state, { payload }) {
      state.totalTime = payload;
    },
    resetAllStats() {
      return defaultState;
    },
  },
});

export const {
  addIncorrectAnswers,
  updateStats,
  addQuestionsAmount,
  addTotalTime,
  resetAllStats,
} = statsSlice.actions;
export const quizStatsReducer = statsSlice.reducer;
