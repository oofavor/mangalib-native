import * as SecureStore from 'expo-secure-store';

const tokenKey = 'token';
export const saveToken = async (value) => {
  await SecureStore.setItemAsync(tokenKey, value);
};

export const getToken = async () => {
  let result = await SecureStore.getItemAsync(tokenKey);
  if (result) {
    return { value: result, error: false };
  } else {
    return { value: null, error: true };
  }
};

export const deleteToken = async () => {
  let result = await SecureStore.deleteItemAsync(tokenKey);
  if (result) {
    return { value: result, error: false };
  } else {
    return { value: null, error: true };
  }
};
