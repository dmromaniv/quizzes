export function getRandomCategories(categories, categoriesNumber) {
  const maxIndex = categories.length - categoriesNumber - 1;
  const startIndex = getRandomNumber(0, maxIndex);

  return categories.slice(startIndex, startIndex + categoriesNumber);
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
