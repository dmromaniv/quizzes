import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://opentdb.com",
});

export async function fetchQuizCategories() {
  const response = await axiosInstance.get("/api_category.php");

  return response;
}

export async function fetchQuestionsByCategory(amount, categoryId) {
  const response = await axiosInstance.get(
    `api.php?amount=${amount}&category=${categoryId}`
  );

  return response;
}
