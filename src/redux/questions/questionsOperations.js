import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchQuestionsByCategory } from "@/services/triviaAPI";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async ({ categoryId, questionsNumber }, thunkAPI) => {
    try {
      const { data } = await fetchQuestionsByCategory(
        questionsNumber,
        categoryId
      );
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
