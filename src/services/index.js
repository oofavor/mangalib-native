import { baseUrl } from '../constants/urls';
import { getToken } from '../utils/loginStorage';

const getRequest = async (request) => {
  const token = await getAuthorization();
  const headers = {
    Authorization: token,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.79 Safari/537.36',
  };

  const res = await fetch(baseUrl + request, { headers });
  const data = await res.json();
  return data;
};

export const getAuthorization = async () => {
  const token = await getToken();
  if (token.error) return '';
  return `bearer ${token.value}`;
};

export const getRecentTop = async () => {
  const data = await getRequest(`/api/titles/daily-top/?count=10`);
  return data.content;
};

export const getCatalog = async (from, amount) => {
  const data = await getRequest(
    `/api/search/catalog/?ordering=-rating&page=${from}&count=${amount}`
  );
  return data.content;
};

export const getTitle = async (title) => {
  const data = await getRequest(`/api/titles/${title}/`);
  return data.content;
};

export const getChapters = async (branchId, page) => {
  const data = await getRequest(
    `/api/titles/chapters/?branch_id=${branchId}&page=${page}&count=60&ordering=-index`
  );
  return data.content;
};

export const getChapter = async (chapterId) => {
  const data = await getRequest(`/api/titles/chapters/${chapterId}`);
  return data.content;
};

export const getSearch = async (query, page) => {
  const data = await getRequest(
    `/api/search/?count=10&page=${page}&query=${query}`
  );
  return data.content;
};

export const getSimilar = async (title) => {
  const data = await getRequest(`/api/titles/${title}/similar`);
  return data.content;
};

export const getCurrentUser = async () => {
  const data = await getRequest('/api/users/current/');
  return data.content;
};

export const getUserData = async (userId) => {
  const data = await getRequest(`/api/users/${userId}/`);
  return data.content;
};

export const getUserBookmarks = async (page = 1, count = 24, type = 0) => {
  const userData = await getCurrentUser();
  const data = await getRequest(
    `/api/users/${userData.id}/bookmarks/?type=${type}&count=${count}&page=${page}`
  );
  return data.content;
};
