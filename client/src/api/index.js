import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// posts routes
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePostOperation = (id, updatedData) => API.patch(`/posts/${id}`, updatedData);
export const deletePostOperation = (id) => API.delete(`/posts/${id}`);
export const likePostOperation = (id) => API.patch(`/posts/${id}/likePost`);


//auth routes
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);