
import { FETCH_POSTS, ADD_POSTS } from './postsTypes';
const initialState = [];
const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_POSTS:
      return state = [...action.payload];

    case ADD_POSTS:
      return state = [...state, action.payload];


    default:
      return state;
  }

};

export default postsReducer;