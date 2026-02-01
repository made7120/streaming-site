// src/services/api.js

const API_BASE_URL = "https://zeldvorik.ru/apiv3/api.php";

export const fetchTrending = async () => {
  const response = await fetch(`${API_BASE_URL}?action=trending&page=1`);
  const data = await response.json();
  return data.items;
};

export const fetchCategoryContent = async (category) => {
  const response = await fetch(`${API_BASE_URL}?action=${category}&page=1`);
  const data = await response.json();
  return data.items;
};

export const searchContent = async (keyword) => {
  const response = await fetch(`${API_BASE_URL}?action=search&q=${keyword}`);
  const data = await response.json();
  return data.items;
};

export const fetchMovieDetail = async (detailPath) => {
  const response = await fetch(`${API_BASE_URL}?action=detail&detailPath=${detailPath}`);
  const data = await response.json();
  return data.items[0];
};
