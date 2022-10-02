import React, { useState, useEffect } from 'react';
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Input from './input';
import jwt_decode from "jwt-decode";

import { useDispatch } from 'react-redux';
import { getAuth } from '../../Redux/AuthReducer/Action';


const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  function handelCallbackResponse(res) {
    const userObj = jwt_decode(res.credential);
    console.log(userObj);
    getAuth({ userObj, dispatch });
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "884207084303-106co9ouu50heciqh2m8aiert4hvnten.apps.googleusercontent.com",
      callback: handelCallbackResponse
    });

    google.accounts.id.prompt(
      { theme: "outlined", size: "large" }
    );
  });

  const handelSubmit = () => { };

  const handelChange = () => { };

  const handelShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  const SwitchMode = () => {
    setIsSignUp(!isSignUp);
  };


  // const googleSuccess = async (res) => {
  //   const result = res.profileObj;
  //   const token = res.tokenId;

  //   try {

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const googleFailure = (err) => {
  //   console.log(err);
  //   console.log('Google sign in is not successful please try again later');
  // };


  return (
    <Container component='main' maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <Avatar style={{ background: 'red' }}><LockIcon /></Avatar>
        <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form onSubmit={handelSubmit}>
          <Grid container spacing={2} justifyItems='center' my={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  onChange={handelChange}
                  autoFocus
                  half
                  xs={6}
                />
                <Input
                  name="Last Name"
                  label="Last Name"
                  onChange={handelChange}
                  half
                  xs={6}

                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              onChange={handelChange}
              type='email'
              xs={6}

            />
            <Input
              name="password"
              label="password"
              onChange={handelChange}
              type={showPassword ? 'text' : 'password'}
              xs={6}
              handelShowPassword={handelShowPassword}
            />
            {isSignUp &&
              <Input
                name='confirmPassword'
                label='Repeat Password'
                handelChange={handelChange}
                type='password'
              />}
          </Grid>

          <Button type='submit' fullWidth variant='contained' color='primary' sx={{ mt: '.8rem' }}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid container item direction='row' justifyContent='center' alignItems='center' mt={1}>
              <Typography variant='body1' >
                {isSignUp ? 'Already have an account?' : "don't have an account?"}
              </Typography>
              <Button onClick={SwitchMode}>
                {isSignUp ? 'SignIn' : "SignUp"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container >
  );
};

export default Auth;