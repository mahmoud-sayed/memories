
import { FETCH_POSTS, ADD_POSTS } from './postsTypes';
import { fetchPosts, createPost } from './../../api/index';


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