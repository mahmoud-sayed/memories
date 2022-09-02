
import { FETCH_POSTS, ADD_POSTS, UPDATE_POST, DELETE_POST, LIKE_POST } from './postsTypes';
const initialState = [];
const postsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_POSTS:
      return state = [...action.payload];

    case ADD_POSTS:
      return state = [...state, action.payload];

    case UPDATE_POST:
      return state = [...state, state.map(post => post._id === action.payload._id ? action.payload : post)];

    case DELETE_POST:
      return state.filter(post => post._id !== action.payload);

    case LIKE_POST:
      return state.map(post => post._id === action.payload._id ? action.payload : post);

    default:
      return state;
  }

};

export default postsReducer;