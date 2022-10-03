
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

export const signUp = ({ formData, navigate, dispatch }) => {
  try {
    //signUp the user
    navigate('/');
  } catch (error) {
    console.log(error);
  }
  console.log({ ...formData });
};

export const signIn = async ({ formData: { ...formData }, navigate, dispatch }) => {
  try {
    //logIn the user
    navigate('/');
  } catch (error) {
    console.log(error);
  }
  console.log({ ...formData });
};