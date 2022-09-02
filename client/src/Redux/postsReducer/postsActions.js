
import { FETCH_POSTS, ADD_POSTS, UPDATE_POST, DELETE_POST } from './postsTypes';
import { fetchPosts, createPost, updatePostOperation, deletePostOperation } from './../../api/index';


export const getPosts = async (dispatch) => {

  try {
    const { data } = await fetchPosts();

    dispatch({
      type: FETCH_POSTS,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }

  return;
};

export const addPost = async (postData, dispatch) => {

  try {
    const { data } = await createPost(postData);
    dispatch({
      type: ADD_POSTS,
      payload: data
    });

  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (currentId, postData, dispatch) => {

  try {
    const { data } = await updatePostOperation(currentId, postData);
    dispatch({
      type: UPDATE_POST,
      payload: data
    });

  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (id, dispatch) => {

  try {
    await deletePostOperation(id);
    dispatch({
      type: DELETE_POST,
      payload: id
    });

  } catch (err) {
    console.log(err);
  }
};