
import { AUTH } from './Types';

export const getAuth = ({ userObj, dispatch }) => {


  if (userObj) {
    try {
      dispatch({
        type: AUTH,
        payload: userObj
      });
    } catch (error) {
      console.log(error);
    }
  }

};