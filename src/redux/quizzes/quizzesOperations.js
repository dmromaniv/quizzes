import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchQuizCategories } from "@/services/triviaAPI";

export const getQuizCategories = createAsyncThunk(
  "categories/getQuizCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchQuizCategories();
      return data.trivia_categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
