import React, { useState } from 'react';
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Input from './input';
import { display } from '@mui/system';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon';
import { useDispatch } from 'react-redux';


const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  const handelSubmit = () => { };

  const handelChange = () => { };

  const handelShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  const SwitchMode = () => {
    setIsSignUp(!isSignUp);
  };

  const googleSuccess = async (res) => {
    const result = res.profileObj;
    const token = res.tokenId;

    try {

    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (err) => {
    console.log(err);
    console.log('Google sign in is not successful please try again later');
  };


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
          <GoogleLogin
            clientId='325392147846-vlns5dtvhc0eb1nv6372up18mv90q4e8.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button
                color='error'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'
              >
                {isSignUp ? 'Google SignUp' : 'Google Sign In'}
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
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