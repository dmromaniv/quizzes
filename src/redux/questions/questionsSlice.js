import { createSlice } from "@reduxjs/toolkit";

import { getQuestions } from "./questionsOperations";

const defaultState = {
  questions: null,
  isLoading: false,
  error: null,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestions.fulfilled, (state, { payload }) => {
        state.questions = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getQuestions.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const quizQuestionsReducer = questionsSlice.reducer;
