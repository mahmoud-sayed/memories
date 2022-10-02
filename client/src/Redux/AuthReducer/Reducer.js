import { AUTH } from './Types';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default authReducer;