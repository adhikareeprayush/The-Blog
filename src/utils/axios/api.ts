import axiosInstance from "./axios";

// Auth Routes
const registerUser = (formdata: any) =>
  axiosInstance.post("/auth/register", formdata);
const loginUser = (formdata: any) =>
  axiosInstance.post("/auth/login", formdata);

export const authRoutes = { registerUser, loginUser };

// Users Routes
const getMe = () => axiosInstance.get("/users/profile");
const getPublicUserProfile = (username: string) =>
  axiosInstance.get(`/users/${username}`);
const updateProfile = (formdata: any) =>
  axiosInstance.put("/users/profile", formdata);

export const userRoutes = {
  getMe,
  getPublicUserProfile,
  updateProfile,
};

// Post Routes
const getAllPosts = (page: number, limit: number) =>
  axiosInstance.get(`/posts?page=${page}&limit=${limit}`);
const createPost = (formdata: any) => axiosInstance.post("/posts", formdata);
const getPost = (postId: string) => axiosInstance.get(`/posts/${postId}`);
const updatePost = (postId: string, formdata: any) =>
  axiosInstance.put(`/posts/${postId}`, formdata);
const deletePost = (postId: string) => axiosInstance.delete(`/posts/${postId}`);
const toggleLike = (postId: string) =>
  axiosInstance.post(`/posts/${postId}/like`);
const addComment = (postId: string, formdata: any) =>
  axiosInstance.post(`/posts/${postId}/comments`, formdata);
const getMyPosts = (userId: string, includeUnpublished: boolean) =>
  axiosInstance.get(
    `/posts/my-posts?author=${userId}&includeUnpublished=${includeUnpublished}`
  );
const getTrendingPosts = (limit: number) =>
  axiosInstance.get(`/posts/trending?limit=${limit}`);
const getPostsByTags = (tags: string[], page: number, limit: number) =>
  axiosInstance.get(
    `/posts/tags?tags=${tags.join(",")}&page=${page}&limit=${limit}`
  );
const getAllTags = () => {
  return axiosInstance.get(`posts/tags`);
};

export const postRoutes = {
  getAllPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
  toggleLike,
  addComment,
  getMyPosts,
  getTrendingPosts,
  getPostsByTags,
  getAllTags,
};

const globalSearch = (
  query: string,
  type: string,
  page: number,
  limit: number
) => {
  return axiosInstance.get(
    `/search?q=${query}&type=${type}&page=${page}&limit=${limit}`
  );
};
const searchByTags = (tags: string[], page: number, limit: number) => {
  return axiosInstance.get(
    `/search/tags?tags=${tags.join(",")}&page=${page}&limit=${limit}`
  );
};
const searchByTitle = (title: string, page: number, limit: number) => {
  return axiosInstance.get(
    `/search/title?title=${title}&page=${page}&limit=${limit}`
  );
};
const searchByAuthor = (author: string, page: number, limit: number) => {
  return axiosInstance.get(
    `/search/author?author=${author}&page=${page}&limit=${limit}`
  );
};

export const searchRoutes = {
  globalSearch,
  searchByTags,
  searchByTitle,
  searchByAuthor,
};

const uploadImage = (folder: string, formdata: any) =>
  axiosInstance.post(`/upload/images/upload?folder=${folder}`, formdata);

export const uploadRoutes = {
  uploadImage,
};
