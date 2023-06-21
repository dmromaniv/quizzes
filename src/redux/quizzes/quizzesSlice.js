import { createSlice } from "@reduxjs/toolkit";

import { getQuizCategories } from "./quizzesOperations";

const defaultState = {
  categories: null,
  isLoading: false,
  error: null,
};

export const quizCategoriesSlice = createSlice({
  name: "categories",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder
      .addCase(getQuizCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuizCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getQuizCategories.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const quizCategoriesReducer = quizCategoriesSlice.reducer;
