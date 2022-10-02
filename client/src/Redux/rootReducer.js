import { combineReducers } from "redux";
import postsReducer from './postsReducer/postsReducer';
import authReducer from './AuthReducer/Reducer';


export default combineReducers({
  postsReducer,
  authReducer
});