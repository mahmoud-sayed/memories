
import { AUTH, LOGOUT } from './Types';
import * as api from './../../api/index';

// making the auth using google login 
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

// log out from google auth
export const logOut = ({ dispatch }) => {


  try {
    dispatch({
      type: LOGOUT
    });

  } catch (error) {
    console.log(error);
  }

};


//  signUp using form
export const signUp = async ({ formData, navigate, dispatch }) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({
      type: AUTH,
      payload: data
    });

    navigate('/'); //send user after auth to posts page
  } catch (error) {
    console.log(error);
  }
  console.log({ ...formData });
};

// sign in using form
export const signIn = async ({ formData: { ...formData }, navigate, dispatch }) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({
      type: AUTH,
      payload: data
    });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
  console.log({ ...formData });
};