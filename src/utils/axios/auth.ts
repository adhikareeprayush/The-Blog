const TOKEN_KEY = "authToken";

export const saveAuthToken = (authToken: string) => {
  localStorage.setItem(TOKEN_KEY, authToken);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
