
import { AUTH, LOGOUT } from './Types';

export const getAuth = ({ userObj, dispatch }) => {


  if (userObj) {
    try {
      return dispatch({
        type: AUTH,
        payload: userObj
      });
    } catch (error) {
      console.log(error);
    }
  }


};

export const logOut = ({ dispatch }) => {


  try {
    dispatch({
      type: LOGOUT
    });

  } catch (error) {
    console.log(error);
  }

};