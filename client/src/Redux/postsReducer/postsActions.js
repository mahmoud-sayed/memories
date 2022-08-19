
import { FETCH_POSTS } from './postsTypes';
import { fetchPosts } from './../../api/index';


export const getPosts = () => async (dispatch) => {

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