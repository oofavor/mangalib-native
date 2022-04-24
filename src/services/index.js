import { baseUrl } from '../constants/urls';
import { getToken } from '../utils/loginStorage';

const getRequest = async (request) => {
  const token = await getAuthorization();

  const res = await fetch(baseUrl + request);
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

export const getCatalog = async (
  from,
  amount,
  order,
  include = [],
  exclude = []
) => {
  const includeInfo = include
    .map((item) => `${item.type}=${item.id}`)
    .join('&');
  const excludeInfo = exclude
    .map((item) => `exclude_${item.type}=${item.id}`)
    .join('&');
  const data = await getRequest(
    `/api/search/catalog/?ordering=${order}&${includeInfo}&${excludeInfo}&page=${from}&count=${amount}`
  );
  return data.content;
};

export const getTitle = async (title) => {
  const data = await getRequest(`/api/titles/${title}/`);
  if (data.content.length === 0) {
    return { error: true, msg: data.msg };
  }
  return data.content;
};

export const getChapters = async (branchId, page = 1) => {
  const data = await getRequest(
    `/api/titles/chapters/?branch_id=${branchId}&page=${page}&count=60&ordering=-index`
  );
  return data.content;
};

export const getChapter = async (chapterId) => {
  const data = await getRequest(`/api/titles/chapters/${chapterId}`);
  if (data.content['is_paid']) {
    return { error: true, msg: data.msg };
  }
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

export const getComments = async (titleId, page = 1) => {
  const comments = await getRequest(
    `/api/activity/comments/?title_id=${titleId}&page=${page}&ordering=-id`
  );
  return comments.content;
};

export const getReplies = async (commentId, page = 1) => {
  const replies = await getRequest(
    `/api/activity/comments/?reply_to=${commentId}&page=${page}&ordering=-id`
  );
  return replies.content;
};

export const getLatestChapters = async (page = 1, count = 20) => {
  const chapters = await getRequest(
    `/api/titles/last-chapters/?page=${page}&count=${count}`
  );
  return chapters.content;
};

export const getNotifications = async (count = 20) => {
  const notifications = `/api/users/notifications/?count=${count}&status=0&type=0`;
};

export const getCatalogMetadata = async () => {
  const metadata = await getRequest(
    '/api/forms/titles/?get=genres&get=categories&get=types&get=status&get=age_limit'
  );
  return metadata.content;
};
