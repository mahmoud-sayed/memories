
import { FETCH_POSTS } from './postsTypes';
const initialState = [];
const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_POSTS:
      return state = [...action.payload];


    default:
      return state;
  }

};

export default postsReducer;