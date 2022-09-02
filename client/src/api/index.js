import axios from 'axios';


const URL = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const updatePostOperation = (id, updatedData) => axios.patch(`${URL}/${id}`, updatedData);
export const deletePostOperation = (id) => axios.delete(`${URL}/${id}`);
export const likePostOperation = (id) => axios.patch(`${URL}/${id}/likePost`);